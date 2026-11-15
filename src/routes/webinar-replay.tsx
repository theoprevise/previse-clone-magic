import { createFileRoute } from "@tanstack/react-router";
import WebinarReplay from "@/pages/WebinarReplay";

export const Route = createFileRoute("/webinar-replay")({
  head: () => ({
    meta: [
      {
        "title": "Webinar Replay | Homebuying & Mortgage Tips | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Webinar Replay | Homebuying & Mortgage Tips | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Webinar Replay | Homebuying & Mortgage Tips | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Watch the Previse Mortgage webinar replay covering mortgage programs, pre-approval and how to prepare for a fast, predictable closing."
      },
      {
        "property": "og:description",
        "content": "Watch the Previse Mortgage webinar replay covering mortgage programs, pre-approval and how to prepare for a fast, predictable closing."
      },
      {
        "name": "twitter:description",
        "content": "Watch the Previse Mortgage webinar replay covering mortgage programs, pre-approval and how to prepare for a fast, predictable closing."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/webinar-replay"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/webinar-replay"}],
  }),
  component: WebinarReplay,
});
