import Image from "next/image";
import { galleryImages } from "@/data/restaurant";
import { SectionHeader } from "@/components/SectionHeader";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-stone-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="A room built for warm light and long conversations."
          description="Visual atmosphere matters. Guests book faster when they can imagine the table, the plate, and the kind of evening waiting for them."
        />
        <div className="mt-12 grid auto-rows-[16rem] gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div key={image.alt} className={`group relative overflow-hidden rounded-[1.5rem] border border-amber-100/10 ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 25vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-stone-950/0 transition group-hover:bg-stone-950/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
