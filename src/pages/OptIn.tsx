import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
const OptIn = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });
  const [transactionalConsent, setTransactionalConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    if (!transactionalConsent) {
      toast({
        title: "Consent Required",
        description: "Please consent to receive transactional messages to continue.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.functions.invoke("send-to-zapier", {
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          source: "sms_optin_page",
          campaign_type: "sms_marketing_optin",
          event_name: `SMS Opt-In: Transactional=${transactionalConsent}, Marketing=${marketingConsent}`,
          sms_opt_in: transactionalConsent
        }
      });
      if (error) throw error;
      toast({
        title: "Success!",
        description: "Thank you for signing up. We'll be in touch soon!"
      });
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
      <SEOHead title="Stay Connected | Previse Mortgage" description="Sign up to receive updates from Previse Mortgage" noIndex={true} />
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Previse Mortgage</h1>
            <p className="text-gray-600 mt-2">Stay connected with us</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
              <Input id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="h-12 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="h-12 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input id="phone" name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} className="h-12 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="h-12 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400" required />
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <Checkbox id="transactionalConsent" checked={transactionalConsent} onCheckedChange={checked => setTransactionalConsent(checked as boolean)} className="mt-1 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <Label htmlFor="transactionalConsent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                  By checking this box, I consent to receive SMS text messages from Previse Mortgage at the phone number provided. Messages may include loan status updates, appointment reminders, and account notifications. Message frequency varies (typically 1-5 messages per month). Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase. View our <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">Terms of Service</Link>.
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold bg-green-500 hover:bg-green-600 text-white" disabled={isSubmitting}>
              {isSubmitting ? <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </> : "Submit"}
            </Button>

            <div className="text-center pt-4">
              <Link to="/privacy-policy" className="text-primary hover:underline text-sm">
                Privacy Policy
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link to="/terms-of-service" className="text-primary hover:underline text-sm">
                Terms of Service
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>;
};
export default OptIn;