// placeholder — replace with real team members
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
};

export const TEAM = {
  eyebrow: "Our team",
  title: "The people behind COB.",
  lead: "COB is powered by volunteers who give their time so the community can flourish. (Names below are placeholders — replace with your real leadership.)",
  members: [
    {
      name: "Vivian Birchall",
      role: "President",
      bio: "Guides the community's vision and partnerships across New England.",
      initials: "VB",
      image: "/team/viv.jpeg",
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
