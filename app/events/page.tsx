import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { EventsList } from "@/components/events-list";
import { EVENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Galas, mixers, and family gatherings that bring the Community of Banyakigezi in Boston together across Massachusetts and New England.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow={EVENTS.eyebrow}
        title={EVENTS.title}
        lead={EVENTS.lead}
      />
      <EventsList />
    </>
  );
}
