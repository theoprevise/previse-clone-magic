-- Create webinar registrations table
CREATE TABLE public.webinar_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  registered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  webinar_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2026-01-15 18:00:00-05'::timestamptz,
  attended BOOLEAN NOT NULL DEFAULT false,
  reminder_sent BOOLEAN NOT NULL DEFAULT false,
  thank_you_sent BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.webinar_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for access control
CREATE POLICY "Anyone can register for webinar" 
ON public.webinar_registrations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all registrations" 
ON public.webinar_registrations 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update registrations" 
ON public.webinar_registrations 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete registrations" 
ON public.webinar_registrations 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));