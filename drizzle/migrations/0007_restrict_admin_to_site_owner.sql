-- Only Dr. Tamer Elalfy's own Google account may hold the admin role.
--
-- Before this migration the first account to sign in became admin, so anyone
-- who reached the public admin link before the doctor could take the site over.
--
-- The owner's email is stored only as a SHA-256 fingerprint of the lower-cased
-- address, so it is not published in this public repository. To change the
-- owner, replace the fingerprint below with
--   encode(sha256(convert_to(lower('new.address@example.com'), 'UTF8')), 'hex')

CREATE OR REPLACE FUNCTION public.is_site_owner_email(_email text)
RETURNS boolean LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT _email IS NOT NULL
    AND encode(sha256(convert_to(lower(trim(_email)), 'UTF8')), 'hex')
      = '18bfafdd1be721875b472db49a37902cb00dd09c70168259aa406af5c14571b6'
$$;
REVOKE ALL ON FUNCTION public.is_site_owner_email(text) FROM PUBLIC, anon, authenticated;

-- New sign-ups: grant admin to the owner's account only (replaces "first account wins").
CREATE OR REPLACE FUNCTION public.grant_first_admin()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF public.is_site_owner_email(NEW.email) THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin') ON CONFLICT DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

-- Existing accounts: remove admin from anyone who is not the owner, and grant it
-- to the owner if they have already signed in.
DELETE FROM public.user_roles AS ur
USING auth.users AS u
WHERE ur.user_id = u.id
  AND ur.role = 'admin'
  AND NOT public.is_site_owner_email(u.email);

INSERT INTO public.user_roles (user_id, role)
SELECT u.id, 'admin' FROM auth.users AS u
WHERE public.is_site_owner_email(u.email)
ON CONFLICT DO NOTHING;

-- Defence in depth: even if an admin row is added by mistake, has_role('admin')
-- is true only for the owner's account. Every admin RLS policy and server check
-- goes through this function.
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles AS ur
    WHERE ur.user_id = _user_id
      AND ur.role = _role
      AND (
        _role <> 'admin'
        OR EXISTS (
          SELECT 1 FROM auth.users AS u
          WHERE u.id = _user_id AND public.is_site_owner_email(u.email)
        )
      )
  )
$$;
