"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMounted } from "@/lib/use-mounted";

const NAME = "MARCO LEE";
const TAGLINE = "Senior Full-Stack Engineer";

export function AsciiIntro({ onComplete }: { onComplete: () => void }) {
  const mounted = useMounted();
  const [visible, setVisible] = useState(true);
  const [nameChars, setNameChars] = useState(0);
  const [showTagline, setShowTagline] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    if (nameChars < NAME.length) {
      const timer = setTimeout(() => setNameChars((n) => n + 1), 70);
      return () => clearTimeout(timer);
    }

    if (!showTagline) {
      const timer = setTimeout(() => setShowTagline(true), 220);
      return () => clearTimeout(timer);
    }

    if (!doneTyping) {
      const timer = setTimeout(() => setDoneTyping(true), 900);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 450);
    return () => clearTimeout(timer);
  }, [mounted, nameChars, showTagline, doneTyping, onComplete]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background px-6"
          aria-hidden
        >
          <div className="text-center max-w-lg w-full">
            <p className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.12em] text-accent tabular-nums">
              {NAME.slice(0, nameChars)}
              <motion.span
                animate={{ opacity: doneTyping ? 0 : [1, 0] }}
                transition={{
                  repeat: doneTyping ? 0 : Infinity,
                  duration: 0.55,
                }}
                className="inline-block w-[0.08em] h-[0.9em] ml-1 align-[-0.05em] bg-accent"
              />
            </p>

            <AnimatePresence>
              {showTagline && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-4 text-sm sm:text-base text-muted tracking-wide"
                >
                  {TAGLINE}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
