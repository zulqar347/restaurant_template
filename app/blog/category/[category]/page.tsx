import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getBlogCategories, getCategorySlug, getPostsByCategory } from "@/lib/blog";
import { restaurant } from "@/data/restaurant";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getBlogCategories().map((category) => ({
    category: getCategorySlug(category),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  const title = posts[0]?.category;

  if (!title) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${title} Articles`,
    description: `Read ${title.toLowerCase()} guides from ${restaurant.name}, including local restaurant tips, menu education, and reservation-focused dining advice.`,
    alternates: {
      canonical: `/blog/category/${getCategorySlug(title)}`,
    },
    openGraph: {
      title: `${title} Articles | ${restaurant.name}`,
      description: `Restaurant blog articles about ${title.toLowerCase()} from ${restaurant.name}.`,
      type: "website",
      url: `/blog/category/${getCategorySlug(title)}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (!posts.length) {
    notFound();
  }

  const categoryName = posts[0].category;

  return (
    <>
      <Navbar />
      <main className="bg-stone-950 px-4 pb-24 pt-32 text-stone-100 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Category</p>
            <h1 className="mt-4 text-4xl font-semibold text-amber-50 sm:text-6xl">{categoryName}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Articles designed for search visibility and guest intent, with internal links that support reservations, menus, and private dining discovery.
            </p>
          </header>
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
