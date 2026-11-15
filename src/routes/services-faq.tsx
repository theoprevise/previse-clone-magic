import { createFileRoute } from "@tanstack/react-router";
import ServicesAndFAQ from "@/pages/ServicesAndFAQ";

export const Route = createFileRoute("/services-faq")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Services & FAQ | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Services & FAQ | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Services & FAQ | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Answers to common questions about Previse Mortgage purchase, refinance and investment loans, timelines, underwriting and what to expect."
      },
      {
        "property": "og:description",
        "content": "Answers to common questions about Previse Mortgage purchase, refinance and investment loans, timelines, underwriting and what to expect."
      },
      {
        "name": "twitter:description",
        "content": "Answers to common questions about Previse Mortgage purchase, refinance and investment loans, timelines, underwriting and what to expect."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/services-faq"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/services-faq"}],
  }),
  component: ServicesAndFAQ,
});
