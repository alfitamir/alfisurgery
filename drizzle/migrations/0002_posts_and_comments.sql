CREATE TABLE public.doctor_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source text NOT NULL DEFAULT 'linkedin',
  external_id text NOT NULL UNIQUE,
  posted_at timestamptz NOT NULL DEFAULT now(),
  original_text text NOT NULL,
  original_lang text NOT NULL DEFAULT 'en',
  image_url text,
  translations jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.doctor_posts TO anon, authenticated;
GRANT ALL ON public.doctor_posts TO service_role;
ALTER TABLE public.doctor_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read posts" ON public.doctor_posts FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.patient_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nickname text NOT NULL,
  body text NOT NULL,
  source text NOT NULL DEFAULT 'site',
  hidden boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.patient_comments TO anon, authenticated;
GRANT ALL ON public.patient_comments TO service_role;
ALTER TABLE public.patient_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read visible comments" ON public.patient_comments FOR SELECT TO anon, authenticated USING (hidden = false);
CREATE POLICY "Public add comments" ON public.patient_comments FOR INSERT TO anon, authenticated
  WITH CHECK (hidden = false AND source = 'site' AND char_length(btrim(nickname)) BETWEEN 2 AND 40 AND char_length(btrim(body)) BETWEEN 3 AND 1000);
CREATE INDEX ON public.patient_comments (created_at DESC);
CREATE INDEX ON public.doctor_posts (posted_at DESC);