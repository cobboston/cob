export const HERO = {
  eyebrow: "Community of Banyakigezi · Boston",
  title: "From the terraced hills of Kigezi to the heart of New England.",
  // The word that gets the accent treatment in the headline.
  emphasis: "Kigezi",
  lead: "We bring together people with roots in Uganda's Kigezi region and their families across Massachusetts and New England — building networks of trust, mentorship, and friendship that help every member flourish.",
  primaryCta: { label: "Join the community", href: "#join" },
  secondaryCta: { label: "Our story", href: "/about" },
};

export type HeroSlide = { src: string; alt: string; caption: string };

/**
 * The single hero carousel card cycles through these slides, one per second
 * (max three). Replace the SVG placeholders with real photos (any aspect
 * ratio; they're cropped to cover) by swapping the files in /public/gallery
 * or pointing src at new files. More placeholders live in /public/gallery.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/gallery/kigezi-dawn.svg",
    alt: "Terraced Kigezi hills at dawn",
    caption: "The hills of Kigezi",
  },
  {
    src: "/gallery/fellowship-dance.svg",
    alt: "Community celebrating together",
    caption: "Fellowship & celebration",
  },
  {
    src: "/gallery/newengland-city.svg",
    alt: "Boston skyline at dusk",
    caption: "Home in New England",
  },
];
