import { useState, useEffect } from 'react';
import { X, Gift, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenExitPopup = localStorage.getItem('exitPopupDismissed');
    if (hasSeenExitPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true);
      }
    };

    // Only trigger on desktop
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !consent) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields including phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        source: 'exit_intent_popup',
        campaign_type: 'website_exit_intent',
        event_name: 'User attempted to leave page',
        sms_opt_in: consent,
      };

      const { error } = await supabase.functions.invoke('send-to-zapier', {
        body: leadData,
      });

      if (error) throw error;

      setShowThankYou(true);
      localStorage.setItem('exitPopupDismissed', 'true');

      toast({
        title: "Success!",
        description: "Your free consultation has been scheduled.",
      });
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {showThankYou ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              We'll be in touch within 24 hours to schedule your free consultation.
            </p>
            <Button onClick={handleClose} className="bg-primary hover:bg-primary-dark">
              Continue Browsing
            </Button>
          </div>
        ) : (
          <>
            {/* Header */}
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
                No obligation • Expert advice • Save thousands
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:border-accent"
                  />
                </div>
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-200 focus:border-accent"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-gray-200 focus:border-accent"
              />

              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent_exit"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  className="mt-0.5 border-gray-300"
                  required
                />
                <label htmlFor="consent_exit" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                  I consent to receive calls, emails, and SMS/text messages from Previse Mortgage. *
                </label>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-light text-primary font-bold py-6 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Claim My Free Consultation'}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
