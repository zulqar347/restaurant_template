import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/BlogLayout";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { restaurant } from "@/data/restaurant";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ${restaurant.name}`,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          width: 1400,
          height: 933,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <BlogLayout post={post} />
      <Footer />
    </>
  );
}
