import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import Blog from "@/pages/Blog";
import BlogLoadError from "@/components/BlogLoadError";
import NotFound from "@/pages/NotFound";
import { blogListOptions } from "@/lib/blog-queries";

const TITLE = "Mortgage Blog | Expert Tips & Insights | Previse Mortgage";
const DESCRIPTION = "Stay informed with the latest mortgage tips, home buying advice, and industry insights from Previse Mortgage experts.";

export const Route = createFileRoute("/blog/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(blogListOptions),
  errorComponent: BlogLoadError,
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://previsemortgage.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://previsemortgage.com/blog" }],
  }),
  component: BlogRoute,
});

function BlogRoute() {
  const { data: posts } = useSuspenseQuery({ ...blogListOptions, initialData: Route.useLoaderData() });
  return <Blog posts={posts} />;
}
