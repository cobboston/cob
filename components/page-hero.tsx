import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Hills } from "@/components/hills";
import { HeroCarousel } from "@/components/hero-carousel";
import { ScrollCue } from "@/components/scroll-cue";
import type { HeroSlide } from "@/lib/content";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Pools to randomly sample slides from on each visit. */
  pools?: HeroSlide[][];
  /** How many slides to take from each pool. Defaults to 3. */
  perPool?: number;
};

/** Compact interior-page header with the terraced-hill motif. */
export function PageHero({
  eyebrow,
  title,
  lead,
  pools,
  perPool = 3,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream to-sand">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 -z-10 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-gold-soft/25 blur-[120px]"
      />
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-center gap-8 px-6 pb-28 pt-28 sm:gap-12 sm:pb-28 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper/60 px-4 py-1.5 text-forest">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.06] text-forest-deep sm:text-5xl sm:leading-[1.04] lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
                {lead}
              </p>
            </Reveal>
          )}
        </div>
        <div className="relative z-10">
          <HeroCarousel
            randomize={pools ? { pools, perPool } : undefined}
          />
        </div>
      </div>
      <ScrollCue />
      <Hills className="absolute bottom-0 left-0 z-0 h-40 w-full sm:h-52" />
    </section>
  );
}
