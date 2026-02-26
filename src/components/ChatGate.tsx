import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

const STORAGE_KEY = 'previse_chat_unlocked';

const ChatGate = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unlocked = localStorage.getItem(STORAGE_KEY) === 'true';
    setIsUnlocked(unlocked);
  }, []);

  // Once unlocked, trigger the GHL chat widget to open
  const openGHLWidget = () => {
    // Temporarily restore pointer-events so the click lands, then hide again
    const btn = document.querySelector<HTMLElement>(
      '.lc_text-widget--bubble, [class*="chat-widget-button"], .lc_text-widget-button'
    );
    if (btn) {
      btn.style.setProperty('display', 'block', 'important');
      btn.style.setProperty('visibility', 'visible', 'important');
      btn.style.setProperty('pointer-events', 'auto', 'important');
      btn.click();
      // Re-hide after click so the button doesn't flash for long
      setTimeout(() => {
        btn.style.setProperty('display', 'none', 'important');
        btn.style.setProperty('visibility', 'hidden', 'important');
        btn.style.setProperty('pointer-events', 'none', 'important');
      }, 100);
    }
  };

  const handleFloatingClick = () => {
    if (isUnlocked) {
      openGHLWidget();
    } else {
      setIsOpen(true);
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!consent) {
      setError('Please consent to being contacted to continue.');
      return;
    }

    setIsSubmitting(true);
    try {
      await supabase.from('leads').upsert(
        {
          first_name: 'Chat',
          last_name: 'Visitor',
          email: `chat_${digits}@noemail.previse`,
          phone: digits,
          source: 'chat_gate',
          sms_opt_in: true,
        },
        { onConflict: 'email' }
      );
    } catch (_) {
      // Non-blocking — still unlock even if DB fails
    }

    localStorage.setItem(STORAGE_KEY, 'true');
    setIsUnlocked(true);
    setIsOpen(false);
    setIsSubmitting(false);

    // Small delay so GHL widget has time to render
    setTimeout(openGHLWidget, 300);
  };

  return (
    <>
      {/* Our custom floating button — sits on top of / replaces the GHL button visually */}
      <div className="fixed bottom-6 left-6 z-[9999]">
        <button
          onClick={handleFloatingClick}
          aria-label="Open chat"
          className="w-14 h-14 rounded-full bg-accent text-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ring-2 ring-accent/20"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Gate modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center sm:justify-start sm:pl-6 sm:pb-24 pb-24 px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-in slide-in-from-bottom-4 duration-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Chat with Us</h3>
                <p className="text-xs text-muted-foreground">Mortgage questions answered fast</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1 block">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="(717) 555-0100"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    className="pl-9 text-foreground"
                    required
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-accent"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I consent to receive informational calls and SMS text messages from Previse Mortgage LLC at the number provided. Message & data rates may apply. Reply STOP to opt out.
                </span>
              </label>

              {error && (
                <p className="text-xs text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
              >
                {isSubmitting ? 'Opening chat…' : 'Start Chat'}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatGate;
