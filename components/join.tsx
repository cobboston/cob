import { Reveal } from "@/components/reveal";
import { Hills } from "@/components/hills";
import { JOIN, ORG } from "@/lib/content";
import { Check, Mail, ArrowRight } from "lucide-react";

export function Join() {
  return (
    <section
      id="join"
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream to-sand px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold-soft/25 blur-[120px]"
      />
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-clay">{JOIN.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-3 text-balance text-4xl font-semibold leading-[1.05] text-forest-deep sm:text-5xl">
                {JOIN.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {JOIN.lead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3">
                {JOIN.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-ink/80">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-forest/12 bg-forest-deep p-9 text-cream shadow-lg">
              <div className="grain absolute inset-0 opacity-50" aria-hidden />
              <div className="relative">
                <p className="font-display text-2xl font-semibold text-cream">
                  Become part of COB
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  Reach out and we&apos;ll welcome you in. Tell us a little
                  about yourself and your connection to Kigezi.
                </p>
                <a
                  href={JOIN.cta.href}
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-forest-deep transition-all hover:bg-gold-soft"
                >
                  {JOIN.cta.label}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={`mailto:${ORG.email}`}
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold-soft"
                >
                  <Mail size={15} />
                  {ORG.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Hills className="pointer-events-none absolute bottom-0 left-0 h-28 w-full opacity-90 sm:h-36" />
    </section>
  );
}
