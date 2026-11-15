import { createFileRoute } from "@tanstack/react-router";
import AdminLogin from "@/pages/AdminLogin";

export const Route = createFileRoute("/admin-login")({
  head: () => ({
    meta: [
      {
        "title": "Admin Login | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Admin Login | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Admin Login | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/admin-login"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/admin-login"}],
  }),
  component: AdminLogin,
});
