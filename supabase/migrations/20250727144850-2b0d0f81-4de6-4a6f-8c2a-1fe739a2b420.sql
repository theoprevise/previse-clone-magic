-- Create a trigger function that calls the edge function when a new application is inserted
CREATE OR REPLACE FUNCTION notify_new_application()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the edge function to send notification email
  PERFORM
    net.http_post(
      url := 'https://qvdpqkakevsoknoxisse.supabase.co/functions/v1/send-application-notification',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer ' || current_setting('app.settings.service_role_key', true) || '"}'::jsonb,
      body := jsonb_build_object('record', to_jsonb(NEW))
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger that fires after INSERT on mortgage_applications
CREATE TRIGGER trigger_notify_new_application
  AFTER INSERT ON public.mortgage_applications
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_application();