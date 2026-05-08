import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="w-[22rem] shrink-0 rounded-[1.5rem] border border-amber-100/10 bg-white/[0.045] p-6 sm:w-[28rem]">
      <Quote className="text-amber-300" size={28} />
      <p className="mt-5 text-lg leading-8 text-stone-100">{testimonial.quote}</p>
      <div className="mt-8 border-t border-amber-100/10 pt-5">
        <p className="font-semibold text-amber-50">{testimonial.author}</p>
        <p className="mt-1 text-sm text-stone-400">{testimonial.detail}</p>
      </div>
    </article>
  );
}
