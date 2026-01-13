-- Fix overly permissive RLS policies by adding validation constraints
-- while still allowing anonymous submissions for public forms

-- 1. Drop existing overly permissive INSERT policies
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.mortgage_applications;
DROP POLICY IF EXISTS "Anyone can submit leads" ON public.leads;
DROP POLICY IF EXISTS "Anyone can register for webinar" ON public.webinar_registrations;
DROP POLICY IF EXISTS "Service role can insert email sends" ON public.email_sends;

-- 2. Recreate INSERT policies with basic validation checks

-- Mortgage applications: Require at least email or name to be provided
CREATE POLICY "Anyone can submit applications with valid data"
ON public.mortgage_applications
FOR INSERT
WITH CHECK (
  -- Require at least email or name to prevent empty submissions
  (email IS NOT NULL AND email <> '') OR 
  (first_name IS NOT NULL AND first_name <> '')
);

-- Leads: Require email and first_name (both are NOT NULL in schema anyway)
CREATE POLICY "Anyone can submit leads with valid data"
ON public.leads
FOR INSERT
WITH CHECK (
  -- Email and first_name are required (NOT NULL columns)
  email IS NOT NULL AND email <> '' AND
  first_name IS NOT NULL AND first_name <> ''
);

-- Webinar registrations: Require email and first_name
CREATE POLICY "Anyone can register for webinar with valid data"
ON public.webinar_registrations
FOR INSERT
WITH CHECK (
  -- Email and first_name are required (NOT NULL columns)
  email IS NOT NULL AND email <> '' AND
  first_name IS NOT NULL AND first_name <> ''
);

-- Email sends: Restrict to service role only (via RPC or edge functions using service role key)
-- Since this should only be inserted by backend processes, we remove direct insert ability
-- The edge functions use service role key which bypasses RLS
-- Adding a policy that requires admin authentication for direct inserts
CREATE POLICY "Admins can insert email sends"
ON public.email_sends
FOR INSERT
WITH CHECK (
  has_role(auth.uid(), 'admin'::app_role)
);