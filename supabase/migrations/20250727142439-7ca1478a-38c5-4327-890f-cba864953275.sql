-- Create a table for mortgage application submissions
CREATE TABLE public.mortgage_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  loan_type TEXT,
  homebuying_journey TEXT,
  home_budget TEXT,
  home_type TEXT,
  home_use TEXT,
  first_time_buyer TEXT,
  purchase_timing TEXT,
  buying_obstacles TEXT,
  military_service TEXT[], -- Array for multi-select
  down_payment TEXT,
  savings_amount TEXT,
  financial_institutions TEXT[], -- Array for multi-select
  employment_status TEXT,
  annual_income TEXT,
  bankruptcy TEXT,
  credit_score TEXT,
  credit_services TEXT,
  real_estate_agent TEXT,
  location TEXT,
  zip_code TEXT,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.mortgage_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications (no authentication required)
CREATE POLICY "Anyone can submit applications" 
ON public.mortgage_applications 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public access to applications (admin only)
CREATE POLICY "No public access to applications" 
ON public.mortgage_applications 
FOR SELECT 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_mortgage_applications_updated_at
BEFORE UPDATE ON public.mortgage_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();