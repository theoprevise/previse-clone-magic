import { createFileRoute } from "@tanstack/react-router";
import Investors from "@/pages/Investors";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      {
        "title": "Real Estate Investor Loans | DSCR & Investment Property Financing | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Real Estate Investor Loans | DSCR & Investment Property Financing | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Real Estate Investor Loans | DSCR & Investment Property Financing | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Financing solutions for real estate investors. DSCR loans, cash-out refinancing, portfolio loans, and bank statement programs. Qualify on rental income, not personal income."
      },
      {
        "property": "og:description",
        "content": "Financing solutions for real estate investors. DSCR loans, cash-out refinancing, portfolio loans, and bank statement programs. Qualify on rental income, not personal income."
      },
      {
        "name": "twitter:description",
        "content": "Financing solutions for real estate investors. DSCR loans, cash-out refinancing, portfolio loans, and bank statement programs. Qualify on rental income, not personal income."
      },
      {
        "name": "keywords",
        "content": "investor loans, DSCR loans, investment property financing, rental property loans, real estate investor mortgage, cash-out refinance, portfolio loans, bank statement loans"
      },
      {
        "property": "og:type",
        "content": "product"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/investors"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/investors"}],
  }),
  component: Investors,
});
