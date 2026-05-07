export default function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="py-20 bg-red-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold">Reserve Your Table Now</h2>
      <p className="mt-2">Limited seats available daily</p>

      <div className="mt-6 flex justify-center gap-4">
        <a className="bg-white text-red-600 px-6 py-3 rounded-full">Book Now</a>
        <a className="border px-6 py-3 rounded-full">WhatsApp</a>
      </div>
    </section>
  );
}
