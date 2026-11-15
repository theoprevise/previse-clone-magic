import { createFileRoute } from "@tanstack/react-router";
import ColoradoDSCR from "@/pages/ColoradoDSCR";

export const Route = createFileRoute("/colorado-dscr-loans")({
  head: () => ({
    meta: [
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/colorado-dscr-loans"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/colorado-dscr-loans"}],
  }),
  component: ColoradoDSCR,
});
