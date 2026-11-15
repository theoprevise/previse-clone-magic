import { createFileRoute, notFound } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", params.slug)
      .eq("published", true)
      .maybeSingle();
    if (!data) throw notFound();
    return { post: data };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found | Previse Mortgage" }, { name: "robots", content: "noindex" }] };
    const title = `${post.title} | Previse Mortgage Blog`;
    const description = (post.excerpt || (post.content ?? "").substring(0, 160)) as string;
    const url = `https://previsemortgage.com/blog/${params.slug}`;
    const meta: Array<Record<string, string>> = [
      { title },
      { property: "og:title", content: title },
      { name: "description", content: description },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
    ];
    if (post.featured_image) {
      meta.push({ property: "og:image", content: post.featured_image });
      meta.push({ name: "twitter:image", content: post.featured_image });
    }
    return { meta, links: [{ rel: "canonical", href: url }] };
  },
  notFoundComponent: NotFound,
  component: BlogPostRoute,
});

function BlogPostRoute() {
  const { post } = Route.useLoaderData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <BlogPost initialPost={post as any} />;
}
