import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Gift, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenExitPopup = localStorage.getItem('exitPopupDismissed');
    if (hasSeenExitPopup) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen) setIsOpen(true);
    };
    if (window.innerWidth > 768) document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setStep('form');
    localStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Valid phone required';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    void handlePhoneVerified();
  };

  const handlePhoneVerified = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-to-zapier', {
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          source: 'exit_intent_popup',
          campaign_type: 'website_exit_intent',
          event_name: 'User attempted to leave page',
          sms_opt_in: true,
        },
      });
      if (error) throw error;
      setShowThankYou(true);
      localStorage.setItem('exitPopupDismissed', 'true');
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      setStep('form');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10" aria-label="Close popup">
          <X className="w-6 h-6" />
        </button>

        {showThankYou ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">We'll be in touch within 24 hours to schedule your free consultation.</p>
            <Button onClick={handleClose} className="bg-primary hover:bg-primary-dark">Continue Browsing</Button>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Wait! Before You Go...
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Get a FREE Mortgage Consultation
              </h2>
              <p className="text-white/90">
                No obligation • Expert advice • Personalized guidance
              </p>
            </div>

              <form onSubmit={handleFormNext} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} className={`border-gray-200 focus:border-accent ${errors.firstName ? 'border-red-400' : ''}`} />
                    {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Input name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} className={`border-gray-200 focus:border-accent ${errors.lastName ? 'border-red-400' : ''}`} />
                    {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <Input name="email" type="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={`border-gray-200 focus:border-accent ${errors.email ? 'border-red-400' : ''}`} />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Input name="phone" type="tel" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className={`border-gray-200 focus:border-accent ${errors.phone ? 'border-red-400' : ''}`} />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting, you consent to be contacted by Previse Mortgage LLC via phone, email, or SMS. View our <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">Terms of Service</Link>.
                </p>
                <Button type="submit" className="w-full bg-accent hover:bg-accent-light text-primary font-bold py-6 text-lg">
                  Submit
                </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
