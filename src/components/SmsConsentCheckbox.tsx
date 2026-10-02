import { useId } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export const SMS_CONSENT_TEXT =
  'Yes, text me updates about my inquiry. (Message & data rates may apply; reply STOP to opt out.)';

/** Builds the consent fields saved with each lead. */
export const smsConsentFields = (checked: boolean) => ({
  sms_opt_in: checked,
  sms_consent_text: checked ? SMS_CONSENT_TEXT : null,
  sms_consent_page: window.location.href,
});

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const SmsConsentCheckbox = ({ checked, onChange, className = '' }: Props) => {
  const id = useId();
  return (
    <div className={`flex items-start gap-2 text-left ${className}`}>
      <Checkbox id={id} checked={checked} onCheckedChange={(c) => onChange(c === true)} className="mt-0.5" />
      <label htmlFor={id} className="text-xs leading-relaxed text-muted-foreground cursor-pointer">
        {SMS_CONSENT_TEXT}
      </label>
    </div>
  );
};

export default SmsConsentCheckbox;
