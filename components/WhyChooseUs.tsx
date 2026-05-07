import { Sparkles, Utensils, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    { icon: <Utensils />, title: "Master Chefs" },
    { icon: <Sparkles />, title: "Premium Ingredients" },
    { icon: <ShieldCheck />, title: "Hygienic & Safe" },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="p-6 border rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg fade-up"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <div className="text-red-600 flex justify-center animate-pulse">
            {item.icon}
          </div>

          <h3 className="mt-4 font-semibold">{item.title}</h3>
        </div>
      ))}
    </section>
  );
}
