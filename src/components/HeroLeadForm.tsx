import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Send } from 'lucide-react';
const HeroLeadForm = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    helpType: '',
    consent: false
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone || !formData.consent) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, phone, and consent are required.",
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
        phone: formData.phone,
        campaign_type: 'hero_form',
        event_name: `Interest: ${formData.helpType || 'General'}`,
        source: 'website_hero',
        sms_opt_in: formData.consent
      };
      const {
        error
      } = await supabase.functions.invoke('send-to-zapier', {
        body: leadData
      });
      if (error) throw error;
      toast({
        title: "Thank you!",
        description: "We'll be in touch shortly."
      });
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        helpType: '',
        consent: false
      });
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
      <h3 className="text-2xl font-bold text-primary mb-2 text-center">​Get in Contact </h3>
      <p className="text-gray-600 text-center mb-6 text-sm">Fill out the form and we'll be in touch</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500" required />
          <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500" />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Input name="phone" type="tel" placeholder="Phone*" value={formData.phone} onChange={handleChange} className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500" required />
          <Input name="email" type="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500" required />
        </div>
        
        <Select value={formData.helpType} onValueChange={value => setFormData(prev => ({
        ...prev,
        helpType: value
      }))}>
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
        
        <div className="flex items-start gap-3">
          <Checkbox id="consent" checked={formData.consent} onCheckedChange={checked => setFormData(prev => ({
          ...prev,
          consent: checked as boolean
        }))} className="mt-1" required />
          <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
            I consent to receive calls, emails, and SMS/text messages from Previse Mortgage. Message and data rates may apply. Reply STOP to opt out. *
          </label>
        </div>
        
        <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          {isSubmitting ? <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </> : <>
              Submit Now
              <Send className="ml-2 h-5 w-5" />
            </>}
        </Button>
      </form>
    </div>;
};
export default HeroLeadForm;