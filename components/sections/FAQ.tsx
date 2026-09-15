"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-section-gray">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <SectionTitle
            smallTitle="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our home services."
            centered
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const isHovered = hoveredId === faq.id;
            return (
              <div
                key={faq.id}
                onMouseEnter={() => setHoveredId(faq.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-light rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between px-8 py-5 text-left font-yantramanav font-medium text-secondary hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-8 text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;