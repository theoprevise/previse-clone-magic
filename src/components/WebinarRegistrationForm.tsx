import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const registrationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().optional()
});

interface WebinarRegistrationFormProps {
  webinarDate: Date;
}

const WebinarRegistrationForm = ({ webinarDate }: WebinarRegistrationFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive communications to continue.",
        variant: "destructive"
      });
      return;
    }

    // Validate input
    const result = registrationSchema.safeParse({ firstName, lastName, email, phone });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      // Save registration to database
      const { error: dbError } = await supabase
        .from('webinar_registrations')
        .insert({
          first_name: result.data.firstName,
          last_name: result.data.lastName,
          email: result.data.email,
          phone: result.data.phone || null,
          webinar_date: webinarDate.toISOString()
        });

      if (dbError) throw dbError;

      // Send to Zapier
      const { error: zapierError } = await supabase.functions.invoke('send-to-zapier', {
        body: {
          first_name: result.data.firstName,
          last_name: result.data.lastName,
          email: result.data.email,
          phone: result.data.phone || '',
          campaign_type: 'webinar_registration',
          source: 'webinar_registration_form',
          event_name: `Webinar Registration: First-Time Homebuyer - ${new Date(webinarDate).toLocaleDateString()}`,
          sms_opt_in: consent
        }
      });

      if (zapierError) {
        console.error('Zapier error:', zapierError);
        // Don't fail registration if Zapier fails
      }

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke('send-webinar-confirmation', {
        body: {
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          email: result.data.email,
          webinarDate: webinarDate.toISOString()
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't fail registration if email fails
      }

      toast({
        title: "You're registered!",
        description: "Check your email for confirmation and Zoom details."
      });

      navigate('/webinar/thank-you');
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: error.message || "Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">First Name *</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            disabled={loading}
          />
          {errors.firstName && (
            <p className="text-red-400 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">Last Name *</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            disabled={loading}
          />
          {errors.lastName && (
            <p className="text-red-400 text-sm">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          disabled={loading}
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Phone Number (optional)</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 123-4567"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          disabled={loading}
        />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked as boolean)}
          className="mt-0.5 border-white/30"
          required
        />
        <label htmlFor="consent" className="text-xs text-white/70 leading-relaxed cursor-pointer">
          By submitting this form, you consent to receive recurring informational and promotional SMS/text messages from Previse Mortgage at the phone number provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel at any time. View our <Link to="/privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link>. <span className="text-red-400 font-semibold">(Required)</span>
        </label>
      </div>

      <Button 
        type="submit" 
        variant="hero" 
        className="w-full" 
        size="lg"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Registering...
          </>
        ) : (
          "Register for Free"
        )}
      </Button>
    </form>
  );
};

export default WebinarRegistrationForm;