import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TeamGrid } from "@/components/team-grid";
import { TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the volunteers and leaders behind the Community of Banyakigezi in Boston.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow={TEAM.eyebrow} title={TEAM.title} lead={TEAM.lead} />
      <TeamGrid />
    </>
  );
}
