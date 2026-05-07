export default function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="py-20 bg-red-600 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/10 animate-pulse" />

      <div className="relative fade-up">
        <h2 className="text-3xl font-bold">Reserve Your Table Now</h2>

        <p className="mt-2">Limited seats available daily</p>

        <div className="mt-6 flex justify-center gap-4 zoom-in">
          <a className="bg-white text-red-600 px-6 py-3 rounded-full hover:scale-105 transition">
            Book Now
          </a>

          <a className="border px-6 py-3 rounded-full hover:scale-105 transition">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
