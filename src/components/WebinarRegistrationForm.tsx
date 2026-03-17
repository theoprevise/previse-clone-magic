import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import PhoneOTPVerification from "@/components/PhoneOTPVerification";

const registrationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Phone number is required").max(20, "Phone number too long"),
});

interface WebinarRegistrationFormProps {
  webinarDate: Date;
}

const WebinarRegistrationForm = ({ webinarDate }: WebinarRegistrationFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = registrationSchema.safeParse({ firstName, lastName, email, phone });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setStep('otp');
  };

  const handlePhoneVerified = async () => {
    setLoading(true);
    try {
      const { error: dbError } = await supabase
        .from('webinar_registrations')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || null,
          webinar_date: webinarDate.toISOString()
        });
      if (dbError) throw dbError;

      await supabase.functions.invoke('send-to-zapier', {
        body: {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          campaign_type: 'webinar_registration',
          source: 'webinar_registration_form',
          event_name: `Webinar Registration: First-Time Homebuyer - ${new Date(webinarDate).toLocaleDateString()}`,
          sms_opt_in: true
        }
      });

      await supabase.functions.invoke('send-webinar-confirmation', {
        body: { firstName, lastName, email, webinarDate: webinarDate.toISOString() }
      });

      toast({ title: "You're registered!", description: "Check your email for confirmation and Zoom details." });
      navigate('/webinar/thank-you');
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({ title: "Registration failed", description: error.message || "Please try again.", variant: "destructive" });
      setStep('otp');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-8 space-y-3">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
        <p className="text-sm text-white/70">Completing your registration…</p>
      </div>
    );
  }

  if (step === 'otp') {
    return (
      <div className="space-y-4">
        <div className="p-3 bg-white/10 border border-white/20 rounded-lg text-sm space-y-0.5">
          <p className="font-medium text-white">{firstName} {lastName}</p>
          <p className="text-white/70">{email}</p>
          <p className="text-white/70">{phone}</p>
        </div>
        <div className="[&_p]:text-white/80 [&_strong]:text-white [&_button:not([disabled])]:bg-white [&_button:not([disabled])]:text-primary [&_input]:bg-white/10 [&_input]:border-white/30 [&_input]:text-white">
          <PhoneOTPVerification phone={phone} onVerified={handlePhoneVerified} />
        </div>
        <button type="button" onClick={() => setStep('form')} className="text-sm text-white/70 hover:text-white underline block mx-auto">
          ← Edit info
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormNext} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">First Name *</Label>
          <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
          {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">Last Name *</Label>
          <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
          {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email Address *</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Phone Number *</Label>
        <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
        {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
        <p className="text-xs text-white/50">A verification code will be sent to this number.</p>
      </div>

      <p className="text-xs text-white/60 leading-relaxed">
        By submitting this form, you consent to be contacted by Previse Mortgage LLC via phone, email, or SMS regarding your inquiry. View our <Link to="/privacy-policy" className="text-white underline hover:text-white/80">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-white underline hover:text-white/80">Terms of Service</Link>.
      </p>

      <Button type="submit" variant="hero" className="w-full" size="lg">
        Next: Verify Phone →
      </Button>
    </form>
  );
};

export default WebinarRegistrationForm;
