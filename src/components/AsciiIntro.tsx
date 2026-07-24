"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMounted } from "@/lib/use-mounted";

// Figlet-style "Marco" + "Lee" — correct single backslashes, compact width.
const ASCII_ART = [
  " __  __                      ",
  "|  \\/  | __ _ _ __ ___ ___   ",
  "| |\\/| |/ _` | '__/ __/ _ \\  ",
  "| |  | | (_| | | | (_| (_) | ",
  "|_|  |_|\\__,_|_|  \\___\\___/  ",
  "                             ",
  " _                           ",
  "| |    ___  ___              ",
  "| |   / _ \\/ _ \\             ",
  "| |__|  __/  __/             ",
  "|_____\\___|\\___|             ",
] as const;

export function AsciiIntro({ onComplete }: { onComplete: () => void }) {
  const mounted = useMounted();
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [scale, setScale] = useState(1);
  const measureRef = useRef<HTMLPreElement>(null);

  // Fit ASCII block to viewport width (readable on phone without tiny font).
  useEffect(() => {
    if (!mounted) return;
    const fit = () => {
      const el = measureRef.current;
      if (!el) return;
      const pad = 32;
      const avail = Math.max(280, window.innerWidth - pad);
      const natural = el.scrollWidth || el.offsetWidth || 1;
      const next = Math.min(1.15, Math.max(0.55, avail / natural));
      setScale(next);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [mounted, lines.length]);

  useEffect(() => {
    if (!mounted) return;
    if (currentLine < ASCII_ART.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, ASCII_ART[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 900);
    return () => clearTimeout(timer);
  }, [mounted, currentLine, onComplete]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background px-4 overflow-hidden"
          aria-label="Marco Lee"
        >
          {/* Hidden full art for measuring natural width at base font size */}
          <pre
            ref={measureRef}
            aria-hidden
            className="pointer-events-none absolute opacity-0 font-mono text-sm sm:text-base leading-[1.15] whitespace-pre"
          >
            {ASCII_ART.join("\n")}
          </pre>

          <div
            className="origin-center will-change-transform"
            style={{ transform: `scale(${scale})` }}
          >
            <pre className="font-mono text-sm sm:text-base leading-[1.15] text-accent whitespace-pre select-none drop-shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
              {lines.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              {currentLine < ASCII_ART.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="inline-block w-2 h-4 ml-0.5 align-middle bg-accent"
                />
              )}
            </pre>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
