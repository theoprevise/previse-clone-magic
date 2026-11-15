import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        "title": "Privacy Policy | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Privacy Policy | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Privacy Policy | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "How Previse Mortgage collects, uses and protects your personal information, including cookies, tracking and your privacy choices."
      },
      {
        "property": "og:description",
        "content": "How Previse Mortgage collects, uses and protects your personal information, including cookies, tracking and your privacy choices."
      },
      {
        "name": "twitter:description",
        "content": "How Previse Mortgage collects, uses and protects your personal information, including cookies, tracking and your privacy choices."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/privacy-policy"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/privacy-policy"}],
  }),
  component: PrivacyPolicy,
});
