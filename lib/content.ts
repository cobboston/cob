import type { LucideIcon } from "lucide-react";
import {
  Users,
  Landmark,
  GraduationCap,
  Compass,
  Network,
  HeartHandshake,
} from "lucide-react";

export const ORG = {
  name: "Community of Banyakigezi - Boston",
  short: "COB Boston",
  region: "Massachusetts & New England",
  email: "info@cobboston.org",
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
] as const;

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

export const DISTRICTS = [
  "Kabale",
  "Rubanda",
  "Rukiga",
  "Kanungu",
  "Kisoro",
  "Rukungiri",
];

export const ABOUT = {
  eyebrow: "Who we are",
  title: "Roots in the hills of Kigezi.",
  paragraphs: [
    "The Banyakigezi are people whose roots trace to the historic Kigezi region of southwestern Uganda — a land of terraced hills long known for remarkable resilience, strong family values, educational achievement, entrepreneurship, and service to society.",
    "The Community of Banyakigezi in Boston was established to unite, support, and empower people with roots in Kigezi and their families throughout New England. We are a platform for fellowship, cultural preservation, mentorship, leadership development, professional networking, and community engagement.",
    "More than anything, COB exists to help members thrive socially, professionally, and economically in Massachusetts and the United States — creating pathways for success for both current and future generations.",
  ],
  stats: [
    { value: "6", label: "Kigezi districts" },
    { value: "1", label: "growing community" },
    { value: "∞", label: "shared ambition" },
  ],
};

export const HERITAGE = {
  eyebrow: "A rich, inclusive heritage",
  title: "Many communities, one identity.",
  lead: "The Kigezi region is home to diverse communities and shares deep historical and cultural ties with neighboring Ankole and Rwanda — connections that have shaped a heritage that is both rich and welcoming.",
  peoples: [
    {
      name: "Bakiga",
      note: "“People of the mountains” — farmers of the terraced highlands.",
    },
    {
      name: "Bafumbira",
      note: "Communities of the Kisoro highlands near the volcanoes.",
    },
    {
      name: "Bahororo",
      note: "Carrying ties that bridge Kigezi and neighboring Ankole.",
    },
    {
      name: "Batwa",
      note: "Among the region's oldest and most enduring communities.",
    },
  ],
};

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const PILLARS: Pillar[] = [
  {
    title: "Fellowship",
    description:
      "Gathering as a community to celebrate culture, mark milestones, and stay connected far from home.",
    icon: Users,
  },
  {
    title: "Cultural Preservation",
    description:
      "Honoring the traditions, language, and values of Kigezi and passing them to the next generation.",
    icon: Landmark,
  },
  {
    title: "Mentorship",
    description:
      "Pairing experience with ambition so members can navigate life, school, and work in the U.S.",
    icon: GraduationCap,
  },
  {
    title: "Leadership Development",
    description:
      "Growing confident leaders who serve the community and contribute to civic life in New England.",
    icon: Compass,
  },
  {
    title: "Professional Networking",
    description:
      "Connecting professionals, founders, and students to share opportunity, knowledge, and resources.",
    icon: Network,
  },
  {
    title: "Community Engagement",
    description:
      "Supporting one another and giving back to the wider society we now call home.",
    icon: HeartHandshake,
  },
];

export const MEMBER_ROLES = [
  "Professionals",
  "Business owners",
  "Educators",
  "Healthcare workers",
  "Students",
  "Public servants",
  "Faith leaders",
  "Families",
];

export const COMMUNITY = {
  eyebrow: "Across New England",
  title: "A vibrant network in every sector.",
  lead: "From Boston to the wider region, the Banyakigezi community has grown into a network of people who contribute to every part of society while staying deeply connected to their heritage and values.",
};

export const VISION = {
  label: "Vision",
  text: "To transform shared heritage into opportunity, leadership, and lasting impact.",
};

export const MISSION = {
  label: "Mission",
  text: "To bring together the people of Kigezi and their families to build networks of trust, mentorship, friendship, and opportunity that enable members to flourish socially, professionally, and economically while contributing to the greater good.",
};

export const VALUES_QUOTE = {
  text: "When one member succeeds, the entire community is strengthened.",
  attribution: "The belief at the heart of COB",
};

export const JOIN = {
  eyebrow: "Get involved",
  title: "There's a place for you here.",
  lead: "Whether you've just arrived or have called New England home for years, COB is a community of trust, mentorship, and friendship — built for current and future generations alike.",
  bullets: [
    "Connect with fellow Banyakigezi across Massachusetts and New England",
    "Find mentorship, opportunities, and a network that has your back",
    "Help preserve and celebrate the culture and values of Kigezi",
  ],
  cta: { label: "Email us to join", href: `mailto:hello@cobboston.org` },
};

