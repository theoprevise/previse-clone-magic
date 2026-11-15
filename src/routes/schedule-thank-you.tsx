import { createFileRoute } from "@tanstack/react-router";
import ScheduleThankYou from "@/pages/ScheduleThankYou";

export const Route = createFileRoute("/schedule-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Appointment Confirmed | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Appointment Confirmed | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Appointment Confirmed | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/schedule-thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/schedule-thank-you"}],
  }),
  component: ScheduleThankYou,
});
