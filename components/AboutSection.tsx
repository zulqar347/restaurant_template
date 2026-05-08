import Image from "next/image";
import { Flame, Leaf, Wine } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutSection() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#140d09] px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-amber-100/10">
            <Image
              src="/hero-premium.jpg"
              alt="EMBER & SPICE dining room with warm atmosphere"
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-5 max-w-xs rounded-3xl border border-amber-100/15 bg-stone-950/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <p className="text-4xl font-semibold text-amber-300">4.9</p>
            <p className="mt-2 text-sm leading-6 text-stone-300">Guest rating across private events, date nights, and chef&apos;s counter dinners.</p>
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="Our story"
            title="A modern dining room built around the hearth."
            description={`${restaurant.name} pairs the comfort of open-fire cooking with the precision of a contemporary restaurant. Every service is paced for conversation, celebration, and repeat visits.`}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Flame, title: "Live fire", text: "Steaks, vegetables, and sauces shaped by smoke and controlled heat." },
              { icon: Leaf, title: "Local market", text: "Menus change with farmers, seafood partners, and seasonal produce." },
              { icon: Wine, title: "Cellar depth", text: "Pairings cover structured reds, grower Champagne, and zero-proof builds." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-amber-100/10 bg-white/[0.035] p-5">
                <item.icon className="text-amber-300" size={24} />
                <h3 className="mt-5 font-semibold text-amber-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
