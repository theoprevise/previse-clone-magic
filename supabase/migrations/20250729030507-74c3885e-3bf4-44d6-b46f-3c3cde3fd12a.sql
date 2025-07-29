-- Drop and recreate the table with clean structure
DROP TABLE IF EXISTS mortgage_applications CASCADE;

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
  military_service TEXT[],
  down_payment TEXT,
  savings_amount TEXT,
  financial_institutions TEXT[],
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

-- Enable RLS
ALTER TABLE public.mortgage_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit applications" 
ON public.mortgage_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only admins can view applications" 
ON public.mortgage_applications 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_mortgage_applications_updated_at
BEFORE UPDATE ON public.mortgage_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();