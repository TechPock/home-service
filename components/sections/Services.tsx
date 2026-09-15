import { Wrench, Zap, Snowflake } from "lucide-react";
import ServiceCard from "@/components/sections/ServiceCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

const serviceIcons = {
  plumbing: <Wrench size={48} />,
  electrical: <Zap size={48} />,
  hvac: <Snowflake size={48} />,
};

const Services = () => {
  return (
    <section className="py-24 px-4 bg-section relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle
            smallTitle="Our Services"
            title="Our Professional Services"
            subtitle="Reliable solutions for the essential systems in your home."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.shortDesc}
              icon={serviceIcons[service.id as keyof typeof serviceIcons]}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
