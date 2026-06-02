import { Reveal } from "@/components/reveal";
import { COMMUNITY, MEMBER_ROLES } from "@/lib/content";

export function Community() {
  return (
    <section className="relative overflow-hidden bg-forest-deep px-6 py-24 text-cream sm:py-32">
      <div className="grain absolute inset-0 opacity-50" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-moss/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-gold-soft">{COMMUNITY.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-3 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl">
              {COMMUNITY.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              {COMMUNITY.lead}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {MEMBER_ROLES.map((role) => (
              <li
                key={role}
                className="rounded-full border border-cream/15 bg-cream/5 px-5 py-2.5 text-sm font-medium text-cream/90 backdrop-blur-sm transition-colors hover:border-gold-soft/50 hover:text-cream"
              >
                {role}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
