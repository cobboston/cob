type HillsProps = {
  className?: string;
  /** Flip vertically so hills hang from the top as a divider. */
  flip?: boolean;
};

/**
 * Layered terraced-hill silhouette — a nod to Kigezi, the land of a
 * thousand hills. A pale, hazy back ridge with uneven peaks (a few rise
 * higher than the rest), a steeper mid ridge, and a gentle, gently-
 * rolling front ridge whose contour lines trace the terraces. Peaks are
 * offset so the ridges interlock. Decorative only; fills its container.
 */
export function Hills({ className, flip = false }: HillsProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      {/* farthest, palest ridge — hazy, with uneven peak heights */}
      <path
        fill="var(--color-sage)"
        fillOpacity="0.55"
        d="M0 168 C 63 168 77 78 140 78 C 212 78 228 188 300 188 C 377 188 393 124 470 124 C 551 124 569 192 650 192 C 727 192 743 92 820 92 C 901 92 919 186 1000 186 C 1081 186 1099 128 1180 128 C 1252 128 1268 184 1340 184 C 1385 184 1395 150 1440 150 L1440 320 L0 320 Z"
      />
      {/* mid ridge — steeper, peaks offset to 240/600/960/1320 */}
      <path
        fill="var(--color-moss)"
        d="M0 200 C 108 200 132 150 240 150 C 321 150 339 224 420 224 C 501 224 519 148 600 148 C 681 148 699 226 780 226 C 861 226 879 150 960 150 C 1041 150 1059 224 1140 224 C 1221 224 1239 156 1320 156 C 1374 156 1386 200 1440 200 L1440 320 L0 320 Z"
      />
      {/* front ridge — closest, deepest; gentle, low-amplitude swells */}
      <path
        fill="var(--color-forest)"
        d="M0 262 C 99 262 121 244 220 244 C 333 244 357 276 470 276 C 583 276 607 242 720 242 C 837 242 863 278 980 278 C 1093 278 1117 246 1230 246 C 1325 246 1345 266 1440 266 L1440 320 L0 320 Z"
      />
      {/* terrace contour lines tracing the gentle front slope */}
      <g
        stroke="var(--color-forest-deep)"
        strokeOpacity="0.32"
        strokeWidth="1.5"
        fill="none"
      >
        <path d="M0 274 C 99 274 121 256 220 256 C 333 256 357 288 470 288 C 583 288 607 254 720 254 C 837 254 863 290 980 290 C 1093 290 1117 258 1230 258 C 1325 258 1345 278 1440 278" />
        <path d="M0 284 C 99 284 121 266 220 266 C 333 266 357 298 470 298 C 583 298 607 264 720 264 C 837 264 863 300 980 300 C 1093 300 1117 268 1230 268 C 1325 268 1345 288 1440 288" />
      </g>
    </svg>
  );
}
