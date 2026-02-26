
# A2P/10DLC Compliance Fix Plan

## Overview
Update all website forms to meet CTIA Messaging Principles and Best Practices requirements for A2P verification. This involves standardizing consent language and adding required disclosures.

## Changes Required

### 1. Update Consent Language Across All Forms

**New standardized opt-in text to use everywhere:**

> By submitting this form, you consent to receive recurring informational and promotional SMS/text messages from Previse Mortgage at the phone number provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel at any time. View our [Privacy Policy].

This includes all required elements:
- Brand name (Previse Mortgage)
- Recurring message disclosure
- Message frequency statement
- Data rates disclosure
- HELP instructions
- STOP opt-out instructions
- Privacy Policy link

### 2. Files to Update

| File | Current Status | Action |
|------|----------------|--------|
| `src/components/HeroLeadForm.tsx` | Partial compliance | Update consent text |
| `src/components/UnifiedLeadForm.tsx` | Partial compliance | Update consent text |
| `src/components/WebinarRegistrationForm.tsx` | Partial compliance | Update consent text |
| `src/components/ExitIntentPopup.tsx` | Old language | Update consent text |
| `src/components/LeadCapturePopup.tsx` | Old language | Update consent text |

### 3. Add SMS Policy Section to Privacy Policy

Add a new section (Section 12) to `src/pages/PrivacyPolicy.tsx`:

**"SMS/Text Messaging Program"** section covering:
- What messages you'll send
- Frequency disclosure
- Opt-out instructions
- Customer support contact
- Data rates notice
- Carrier liability disclaimer

---

## Technical Details

### Consent Text Template (for developers)
```text
By submitting this form, you consent to receive recurring informational and promotional SMS/text messages from Previse Mortgage at the phone number provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel at any time. View our Privacy Policy. (Required)
```

### Privacy Policy SMS Section Content
```text
12. SMS/Text Messaging Program

When you provide your phone number and consent on our website forms, you are opting in to receive SMS/text messages from Previse Mortgage regarding your mortgage inquiry, loan status updates, and promotional offers.

- Message Frequency: Message frequency varies based on your inquiry and loan process.
- Message & Data Rates: Standard message and data rates may apply depending on your carrier and plan.
- Opt-Out: Reply STOP to any message to unsubscribe from our SMS program at any time.
- Help: Reply HELP to any message for customer support information, or contact us at teddy@previsemortgage.com.
- Carriers: Carriers are not liable for delayed or undelivered messages.
- Privacy: Your phone number will not be sold or shared with third parties for marketing purposes.
```

---

## Expected Outcome

After these changes, your opt-in flow will comply with:
- CTIA Messaging Principles and Best Practices (Section 5.1.2)
- 10DLC registration requirements
- Carrier A2P verification standards

This should resolve the "provided opt-in information" rejection reason.
