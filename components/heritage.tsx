import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { HERITAGE } from "@/lib/content";

export function Heritage() {
  return (
    <Section
      id="heritage"
      eyebrow={HERITAGE.eyebrow}
      title={HERITAGE.title}
      lead={HERITAGE.lead}
      className="bg-sand"
    >
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HERITAGE.peoples.map((people, i) => (
          <Reveal key={people.name} delay={i * 0.06}>
            <article className="group h-full rounded-2xl border border-forest/10 bg-paper p-6 transition-colors hover:border-forest/25">
              <span
                className="font-display block text-sm font-semibold text-clay"
                aria-hidden
              >
                0{i + 1}
              </span>
              <h3 className="font-display mt-3 text-2xl font-semibold text-forest-deep">
                {people.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {people.note}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink/75">
          Together with deep ties to neighboring{" "}
          <span className="font-semibold text-forest">Ankole</span> and{" "}
          <span className="font-semibold text-forest">Rwanda</span>, these
          communities form a heritage that is both rich and welcoming — and it
          continues to shape the identity of the Banyakigezi today.
        </p>
      </Reveal>
    </Section>
  );
}
