import { createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "@/pages/AdminDashboard";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      {
        "title": "Admin Dashboard | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Admin Dashboard | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Admin Dashboard | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Previse Mortgage admin dashboard."
      },
      {
        "property": "og:description",
        "content": "Previse Mortgage admin dashboard."
      },
      {
        "name": "twitter:description",
        "content": "Previse Mortgage admin dashboard."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/admin"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/admin"}],
  }),
  component: AdminDashboard,
});
