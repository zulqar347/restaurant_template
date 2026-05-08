import { blogPosts } from "@/data/restaurant";
import type { BlogPost } from "@/lib/types";

export function getAllPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogCategories() {
  return Array.from(new Set(blogPosts.map((post) => post.category))).sort();
}

export function getPostsByCategory(category: string) {
  const normalized = decodeURIComponent(category).replace(/-/g, " ").toLowerCase();

  return getAllPosts().filter((post) => post.category.toLowerCase() === normalized);
}

export function getCategorySlug(category: string) {
  return category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const categoryScore = Number(b.category === post.category) - Number(a.category === post.category);
      return categoryScore || new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, limit);
}

export function getReadingTime(post: BlogPost) {
  const words =
    [post.title, post.excerpt, ...post.sections.flatMap((section) => [section.heading, ...section.body])]
      .join(" ")
      .trim()
      .split(/\s+/).length || 1;

  return Math.max(1, Math.ceil(words / 210));
}

export function getTableOfContents(post: BlogPost) {
  return post.sections.map((section) => ({
    title: section.heading,
    id: slugify(section.heading),
  }));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
