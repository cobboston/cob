import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ABOUT } from "@/lib/content";

export function About() {
  return (
    <Section
      id="about"
      eyebrow={ABOUT.eyebrow}
      title={ABOUT.title}
      className="bg-cream"
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-6">
          {ABOUT.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-lg leading-relaxed text-ink/85">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-forest-deep p-8 text-cream shadow-sm">
            <div className="grain absolute inset-0 opacity-60" aria-hidden />
            <p className="font-display text-xl font-medium leading-snug text-gold-soft">
              The historic region of Kigezi
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Southwestern Uganda — a land of terraced hills, resilience, and
              service.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {ABOUT.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl font-semibold text-cream">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-cream/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
