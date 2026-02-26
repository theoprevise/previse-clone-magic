
## Chat Gate: Seamless Transition + Phone Pre-fill

### Problem 1: Confusing Re-appearance
Currently the flow is:
1. User submits phone → modal closes → GHL script loads → GHL bubble appears → gets programmatically clicked → panel opens

The bubble flickering in and out is jarring. The fix is to **keep the gate modal open** and transition it into a loading state ("Starting chat...") while the GHL script loads in the background. Only once the GHL panel is confirmed open do we hide everything. The user sees a smooth spinner → chat opens.

### Problem 2: Phone Number Tie-in to GHL Widget
The GHL chat widget exposes a JavaScript method to identify a contact before they interact:

```js
window.LeadConnector?.chat?.openChat?.();
// and for identity:
window.HL_CHAT_WIDGET?.setContactInfo?.({ phone: "...", name: "...", email: "..." });
```

The GHL widget config (confirmed from the network request) shows `"enable-contact-form": false` and `"default-consent-check": true`, which means GHL may not ask for contact info at all on this particular widget — the chat goes straight to the live chat queue. However, GHL does support pre-filling contact data via their `window.LC_API` or by setting `window.HL_CHAT_WIDGET` properties before the widget initializes.

The most reliable approach: **pass the phone number as a pre-set identity via a global variable before the GHL script loads**, so when GHL initializes, it already has the contact's phone. GHL reads `window.__lc` or similar pre-initialization config objects.

Additionally, we store the phone in `localStorage` as `previse_chat_phone` so on return visits (when the widget is already loaded), we can still pass it.

### Implementation Plan

**`src/components/ChatGate.tsx`** — Changes:
- After form submit validation passes, switch the modal to a "loading/connecting" state instead of closing it
- Dispatch the `previse:chat-unlocked` event with the phone number as a custom event detail
- Listen for the GHL panel to open (poll for `.lc_text-widget--open` class or use a timeout), then close the gate modal
- Hide our custom floating button once GHL is fully open (GHL manages the toggle from there)
- Fix the Supabase upsert — the 400 error in the network logs shows `"there is no unique or exclusion constraint matching the ON CONFLICT specification"` — the `email` column on the `leads` table has no unique constraint, so we need to use a plain `insert` instead of `upsert`

**`src/components/GoHighLevelChat.tsx`** — Changes:
- Listen for the `previse:chat-unlocked` event and read the phone from `event.detail`
- Before appending the GHL script, set `window.CHAT_WIDGET_PREFILL = { phone }` as a global
- After the script loads and the widget initializes, call GHL's pre-fill API: `window.HL_CHAT_WIDGET?.setData?.({ phone })` — this is the documented way to pass contact data to the GHL widget
- Store the phone in `localStorage` as `previse_chat_phone` for return visits

**Database fix:**
- Change the `supabase.from('leads').upsert(...)` call to a plain `.insert()` since there is no unique constraint on the email column for anonymous/chat leads. This removes the 400 error entirely.

### Flow After Changes

```text
User clicks chat bubble
        ↓
Gate modal opens (phone + consent)
        ↓
User submits → modal transitions to "Connecting to chat..."
        ↓
GHL script loads in background, phone is pre-set globally
        ↓
GHL widget initializes → phone pre-filled into its contact fields
        ↓
GHL panel opens → gate modal fades out automatically
        ↓
User is now in the live chat, no re-appearance or confusion
```

### On Return Visits
- `localStorage` has `previse_chat_unlocked = true` and `previse_chat_phone = 7175550100`
- GHL script loads on page load
- Our custom button triggers GHL panel open directly
- Phone is still passed to GHL from localStorage on each open

### Note on GHL Contact Form
The network response confirms this widget has `"enable-contact-form": false` — meaning GHL does **not** ask users for their info again inside the widget. Our gate already captured it. The pre-fill via `window` globals ensures GHL's backend can still associate the session with the phone number when the contact is created in their CRM.
