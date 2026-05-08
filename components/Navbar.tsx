import { CalendarDays, Menu, X } from "lucide-react";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";

const navItems = [
  { label: "Story", href: "/#story" },
  { label: "Menu", href: "/#menu" },
  { label: "Events", href: "/#events" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-100/10 bg-stone-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${restaurant.name} home`}>
          <span className="grid size-11 place-items-center rounded-full border border-amber-200/30 bg-amber-300/10 text-lg font-semibold text-amber-200 transition group-hover:bg-amber-300 group-hover:text-stone-950">
            E
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.28em] text-amber-50">{restaurant.name}</span>
            <span className="hidden text-xs text-amber-100/60 sm:block">Modern hearth dining</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-stone-200/80 transition hover:text-amber-200">
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#reservations"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-amber-400 px-5 text-sm font-semibold text-stone-950 transition hover:bg-amber-300 lg:inline-flex"
        >
          <CalendarDays size={17} />
          Reserve
        </Link>

        <div className="lg:hidden">
          <input id="mobile-menu" type="checkbox" className="peer sr-only" aria-label="Toggle mobile menu" />
          <label
            htmlFor="mobile-menu"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-amber-100/20 text-amber-50 transition hover:bg-white/10"
          >
            <Menu className="peer-checked:hidden" size={22} />
          </label>
          <div className="pointer-events-none fixed inset-x-3 top-3 origin-top scale-95 rounded-3xl border border-amber-100/15 bg-stone-950/95 p-4 opacity-0 shadow-2xl shadow-black/50 backdrop-blur-2xl transition duration-300 peer-checked:pointer-events-auto peer-checked:scale-100 peer-checked:opacity-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-[0.28em] text-amber-50">{restaurant.name}</span>
              <label htmlFor="mobile-menu" className="grid size-10 cursor-pointer place-items-center rounded-full bg-white/10 text-amber-50">
                <X size={20} />
              </label>
            </div>
            <div className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-4 text-lg text-stone-100 transition hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
              <Link href="/#reservations" className="mt-3 rounded-full bg-amber-400 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-950">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
