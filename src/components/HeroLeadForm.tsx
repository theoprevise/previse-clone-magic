import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import PhoneOTPVerification from '@/components/PhoneOTPVerification';

const HeroLeadForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<'form' | 'otp' | 'submitting'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    helpType: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'A valid phone number is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStep('otp');
  };

  const handlePhoneVerified = async () => {
    setStep('submitting');
    setIsSubmitting(true);
    try {
      const leadData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        campaign_type: 'homepage_hero_form',
        event_name: `Interest: ${formData.helpType || 'General Inquiry'}`,
        source: 'homepage_hero_contact_form',
        sms_opt_in: true,
      };
      const { error } = await supabase.functions.invoke('send-to-zapier', { body: leadData });
      if (error) throw error;
      toast({ title: "Thank you!", description: "We'll be in touch shortly." });
      setFormData({ firstName: '', lastName: '', phone: '', email: '', helpType: '' });
      setStep('form');
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
      setStep('otp');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'submitting') {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 flex flex-col items-center justify-center py-12 space-y-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-gray-600 text-sm">Submitting your information…</p>
      </div>
    );
  }

  if (step === 'otp') {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
        <h3 className="text-2xl font-bold text-primary mb-1 text-center">Verify Your Phone</h3>
        <p className="text-gray-600 text-center mb-6 text-sm">One last step — confirm your number</p>
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4 text-sm space-y-1">
          <p className="font-medium text-gray-900">{formData.firstName} {formData.lastName}</p>
          <p className="text-gray-500">{formData.email}</p>
          <p className="text-gray-500">{formData.phone}</p>
        </div>
        <PhoneOTPVerification phone={formData.phone} onVerified={handlePhoneVerified} />
        <button
          type="button"
          onClick={() => setStep('form')}
          className="mt-4 text-sm text-primary hover:underline block mx-auto"
        >
          ← Edit info
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
      <h3 className="text-2xl font-bold text-primary mb-1 text-center">Get in Touch</h3>
      <p className="text-gray-600 text-center mb-6 text-sm">Fill out the form and we'll be in touch</p>
      
      <form onSubmit={handleFormNext} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Input
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className={`bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 ${errors.firstName ? 'border-red-400' : ''}`}
            />
            {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
          </div>
          <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500" />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Input
              name="phone"
              type="tel"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              className={`bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 ${errors.phone ? 'border-red-400' : ''}`}
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
          </div>
          <div className="space-y-1">
            <Input
              name="email"
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className={`bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 ${errors.email ? 'border-red-400' : ''}`}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>
        </div>
        
        <Select value={formData.helpType} onValueChange={value => setFormData(prev => ({ ...prev, helpType: value }))}>
          <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
            <SelectValue placeholder="How can we help you?" />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200 z-50">
            <SelectItem value="purchase" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Buying a Home</SelectItem>
            <SelectItem value="refinance" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Refinancing</SelectItem>
            <SelectItem value="first-time" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">First-Time Buyer</SelectItem>
            <SelectItem value="investment" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Investment Property</SelectItem>
            <SelectItem value="other" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900">Other</SelectItem>
          </SelectContent>
        </Select>
        
        <p className="text-xs text-gray-500 leading-relaxed">
          By submitting this form, you consent to be contacted by Previse Mortgage LLC via phone, email, or SMS regarding your inquiry. View our <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">Terms of Service</Link>.
        </p>
        
        <Button type="submit" className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          Next: Verify Phone →
        </Button>
      </form>
    </div>
  );
};
export default HeroLeadForm;
