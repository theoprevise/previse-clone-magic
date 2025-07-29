-- Check and fix array column types
-- First, let's see what the current schema looks like for these array columns
\d mortgage_applications;

-- The issue might be that the array columns need to be properly typed
-- Let's ensure they are text arrays
ALTER TABLE mortgage_applications 
ALTER COLUMN military_service TYPE text[] USING military_service::text[];

ALTER TABLE mortgage_applications 
ALTER COLUMN financial_institutions TYPE text[] USING financial_institutions::text[];