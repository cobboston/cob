import { Reveal } from "@/components/reveal";
import { VALUES_QUOTE } from "@/lib/content";

export function Values() {
  return (
    <section className="bg-sand px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span
            className="font-display block text-6xl leading-none text-gold"
            aria-hidden
          >
            &ldquo;
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <blockquote className="font-display -mt-4 text-balance text-3xl font-medium leading-snug text-forest-deep sm:text-4xl md:text-[2.75rem]">
            {VALUES_QUOTE.text}
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted">
            {VALUES_QUOTE.attribution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
