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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [transactionalConsent, setTransactionalConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!transactionalConsent) {
      toast({
        title: "Consent Required",
        description: "Please consent to receive transactional messages to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-to-zapier", {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          source: "sms_opt_in",
          smsOptIn: transactionalConsent,
          marketingOptIn: marketingConsent,
        },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Thank you for signing up. We'll be in touch soon!",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Stay Connected | Previse Mortgage"
        description="Sign up to receive updates from Previse Mortgage"
        noIndex={true}
      />
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-card rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground">Previse Mortgage</h1>
            <p className="text-muted-foreground mt-2">Stay connected with us</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="transactionalConsent"
                  checked={transactionalConsent}
                  onCheckedChange={(checked) => setTransactionalConsent(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="transactionalConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I consent to receive transactional messages from Previse Mortgage at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="marketingConsent"
                  checked={marketingConsent}
                  onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="marketingConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I consent to receive marketing and promotional messages from Previse Mortgage at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold"
              variant="hero"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            <div className="text-center pt-4">
              <Link to="/privacy-policy" className="text-primary hover:underline text-sm">
                Privacy Policy
              </Link>
              <span className="text-muted-foreground mx-2">|</span>
              <Link to="/terms-of-service" className="text-primary hover:underline text-sm">
                Terms of Service
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OptIn;
