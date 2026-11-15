import { createFileRoute } from "@tanstack/react-router";
import NationwideInvestmentLoans from "@/pages/NationwideInvestmentLoans";

const TITLE = "Real Estate Investment Loans in 29 States | DSCR & Fix-and-Flip | Previse Mortgage";
const DESC = "DSCR, fix-and-flip, multifamily and cash-out refinance loans for real estate investors in 29 states. Residential home loans in PA and CO only. Previse Mortgage LLC.";
const URL = "https://previsemortgage.com/real-estate-investment-loans";

export const Route = createFileRoute("/real-estate-investment-loans")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: NationwideInvestmentLoans,
});
