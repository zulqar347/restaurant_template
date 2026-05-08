import Image from "next/image";
import { featuredDishes } from "@/data/restaurant";
import { SectionHeader } from "@/components/SectionHeader";

export function FeaturedDishes() {
  return (
    <section className="bg-stone-950 px-4 py-24 sm:px-6 lg:px-8" id="featured-dishes">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured dishes"
          title="Fire, spice, and polished restraint."
          description="Signature plates are built around seasonal sourcing, clean technique, and the depth that only live-fire cooking can bring."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <article
              key={dish.name}
              className="reveal group overflow-hidden rounded-[1.75rem] border border-amber-100/10 bg-white/[0.035] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-amber-200/30"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={dish.image} alt={dish.name} fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-stone-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200 backdrop-blur">
                  {dish.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-amber-50">{dish.name}</h3>
                  <span className="font-semibold text-amber-300">{dish.price}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-400">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