export const EXPLORE = {
  eyebrow: "Explore",
  title: "Find your way in.",
  lead: "However you'd like to connect, there's a door for you — learn our story, join a gathering, or meet the people behind COB.",
  cards: [
    {
      title: "Our story",
      blurb:
        "The heritage of Kigezi, who we are, and the vision and mission that guide us.",
      href: "/about",
      cta: "Read about us",
    },
    {
      title: "Events",
      blurb:
        "Galas, mixers, and family gatherings that bring the community together.",
      href: "/events",
      cta: "See what's on",
    },
    {
      title: "Team",
      blurb:
        "The volunteers and leaders who keep the community thriving across New England.",
      href: "/team",
      cta: "Meet the team",
    },
  ],
};

// placeholder — replace with real events
export type EventItem = {
  title: string;
  dateISO: string;
  dateLabel: string;
  time: string;
  location: string;
  blurb: string;
  tag: string;
};

export const EVENTS = {
  eyebrow: "Events & gatherings",
  title: "Where the community comes together.",
  lead: "From our flagship cultural gala to casual mixers and family days, COB events are how we celebrate heritage, build networks, and welcome one another. Dates below are samples — replace with your real calendar.",
  items: [
    {
      title: "Annual Banyakigezi Cultural Gala",
      dateISO: "2026-10-17",
      dateLabel: "Oct 17, 2026",
      time: "6:00 PM – 10:00 PM",
      location: "Boston Marriott, Cambridge, MA",
      blurb:
        "An evening of music, dance, food, and fellowship celebrating the heritage of Kigezi — our signature gathering of the year.",
      tag: "Flagship",
    },
    {
      title: "Professional & Mentorship Mixer",
      dateISO: "2026-07-25",
      dateLabel: "Jul 25, 2026",
      time: "5:30 PM – 8:00 PM",
      location: "Downtown Boston (venue TBA)",
      blurb:
        "Connect professionals, founders, and students for mentorship, introductions, and shared opportunity.",
      tag: "Networking",
    },
    {
      title: "New Arrivals Welcome Brunch",
      dateISO: "2026-06-28",
      dateLabel: "Jun 28, 2026",
      time: "11:00 AM – 1:30 PM",
      location: "Community Hall, Waltham, MA",
      blurb:
        "A warm welcome for those newly in New England — meet families, find resources, and get settled with people who have your back.",
      tag: "Welcome",
    },
    {
      title: "Summer Family Day & Picnic",
      dateISO: "2026-08-15",
      dateLabel: "Aug 15, 2026",
      time: "12:00 PM – 5:00 PM",
      location: "Larz Anderson Park, Brookline, MA",
      blurb:
        "Games, food, and intergenerational fun — a relaxed day for the whole family to connect.",
      tag: "Family",
    },
    {
      title: "Spring Community Meeting",
      dateISO: "2026-04-12",
      dateLabel: "Apr 12, 2026",
      time: "2:00 PM – 4:00 PM",
      location: "Online & Boston, MA",
      blurb:
        "Our quarterly gathering to share updates, plan ahead, and hear from members across the region.",
      tag: "Members",
    },
  ] satisfies EventItem[],
  cta: {
    note: "Want to be notified about upcoming gatherings, or host one of your own?",
    label: "Email us about events",
    href: "mailto:hello@cobboston.org?subject=COB%20Events",
  },
};

// placeholder — replace with real team members
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const TEAM = {
  eyebrow: "Our team",
  title: "The people behind COB.",
  lead: "COB is powered by volunteers who give their time so the community can flourish. (Names below are placeholders — replace with your real leadership.)",
  members: [
    {
      name: "Vivian Birchal",
      role: "President",
      bio: "Guides the community's vision and partnerships across New England.",
      initials: "AM",
    },
    {
      name: "Name Name",
      role: "Vice President",
      bio: "Supports programs and steps in to lead initiatives across the region.",
      initials: "NN",
    },
    {
      name: "Name Name ",
      role: "Secretary",
      bio: "Keeps the community organized, informed, and connected.",
      initials: "NN",
    },
    {
      name: "Name  Name ",
      role: "Treasurer",
      bio: "Stewards the community's resources with care and transparency.",
      initials: "NN",
    },
    {
      name: "Name  Name",
      role: "Events Lead",
      bio: "Plans the gatherings that bring members together throughout the year.",
      initials: "NN",
    },
    {
      name: "Name  Name ",
      role: "Membership Lead",
      bio: "Welcomes new members and helps everyone find their place in COB.",
      initials: "NN",
    },
  ] satisfies TeamMember[],
  cta: {
    note: "Interested in helping lead or volunteer?",
    label: "Get involved",
    href: "/#join",
  },
};
