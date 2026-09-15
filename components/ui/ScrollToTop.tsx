"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const percent = (scrolled / maxHeight) * 100;
      setScrollPercent(Math.min(percent, 100));
      setVisible(scrolled > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-14 h-14">
        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#f3f2f2"
            strokeWidth="4"
            opacity="0.2"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#ff5e14"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute inset-0 w-14 h-14 bg-primary text-light rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
