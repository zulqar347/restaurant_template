export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 fade-up">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="overflow-hidden rounded-lg fade-up">
            <img
              src={`/food${i}.jpg`}
              className="h-40 w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
