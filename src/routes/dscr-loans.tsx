import { createFileRoute } from "@tanstack/react-router";
import DSCRLoans from "@/pages/DSCRLoans";

export const Route = createFileRoute("/dscr-loans")({
  head: () => ({
    meta: [
      {
        "title": "DSCR Loans for LLCs | Investment Property Financing — Previse Mortgage LLC"
      },
      {
        "property": "og:title",
        "content": "DSCR Loans for LLCs | Investment Property Financing — Previse Mortgage LLC"
      },
      {
        "name": "twitter:title",
        "content": "DSCR Loans for LLCs | Investment Property Financing — Previse Mortgage LLC"
      },
      {
        "name": "description",
        "content": "DSCR loans for LLCs and real estate investors. Rental property financing, purchases and DSCR cash-out refinance in 29 states through Previse Mortgage LLC, a mortgage broker."
      },
      {
        "property": "og:description",
        "content": "DSCR loans for LLCs and real estate investors. Rental property financing, purchases and DSCR cash-out refinance in 29 states through Previse Mortgage LLC, a mortgage broker."
      },
      {
        "name": "twitter:description",
        "content": "DSCR loans for LLCs and real estate investors. Rental property financing, purchases and DSCR cash-out refinance in 29 states through Previse Mortgage LLC, a mortgage broker."
      },
      {
        "name": "keywords",
        "content": "DSCR loans, DSCR loans for LLCs, investment property loans, LLC mortgage loans, rental property financing, real estate investor financing, business-purpose mortgage loans, DSCR cash-out refinance, DSCR loans for rental properties"
      },
      {
        "property": "og:type",
        "content": "product"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/dscr-loans"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/dscr-loans"}],
  }),
  component: DSCRLoans,
});
