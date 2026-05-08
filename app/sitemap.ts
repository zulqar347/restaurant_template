import type { MetadataRoute } from "next";
import { getAllPosts, getBlogCategories, getCategorySlug } from "@/lib/blog";

const baseUrl = "https://emberandspice.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = getBlogCategories().map((category) => ({
    url: `${baseUrl}/blog/category/${getCategorySlug(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes];
}
