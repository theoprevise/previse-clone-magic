# Previse Mortgage — SEO foundations review

**0 failing findings.** These nine automated foundations checks are current; they do not cover every page's content, licensing accuracy, or publication status.

| Finding | Level | State |
|---|---|---|
| Home page is reachable | low | passing |
| AI assistants can see your site as markdown | low | passing |
| Search engines see your fully-rendered pages | low | passing |
| Crawler rules look good | low | passing |
| Sitemap looks good | low | passing |
| Page basics are set | low | passing |
| Site icon is set up for search | low | passing |
| Home page search metadata is set | low | passing |
| Social preview basics are set | low | passing |

## Separate manual audit findings

- The published Learning Center and five prepared articles return 404; those same pages work in preview.
- The blog contains no articles or drafts. Existing Learning Center articles are stored separately.
- The rates page claims weekly updates but displays December 20, 2024 as its last update.
- Printable guides contain loan eligibility and NMLS identifiers inconsistent with the main pages.
- Phone/preapproval corrections in preview have not reached the published website; similar preapproval wording also remains elsewhere.
- Existing blog article rendering needs validation before publication; business markup and AI context contain outdated or unsupported information.

The full audit in Files includes the 30-question comparison, all existing public-page checks, narrow article recommendations, and a prioritized proposal. No website changes or publication were performed. Approval to edit does not authorize publishing; human verification remains required for the financial and licensing claims identified in the report.

**SEO Review** shaped the automated-check portion of this audit; the manual findings are separate from scanner failures.

## Approved technical corrections — November 21, 2026

- Existing blog queries now use a public, published-only server function with explicit query failures rather than silently showing an empty list or 404.
- Article HTML uses a DOM-independent sanitizer in initial server rendering; regression tests cover injected scripts, event handlers and unsafe URLs.
- Blog article metadata includes plain-text descriptions, Twitter tags, Article and BreadcrumbList JSON-LD, and safe JSON serialization.
- The root head supplies one shared FinancialService identity with real bundled logo/founder assets and no nonexistent SearchAction; the old client-added organization duplicate is disabled.
- Related-resource controls on DSCR, FHA, first-time buyer and rates pages now render actual hyperlinks, preserving wording and appearance.
- The existing public YouTube resource was added to the static sitemap without inventing a last-modified date; 39 unique XML entries validate.
- Nineteen relevant tests passed. Preview HTTP checks verified blog 200, nonexistent article 404, existing Learning Center article 200, and a working schema logo. Desktop/mobile checks verified related-link navigation, no horizontal overflow and no browser errors.

No articles were created, no forms submitted, and nothing was published. Financial wording, loan requirements and rate values remain unchanged. A saved article was exercised with an isolated server-rendering test; there are still no published blog records for a live article end-to-end check.

The additional rate-update request is held for the user's source choice: current lender quotes with APR/assumptions or clearly labeled Freddie Mac national averages. Verified Freddie Mac PMMS data dated November 19, 2026: 30-year 7.28%, 15-year 6.66%; these are not Previse offers and have not been added to the website.