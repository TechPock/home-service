"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrent((current + 1) % testimonials.length);
  const goPrev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const testi = testimonials[current];

  return (
    <section className="py-24 px-4 bg-section-gray relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle
            smallTitle="Testimonials"
            title="What Our Customers Say"
            subtitle="Don't just take our word for it. Here's what our customers have to say about our service."
            centered
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="testi-single-box bg-light p-12 rounded shadow-lg relative">
            <div className="testimonial-content">
              <div className="flex items-center gap-1 mb-6">
                <div className="flex text-star">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium text-light bg-primary px-3 py-1 rounded">
                  5.0
                </span>
              </div>

              <div className="quote-icon float-right text-5xl text-primary opacity-10">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.54 15.36c.19-1.66.86-3.26 1.83-4.65-.88.19-1.85.21-2.87.05.62-3.06 2.59-5.42 5.39-6.17.79-.19 1.61.05 2.26.71a4.2 4.2 0 0 1 1.67 3.6c0 .44-.03.87-.08 1.31-5.12.35-9.42 1.1-12.27 3.34.44-.13 1.57-.8 2.75-1.27z" />
                </svg>
              </div>

              <div className="testi-title mb-4">
                <h3 className="font-yantramanav font-bold text-xl text-secondary">
                  {testi.title}
                </h3>
              </div>

              <div className="testimonial-desc">
                <p className="text-muted italic leading-relaxed">
                  {testi.text}
                </p>
              </div>
            </div>

            <div className="testi-people-info flex items-center mt-8 pt-6 border-t border-border">
              <div className="people-thumb relative">
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              </div>
              <div className="people-title pl-6">
                <h4 className="font-yantramanav font-bold text-lg text-secondary">
                  {testi.name}
                </h4>
                <h6 className="text-primary text-sm font-medium">
                  {testi.role}
                </h6>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={goPrev}
              className="w-12 h-12 bg-secondary text-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-12 h-12 bg-secondary text-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
