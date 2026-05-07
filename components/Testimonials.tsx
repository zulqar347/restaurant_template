import { reviews } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="border p-6 rounded-xl">
            <p className="text-gray-600">{r.text}</p>
            <h4 className="mt-4 font-semibold">{r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
