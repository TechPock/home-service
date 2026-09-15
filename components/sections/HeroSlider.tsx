"use client";

import { useState, useEffect, useRef } from "react";

const sliderImages = [
  "/images/hero-bg.jpg",
  "/images/project1.jpg",
  "/images/service-plumbing.jpg",
];

const SlideImage = ({
  src,
  isActive,
}: {
  src: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!isActive}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading={isActive ? "eager" : "lazy"}
      />
    </div>
  );
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideInterval = 5000;

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, slideInterval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    startAutoPlay();
  };

  return (
    <div className="hero-slider absolute inset-0">
      {sliderImages.map((img, index) => (
        <SlideImage
          key={img}
          src={img}
          isActive={index === current}
        />
      ))}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "w-8 bg-primary"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
