import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';

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
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Capture UTM parameters from URL
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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = leadSchema.parse(formData);

      // Prepare lead data
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
      };

      // Submit via Edge Function (server-side insert + Zapier)
      const { data: fnData, error: fnError } = await supabase.functions.invoke('send-to-zapier', {
        body: leadData,
      });

      if (fnError) {
        console.error('send-to-zapier error:', {
          message: fnError.message,
          details: (fnError as any).details,
          context: (fnError as any).context,
        });
        throw new Error(`Failed to submit your information: ${fnError.message}`);
      }

      console.log('Lead submitted via function:', fnData);

      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
      });

      // Handle success callback or redirect
      if (onSuccess) {
        onSuccess();
      } else if (successRedirectPath) {
        navigate(successRedirectPath);
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
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
            disabled={isSubmitting}
          />
          {errors.first_name && (
            <p className="text-sm text-destructive">{errors.first_name}</p>
          )}
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
            disabled={isSubmitting}
          />
          {errors.last_name && (
            <p className="text-sm text-destructive">{errors.last_name}</p>
          )}
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
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className={`bg-background/50 border-border ${errors.phone ? 'border-destructive' : ''}`}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone}</p>
        )}
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
            disabled={isSubmitting}
          />
          {errors.address && (
            <p className="text-sm text-destructive">{errors.address}</p>
          )}
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          effectiveButtonText
        )}
      </Button>
    </form>
  );
};

export default UnifiedLeadForm;
