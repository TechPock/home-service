import PrimaryButton from "@/components/ui/Buttons";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { serviceAreas, serviceAreasText } from "@/data/serviceAreas";

const ServiceAreas = () => {
  return (
    <section className="py-24 px-4 bg-darkest text-light relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('/images/service-area.jpg')" }}
      />
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionTitle
            smallTitle={serviceAreasText.title}
            title="Serving Your Local Area"
            subtitle={serviceAreasText.subtitle}
            centered
            white
          />
        </div>
        <ScrollAnimation direction="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area.id}
                className="bg-secondary-light/20 border border-border-light/30 rounded-lg p-6 text-center transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:scale-105"
              >
                <div className="font-yantramanav font-bold text-xl text-light mb-1">
                  {area.name}
                </div>
                {area.zipCode && (
                  <div className="text-sm" style={{ color: '#E5E7EB' }}>ZIP: {area.zipCode}</div>
                )}
              </div>
            ))}
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={200}>
          <div className="text-center mt-16">
            <PrimaryButton href="/contact" className="px-10">
              {serviceAreasText.ctaText}
            </PrimaryButton>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServiceAreas;
