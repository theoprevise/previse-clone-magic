import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

// Server-side tagging endpoint (sGTM-style).
// Receives event payloads from the browser and fans them out to
// GA4 Measurement Protocol, Google Ads (via GA4), and Meta Conversions API.

const GA4_MEASUREMENT_ID = Deno.env.get('GA4_MEASUREMENT_ID') ?? 'G-47FS1TSS0V';
const GA4_API_SECRET = Deno.env.get('GA4_API_SECRET');
const META_PIXEL_ID = Deno.env.get('META_PIXEL_ID');
const META_CAPI_TOKEN = Deno.env.get('META_CAPI_TOKEN');

const MAX_STR = 512;

type UserData = {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  city?: string;
  state?: string;
  zip?: string;
};

type Payload = {
  event_name: string;
  event_id?: string;
  client_id?: string;
  session_id?: string;
  page_location?: string;
  page_referrer?: string;
  params?: Record<string, unknown>;
  user_data?: UserData;
  consent?: { ad_user_data?: boolean; ad_personalization?: boolean; analytics?: boolean };
  value?: number;
  currency?: string;
  fbp?: string;
  fbc?: string;
};

const sanitize = (v: unknown): unknown => {
  if (typeof v === 'string') return v.slice(0, MAX_STR);
  if (typeof v === 'number' || typeof v === 'boolean') return v;
  return undefined;
};

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

const normEmail = (e: string) => e.trim().toLowerCase();
const normPhone = (p: string) => {
  const digits = p.replace(/\D/g, '');
  return digits.length === 10 ? `1${digits}` : digits;
};

async function sendGA4(p: Payload, params: Record<string, unknown>) {
  if (!GA4_API_SECRET) return { skipped: 'missing GA4_API_SECRET' };

  const body: Record<string, unknown> = {
    client_id: p.client_id || crypto.randomUUID(),
    timestamp_micros: Date.now() * 1000,
    non_personalized_ads: p.consent?.ad_personalization === false,
    consent: {
      ad_user_data: p.consent?.ad_user_data === false ? 'DENIED' : 'GRANTED',
      ad_personalization: p.consent?.ad_personalization === false ? 'DENIED' : 'GRANTED',
    },
    events: [
      {
        name: p.event_name,
        params: {
          ...params,
          engagement_time_msec: 100,
          session_id: p.session_id,
          page_location: p.page_location,
          page_referrer: p.page_referrer,
          value: p.value,
          currency: p.currency ?? (p.value != null ? 'USD' : undefined),
        },
      },
    ],
  };

  if (p.user_data?.email || p.user_data?.phone) {
    const ud: Record<string, unknown> = {};
    if (p.user_data.email) ud.sha256_email_address = await sha256(normEmail(p.user_data.email));
    if (p.user_data.phone) ud.sha256_phone_number = await sha256(normPhone(p.user_data.phone));
    body.user_data = ud;
  }

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;
  const res = await fetch(url, { method: 'POST', body: JSON.stringify(body) });
  return { status: res.status };
}

async function sendMeta(p: Payload, params: Record<string, unknown>, req: Request) {
  if (!META_PIXEL_ID || !META_CAPI_TOKEN) return { skipped: 'missing Meta credentials' };

  const map: Record<string, string> = {
    generate_lead: 'Lead',
    form_submit: 'Lead',
    sign_up: 'CompleteRegistration',
    schedule: 'Schedule',
    page_view: 'PageView',
    view_item: 'ViewContent',
    contact: 'Contact',
  };

  const user_data: Record<string, unknown> = {
    client_user_agent: req.headers.get('user-agent') ?? undefined,
    client_ip_address:
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? undefined,
    fbp: p.fbp,
    fbc: p.fbc,
  };
  if (p.user_data?.email) user_data.em = [await sha256(normEmail(p.user_data.email))];
  if (p.user_data?.phone) user_data.ph = [await sha256(normPhone(p.user_data.phone))];
  if (p.user_data?.first_name) user_data.fn = [await sha256(p.user_data.first_name.trim().toLowerCase())];
  if (p.user_data?.last_name) user_data.ln = [await sha256(p.user_data.last_name.trim().toLowerCase())];
  if (p.user_data?.city) user_data.ct = [await sha256(p.user_data.city.replace(/\s/g, '').toLowerCase())];
  if (p.user_data?.state) user_data.st = [await sha256(p.user_data.state.trim().toLowerCase())];
  if (p.user_data?.zip) user_data.zp = [await sha256(p.user_data.zip.trim())];

  const body = {
    data: [
      {
        event_name: map[p.event_name] ?? p.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: p.event_id,
        event_source_url: p.page_location,
        action_source: 'website',
        user_data,
        custom_data: { ...params, value: p.value, currency: p.currency ?? 'USD' },
      },
    ],
  };

  const res = await fetch(
    `https://graph.facebook.com/v20.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },
  );
  return { status: res.status };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const raw = (await req.json()) as Payload;

    if (!raw || typeof raw.event_name !== 'string' || !raw.event_name.trim()) {
      return new Response(JSON.stringify({ error: 'event_name is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const p: Payload = {
      ...raw,
      event_name: raw.event_name.trim().slice(0, 64),
      event_id: typeof raw.event_id === 'string' ? raw.event_id.slice(0, 64) : crypto.randomUUID(),
      client_id: typeof raw.client_id === 'string' ? raw.client_id.slice(0, 128) : undefined,
      value: typeof raw.value === 'number' && isFinite(raw.value) ? raw.value : undefined,
    };

    // Whitelist + truncate custom params
    const params: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(raw.params ?? {})) {
      if (Object.keys(params).length >= 25) break;
      const clean = sanitize(v);
      if (clean !== undefined) params[k.slice(0, 40)] = clean;
    }

    const [ga4, meta] = await Promise.all([
      sendGA4(p, params).catch((e) => ({ error: String(e) })),
      sendMeta(p, params, req).catch((e) => ({ error: String(e) })),
    ]);

    return new Response(JSON.stringify({ ok: true, event_id: p.event_id, ga4, meta }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('server-tagging error', e);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
