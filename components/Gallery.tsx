export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`/food${i}.jpg`}
            className="rounded-lg object-cover h-40 w-full"
          />
        ))}
      </div>
    </section>
  );
}
