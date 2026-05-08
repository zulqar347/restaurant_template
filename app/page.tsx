import { AboutSection } from "@/components/AboutSection";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { ChefTeam } from "@/components/ChefTeam";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { LocationContact } from "@/components/LocationContact";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ReservationForm } from "@/components/ReservationForm";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { getAllPosts } from "@/lib/blog";

export default function Page() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-stone-950 text-stone-100">
        <HeroSection />
        <FeaturedDishes />
        <AboutSection />
        <ChefTeam />
        <MenuSection />
        <TestimonialsCarousel />
        <ReservationForm />
        <GallerySection />
        <CTASection />
        <LocationContact />
        <section className="bg-[#120b08] px-4 py-24 sm:px-6 lg:px-8" id="blog">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Restaurant journal"
              title="SEO-rich stories that help guests find and trust the restaurant."
              description="Search-optimized articles support local discovery, date-night searches, private dining decisions, and menu education."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} priority={index === 0} />
              ))}
            </div>
          </div>
        </section>
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
