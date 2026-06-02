import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { VISION, MISSION } from "@/lib/content";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <Section
      id="vision"
      eyebrow="What guides us"
      title="Vision & Mission."
      className="bg-cream"
      centered
    >
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col rounded-3xl border border-forest/12 bg-paper p-9 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-clay/10 text-clay">
              <Eye size={22} strokeWidth={1.75} />
            </span>
            <h3 className="eyebrow mt-6 text-clay">{VISION.label}</h3>
            <p className="font-display mt-3 text-2xl font-medium leading-snug text-forest-deep sm:text-[1.7rem]">
              {VISION.text}
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="flex h-full flex-col rounded-3xl border border-forest/12 bg-forest p-9 text-cream shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold-soft">
              <Target size={22} strokeWidth={1.75} />
            </span>
            <h3 className="eyebrow mt-6 text-gold-soft">{MISSION.label}</h3>
            <p className="font-display mt-3 text-xl font-medium leading-snug text-cream sm:text-[1.4rem]">
              {MISSION.text}
            </p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
