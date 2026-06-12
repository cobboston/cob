// placeholder — replace with real events
export type EventImage = { src: string; alt: string };

export type EventItem = {
  slug: string;
  title: string;
  dateISO: string;
  dateLabel: string;
  time: string;
  location: string;
  blurb: string;
  tag: string;
  /** Longer-form copy shown on the event's dedicated page. */
  description?: string[];
  /** Photos shown in the event gallery. Drop real photos in /public/events/ and reference them by filename here. */
  gallery?: EventImage[];
};

export const EVENTS = {
  eyebrow: "Events & gatherings",
  title: "Where the community comes together.",
  lead: "From our flagship cultural gala to casual mixers and family days, COB events are how we celebrate heritage, build networks, and welcome one another. Dates below are samples — replace with your real calendar.",
  items: [
    {
      slug: "voting-for-cob-leadership-2026",
      title: "Voting for COB Leadership",
      dateISO: "2026-04-13",
      dateLabel: "Apr 13, 2026",
      time: "6:00 PM – 10:00 PM",
      location: " MA",
      blurb:
        "An evening to elect our next leadership team and set the course for the year ahead.",
      tag: "Flagship",
      description: [
        "Members from across Massachusetts gathered to vote on the next slate of COB leadership and hear from outgoing officers on the year behind us.",
        "Light refreshments were served. Vivian Birchall was voted in as the new President. together with a new team of officers who will lead COB through the next year.",
      ],
      gallery: [
        { src: "/events/1.jpg", alt: "Members in fellowship" },
        { src: "/events/2.jpg", alt: "members" },
        { src: "/events/3.jpg", alt: "members" },
        { src: "/events/4.jpg", alt: "members" },
        { src: "/events/5.jpg", alt: "banyakegizi" },
      ],
    },
    {
      slug: "handover-ceremony-2026",
      title: "Handover Ceremony",
      dateISO: "2026-06-13",
      dateLabel: "Jun 13, 2026",
      time: "5:00 PM – 9:00 PM",
      location: "16A CRAIG ROAD, ACTON, MA",
      blurb:
        "A ceremony to welcome new leaders and transition responsibilities within the community.",
      tag: "Handover",
      description: [
        "We come together to formally welcome our incoming leaders and thank the team rounding out their term of service. Expect speeches, music, and a shared meal.",
        "Family-friendly. RSVP appreciated so we can plan catering.",
      ],
      gallery: [
        { src: "/events/fellowship-dance.svg", alt: "Celebration and dance" },
        { src: "/events/kigezi-gold.svg", alt: "Kigezi landscape" },
        { src: "/events/newengland-autumn.svg", alt: "Autumn in New England" },
      ],
    },
  ] satisfies EventItem[],
  cta: {
    note: "Want to be notified about upcoming gatherings, or host one of your own?",
    label: "Email us about events",
    href: "mailto:info@cobboston.org?subject=COB%20Events",
  },
};
