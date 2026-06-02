import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { EXPLORE } from "@/lib/content";

export function ExploreCards() {
  return (
    <Section
      eyebrow={EXPLORE.eyebrow}
      title={EXPLORE.title}
      lead={EXPLORE.lead}
      className="bg-sand"
      centered
    >
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {EXPLORE.cards.map((card, i) => (
          <Reveal key={card.href} delay={i * 0.06}>
            <Link
              href={card.href}
              className="group flex h-full flex-col rounded-2xl border border-forest/12 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-forest/25 hover:shadow-md"
            >
              <span
                className="font-display text-sm font-semibold text-clay"
                aria-hidden
              >
                0{i + 1}
              </span>
              <h3 className="font-display mt-3 text-2xl font-semibold text-forest-deep">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">
                {card.blurb}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                {card.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
