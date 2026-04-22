"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ASCII_ART = [
  "  __  __            _       _      ",
  " |  \/  | __ _  ___| | __  | |     ",
  " | |\/| |/ _` |/ __| |/ /  | |     ",
  " | |  | | (_| | (__|   <   | |___  ",
  " |_|  |_|\__,_|\___|_|\_\  |_____| ",
  "                                   ",
  "  ____  _          _ _            ",
  " |  _ \(_) ___  __| (_) __ _      ",
  " | |_) | |/ _ \/ _` | |/ _` |     ",
  " |  _ <| |  __/ (_| | | (_| |     ",
  " |_| \_\_|\___|\__,_|_|\__,_|     ",
];

export function AsciiIntro({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < ASCII_ART.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, ASCII_ART[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="font-mono text-xs sm:text-sm md:text-base text-accent">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {line}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="inline-block w-2 h-4 bg-accent ml-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
