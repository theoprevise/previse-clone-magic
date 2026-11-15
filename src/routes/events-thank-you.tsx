import { createFileRoute } from "@tanstack/react-router";
import EventsThankYou from "@/pages/EventsThankYou";

export const Route = createFileRoute("/events-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Event Registration Confirmed | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Event Registration Confirmed | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Event Registration Confirmed | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/events-thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/events-thank-you"}],
  }),
  component: EventsThankYou,
});
