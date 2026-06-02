import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { PILLARS } from "@/lib/content";

export function Pillars() {
  return (
    <Section
      id="what-we-do"
      eyebrow="What we do"
      title="Six ways we show up for one another."
      lead="COB is a platform for connection and growth — a place to belong, to give, and to get ahead together."
      className="bg-cream"
    >
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={(i % 3) * 0.06}>
              <article className="group h-full rounded-2xl border border-forest/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-forest/20 hover:shadow-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold text-forest-deep">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
