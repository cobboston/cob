import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TEAM } from "@/lib/content";

const AVATAR_TINTS = [
  "bg-forest text-cream",
  "bg-clay text-cream",
  "bg-moss text-cream",
  "bg-gold text-forest-deep",
  "bg-forest-deep text-gold-soft",
  "bg-sage text-forest-deep",
];

export function TeamGrid() {
  return (
    <section className="bg-cream px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-paper transition-all hover:-translate-y-1 hover:border-forest/20 hover:shadow-lg">
                {member.image ? (
                  <div className="relative aspect-square w-full overflow-hidden bg-sage/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex aspect-square w-full items-center justify-center ${
                      AVATAR_TINTS[i % AVATAR_TINTS.length]
                    }`}
                    aria-hidden
                  >
                    <span className="font-display text-6xl font-semibold">
                      {member.initials}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-forest-deep">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-clay">
                    {member.role}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-forest/12 bg-forest-deep p-8 text-center text-cream sm:flex-row sm:text-left">
            <p className="text-lg text-cream/90">{TEAM.cta.note}</p>
            <Link
              href={TEAM.cta.href}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-forest-deep transition-all hover:bg-gold-soft"
            >
              {TEAM.cta.label}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
