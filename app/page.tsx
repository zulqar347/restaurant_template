import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReservationCTA from "@/components/ReservationCTA";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <main
      className=" bg-white
        text-gray-900
        overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <About />
      <WhyChooseUs />
      <ReservationCTA />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
