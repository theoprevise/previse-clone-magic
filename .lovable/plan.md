# Update Google Business / Local SEO Structured Data

## Goal
Improve the Google Business Profile and local SEO structured data to reflect that Previse Mortgage is licensed in both Pennsylvania and Colorado.

## Current state
- `index.html` contains `LocalBusiness`, `MortgageLender`, `Person`, and `WebSite` JSON-LD schemas.
- `src/components/StructuredData.tsx` injects a dynamic `MortgageLender` schema on the homepage.
- Both schemas currently list `areaServed` as only Pennsylvania.
- The `sameAs` arrays include a `https://share.google/...` short link and a Google Maps link, but no canonical Google Business Profile URL.
- The `hasCredential` blocks list the PA broker license but not a Colorado license.

## Proposed changes
1. **Update `index.html` LocalBusiness schema**
   - Expand `areaServed` to include Colorado (`State`) in addition to Pennsylvania cities.
   - Add the Colorado broker license credential to `hasCredential` if the license number is available.
   - Replace the `share.google` short link in `sameAs` with the canonical Google Business Profile URL (e.g., `https://business.google.com/...` or `https://g.page/...`).

2. **Update `index.html` MortgageLender schema**
   - Expand `areaServed` to include Colorado.
   - Add the Colorado broker license credential if available.
   - Update `sameAs` with the canonical Google Business Profile URL.

3. **Update `src/components/StructuredData.tsx` organization schema**
   - Expand `areaServed` to include Colorado.
   - Add Colorado license credential if available.
   - Update `sameAs` with the canonical Google Business Profile URL.

4. **Optional: visible footer link**
   - Add a "Find us on Google" link in the footer pointing to the canonical Google Business Profile URL.

## Information needed before implementation
- The canonical Google Business Profile URL (not the `share.google` short link).
- The Colorado mortgage broker license number, if you want it added to the credential schema.

## Acceptance criteria
- `areaServed` in both `index.html` and `StructuredData.tsx` includes Pennsylvania and Colorado.
- `sameAs` references the canonical Google Business Profile URL.
- No build errors after the edits.
