-- Check for triggers on the table
SELECT trigger_name, event_manipulation, action_statement 
FROM information_schema.triggers 
WHERE event_object_table = 'mortgage_applications';

-- Check the table structure
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'mortgage_applications' 
ORDER BY ordinal_position;