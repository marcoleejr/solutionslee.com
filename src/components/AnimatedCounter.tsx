"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

/**
 * Renders the final value on the server/first paint (SEO-safe) and,
 * once in view, replays a quick 0 → value count-up animation.
 */
export function AnimatedCounter({ value, suffix = "", className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px 20% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reduceMotion || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        el.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, suffix]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
