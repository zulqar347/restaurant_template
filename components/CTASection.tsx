import { eventOfferings } from "@/data/restaurant";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export function CTASection() {
  return (
    <section id="events" className="bg-[#120b08] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Events"
              title="Private dining with restaurant-level detail."
              description="Host client dinners, celebrations, and intimate receptions with custom menus, polished pacing, and a dedicated hospitality lead."
            />
            <ButtonLink href="#reservations" className="mt-8">Plan an Event</ButtonLink>
          </div>
          <div className="grid gap-4">
            {eventOfferings.map((event, index) => (
              <article key={event.title} className="group flex gap-5 rounded-3xl border border-amber-100/10 bg-white/[0.035] p-6 transition hover:border-amber-200/30 hover:bg-white/[0.055]">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-amber-300/10 text-sm font-semibold text-amber-300">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-amber-50">{event.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-stone-400">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
