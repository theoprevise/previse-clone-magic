import { createFileRoute } from "@tanstack/react-router";
import OpenHouseThankYou from "@/pages/OpenHouseThankYou";

export const Route = createFileRoute("/open-house-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Open House Registration Confirmed | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Open House Registration Confirmed | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Open House Registration Confirmed | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/open-house-thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/open-house-thank-you"}],
  }),
  component: OpenHouseThankYou,
});
