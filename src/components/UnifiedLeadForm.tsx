import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';
import PhoneOTPVerification from '@/components/PhoneOTPVerification';

const leadSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(50, "First name too long"),
  last_name: z.string().trim().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().trim().email("Invalid email address").max(100, "Email too long"),
  phone: z.string().trim().min(10, "Phone number is required").max(20, "Phone number too long"),
  address: z.string().trim().max(200, "Address too long").optional(),
});

type CampaignType = 'open_house' | 'webinar' | 'educational_event' | 'youtube' | 'social_media' | 'popup' | 'fha_loans' | 'conventional_loans' | 'usda_loans' | 'va_loans' | 'paid_campaign' | 'prequal_calculator' | 'exit_intent' | 'homebuyer_guide' | string;

interface UnifiedLeadFormProps {
  campaignType: CampaignType;
  eventName?: string;
  showAddressField?: boolean;
  showAddress?: boolean;
  submitButtonText?: string;
  buttonText?: string;
  source?: string;
  successRedirectPath?: string;
  onSuccess?: () => void;
  className?: string;
}

export const UnifiedLeadForm: React.FC<UnifiedLeadFormProps> = ({
  campaignType,
  eventName,
  showAddressField = false,
  showAddress = false,
  submitButtonText = "Get Started",
  buttonText,
  source,
  successRedirectPath,
  onSuccess,
  className = "",
}) => {
  const effectiveShowAddress = showAddress || showAddressField;
  const effectiveButtonText = buttonText || submitButtonText;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Steps: 'form' -> 'otp' -> 'submitting'
  const [step, setStep] = useState<'form' | 'otp' | 'submitting'>('form');
  const [phoneVerified, setPhoneVerified] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  });

  useEffect(() => {
    setUtmParams({
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
    });
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    // Reset phone verification if phone changes
    if (name === 'phone') setPhoneVerified(false);
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      leadSchema.parse(formData);
      // Valid — go to OTP step
      setStep('otp');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handlePhoneVerified = async () => {
    setPhoneVerified(true);
    setStep('submitting');
    await submitLead();
  };

  const submitLead = async () => {
    setIsSubmitting(true);
    try {
      const validatedData = leadSchema.parse(formData);

      const leadData = {
        first_name: validatedData.first_name,
        last_name: validatedData.last_name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address || null,
        campaign_type: campaignType,
        event_name: eventName || null,
        source: source || 'landing_page',
        utm_source: utmParams.utm_source || null,
        utm_medium: utmParams.utm_medium || null,
        utm_campaign: utmParams.utm_campaign || null,
        sms_opt_in: consent,
      };

      const { data: fnData, error: fnError } = await supabase.functions.invoke('send-to-zapier', {
        body: leadData,
      });

      if (fnError) throw new Error(`Failed to submit: ${fnError.message}`);

      console.log('Lead submitted:', fnData);

      toast({
        title: "Success!",
        description: "Thank you! We'll be in touch soon.",
      });

      setFormData({ first_name: '', last_name: '', email: '', phone: '', address: '' });
      setConsent(false);
      setStep('form');
      setPhoneVerified(false);

      if (onSuccess) {
        onSuccess();
      } else if (successRedirectPath) {
        navigate(successRedirectPath);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setStep('otp');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'submitting') {
    return (
      <div className={`flex flex-col items-center justify-center py-8 space-y-3 ${className}`}>
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Submitting your information…</p>
      </div>
    );
  }

  if (step === 'otp') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex items-center gap-2 mb-2">
          <button
            type="button"
            onClick={() => setStep('form')}
            className="text-sm text-primary hover:underline"
          >
            ← Edit info
          </button>
        </div>
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-1 text-sm">
          <p className="font-medium text-foreground">{formData.first_name} {formData.last_name}</p>
          <p className="text-muted-foreground">{formData.email}</p>
          <p className="text-muted-foreground">{formData.phone}</p>
        </div>
        <PhoneOTPVerification
          phone={formData.phone}
          onVerified={handlePhoneVerified}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleFormNext} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first_name" className="text-foreground">First Name *</Label>
          <Input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="John"
            className={`bg-background/50 border-border ${errors.first_name ? 'border-destructive' : ''}`}
          />
          {errors.first_name && <p className="text-sm text-destructive">{errors.first_name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="last_name" className="text-foreground">Last Name *</Label>
          <Input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
            className={`bg-background/50 border-border ${errors.last_name ? 'border-destructive' : ''}`}
          />
          {errors.last_name && <p className="text-sm text-destructive">{errors.last_name}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
          className={`bg-background/50 border-border ${errors.email ? 'border-destructive' : ''}`}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
        <div className="relative">
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={`bg-background/50 border-border ${errors.phone ? 'border-destructive' : ''} ${phoneVerified ? 'border-green-500 pr-8' : ''}`}
          />
          {phoneVerified && (
            <CheckCircle2 className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
          )}
        </div>
        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        <p className="text-xs text-muted-foreground">A verification code will be sent to this number.</p>
      </div>

      {effectiveShowAddress && (
        <div className="space-y-2">
          <Label htmlFor="address" className="text-foreground">Property Address</Label>
          <Input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St, City, State"
            className={`bg-background/50 border-border ${errors.address ? 'border-destructive' : ''}`}
          />
          {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
        </div>
      )}

      <p className="text-xs text-muted-foreground leading-relaxed">
        By submitting this form, you consent to be contacted by Previse Mortgage LLC via phone, email, or other communication methods regarding your inquiry. View our <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">Terms of Service</Link>.
      </p>

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
      >
        Submit
      </Button>
    </form>
  );
};

export default UnifiedLeadForm;
