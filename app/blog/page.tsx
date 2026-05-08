import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllPosts, getBlogCategories, getCategorySlug } from "@/lib/blog";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Restaurant Journal",
  description:
    "SEO-optimized restaurant blog articles about fine dining, romantic dinners, chef techniques, fresh ingredients, steak pairings, and desserts.",
  openGraph: {
    title: `Restaurant Journal | ${restaurant.name}`,
    description: "Fine dining guides, menu education, and local restaurant search content from EMBER & SPICE.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getBlogCategories();

  return (
    <>
      <Navbar />
      <main className="bg-stone-950 px-4 pb-24 pt-32 text-stone-100 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Restaurant journal</p>
            <h1 className="mt-4 text-4xl font-semibold text-amber-50 sm:text-6xl">SEO-first stories for guests ready to book.</h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Browse local search-focused articles covering fine dining, romantic dinners, chef techniques, seasonal ingredients, pairings, and desserts.
            </p>
          </header>

          <nav className="mt-10 flex flex-wrap gap-3" aria-label="Blog categories">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${getCategorySlug(category)}`}
                className="rounded-full border border-amber-100/15 px-4 py-2 text-sm text-stone-200 transition hover:border-amber-200/50 hover:bg-white/10"
              >
                {category}
              </Link>
            ))}
          </nav>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} priority={index === 0} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
