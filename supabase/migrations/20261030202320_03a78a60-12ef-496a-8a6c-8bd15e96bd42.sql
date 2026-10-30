-- Tables visitors never need
REVOKE ALL ON public.email_campaigns, public.email_sends, public.email_sequence_steps, public.user_roles, public.phone_otps FROM anon;
REVOKE ALL ON public.phone_otps FROM authenticated;

-- Public forms: visitors may only submit
REVOKE ALL ON public.leads, public.mortgage_applications, public.webinar_registrations FROM anon;
GRANT INSERT ON public.leads, public.mortgage_applications, public.webinar_registrations TO anon;

-- Blog: visitors may only read (RLS limits to published posts)
REVOKE ALL ON public.blog_posts FROM anon;
GRANT SELECT ON public.blog_posts TO anon;

-- Internal functions
REVOKE EXECUTE ON FUNCTION public.calculate_lead_score(public.leads) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.trigger_calculate_lead_score() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.notify_new_application() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- Move pg_net out of the public schema
DROP EXTENSION IF EXISTS pg_net;
CREATE SCHEMA IF NOT EXISTS extensions;
CREATE EXTENSION pg_net WITH SCHEMA extensions;