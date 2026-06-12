"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HERO, DISTRICTS, BOSTON_POOL, HOME_POOL } from "@/lib/content";
import { Hills } from "@/components/hills";
import { HeroCarousel } from "@/components/hero-carousel";
import { ScrollCue } from "@/components/scroll-cue";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Split the headline so the emphasis word can be styled.
  const [before, after] = HERO.title.split(HERO.emphasis);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream to-sand"
    >
      {/* warm glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gold-soft/30 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-center gap-8 px-6 pt-24 pb-24 sm:gap-12 sm:pt-28 sm:pb-28 lg:grid-cols-[2fr_2.5fr] lg:gap-10 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.p
            variants={item}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper/60 px-4 py-1.5 text-forest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-balance text-3xl font-semibold leading-[1.06] text-forest-deep sm:mt-7 sm:text-4xl sm:leading-[1.02] lg:text-5xl"
          >
            {before}
            <span className="relative whitespace-nowrap text-clay">
              {HERO.emphasis}
              <svg
                aria-hidden="true"
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-gold"
              >
                <path
                  d="M2 13 C 80 4 220 4 298 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {after}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0"
          >
            {HERO.lead}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              href={HERO.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-all hover:bg-forest-deep hover:shadow-lg"
            >
              {HERO.primaryCta.label}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href={HERO.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-7 py-3.5 text-base font-semibold text-forest-deep transition-colors hover:bg-forest/5"
            >
              {HERO.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.ul
            variants={item}
            className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted lg:mx-0 lg:justify-start"
          >
            {DISTRICTS.map((d, i) => (
              <li key={d} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-sage" aria-hidden />
                )}
                <span className="font-medium">{d}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative z-10">
          <HeroCarousel
            randomize={{ pools: [BOSTON_POOL, HOME_POOL], perPool: 3 }}
          />
        </div>
      </div>

      <ScrollCue />

      {/* terraced hills anchored to the bottom */}
      <Hills className="absolute bottom-0 left-0 z-0 h-40 w-full sm:h-52" />
    </section>
  );
}
