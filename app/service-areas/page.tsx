import ServiceAreas from "@/components/sections/ServiceAreas";
import CTA from "@/components/sections/CTA";
import Image from "next/image";

const ServiceAreasPage = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-4 relative text-light">
        <Image
          src="/images/team/breadcumb.jpg"
          alt="Service Areas hero background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 style={{ color: '#FFFFFF' }} className="font-yantramanav font-black text-4xl md:text-5xl text-light mb-6 animate-fade-in-up">
              Serving Your <span className="text-primary">Local Area</span>
            </h2>
            <p style={{ color: '#FFFFFF' }} className="text-light/80 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay">
              We provide professional home services across the greater
              <span className="text-primary"> metropolitan area</span>. Check if we service your neighborhood below.
            </p>
          </div>
        </div>
      </section>

      <ServiceAreas />

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="bg-light rounded-lg shadow-xl p-12 max-w-4xl mx-auto text-center">
            <h3 className="font-yantramanav font-bold text-2xl text-secondary mb-4">
              Not sure if we serve your area?
            </h3>
            <p className="text-muted mb-6">
              We may still be able to help. Contact us with your address and
              we will let you know.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-light font-yantramanav font-medium rounded hover:bg-primary-dark transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ServiceAreasPage;