import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { requireBlogData } from "@/lib/blog-content";

export const fetchPublishedBlog = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string().min(1).max(200).optional() }))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) throw new Error("Articles are temporarily unavailable.");
    const publicClient = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      } },
    });
    let query = publicClient.from("blog_posts")
      .select("id,title,slug,excerpt,content,featured_image,published,created_at,updated_at")
      .eq("published", true)
      .order("created_at", { ascending: false });
    if (data.slug) query = query.eq("slug", data.slug);
    const result = await query;
    return requireBlogData(result.data, result.error) ?? [];
  });
