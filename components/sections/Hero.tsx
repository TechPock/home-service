import PrimaryButton, { SecondaryButton } from "@/components/ui/Buttons";
import { Shield, Clock, CheckCircle } from "lucide-react";
import HeroSlider from "@/components/sections/HeroSlider";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center text-light pt-20">
      <HeroSlider />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/65 to-secondary/60" />

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-2xl space-y-8">
          <div className="relative inline-block">
            <h3 className="font-yantramanav font-medium text-sm uppercase tracking-widener mb-2 relative z-10" style={{ color: "#FFFFFF", textShadow: "0px 2px 10px rgba(0, 0, 0, 0.9)" }}>
              Trusted Home Services
            </h3>
          </div>

          <h1 className="font-yantramanav font-black text-white text-5xl md:text-6xl xl:text-7xl leading-tight" style={{ color: "#FFFFFF", textShadow: "0px 2px 10px rgba(0, 0, 0, 0.9)" }}>
            Reliable Home Services,
            <br />
            <span className="text-primary">When You Need Them</span>
          </h1>

          <p className="text-light/95 text-lg max-w-xl leading-relaxed" style={{ color: "#FFFFFF", textShadow: "0px 1px 6px rgba(0, 0, 0, 0.8)" }}>
            Professional plumbing, electrical and HVAC services delivered by
            experienced technicians you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <PrimaryButton href="/contact" className="px-8 py-3">
              Get a Free Quote
            </PrimaryButton>
            <SecondaryButton href="/services" className="px-8 py-3">
              Explore Services
            </SecondaryButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div className="flex items-center gap-3">
              <Shield className="text-primary" size={24} />
              <span className="font-yantramanav font-medium text-light text-sm">
                Licensed Professionals
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary" size={24} />
              <span className="font-yantramanav font-medium text-light text-sm">
                Fast Response
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary" size={24} />
              <span className="font-yantramanav font-medium text-light text-sm">
                Quality Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none hidden xl:block">
        <div className="w-full h-full bg-primary rounded-tl-[30px] transform rotate-12"></div>
      </div>
    </section>
  );
};

export default Hero;
