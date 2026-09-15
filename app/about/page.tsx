import Image from "next/image";
import Team from "@/components/sections/Team";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { DollarSign, Clock, Award, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="text-primary" size={24} />,
    title: "Licensed Professionals",
    desc: "All our technicians are fully licensed, insured, and certified.",
  },
  {
    icon: <DollarSign className="text-primary" size={24} />,
    title: "Transparent Pricing",
    desc: "Upfront pricing with no hidden fees. Detailed quotes before work begins.",
  },
  {
    icon: <Clock className="text-primary" size={24} />,
    title: "Fast Response",
    desc: "Same-day service available. 24/7 emergency service for urgent needs.",
  },
  {
    icon: <Award className="text-primary" size={24} />,
    title: "Quality Workmanship",
    desc: "We stand behind our work with a satisfaction guarantee.",
  },
];

const AboutPage = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-4 text-light relative">
        <Image
          src="/images/team/slider-bg.jpg"
          alt="Modern building and skyline"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/90" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollAnimation direction="up" delay={0}>
              <h2 style={{ color: '#FFFFFF' }} className="font-yantramanav font-black text-4xl md:text-5xl mb-6">
                Professional Service You Can <span className="text-primary">Count On</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={150}>
              <p style={{ color: '#FFFFFF' }} className="text-lg leading-relaxed max-w-2xl mx-auto">
                We provide dependable home services with experienced technicians,
                transparent communication and quality workmanship.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left" delay={100}>
              <div className="space-y-8">
                <SectionTitle
                  smallTitle="About Us"
                  title="Professional Service You Can Count On"
                  subtitle="At HomePro Services, we understand that your home systems are essential to your daily life."
                  white={false}
                />
                <p className="text-muted leading-relaxed">
                  That&apos;s why we&apos;re committed to delivering fast, reliable, and
                  transparent service every time. With over a decade of
                  experience and thousands of satisfied customers, you can trust
                  us to handle all your home service needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-4 p-4 bg-light rounded-lg shadow"
                    >
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="font-yantramanav font-bold text-secondary mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={200}>
              <div className="relative group">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden shadow-2xl">
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
          </div>
        </div>
      </section>

      <Team />
      <Stats />
      <CTA />
    </>
  );
};

export default AboutPage;
