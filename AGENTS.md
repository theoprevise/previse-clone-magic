# Project rules

- Search Console data is fetched only by the `search-console-sync` edge function (daily pg_cron + admin "Refresh now") and stored in the single-row `search_console_state` table; the admin UI reads that row and never calls Google directly — keeps connector credentials server-side and avoids per-pageview API quota use.
- The Search Console property is resolved at runtime from the verified `/sites` list (never hardcoded); if several match, the admin picks one and the choice is revalidated on every refresh.
