import { createFileRoute } from "@tanstack/react-router";
import WebinarThankYou from "@/pages/WebinarThankYou";

export const Route = createFileRoute("/webinar-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Webinar Registration Confirmed | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Webinar Registration Confirmed | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Webinar Registration Confirmed | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/webinar-thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/webinar-thank-you"}],
  }),
  component: WebinarThankYou,
});
