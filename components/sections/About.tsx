import Image from "next/image";
import { Users, DollarSign, Clock, Award } from "lucide-react";
import PrimaryButton from "@/components/ui/Buttons";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const About = () => {
  const features = [
    {
      id: "1",
      title: "Experienced Professionals",
      icon: <Users size={36} />,
      delay: 0,
    },
    {
      id: "2",
      title: "Transparent Pricing",
      icon: <DollarSign size={36} />,
      delay: 100,
    },
    {
      id: "3",
      title: "Fast Response",
      icon: <Clock size={36} />,
      delay: 200,
    },
    {
      id: "4",
      title: "Quality Workmanship",
      icon: <Award size={36} />,
      delay: 300,
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left" delay={100}>
            <div className="relative group">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.jpg"
                  alt="Professional technician"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={200}>
            <div className="space-y-4">
              <SectionTitle
                smallTitle="About Us"
                title="Professional Service You Can Count On"
                subtitle="We provide dependable home services with experienced technicians, transparent communication and quality workmanship."
                white={false}
              />

              <p className="text-muted leading-relaxed">
                At HomePro Services, we understand that your home&apos;s plumbing,
                electrical, and HVAC systems are essential to your daily life.
                That&apos;s why we&apos;re committed to delivering fast, reliable, and
                transparent service every time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 items-stretch">
                {features.map((feature) => (
                  <ScrollAnimation key={feature.id} direction="up" delay={feature.delay}>
                    <div className="about-item group relative bg-light p-8 rounded-lg shadow-lg border-l-2 border-primary transition-all duration-500 hover:bg-secondary h-full flex items-start gap-4">
                      <div className="about-icon shrink-0 transition-all duration-500">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                          <div className="text-primary group-hover:text-light transition-all duration-500">
                            {feature.icon}
                          </div>
                        </div>
                      </div>
                      <div className="about-content min-h-[56px]">
                        <h4 className="font-yantramanav font-bold text-secondary text-lg group-hover:text-light transition-colors duration-500">
                          {feature.title}
                        </h4>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <div className="pt-8">
                <PrimaryButton href="/about" className="px-8">
                  Learn More
                </PrimaryButton>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
