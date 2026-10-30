CREATE TABLE public.search_console_state (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  selected_site_url text,
  status text NOT NULL DEFAULT 'pending',
  candidates text[] NOT NULL DEFAULT '{}',
  snapshot jsonb,
  error text,
  refreshed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.search_console_state TO authenticated;
GRANT ALL ON public.search_console_state TO service_role;
ALTER TABLE public.search_console_state ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view search console data"
ON public.search_console_state FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));
INSERT INTO public.search_console_state (id) VALUES (1);