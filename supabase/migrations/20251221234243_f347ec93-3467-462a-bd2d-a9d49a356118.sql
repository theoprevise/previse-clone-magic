-- Create leads table for capturing visitor information
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  source TEXT DEFAULT 'popup',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit leads (public form)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Only admins can view leads
CREATE POLICY "Admins can view leads" 
ON public.leads 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete leads
CREATE POLICY "Admins can delete leads" 
ON public.leads 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));