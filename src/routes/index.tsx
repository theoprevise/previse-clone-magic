import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        "title": "Investment Property Loans | DSCR & Rental Financing | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Investment Property Loans | DSCR & Rental Financing | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Investment Property Loans | DSCR & Rental Financing | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "DSCR, multifamily, fix-and-flip and portfolio loans for investors in 29 states, with LLC closings and no tax returns. Home purchase and refinance in PA and CO."
      },
      {
        "property": "og:description",
        "content": "DSCR, multifamily, fix-and-flip and portfolio loans for investors in 29 states, with LLC closings and no tax returns. Home purchase and refinance in PA and CO."
      },
      {
        "name": "twitter:description",
        "content": "DSCR, multifamily, fix-and-flip and portfolio loans for investors in 29 states, with LLC closings and no tax returns. Home purchase and refinance in PA and CO."
      },
      {
        "name": "keywords",
        "content": "investment property loans, DSCR lender, DSCR loans, rental property financing, multifamily loans, fix and flip loans, portfolio loans, LLC mortgage, no tax return investor loan, cash-out refinance rental property"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/"}],
  }),
  component: Index,
});
