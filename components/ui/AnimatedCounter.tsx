"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const animate = () => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numericValue)) {
      setCount(0);
      return;
    }

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return (
    <span ref={ref}>
      {count > 0 ? count : 0}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
