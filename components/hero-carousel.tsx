"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  HERO_SLIDES,
  pickRandomSlides,
  type HeroSlide,
} from "@/lib/content";

type Props = {
  slides?: HeroSlide[];
  /**
   * When provided, the carousel ignores `slides` after mount and shows up to
   * `perPool * pools.length` slides sampled randomly from each pool and
   * interleaved. Randomization happens client-side to avoid hydration drift.
   */
  randomize?: { pools: HeroSlide[][]; perPool: number };
};

/**
 * A single hero card that crossfades through its slides every 4 seconds.
 * Each caption lives inside its slide so it fades in sync with its image.
 * Auto-advance is disabled under prefers-reduced-motion.
 */
export function HeroCarousel({ slides = HERO_SLIDES, randomize }: Props) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  // Server render uses `slides`; after mount, swap in a random alternating
  // set when randomize is provided. Keeps SSR/CSR markup identical.
  const initial = useMemo(() => slides, [slides]);
  const [display, setDisplay] = useState<HeroSlide[]>(initial);

  useEffect(() => {
    if (!randomize) return;
    setDisplay(pickRandomSlides(randomize.pools, randomize.perPool));
    setActive(0);
  }, [randomize]);

  useEffect(() => {
    if (reduce || display.length <= 1) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % display.length),
      4000,
    );
    return () => clearInterval(id);
  }, [reduce, display.length]);

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-[3/2] w-full overflow-hidden rounded-[1.75rem] bg-sand shadow-2xl ring-1 ring-forest-deep/10"
    >
      {display.map((slide, i) => (
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
          <figcaption className="absolute inset-x-0 bottom-0 pb-7 pl-5 pr-16 pt-12 text-sm font-semibold uppercase tracking-[0.16em] text-cream/95">
            {slide.caption}
          </figcaption>
        </div>
      ))}

      <span
        className="absolute bottom-5 right-5 z-10 flex items-center gap-1.5"
        aria-hidden
      >
        {display.map((slide, i) => (
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
