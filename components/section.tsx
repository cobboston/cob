import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  /** Intro paragraph under the title. */
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
  /** Center the heading block. */
  centered?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || lead) && (
          <div
            className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && (
              <Reveal>
                <p className="eyebrow text-clay">{eyebrow}</p>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.05}>
                <h2 className="font-display mt-3 text-balance text-4xl font-semibold leading-[1.05] text-forest-deep sm:text-5xl">
                  {title}
                </h2>
              </Reveal>
            )}
            {lead && (
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  {lead}
                </p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
