-- Remove columns that are no longer used in the application
ALTER TABLE public.mortgage_applications 
DROP COLUMN IF EXISTS home_type,
DROP COLUMN IF EXISTS home_use,
DROP COLUMN IF EXISTS buying_obstacles,
DROP COLUMN IF EXISTS down_payment,
DROP COLUMN IF EXISTS financial_institutions;