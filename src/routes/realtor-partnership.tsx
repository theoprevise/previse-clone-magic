import { createFileRoute } from "@tanstack/react-router";
import RealtorPartnership from "@/pages/RealtorPartnership";

export const Route = createFileRoute("/realtor-partnership")({
  head: () => ({
    meta: [
      {
        "title": "Realtor Partnership | Co-Marketing System | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Realtor Partnership | Co-Marketing System | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Realtor Partnership | Co-Marketing System | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Partner with Previse Mortgage to support your clients with expert mortgage guidance. No pressure, no quotas — just clarity for first-time buyers, investors, and everyone in between."
      },
      {
        "property": "og:description",
        "content": "Partner with Previse Mortgage to support your clients with expert mortgage guidance. No pressure, no quotas — just clarity for first-time buyers, investors, and everyone in between."
      },
      {
        "name": "twitter:description",
        "content": "Partner with Previse Mortgage to support your clients with expert mortgage guidance. No pressure, no quotas — just clarity for first-time buyers, investors, and everyone in between."
      },
      {
        "name": "keywords",
        "content": "realtor partnership, mortgage partner, real estate agents, co-marketing, first-time homebuyer, FHA loans, VA loans, conventional loans"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/realtor-partnership"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/realtor-partnership"}],
  }),
  component: RealtorPartnership,
});
