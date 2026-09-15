import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import { services } from "@/data/services";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-4 relative text-light">
        <Image
          src="/images/team/breadcumb.jpg"
          alt="Services hero background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 style={{ color: '#FFFFFF' }} className="font-yantramanav font-black text-4xl md:text-5xl text-light mb-6 animate-fade-in-up">
              Our Professional <span className="text-primary">Services</span>
            </h2>
            <p style={{ color: '#FFFFFF' }} className="text-light/80 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay">
              Reliable solutions for the essential systems in your home.
              From routine maintenance to emergency repairs, we cover all
              your <span className="text-primary">plumbing</span>, <span className="text-primary">electrical</span>, and <span className="text-primary">HVAC</span> needs.
            </p>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-light rounded-lg shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary text-light rounded-full flex items-center justify-center font-yantramanav font-black text-xl">
                    {service.number}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-yantramanav font-bold text-2xl text-secondary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-6">{service.shortDesc}</p>
                  <a
                    href={service.href}
                    className="text-primary font-yantramanav font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7L7 7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ServicesPage;