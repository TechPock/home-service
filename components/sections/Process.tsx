import { Clipboard, Calendar, FileText, CheckCircle } from "lucide-react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const processSteps = [
  {
    number: "01",
    title: "Choose Your Service",
    desc: "Select the service you need from our range of plumbing, electrical, and HVAC solutions.",
    icon: <Clipboard size={32} />,
    delay: 0,
  },
  {
    number: "02",
    title: "Tell Us What You Need",
    desc: "Share the details of your project and we'll assess your requirements with a free consultation.",
    icon: <Calendar size={32} />,
    delay: 100,
  },
  {
    number: "03",
    title: "Get Your Quote",
    desc: "Receive a transparent, upfront quote with no hidden fees. Schedule at your convenience.",
    icon: <FileText size={32} />,
    delay: 200,
  },
  {
    number: "04",
    title: "Get the Job Done",
    desc: "Our expert technicians complete the work professionally and on time, leaving your space clean.",
    icon: <CheckCircle size={32} />,
    delay: 300,
  },
];

const Process = () => {
  return (
    <section className="py-24 px-4 bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle
            smallTitle="Our Process"
            title="Simple Service. Professional Results."
            subtitle="We've streamlined our process to make your home service experience simple and stress-free."
            centered
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative lg:pr-8">
            {processSteps.map((step, index) => (
              <ScrollAnimation key={step.number} direction="up" delay={step.delay}>
                <div className="relative flex gap-6 mb-12 last:mb-0">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-light font-yantramanav font-black text-2xl shadow-lg shadow-primary/30 relative">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <div className="bg-light/50 rounded-xl p-6 border border-border-light">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 flex items-center justify-center text-primary bg-primary/10 rounded-lg">
                          {step.icon}
                        </div>
                        <h3 className="font-yantramanav font-bold text-xl text-secondary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-24 h-[calc(100vh-6rem)] max-h-[600px]">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/service-hvac.jpg"
                  alt="Our expert technicians at work"
                  fill
                  priority
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-light/95 backdrop-blur-sm rounded-xl p-6 border border-border-light">
                    <div className="flex items-center gap-3 text-primary mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full">
                        <CheckCircle size={20} />
                      </div>
                      <span className="font-yantramanav font-bold text-lg text-secondary">Professional Service Guaranteed</span>
                    </div>
                    <p className="text-muted text-sm">Licensed, insured, and background-checked technicians for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;