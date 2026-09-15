"use client";

import PrimaryButton from "@/components/ui/Buttons";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll(
            ".animate-fade-up"
          );
          elements?.forEach((el) => {
            el.classList.add("visible");
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto">
        <div className="bg-primary rounded-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-12 py-16 relative z-10">
            <div>
              <h3
                className="font-yantramanav font-medium text-sm uppercase text-light mb-4 animate-fade-up"
                style={{ transitionDelay: "0ms" }}
              >
                Need Help?
              </h3>
              <h1
                className="font-yantramanav font-black text-4xl md:text-5xl text-light leading-tight mb-6 animate-fade-up"
                style={{ transitionDelay: "100ms" }}
              >
                Need a Professional Home Service?
              </h1>
              <p
                className="font-medium text-lg leading-relaxed max-w-2xl animate-fade-up"
                style={{ color: "#FFFFFF", transitionDelay: "200ms" }}
              >
                Tell us what you need and our team will help you find the
                right solution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <PrimaryButton
                href="/contact"
                className="px-10 py-3 animate-fade-up"
                style={{ transitionDelay: "300ms" }}
              >
                Get a Free Quote
              </PrimaryButton>
              <Link
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-secondary text-light font-yantramanav font-medium rounded hover:bg-secondary-light transition-all duration-300 animate-fade-up"
                style={{ transitionDelay: "400ms" }}
              >
                <Phone size={20} />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;