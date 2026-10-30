-- Server-side patient-comment rate limiting.
-- This migration intentionally does not revoke direct public inserts; deploy the
-- new endpoint first, then apply 0006 to close the direct-insert bypass.

CREATE TABLE IF NOT EXISTS public.patient_comment_rate_limits (
  key_hash text PRIMARY KEY,
  window_started_at timestamptz NOT NULL DEFAULT now(),
  request_count integer NOT NULL DEFAULT 0 CHECK (request_count >= 0),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.patient_comment_rate_limits ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.patient_comment_rate_limits FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE public.patient_comment_rate_limits TO service_role;

CREATE OR REPLACE FUNCTION public.consume_patient_comment_rate_limit(
  p_key_hash text,
  p_window_seconds integer,
  p_max_requests integer
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_count integer;
BEGIN
  IF p_key_hash IS NULL OR length(p_key_hash) <> 64
     OR p_window_seconds < 1 OR p_window_seconds > 86400
     OR p_max_requests < 1 OR p_max_requests > 100 THEN
    RAISE EXCEPTION 'Invalid rate-limit arguments';
  END IF;

  INSERT INTO public.patient_comment_rate_limits (
    key_hash, window_started_at, request_count, updated_at
  )
  VALUES (p_key_hash, now(), 1, now())
  ON CONFLICT (key_hash) DO UPDATE
  SET
    window_started_at = CASE
      WHEN public.patient_comment_rate_limits.window_started_at
        <= now() - make_interval(secs => p_window_seconds)
      THEN now()
      ELSE public.patient_comment_rate_limits.window_started_at
    END,
    request_count = CASE
      WHEN public.patient_comment_rate_limits.window_started_at
        <= now() - make_interval(secs => p_window_seconds)
      THEN 1
      ELSE public.patient_comment_rate_limits.request_count + 1
    END,
    updated_at = now()
  RETURNING request_count INTO v_count;

  RETURN v_count <= p_max_requests;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_patient_comment_rate_limit(text, integer, integer)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_patient_comment_rate_limit(text, integer, integer)
  TO service_role;