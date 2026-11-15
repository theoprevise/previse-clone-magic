import { createFileRoute } from "@tanstack/react-router";
import PreQualify from "@/pages/PreQualify";

export const Route = createFileRoute("/pre-qualify")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Pre-Qualification Calculator | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Pre-Qualification Calculator | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Pre-Qualification Calculator | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Find out how much home you can afford with our free pre-qualification calculator. Get instant results and personalized mortgage options."
      },
      {
        "property": "og:description",
        "content": "Find out how much home you can afford with our free pre-qualification calculator. Get instant results and personalized mortgage options."
      },
      {
        "name": "twitter:description",
        "content": "Find out how much home you can afford with our free pre-qualification calculator. Get instant results and personalized mortgage options."
      },
      {
        "name": "keywords",
        "content": "mortgage pre-qualification, home affordability calculator, how much house can I afford, mortgage calculator, pre-approval"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/pre-qualify"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/pre-qualify"}],
  }),
  component: PreQualify,
});
