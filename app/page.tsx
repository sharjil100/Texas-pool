import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Coverage from "@/components/Coverage";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Financing from "@/components/Financing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navigation />
      <Hero />
      <Marquee />
      <Story />
      <Services />
      <Process />
      <Portfolio />
      <Coverage />
      <Trust />
      <Testimonials />
      <Financing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
