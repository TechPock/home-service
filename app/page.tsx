import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import QuoteForm from "@/components/sections/QuoteForm";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <ServiceAreas />
      <Stats />
      <Projects />
      <Testimonials />
      <CTA />
      <FAQ />
      <QuoteForm />
      <ScrollToTop />
    </>
  );
}
