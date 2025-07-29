-- Drop the problematic trigger temporarily to test
DROP TRIGGER IF EXISTS notify_new_application_trigger ON mortgage_applications;