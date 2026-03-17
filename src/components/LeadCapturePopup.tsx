import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, CheckCircle, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import lighthouseIcon from "@/assets/lighthouse-icon.png";
import PhoneOTPVerification from "@/components/PhoneOTPVerification";

const POPUP_DELAY_MS = 15000;
const STORAGE_KEY = "lead_popup_dismissed";

const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setIsOpen(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setShowThankYou(false);
    setStep('form');
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone) {
      toast({
        title: "Required Fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      toast({ title: "Invalid Phone", description: "Please enter a valid phone number.", variant: "destructive" });
      return;
    }
    setStep('otp');
  };

  const handlePhoneVerified = async () => {
    setIsSubmitting(true);
    try {
      const leadData = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        source: "timed_lead_capture_popup",
        campaign_type: "website_popup_offer",
        event_name: "Timed popup displayed after page load",
        sms_opt_in: true,
      };
      const { error } = await supabase.functions.invoke('send-to-zapier', { body: leadData });
      if (error) throw error;
      setShowThankYou(true);
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      setStep('otp');
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
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
          <button onClick={handleClose} className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close popup">
            <X className="h-5 w-5" />
          </button>
          <div className="relative z-10 p-6 text-center">
            <div className="mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full border-2 border-green-300">
                <CheckCircle className="w-8 h-8 text-green-500 animate-pulse" />
              </div>
            </div>
            <div className="absolute top-8 left-8 animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div className="absolute top-12 right-10 animate-pulse" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank You, {formData.first_name}!</h2>
            <p className="text-muted-foreground text-sm mb-4">We've received your request and a mortgage specialist will contact you within 24 hours.</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
            </div>
            <Button onClick={handleClose} className="w-full">Close</Button>
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
            <h2 className="text-lg font-bold">
              {step === 'otp' ? 'Verify Your Phone' : 'Let us help you'}
            </h2>
            <p className="text-xs opacity-90">
              {step === 'otp' ? 'Enter the code we sent you' : 'Find the perfect mortgage solution.'}
            </p>
          </div>
          <button onClick={handleClose} className="absolute top-2 right-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Close popup">
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleFormNext} className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="first_name" className="text-sm">First Name *</Label>
                <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="John" required className="h-9" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="last_name" className="text-sm">Last Name *</Label>
                <Input id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Doe" required className="h-9" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="h-9" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" required className="h-9" />
              <p className="text-xs text-muted-foreground">A verification code will be sent to this number.</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              By submitting, you consent to be contacted by Previse Mortgage LLC via phone, email, or SMS. View our <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">Terms of Service</Link>.
            </p>
            <Button type="submit" className="w-full">
              Next: Verify Phone →
            </Button>
          </form>
        ) : (
          <div className="p-4 space-y-3">
            <div className="p-3 bg-muted/50 rounded-lg text-sm space-y-0.5">
              <p className="font-medium">{formData.first_name} {formData.last_name}</p>
              <p className="text-muted-foreground">{formData.email}</p>
              <p className="text-muted-foreground">{formData.phone}</p>
            </div>
            <PhoneOTPVerification
              phone={formData.phone}
              onVerified={handlePhoneVerified}
            />
            <button
              type="button"
              onClick={() => setStep('form')}
              className="text-sm text-primary hover:underline block mx-auto"
            >
              ← Edit info
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadCapturePopup;
