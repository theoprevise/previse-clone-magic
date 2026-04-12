import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<'form' | 'done'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Valid phone required';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsSubmitting(true);
    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || formData.name;
      const lastName = nameParts.slice(1).join(' ') || '';
      const { error } = await supabase.functions.invoke('send-to-zapier', {
        body: {
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          phone: formData.phone,
          source: 'contact_section_form',
          campaign_type: 'contact_page',
          event_name: 'Contact Form Submission',
          notes: formData.message || null,
          sms_opt_in: true,
        },
      });
      if (error) throw error;
      setStep('done');
      toast({ title: "Message sent!", description: "We'll be in touch within 24 hours." });
    } catch (err) {
      console.error('Contact form error:', err);
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-0.5 bg-accent mb-16"></div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {step === 'done' ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/70">We'll be in touch within 24 hours.</p>
                  <button onClick={() => { setStep('form'); setFormData({ name: '', email: '', phone: '', message: '' }); }} className="text-accent underline text-sm">Send another message</button>
                </div>
              ) : step === 'otp' ? (
                <div className="space-y-4">
                  <div className="p-3 bg-white/10 border border-white/20 rounded-lg text-sm space-y-0.5">
                    <p className="font-medium text-white">{formData.name}</p>
                    <p className="text-white/70">{formData.email}</p>
                    <p className="text-white/70">{formData.phone}</p>
                    {formData.message && <p className="text-white/50 truncate">"{formData.message}"</p>}
                  </div>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2 py-4 text-white/70">
                      <Loader2 className="h-5 w-5 animate-spin" /> Sending your message…
                    </div>
                  ) : (
                    <div className="[&_p]:text-white/80 [&_strong]:text-white [&_button:not([disabled])]:bg-white [&_button:not([disabled])]:text-primary [&_input]:bg-white/10 [&_input]:border-white/30 [&_input]:text-white">
                      <PhoneOTPVerification phone={formData.phone} onVerified={handlePhoneVerified} />
                    </div>
                  )}
                  <button type="button" onClick={() => setStep('form')} className="text-sm text-white/60 hover:text-white underline block mx-auto">← Edit info</button>
                </div>
              ) : (
                <form onSubmit={handleFormNext} className="space-y-6">
                  <div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-4 bg-transparent border-2 rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none ${errors.name ? 'border-red-400' : 'border-border'}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-4 bg-transparent border-2 rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none ${errors.email ? 'border-red-400' : 'border-border'}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full p-4 bg-transparent border-2 rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none ${errors.phone ? 'border-red-400' : 'border-border'}`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    <p className="text-white/40 text-xs mt-1">A verification code will be sent to this number.</p>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 bg-transparent border-2 border-border rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-primary py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                  >
                    Next: Verify Phone →
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">+1 (717)-819-5196</h3>
                <p className="text-white/80">
                  <a href="mailto:team@previsemortgage.com" className="hover:text-accent transition-colors">team@previsemortgage.com</a>
                </p>
                <p className="text-white/80 mt-4">Spring Grove, PA 17362</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Hours</h4>
                <div className="space-y-2 text-white/80">
                  {[['Mon','09:00 am – 05:00 pm'],['Tue','09:00 am – 05:00 pm'],['Wed','09:00 am – 05:00 pm'],['Thu','09:00 am – 05:00 pm'],['Fri','09:00 am – 05:00 pm']].map(([day, hours]) => (
                    <div key={day} className="flex justify-between"><span>{day}</span><span>{hours}</span></div>
                  ))}
                  <div className="flex justify-between"><span>Sat</span><span className="text-red-400">Closed</span></div>
                  <div className="flex justify-between"><span>Sun</span><span className="text-red-400">Closed</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
