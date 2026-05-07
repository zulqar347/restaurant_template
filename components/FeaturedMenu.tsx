import { menu } from "@/lib/data";

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Menu</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div
            key={item.name}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img src={item.image} className="h-48 w-full object-cover" />
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
