import type { LucideIcon } from "lucide-react";
import {
  Users,
  Landmark,
  GraduationCap,
  Compass,
  Network,
  HeartHandshake,
} from "lucide-react";

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
