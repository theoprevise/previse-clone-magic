// Regional consent helpers for Google Ads (Consent Mode v2).
export const CONSENT_KEY = "cookie_consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

const CONSENT_COUNTRIES = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH','CA'];
let consentRegion: Promise<boolean> | undefined;

export function isConsentRequiredRegion(): Promise<boolean> {
  return (consentRegion ??= lookupConsentRegion());
}

async function lookupConsentRegion(): Promise<boolean> {
  try {
    const res = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000) });
    if (!res.ok) return true;
    const trace = await res.text();
    const host = trace.match(/^h=(.+)$/m)?.[1]?.trim().toLowerCase();
    if (host !== location.hostname) return true;
    const country = trace.match(/^loc=([A-Z0-9]{2})$/m)?.[1];
    if (!country || country === "XX" || country === "T1") return true;
    return CONSENT_COUNTRIES.includes(country);
  } catch {
    return true;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

/** Google Ads conversion for the DSCR Search campaign's lead goal. */
export const GOOGLE_ADS_LEAD_SEND_TO = "AW-17802839913/sjrjCI3Hw64dEOmOh6lC";
