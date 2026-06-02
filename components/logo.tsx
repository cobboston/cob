import Link from "next/link";

type LogoProps = {
  className?: string;
};

/** COB monogram inside a hill-topped roundel. */
export function LogoMark({ className }: LogoProps) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-forest text-cream ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 36 36" className="h-full w-full">
        <rect width="36" height="36" fill="var(--color-forest)" />
        <path
          d="M0 26 C 8 20 12 24 18 25 C 24 26 28 21 36 24 L36 36 L0 36 Z"
          fill="var(--color-moss)"
        />
        <path
          d="M0 31 C 9 27 14 30 20 30 C 26 30 30 27 36 29 L36 36 L0 36 Z"
          fill="var(--color-gold)"
          fillOpacity="0.9"
        />
        <text
          x="18"
          y="17"
          textAnchor="middle"
          fontFamily="var(--font-fraunces), serif"
          fontSize="13"
          fontWeight="700"
          fill="var(--color-cream)"
        >
          C
        </text>
      </svg>
    </span>
  );
}

export function Wordmark({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-forest-deep">
          COB
        </span>
        <span className="text-[0.64rem] font-medium uppercase tracking-[0.18em] text-muted">
          Boston
        </span>
      </span>
    </Link>
  );
}
