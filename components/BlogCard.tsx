import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCategorySlug, getReadingTime } from "@/lib/blog";
import type { BlogPost } from "@/lib/types";

export function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-amber-100/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-white/[0.055]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 31vw, 92vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 to-transparent" />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-amber-200/70">
          <Link href={`/blog/category/${getCategorySlug(post.category)}`} className="transition hover:text-amber-200">
            {post.category}
          </Link>
          <span>{getReadingTime(post)} min read</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-amber-50">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-amber-200">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-7 text-stone-400">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
          Read article <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
