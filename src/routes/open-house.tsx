import { createFileRoute } from "@tanstack/react-router";
import OpenHouse from "@/pages/OpenHouse";

export const Route = createFileRoute("/open-house")({
  head: () => ({
    meta: [
      {
        "title": "Open House Financing Help | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Open House Financing Help | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Open House Financing Help | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Visiting an open house? Get pre-qualified with Previse Mortgage and learn your financing options before you make an offer."
      },
      {
        "property": "og:description",
        "content": "Visiting an open house? Get pre-qualified with Previse Mortgage and learn your financing options before you make an offer."
      },
      {
        "name": "twitter:description",
        "content": "Visiting an open house? Get pre-qualified with Previse Mortgage and learn your financing options before you make an offer."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/open-house"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/open-house"}],
  }),
  component: OpenHouse,
});
