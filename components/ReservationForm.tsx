import { CalendarDays, Users } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { ButtonLink } from "@/components/ButtonLink";

export function ReservationForm() {
  return (
    <section id="reservations" className="bg-[#140d09] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-amber-100/10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_35%),rgba(255,255,255,0.035)] p-6 shadow-2xl shadow-black/30 md:p-10 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Reservations</p>
          <h2 className="mt-4 text-3xl font-semibold text-amber-50 sm:text-5xl">Book an evening at the hearth.</h2>
          <p className="mt-5 text-base leading-8 text-stone-300">
            For parties larger than eight, private dining, or chef&apos;s counter requests, contact the reservations team directly.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-stone-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-amber-100/10 bg-stone-950/45 p-4">
              <CalendarDays className="mb-3 text-amber-300" size={22} />
              <p>{restaurant.openingHours.join(" | ")}</p>
            </div>
            <div className="rounded-2xl border border-amber-100/10 bg-stone-950/45 p-4">
              <Users className="mb-3 text-amber-300" size={22} />
              <p>Chef&apos;s counter, private dining, and full buyouts available.</p>
            </div>
          </div>
          <ButtonLink href="tel:+14155550186" variant="secondary" className="mt-8">Call Reservations</ButtonLink>
        </div>

        <form className="grid gap-4" aria-label="Reservation request form">
          {[
            { label: "Name", type: "text", placeholder: "Your name" },
            { label: "Email", type: "email", placeholder: "you@example.com" },
            { label: "Date", type: "date", placeholder: "" },
            { label: "Time", type: "time", placeholder: "" },
          ].map((field) => (
            <label key={field.label} className="grid gap-2 text-sm font-medium text-amber-50">
              {field.label}
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="min-h-13 rounded-2xl border border-amber-100/10 bg-stone-950/70 px-4 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-300"
              />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-medium text-amber-50">
            Party size
            <select className="min-h-13 rounded-2xl border border-amber-100/10 bg-stone-950/70 px-4 text-stone-100 outline-none transition focus:border-amber-300">
              {["2 guests", "3 guests", "4 guests", "5 guests", "6 guests", "7 guests", "8 guests"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-amber-50">
            Occasion
            <textarea
              rows={4}
              placeholder="Anniversary, birthday, dietary notes, seating preference"
              className="rounded-2xl border border-amber-100/10 bg-stone-950/70 px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-300"
            />
          </label>
          <button className="min-h-13 rounded-full bg-amber-400 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-amber-300" type="submit">
            Request Table
          </button>
        </form>
      </div>
    </section>
  );
}
