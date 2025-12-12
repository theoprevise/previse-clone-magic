-- Add missing columns to mortgage_applications table
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS home_budget TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS first_time_buyer TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS purchase_timing TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS military_service TEXT[];
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS savings_amount TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS annual_income TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS bankruptcy TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS credit_services TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS real_estate_agent TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS zip_code TEXT;
ALTER TABLE public.mortgage_applications ADD COLUMN IF NOT EXISTS homebuying_journey TEXT;