import { useState, useEffect } from "react";
import { X, CheckCircle, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import lighthouseIcon from "@/assets/lighthouse-icon.png";

const POPUP_DELAY_MS = 15000; // 15 seconds
const STORAGE_KEY = "lead_popup_dismissed";

const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Check if popup was already dismissed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setShowThankYou(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone || !consent) {
      toast({
        title: "Required Fields",
        description: "Please fill in your name, email, phone, and agree to receive communications.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        source: "timed_lead_capture_popup",
        campaign_type: "website_popup_offer",
        event_name: "Timed popup displayed after page load",
        sms_opt_in: consent,
      };

      const { error } = await supabase.functions.invoke('send-to-zapier', {
        body: leadData,
      });

      if (error) throw error;

      setShowThankYou(true);
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Thank You State
  if (showThankYou) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="relative w-full max-w-sm bg-background rounded-xl shadow-2xl border border-border overflow-hidden animate-scale-in">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/2 right-0 w-12 h-12 bg-success/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-6 text-center">
            {/* Success Icon with Animation */}
            <div className="mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full border-2 border-success/40">
                <CheckCircle className="w-8 h-8 text-success animate-pulse" />
              </div>
            </div>

            {/* Sparkles */}
            <div className="absolute top-8 left-8 animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div className="absolute top-12 right-10 animate-pulse" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="absolute bottom-20 left-12 animate-pulse" style={{ animationDelay: '1.5s' }}>
              <Heart className="w-4 h-4 text-destructive/60" />
            </div>

            {/* Thank You Message */}
            <h2 className="text-2xl font-bold text-foreground mb-2 animate-fade-in">
              Thank You, {formData.first_name}!
            </h2>
            <p className="text-muted-foreground text-sm mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We've received your request and a mortgage specialist will contact you within 24 hours.
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
            </div>

            <p className="text-xs text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We're excited to help you on your homeownership journey!
            </p>

            <Button
              onClick={handleClose}
              className="w-full animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm bg-background rounded-xl shadow-2xl border border-border overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-primary px-4 py-3 text-primary-foreground flex items-center gap-3">
          <img src={lighthouseIcon} alt="Lighthouse icon" className="h-10 w-10 object-contain" />
          <div>
            <h2 className="text-lg font-bold">Let us help you</h2>
            <p className="text-xs opacity-90">
              Find the perfect mortgage solution.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="first_name" className="text-sm">First Name *</Label>
              <Input
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="John"
                required
                className="h-9"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="last_name" className="text-sm">Last Name *</Label>
              <Input
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Doe"
                required
                className="h-9"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="h-9"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              required
              className="h-9"
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="consent_popup"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
              className="mt-0.5"
              required
            />
            <label htmlFor="consent_popup" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              I consent to receive calls, emails, and SMS/text messages from Previse Mortgage. *
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LeadCapturePopup;
