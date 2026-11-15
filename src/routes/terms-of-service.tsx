import { createFileRoute } from "@tanstack/react-router";
import TermsOfService from "@/pages/TermsOfService";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      {
        "title": "Terms of Service | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Terms of Service | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Terms of Service | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Terms and conditions for using the Previse Mortgage website, including licensing disclosures and limits on rate and closing-timeline information."
      },
      {
        "property": "og:description",
        "content": "Terms and conditions for using the Previse Mortgage website, including licensing disclosures and limits on rate and closing-timeline information."
      },
      {
        "name": "twitter:description",
        "content": "Terms and conditions for using the Previse Mortgage website, including licensing disclosures and limits on rate and closing-timeline information."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/terms-of-service"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/terms-of-service"}],
  }),
  component: TermsOfService,
});
