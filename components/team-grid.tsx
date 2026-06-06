import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TEAM } from "@/lib/content";

// Rotating avatar tints drawn from the palette.
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
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col items-start rounded-2xl border border-forest/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-forest/20 hover:shadow-md">
                {member.image ? (
                  <span className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span
                    className={`font-display inline-flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold ${
                      AVATAR_TINTS[i % AVATAR_TINTS.length]
                    }`}
                    aria-hidden
                  >
                    {member.initials}
                  </span>
                )}
                <h3 className="font-display mt-4 text-xl font-semibold text-forest-deep">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wide text-clay">
                  {member.role}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {member.bio}
                </p>
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
