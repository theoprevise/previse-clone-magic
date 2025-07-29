-- Ensure array columns are properly typed as text arrays
ALTER TABLE mortgage_applications 
ALTER COLUMN military_service TYPE text[] USING military_service::text[];

ALTER TABLE mortgage_applications 
ALTER COLUMN financial_institutions TYPE text[] USING financial_institutions::text[];