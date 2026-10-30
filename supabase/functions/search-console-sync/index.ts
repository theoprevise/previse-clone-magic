import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

// Refreshes the stored Google Search Console snapshot.
// - Admins (signed-in JWT) can force a refresh or pick a property.
// - The daily schedule (publishable key only) refreshes only when the
//   stored snapshot is older than ~20 hours.
// The admin dashboard reads the stored snapshot, never Search Console directly.

const GATEWAY = 'https://connector-gateway.lovable.dev/google_search_console';
const TARGET_URL = 'https://previsemortgage.com/';
const INSPECT_PATHS = ['/', '/dscr-loans', '/investors', '/refinance', '/mortgage-lender-york-pa'];
const STALE_MS = 20 * 60 * 60 * 1000;

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;

type SiteEntry = { siteUrl: string; permissionLevel?: string };

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function gscHeaders() {
  const lovableKey = Deno.env.get('LOVABLE_API_KEY');
  const connKey = Deno.env.get('GOOGLE_SEARCH_CONSOLE_API_KEY');
  if (!lovableKey || !connKey) throw new Error('Search Console credentials are missing');
  return {
    Authorization: `Bearer ${lovableKey}`,
    'X-Connection-Api-Key': connKey,
    'Content-Type': 'application/json',
  };
}

