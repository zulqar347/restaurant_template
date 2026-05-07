export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Experience Fine Dining Like Never Before
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Premium taste, luxury ambiance, unforgettable moments.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a className="bg-red-600 px-6 py-3 rounded-full">Book Table</a>
          <a className="border border-white px-6 py-3 rounded-full">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
