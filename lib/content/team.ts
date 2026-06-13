export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
};

const COMMITTEE = "/committee";

export const TEAM = {
  eyebrow: "Our team",
  title: "The people behind COB Boston.",
  lead: "Meet the 2026 leadership cabinet of the Community of Banyakigezi — Boston. Volunteers who give their time so the community can flourish across New England.",
  members: [
    {
      name: "Viviane Kobusingye Birchall",
      role: "President",
      bio: "Guides the community's vision and partnerships across New England.",
      initials: "VB",
      image: `${COMMITTEE}/viviane-kobusingye-birchall.jpeg`,
    },
    {
      name: "Moses Ngabirano",
      role: "Vice President",
      bio: "Supports programs and steps in to lead initiatives across the region.",
      initials: "MN",
      image: `${COMMITTEE}/moses-ngabirano.jpeg`,
    },
    {
      name: "Jackie Rwanika-LaRoche",
      role: "Treasurer",
      bio: "Stewards the community's resources with care and transparency.",
      initials: "JR",
      image: `${COMMITTEE}/jackie-rwanika-laroche.jpeg`,
    },
    {
      name: "Kwesiga Ivan Denis",
      role: "Director of External Affairs",
      bio: "Builds relationships with partner organizations and the wider diaspora.",
      initials: "KD",
      image: `${COMMITTEE}/kwesiga-ivan-denis.jpeg`,
    },
    {
      name: "Bwengye Banarbas",
      role: "Director without Portfolio",
      bio: "Lends a hand across the cabinet wherever the community needs it most.",
      initials: "BB",
      image: `${COMMITTEE}/bwengye-banarbas.jpeg`,
    },
    {
      name: "Annette Mukidi",
      role: "Director of Mobilization",
      bio: "Rallies members to show up, participate, and grow the community.",
      initials: "AM",
      image: `${COMMITTEE}/annette-mukidi.jpeg`,
    },
    {
      name: "Molly Nyesigomwe",
      role: "Director of Outreach and Social Publicity",
      bio: "Tells the COB story across social channels and to new members.",
      initials: "MN",
      image: `${COMMITTEE}/molly-nyesigomwe.jpeg`,
    },
    {
      name: "Anita Brave",
      role: "Assistant Director of Outreach and Publicity",
      bio: "Helps spread the word and welcome newcomers into the community.",
      initials: "AB",
      image: `${COMMITTEE}/anita-brave.jpeg`,
    },
    {
      name: "Asasira Arthur",
      role: "Director of Information Technology and Records",
      bio: "Keeps the community's tools, records, and digital home running.",
      initials: "AA",
      image: `${COMMITTEE}/asasira-arthur.jpeg`,
    },
  ] satisfies TeamMember[],
  cta: {
    note: "Interested in helping lead or volunteer?",
    label: "Get involved",
    href: "/#join",
  },
};
