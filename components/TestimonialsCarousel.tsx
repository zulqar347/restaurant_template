import { testimonials } from "@/data/restaurant";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";

export function TestimonialsCarousel() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-stone-950 py-24" aria-labelledby="guest-notes">
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Guest notes"
          title="Designed for the reservations people remember."
          description="From anniversaries to private dinners, the experience is shaped to feel personal, polished, and worth returning to."
          align="center"
        />
      </div>
      <div className="mt-12 flex animate-marquee gap-5 hover:[animation-play-state:paused]">
        {loop.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
