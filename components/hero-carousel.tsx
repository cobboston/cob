"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HERO_SLIDES } from "@/lib/content";

const SLIDES = HERO_SLIDES.slice(0, 3);

/**
 * A single hero card that crossfades through up to three images, advancing
 * once per second. Each caption lives inside its slide so it fades in sync
 * with its image. Auto-advance is disabled under prefers-reduced-motion.
 */
export function HeroCarousel() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      1000,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] bg-sand shadow-2xl ring-1 ring-forest-deep/10"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/65 via-forest-deep/5 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-12 text-sm font-semibold uppercase tracking-[0.16em] text-cream/95">
            {slide.caption}
          </figcaption>
        </div>
      ))}

      <span
        className="absolute bottom-5 right-5 z-10 flex items-center gap-1.5"
        aria-hidden
      >
        {SLIDES.map((slide, i) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-5 bg-cream" : "w-1.5 bg-cream/50"
            }`}
          />
        ))}
      </span>
    </motion.figure>
  );
}
