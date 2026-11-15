# Project rules

- Search Console data is fetched only by the `search-console-sync` edge function (daily pg_cron + admin "Refresh now") and stored in the single-row `search_console_state` table; the admin UI reads that row and never calls Google directly — keeps connector credentials server-side and avoids per-pageview API quota use.
- The Search Console property is resolved at runtime from the verified `/sites` list (never hardcoded); if several match, the admin picks one and the choice is revalidated on every refresh.
- The app runs on TanStack Start with SSR: each public page's title, description, self-referencing canonical, robots and OG tags live in its `src/routes/*.tsx` `head()` (utility/print/admin/thank-you pages set noindex); `SEOHead` renders nothing and is kept only so page markup compiles — client-only head tags are invisible to crawlers.
- `src/server.ts` permanently redirects `www.` to the apex primary domain before routing — one canonical host for search engines.
- Page components must not touch window/document/storage during render or in useState initializers; read them in useEffect — pages are rendered on the server first.
