GRANT SELECT, UPDATE, DELETE ON public.patient_comments TO authenticated;
CREATE POLICY "Admins read all comments" ON public.patient_comments FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update comments" ON public.patient_comments FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete comments" ON public.patient_comments FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));