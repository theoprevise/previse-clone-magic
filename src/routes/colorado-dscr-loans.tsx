import { createFileRoute } from "@tanstack/react-router";
import ColoradoDSCR from "@/pages/ColoradoDSCR";

export const Route = createFileRoute("/colorado-dscr-loans")({
  head: () => ({
    meta: [
      {
        "title": "Colorado DSCR Loans | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Colorado DSCR Loans | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Colorado DSCR Loans | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Colorado DSCR investment property loans from Previse Mortgage LLC."
      },
      {
        "property": "og:description",
        "content": "Colorado DSCR investment property loans from Previse Mortgage LLC."
      },
      {
        "name": "twitter:description",
        "content": "Colorado DSCR investment property loans from Previse Mortgage LLC."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/colorado-dscr-loans"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/colorado-dscr-loans"}],
  }),
  component: ColoradoDSCR,
});
