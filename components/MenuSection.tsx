import { menuCategories, promotions } from "@/data/restaurant";
import { MenuCard } from "@/components/MenuCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/ButtonLink";

export function MenuSection() {
  return (
    <section id="menu" className="bg-[#120b08] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Menus"
            title="A concise menu designed for memorable evenings."
            description="Browse guest favorites across starters, hearth mains, and desserts. The full dinner menu changes with the market and is finalized before each service."
          />
          <ButtonLink href="#reservations" className="w-fit">Book the Menu</ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <MenuCard key={category.name} category={category} />
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {promotions.map((promo) => (
            <article key={promo.title} className="rounded-3xl border border-amber-200/20 bg-amber-300/[0.08] p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{promo.badge}</span>
              <h3 className="mt-3 text-2xl font-semibold text-amber-50">{promo.title}</h3>
              <p className="mt-2 text-sm leading-7 text-stone-300">{promo.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
