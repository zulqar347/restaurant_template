import type { MenuCategory } from "@/lib/types";

export function MenuCard({ category }: { category: MenuCategory }) {
  return (
    <article className="group rounded-[1.75rem] border border-amber-100/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-white/[0.055]">
      <h3 className="text-2xl font-semibold text-amber-50">{category.name}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-stone-400">{category.description}</p>
      <div className="mt-7 space-y-6">
        {category.items.map((item) => (
          <div key={item.name} className="border-t border-amber-100/10 pt-5">
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-medium text-stone-100">{item.name}</h4>
              <span className="font-semibold text-amber-300">{item.price}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-stone-400">{item.details}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
