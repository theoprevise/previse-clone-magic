// Triple tagging: browser dataLayer (GTM) + Meta Pixel (client-side) + server-side tagging endpoint.
// Both sends share an event_id so GA4 / Meta can de-duplicate.

declare global {
  interface Window {
    fbq?: (
      command: 'init' | 'track' | 'trackCustom',
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

const TAGGING_ENDPOINT =
  'https://cufykawssrjdftlffuod.supabase.co/functions/v1/server-tagging';

export type TrackUserData = {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export type TrackOptions = {
  params?: Record<string, string | number | boolean>;
  user_data?: TrackUserData;
  value?: number;
  currency?: string;
};




const readCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
};

/** GA4 client_id lives in the _ga cookie as GA1.1.<client_id> */
const getClientId = (): string | undefined => {
  const ga = readCookie('_ga');
  if (!ga) return undefined;
  const parts = ga.split('.');
  return parts.length >= 4 ? `${parts[2]}.${parts[3]}` : undefined;
};

const getSessionId = (): string => {
  const key = 'pm_session_id';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = String(Math.floor(Date.now() / 1000));
    sessionStorage.setItem(key, id);
  }
  return id;
};

const newEventId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

/**
 * Track an event on both the client (GTM dataLayer) and the server
 * (GA4 Measurement Protocol + Meta CAPI via the server-tagging function).
 */
export async function trackEvent(
  eventName: string,
  options: TrackOptions = {},
): Promise<void> {
  const eventId = newEventId();
  const { params = {}, user_data, value, currency } = options;

  // 1. Client-side (GTM / gtag)
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      event_id: eventId,
      ...params,
      ...(value != null ? { value, currency: currency ?? 'USD' } : {}),
    });
  } catch {
    /* no-op */
  }

  // 1b. Meta Pixel (client-side only since CAPI is restricted for financial services)
  try {
    if (typeof window.fbq === 'function') {
      const fbParams: Record<string, unknown> = { ...params, event_id: eventId };
      if (value != null) {
        fbParams.value = value;
        fbParams.currency = currency ?? 'USD';
      }
      // Map our internal event names to Meta standard events where applicable.
      const standardEvents: Record<string, string> = {
        generate_lead: 'Lead',
        page_view: 'PageView',
        form_submit: 'Lead',
        sign_up: 'CompleteRegistration',
        schedule: 'Schedule',
        contact: 'Contact',
        view_item: 'ViewContent',
      };
      const metaEvent = standardEvents[eventName] ?? eventName;
      if (metaEvent === eventName) {
        window.fbq('trackCustom', eventName, fbParams);
      } else {
        window.fbq('track', metaEvent, fbParams);
      }
    }
  } catch {
    /* no-op */
  }

  // 2. Server-side payload
  const payload = {
    event_name: eventName,
    event_id: eventId,
    client_id: getClientId(),
    session_id: getSessionId(),
    page_location: window.location.href,
    page_referrer: document.referrer || undefined,
    params,
    user_data,
    value,
    currency,
    fbp: readCookie('_fbp'),
    fbc: readCookie('_fbc'),
  };

  try {
    await fetch(TAGGING_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (err) {
    console.warn('server-tagging failed', err);
  }
}

/** Convenience helper for lead form submissions. */
export const trackLead = (user_data: TrackUserData, params: TrackOptions['params'] = {}) =>
  trackEvent('generate_lead', { user_data, params, value: 1, currency: 'USD' });

/** Convenience helper for SPA page views. */
export const trackPageView = (path?: string) =>
  trackEvent('page_view', { params: { page_path: path ?? window.location.pathname } });
