import { Sparkles, Utensils, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
      {[
        { icon: <Utensils />, title: "Master Chefs" },
        { icon: <Sparkles />, title: "Premium Ingredients" },
        { icon: <ShieldCheck />, title: "Hygienic & Safe" },
      ].map((item) => (
        <div
          key={item.title}
          className="p-6 border rounded-xl text-center hover:shadow-md"
        >
          <div className="text-red-600 flex justify-center">{item.icon}</div>
          <h3 className="mt-4 font-semibold">{item.title}</h3>
        </div>
      ))}
    </section>
  );
}
