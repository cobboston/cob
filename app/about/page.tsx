import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { About } from "@/components/about";
import { Heritage } from "@/components/heritage";
import { VisionMission } from "@/components/vision-mission";
import { Values } from "@/components/values";

export const metadata: Metadata = {
  title: "About",
  description:
    "The heritage of Kigezi, who the Banyakigezi are, and the vision and mission guiding the Community of Banyakigezi in Boston.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A community rooted in heritage."
        lead="From the terraced hills of Kigezi to the heart of New England — who we are, where we come from, and what guides us forward."
      />
      <About />
      <Heritage />
      <VisionMission />
      <Values />
    </>
  );
}
