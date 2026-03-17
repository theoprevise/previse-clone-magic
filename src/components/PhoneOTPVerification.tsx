import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, Loader2, Phone, RefreshCw } from 'lucide-react';

interface PhoneOTPVerificationProps {
  phone: string;
  onVerified: () => void;
  className?: string;
}

const PhoneOTPVerification = ({ phone, onVerified, className = '' }: PhoneOTPVerificationProps) => {
  const [step, setStep] = useState<'send' | 'verify'>('send');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCooldown = () => {
    setCooldown(60);
    cooldownRef.current = setInterval(() => {
      setCooldown(prev => {
        if (prev <= 1) {
          clearInterval(cooldownRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendOTP = async () => {
    setError('');
    setIsSending(true);
    try {
      const { data, error: fnError } = await supabase.functions.invoke('phone-otp', {
        body: { action: 'send', phone },
      });
      if (fnError) throw new Error(fnError.message);
      if (data?.error) throw new Error(data.error);
      if (!data?.success) throw new Error('Failed to send code');
      setStep('verify');
      // Reset cooldown each time a code is successfully sent
      if (cooldownRef.current) clearInterval(cooldownRef.current);
      startCooldown();
      // Focus first OTP input
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to send verification code';
      setError(msg);
    } finally {
      setIsSending(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow digits
    const digit = value.replace(/\D/g, '').slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    setError('');

    // Auto-advance
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all 6 digits entered
    if (digit && index === 5) {
      const fullCode = [...newOtp.slice(0, 5), digit].join('');
      if (fullCode.length === 6) {
        verifyOTP(fullCode);
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(''));
      verifyOTP(pasted);
    }
  };

  const verifyOTP = async (code: string) => {
    setError('');
    setIsVerifying(true);
    try {
      const { data, error: fnError } = await supabase.functions.invoke('phone-otp', {
        body: { action: 'verify', phone, code },
      });
      if (fnError) throw new Error(fnError.message);
      if (!data?.verified) throw new Error(data?.error || 'Verification failed');
      onVerified();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed');
      setOtp(['', '', '', '', '', '']);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleManualVerify = () => {
    const code = otp.join('');
    if (code.length === 6) verifyOTP(code);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {step === 'send' ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 border border-border">
            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
            <span>We'll send a 6-digit code to <strong className="text-foreground">{phone}</strong> to verify your number.</span>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button
            type="button"
            onClick={sendOTP}
            disabled={isSending}
            className="w-full"
          >
            {isSending ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Code...</>
            ) : (
              <><Phone className="mr-2 h-4 w-4" /> Send Verification Code</>
            )}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <p className="text-sm font-medium text-foreground">Enter the 6-digit code sent to</p>
            <p className="text-sm text-primary font-semibold">{phone}</p>
          </div>

          {/* OTP Inputs */}
          <div className="flex gap-2 justify-center" onPaste={handleOtpPaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={el => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleOtpChange(i, e.target.value)}
                onKeyDown={e => handleOtpKeyDown(i, e)}
                disabled={isVerifying}
                className={`w-10 h-12 text-center text-lg font-bold border-2 rounded-lg bg-background transition-all focus:outline-none focus:border-primary
                  ${digit ? 'border-primary/60 bg-primary/5' : 'border-border'}
                  ${error ? 'border-destructive' : ''}
                  ${isVerifying ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
            ))}
          </div>

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          {isVerifying && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Verifying...
            </div>
          )}

          {/* Manual verify button (in case auto-verify missed) */}
          {otp.join('').length === 6 && !isVerifying && (
            <Button type="button" onClick={handleManualVerify} className="w-full">
              <CheckCircle2 className="mr-2 h-4 w-4" /> Verify Code
            </Button>
          )}

          {/* Resend */}
          <div className="text-center">
            <button
              type="button"
              onClick={sendOTP}
              disabled={isSending || cooldown > 0}
              className="text-sm text-primary hover:underline disabled:text-muted-foreground disabled:no-underline disabled:cursor-not-allowed flex items-center gap-1 mx-auto"
            >
              <RefreshCw className="h-3 w-3" />
              {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneOTPVerification;
