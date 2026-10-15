CREATE OR REPLACE FUNCTION public.get_site_visits()
RETURNS bigint
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT COALESCE((SELECT visit_count FROM public.site_stats WHERE key = 'visits'), 0);
$$;

GRANT EXECUTE ON FUNCTION public.get_site_visits() TO anon, authenticated, service_role;