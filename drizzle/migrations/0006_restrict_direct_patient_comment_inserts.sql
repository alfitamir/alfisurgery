-- Close the direct browser-to-Supabase insert path after the application
-- server endpoint has been deployed and verified.
DROP POLICY IF EXISTS "Public add comments" ON public.patient_comments;
REVOKE INSERT ON TABLE public.patient_comments FROM anon, authenticated;
