"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function ScrollCue({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`group absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-cream transition-colors hover:text-gold sm:bottom-8 ${
        className ?? ""
      }`}
    >
      <motion.span
        className="flex flex-col items-center gap-1.5"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="eyebrow hidden font-bold text-cream/90 group-hover:text-gold lg:inline"
          style={{
            textShadow:
              "0 0 10px rgba(252, 211, 77, 0.55), 0 0 22px rgba(252, 211, 77, 0.3)",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={20} strokeWidth={2.25} />
      </motion.span>
    </button>
  );
}
