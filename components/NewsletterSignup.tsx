export function NewsletterSignup() {
  return (
    <section className="bg-[#140d09] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-amber-100/10 bg-white/[0.035] p-6 md:flex-row md:items-center md:justify-between md:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Newsletter</p>
          <h2 className="mt-3 text-3xl font-semibold text-amber-50">Seasonal menus, private dining dates, and chef notes.</h2>
        </div>
        <form className="flex w-full flex-col gap-3 sm:flex-row md:max-w-xl" aria-label="Newsletter signup">
          <input
            type="email"
            placeholder="Email address"
            className="min-h-13 flex-1 rounded-full border border-amber-100/10 bg-stone-950/70 px-5 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-300"
          />
          <button className="min-h-13 rounded-full bg-amber-400 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-amber-300" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