async function gsc(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GATEWAY}${path}`, { ...init, headers: gscHeaders() });
  const text = await res.text();
  if (!res.ok) {
    console.error(`Search Console request failed [${res.status}] ${path}: ${text}`);
    const err = new Error(`[${res.status}]: ${text}`) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }
  return text ? JSON.parse(text) : {};
}

function coversTarget(siteUrl: string, target: URL) {
  if (siteUrl.startsWith('sc-domain:')) {
    const domain = siteUrl.slice('sc-domain:'.length).toLowerCase();
    const host = target.hostname.toLowerCase();
    return host === domain || host.endsWith(`.${domain}`);
  }
  try {
    return target.href.startsWith(new URL(siteUrl).href);
  } catch {
    return false;
  }
}

async function listMatches(): Promise<string[]> {
  const { siteEntry = [] } = (await gsc('/webmasters/v3/sites')) as { siteEntry?: SiteEntry[] };
  const target = new URL(TARGET_URL);
  return siteEntry
    .filter((e) => e.permissionLevel !== 'siteUnverifiedUser' && coversTarget(e.siteUrl, target))
    .map((e) => e.siteUrl);
}

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

async function buildSnapshot(siteUrl: string) {
  const enc = encodeURIComponent(siteUrl);
  // Search Console data lags ~2-3 days; use the latest 28 complete days.
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 3);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 27);
  const range = { startDate: isoDate(start), endDate: isoDate(end) };

  const query = (body: Record<string, unknown>) =>
    gsc(`/webmasters/v3/sites/${enc}/searchAnalytics/query`, {
      method: 'POST',
      body: JSON.stringify({ ...range, ...body }),
    });

  const [totals, daily, queries, pages, sitemaps] = await Promise.all([
    query({}),
    query({ dimensions: ['date'], rowLimit: 100 }),
    query({ dimensions: ['query'], rowLimit: 25 }),
    query({ dimensions: ['page'], rowLimit: 25 }),
    gsc(`/webmasters/v3/sites/${enc}/sitemaps`).catch((e) => ({ error: String(e.message) })),
  ]);

  const origin = new URL(TARGET_URL).origin;
  const inspections = [];
  for (const path of INSPECT_PATHS) {
    const url = `${origin}${path}`;
    try {
      const r = await gsc('/v1/urlInspection/index:inspect', {
        method: 'POST',
        body: JSON.stringify({ inspectionUrl: url, siteUrl }),
      });
      const s = r?.inspectionResult?.indexStatusResult ?? {};
      inspections.push({
        url,
        verdict: s.verdict ?? null,
        coverageState: s.coverageState ?? null,
        lastCrawlTime: s.lastCrawlTime ?? null,
        googleCanonical: s.googleCanonical ?? null,
        robotsTxtState: s.robotsTxtState ?? null,
        pageFetchState: s.pageFetchState ?? null,
      });
    } catch (e) {
      inspections.push({ url, error: (e as Error).message });
    }
  }

  const t = totals?.rows?.[0] ?? {};
  return {
    range,
    totals: {
      clicks: t.clicks ?? 0,
      impressions: t.impressions ?? 0,
      ctr: t.ctr ?? 0,
      position: t.position ?? null,
    },
    daily: (daily?.rows ?? []).map((r: any) => ({
      date: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
    })),
    queries: (queries?.rows ?? []).map((r: any) => ({
      query: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
    })),
    pages: (pages?.rows ?? []).map((r: any) => ({
      page: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
    })),
    sitemaps: Array.isArray(sitemaps?.sitemap)
      ? sitemaps.sitemap.map((s: any) => ({
          path: s.path,
          lastSubmitted: s.lastSubmitted ?? null,
          lastDownloaded: s.lastDownloaded ?? null,
          isPending: s.isPending ?? false,
          errors: Number(s.errors ?? 0),
          warnings: Number(s.warnings ?? 0),
          submitted: (s.contents ?? []).reduce((n: number, c: any) => n + Number(c.submitted ?? 0), 0),
        }))
      : [],
    inspections,
  };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const admin = createClient(SUPABASE_URL, SERVICE_KEY);

  // Is the caller a signed-in admin?
  let isAdmin = false;
  const authHeader = req.headers.get('Authorization') ?? '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (token && token !== ANON_KEY) {
    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data } = await userClient.auth.getUser(token);
    if (data?.user) {
      const { data: ok } = await admin.rpc('has_role', { _user_id: data.user.id, _role: 'admin' });
      isAdmin = ok === true;
    }
  }

  let body: { selectedSiteUrl?: unknown } = {};
  try { body = await req.json(); } catch { /* empty body ok */ }
  const selectedRaw = body.selectedSiteUrl;
  if (selectedRaw !== undefined && (typeof selectedRaw !== 'string' || selectedRaw.length > 300)) {
    return json({ error: 'Invalid selectedSiteUrl' }, 400);
  }
  if (selectedRaw && !isAdmin) return json({ error: 'Only admins can choose a property' }, 403);

  const { data: state } = await admin
    .from('search_console_state').select('*').eq('id', 1).maybeSingle();

  if (!isAdmin && state?.refreshed_at && Date.now() - new Date(state.refreshed_at).getTime() < STALE_MS) {
    return json({ status: 'fresh' });
  }

  const save = (patch: Record<string, unknown>) =>
    admin.from('search_console_state')
      .upsert({ id: 1, ...patch, updated_at: new Date().toISOString() });

  try {
    const matches = await listMatches();
    let siteUrl: string | null = null;
    const wanted = (selectedRaw as string | undefined) ?? state?.selected_site_url ?? null;

    if (wanted) {
      if (!matches.includes(wanted)) {
        await save({ status: 'selection_required', candidates: matches, selected_site_url: null,
          error: 'The chosen property is no longer verified for this site.' });
        return json({ status: 'selection_required', candidates: matches });
      }
      siteUrl = wanted;
    } else if (matches.length === 1) {
      siteUrl = matches[0];
    } else if (matches.length === 0) {
      await save({ status: 'error', candidates: [], error: 'No verified Search Console property covers previsemortgage.com.' });
      return json({ status: 'error' });
    } else {
      await save({ status: 'selection_required', candidates: matches, error: null });
      return json({ status: 'selection_required', candidates: matches });
    }

    const snapshot = await buildSnapshot(siteUrl);
    await save({
      status: 'ok', selected_site_url: siteUrl, candidates: matches, snapshot,
      error: null, refreshed_at: new Date().toISOString(),
    });
    return json({ status: 'ok' });
  } catch (e) {
    const err = e as Error & { status?: number };
    const msg = err.status === 403
      ? 'The connected Google account cannot access this Search Console property.'
      : err.status === 429
        ? 'Google is rate-limiting requests. The next scheduled refresh will try again.'
        : err.message;
    await save({ status: 'error', error: msg.slice(0, 1000) });
    return json({ status: 'error', error: msg }, 200);
  }
});
