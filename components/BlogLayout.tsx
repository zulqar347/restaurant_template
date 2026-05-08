import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { getCategorySlug, getReadingTime, getRelatedPosts, getTableOfContents, slugify } from "@/lib/blog";
import { blogPostSchema, faqSchema } from "@/lib/schema";
import type { BlogPost } from "@/lib/types";
import { BlogCard } from "@/components/BlogCard";
import { ReservationForm } from "@/components/ReservationForm";

export function BlogLayout({ post }: { post: BlogPost }) {
  const toc = getTableOfContents(post);
  const related = getRelatedPosts(post);

  return (
    <main className="bg-stone-950 pt-20 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema(post)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post)) }} />

      <article>
        <header className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <Image src={post.featuredImage} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,10,6,0.94),rgba(15,10,6,0.74)),linear-gradient(180deg,rgba(15,10,6,0.35),rgba(15,10,6,0.96))]" />
          <div className="relative mx-auto max-w-4xl">
            <Link href={`/blog/category/${getCategorySlug(post.category)}`} className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              {post.category}
            </Link>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-amber-50 sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-xl leading-8 text-stone-200">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-300">
              <span className="inline-flex items-center gap-2"><Calendar size={17} /> {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-2"><Clock size={17} /> {getReadingTime(post)} min read</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[16rem_1fr] lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <nav className="rounded-3xl border border-amber-100/10 bg-white/[0.035] p-5" aria-label="Table of contents">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Contents</h2>
              <div className="mt-4 grid gap-3">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="text-sm leading-6 text-stone-400 transition hover:text-amber-200">
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="prose-restaurant">
              {post.sections.map((section) => (
                <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-28">
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <section id="faq" className="scroll-mt-28">
                <h2>Frequently Asked Questions</h2>
                {post.faq.map((item) => (
                  <details key={item.question} className="rounded-2xl border border-amber-100/10 bg-white/[0.035] p-5">
                    <summary className="cursor-pointer font-semibold text-amber-50">{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </section>

              <section>
                <h2>Plan Your Visit</h2>
                <p>
                  Explore the <Link href="/#menu">EMBER & SPICE dinner menu</Link>, review <Link href="/#events">private dining options</Link>, or request a table through the reservation form below.
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-amber-50">Related articles</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
      <ReservationForm />
    </main>
  );
}
