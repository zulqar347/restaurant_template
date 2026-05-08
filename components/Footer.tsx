import Link from "next/link";
import { Globe2, Share2 } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <footer className="relative overflow-hidden bg-stone-950 px-4 py-16 text-stone-300 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.7fr_0.9fr]">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-[0.28em] text-amber-50">{restaurant.name}</Link>
          <p className="mt-4 max-w-md leading-7 text-stone-400">{restaurant.tagline} A premium Next.js restaurant template with reservation-focused UX and SEO-first content architecture.</p>
          <div className="mt-6 flex gap-3">
            <Link href={restaurant.socials.instagram} aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-amber-100/15 transition hover:bg-white/10">
              <Globe2 size={19} />
            </Link>
            <Link href={restaurant.socials.facebook} aria-label="Facebook" className="grid size-11 place-items-center rounded-full border border-amber-100/15 transition hover:bg-white/10">
              <Share2 size={19} />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-amber-50">Explore</h2>
          <div className="mt-5 grid gap-3 text-sm">
            {[
              ["Menu", "/#menu"],
              ["Reservations", "/#reservations"],
              ["Private Dining", "/#events"],
              ["Blog", "/blog"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-amber-200">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-amber-50">Latest Journal</h2>
          <div className="mt-5 grid gap-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="text-sm leading-6 text-stone-400 transition hover:text-amber-200">
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-amber-100/10 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {restaurant.name}. All rights reserved.</p>
        <p>{restaurant.address.city}, {restaurant.address.region} | {restaurant.priceRange} | {restaurant.cuisine.join(", ")}</p>
      </div>
    </footer>
  );
}
