"use client";

import { ReactNode, useRef, useEffect, useState, CSSProperties } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (inView) return "translate(0, 0)";
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(-40px)";
      case "right":
        return "translateX(40px)";
      default:
        return "translateY(30px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
