import Image from "next/image";
import { chefs } from "@/data/restaurant";
import { SectionHeader } from "@/components/SectionHeader";

export function ChefTeam() {
  return (
    <section className="bg-stone-950 px-4 py-24 sm:px-6 lg:px-8" id="team">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Culinary team"
          title="Led by chefs who understand restraint."
          description="The kitchen combines fire-cooking, fermentation, pastry craft, and hospitality pacing into a dinner experience that feels composed from start to finish."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {chefs.map((chef) => (
            <article key={chef.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-amber-100/10">
                <Image src={chef.image} alt={chef.name} fill sizes="(min-width: 768px) 30vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-2xl font-semibold text-amber-50">{chef.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-amber-300">{chef.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-400">{chef.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
