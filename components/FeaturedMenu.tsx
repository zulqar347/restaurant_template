import { menu } from "@/lib/data";

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 fade-up">
        Featured Menu
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {menu.map((item, i) => (
          <div
            key={item.name}
            className="border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <img
              src={item.image}
              className="h-48 w-full object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
