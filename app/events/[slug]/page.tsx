import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetail } from "@/components/event-detail";
import { EVENTS } from "@/lib/content";

export function generateStaticParams() {
  return EVENTS.items.map((event) => ({ slug: event.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const event = EVENTS.items.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.blurb,
  };
}

export default async function EventPage(props: Props) {
  const { slug } = await props.params;
  const event = EVENTS.items.find((e) => e.slug === slug);
  if (!event) notFound();
  return <EventDetail event={event} />;
}
