import { Mail, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { SectionHeader } from "@/components/SectionHeader";

export function LocationContact() {
  return (
    <section id="contact" className="bg-stone-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div>
          <SectionHeader
            eyebrow="Visit"
            title="Local SEO-ready location details."
            description="Structured address, opening hours, cuisine type, and reservation signals help search engines understand the restaurant and help guests book confidently."
          />
          <div className="mt-8 grid gap-4">
            {[
              { icon: MapPin, label: "Address", value: `${restaurant.address.street}, ${restaurant.address.city}, ${restaurant.address.region} ${restaurant.address.postalCode}` },
              { icon: Phone, label: "Phone", value: restaurant.phone },
              { icon: Mail, label: "Email", value: restaurant.email },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 rounded-3xl border border-amber-100/10 bg-white/[0.035] p-5">
                <item.icon className="shrink-0 text-amber-300" size={22} />
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-amber-100/60">{item.label}</p>
                  <p className="mt-1 text-stone-100">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-amber-100/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.03)),radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.22),transparent_24%),#17100c]">
          <div className="absolute inset-6 rounded-[1.5rem] border border-amber-100/10" />
          <div className="absolute left-[18%] top-[28%] h-px w-[62%] rotate-[-18deg] bg-amber-200/25" />
          <div className="absolute left-[20%] top-[60%] h-px w-[64%] rotate-[14deg] bg-amber-200/20" />
          <div className="absolute left-[42%] top-[40%] grid size-20 place-items-center rounded-full bg-amber-400 text-stone-950 shadow-[0_0_60px_rgba(245,158,11,0.45)]">
            <MapPin size={30} />
          </div>
          <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-amber-100/15 bg-stone-950/70 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Map placeholder</p>
            <p className="mt-2 text-lg font-semibold text-amber-50">Mission District, San Francisco</p>
            <p className="mt-2 text-sm leading-6 text-stone-400">Ready for Google Maps or Mapbox embed in production.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
