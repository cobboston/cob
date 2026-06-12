export const HERO = {
  eyebrow: "Community of Banyakigezi · Boston",
  title: "From the terraced hills of Kigezi to the heart of New England.",
  // The word that gets the accent treatment in the headline.
  emphasis: "Kigezi",
  lead: "Building networks of trust, mentorship, and friendship that help every member flourish.",
  primaryCta: { label: "Join the community", href: "#join" },
  secondaryCta: { label: "Our story", href: "/about" },
};

export type HeroSlide = { src: string; alt: string; caption: string };

/**
 * Default carousel rotation used by interior pages (About, Events). The
 * homepage instead samples randomly from BOSTON_POOL and HOME_POOL via
 * pickAlternatingSlides().
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/gallery/home/home-1.JPG",
    alt: "The hills of Kigezi",
    caption: "The hills of Kigezi",
  },
  {
    src: "/gallery/boston/boston-1.jpg",
    alt: "Boston gathering",
    caption: "Home in New England",
  },
  {
    src: "/gallery/home/home-3.JPG",
    alt: "Highlands of southwestern Uganda",
    caption: "Kigezi highlands",
  },
];

export const BOSTON_POOL: HeroSlide[] = [
  { src: "/gallery/boston/boston-1.jpg", alt: "Boston ", caption: "New England" },
  { src: "/gallery/boston/boston-3.jpg", alt: "Boston", caption: "New England" },
  { src: "/gallery/boston/boston2.jpg", alt: "Boston", caption: "Boston" },
];

export const HOME_POOL: HeroSlide[] = [
  { src: "/gallery/home/home-1.JPG", alt: "Kigezi", caption: "Kigezi" },
  { src: "/gallery/home/home-2.JPG", alt: "Kigezi", caption: "Kigezi" },
  { src: "/gallery/home/home-3.JPG", alt: "Kigezi", caption: "Kigezi" },
  { src: "/gallery/home/home-4.JPG", alt: "Kigezi", caption: "Kigezi" },
  { src: "/gallery/home/home-5.JPG", alt: "Kigezi", caption: "Kigezi" },
];

export const ABOUT_POOL: HeroSlide[] = [
  { src: "/gallery/about/about-1.JPG", alt: "Community of Banyakigezi", caption: "Our story" },
  { src: "/gallery/about/about-2.JPG", alt: "Community of Banyakigezi", caption: "Our story" },
  { src: "/gallery/about/about-3.JPG", alt: "Community of Banyakigezi", caption: "Our story" },
  { src: "/gallery/about/about-4.JPG", alt: "Community of Banyakigezi", caption: "Our story" },
  { src: "/gallery/about/about-5.JPG", alt: "Community of Banyakigezi", caption: "Our story" },
  { src: "/gallery/about/about-6.JPG", alt: "Community of Banyakigezi", caption: "Our story" },
];

export const EVENTS_POOL: HeroSlide[] = [
  { src: "/gallery/events/events-1.jpg", alt: "Community event", caption: "Gatherings" },
  { src: "/gallery/events/events-2.jpeg", alt: "Community event", caption: "Gatherings" },
  { src: "/gallery/events/events-3.jpg", alt: "Community event", caption: "Gatherings" },
  { src: "/gallery/events/events-4.jpg", alt: "Community event", caption: "Gatherings" },
];

export const TEAM_POOL: HeroSlide[] = [
  { src: "/gallery/team/team-1.jpeg", alt: "Community of Banyakigezi team", caption: "Our team" },
  { src: "/gallery/team/team-2.jpg", alt: "Community of Banyakigezi team", caption: "Our team" },
  { src: "/gallery/team/team-3.jpg", alt: "Community of Banyakigezi team", caption: "Our team" },
];

function sample<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

/**
 * Pick `perPool` random slides from each pool and interleave them.
 * Result length is up to perPool * pools.length (less if a pool is short).
 * With a single pool this just returns `perPool` random shuffled slides.
 */
export function pickRandomSlides(
  pools: HeroSlide[][],
  perPool: number,
): HeroSlide[] {
  const sampled = pools.map((p) => sample(p, perPool));
  const out: HeroSlide[] = [];
  for (let i = 0; i < perPool; i++) {
    for (const s of sampled) {
      if (s[i]) out.push(s[i]);
    }
  }
  return out;
}
