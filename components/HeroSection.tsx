import Image from "next/image";
import { Award, Clock, MapPin } from "lucide-react";
import { heroImages, restaurant } from "@/data/restaurant";
import { ButtonLink } from "@/components/ButtonLink";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden pt-28 text-amber-50">
      <Image
        src={heroImages[0].src}
        alt={heroImages[0].alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,10,6,0.94),rgba(28,16,8,0.74)_42%,rgba(10,8,6,0.38)),linear-gradient(180deg,rgba(12,8,5,0.1),rgba(12,8,5,0.95))]" />
      <div className="absolute left-[8%] top-36 hidden h-32 w-32 rounded-full border border-amber-200/20 bg-amber-200/5 blur-sm lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.75fr] lg:px-8">
        <div className="flex min-h-[68svh] flex-col justify-center">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.34em] text-amber-300">San Francisco hearth dining</p>
          <h1 className="reveal mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-amber-50 sm:text-7xl lg:text-8xl">
            {restaurant.name}
          </h1>
          <p className="reveal mt-6 max-w-2xl text-xl leading-8 text-stone-200 sm:text-2xl">{restaurant.tagline}</p>
          <p className="reveal mt-5 max-w-2xl text-base leading-8 text-stone-300">{restaurant.description}</p>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#reservations">Reserve Tonight</ButtonLink>
            <ButtonLink href="#menu" variant="secondary">Explore Menu</ButtonLink>
          </div>
        </div>

        <aside className="reveal mb-8 self-end rounded-[2rem] border border-amber-100/15 bg-stone-950/55 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl lg:mb-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image src={heroImages[1].src} alt={heroImages[1].alt} fill sizes="(min-width: 1024px) 36vw, 90vw" className="object-cover transition duration-700 hover:scale-105" />
          </div>
          <div className="grid gap-3 pt-5 sm:grid-cols-3">
            {[
              { icon: Award, label: "Chef-led", value: "Seasonal tasting" },
              { icon: Clock, label: "Dinner", value: "Tue-Sun" },
              { icon: MapPin, label: "Local", value: "Mission District" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-amber-100/10 bg-white/[0.04] p-4">
                <item.icon className="mb-3 text-amber-300" size={20} />
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100/55">{item.label}</p>
                <p className="mt-1 text-sm text-stone-100">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
