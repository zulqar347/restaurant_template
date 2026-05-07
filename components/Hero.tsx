export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Floating glow effect */}
      <div className="absolute w-96 h-96 bg-red-500/20 blur-3xl rounded-full top-20 left-10 float-slow" />

      <div className="relative text-center text-white max-w-2xl px-4 fade-up">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Experience Fine Dining Like Never Before
        </h1>

        <p className="mt-4 text-lg text-gray-200 fade-in [animation-delay:200ms]">
          Premium taste, luxury ambiance, unforgettable moments.
        </p>

        <div className="mt-6 flex gap-4 justify-center zoom-in [animation-delay:400ms]">
          <a className="bg-red-600 px-6 py-3 rounded-full hover:scale-105 transition">
            Book Table
          </a>
          <a className="border border-white px-6 py-3 rounded-full hover:scale-105 transition">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
