import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Mortgage Blog | Tips & Insights | Previse Mortgage";

export const Route = createFileRoute("/blog")({
  loader: async () => {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });
    return { posts: data ?? [] };
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { property: "og:title", content: TITLE },
      { name: "description", content: "Mortgage tips, DSCR and investment property insights, and home buying guidance from Previse Mortgage LLC." },
      { property: "og:description", content: "Mortgage tips, DSCR and investment property insights, and home buying guidance from Previse Mortgage LLC." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://previsemortgage.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://previsemortgage.com/blog" }],
  }),
  component: BlogRoute,
});

function BlogRoute() {
  const { posts } = Route.useLoaderData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Blog initialPosts={posts as any} />;
}
