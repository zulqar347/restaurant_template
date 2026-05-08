interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-amber-50 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-stone-300">{description}</p>
    </div>
  );
}
