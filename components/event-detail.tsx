import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { EventGallery } from "@/components/event-gallery";
import type { EventItem } from "@/lib/content";

export function EventDetail({ event }: { event: EventItem }) {
  return (
    <section className="bg-cream px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Link
            href="/events"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-deep"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            All events
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-clay/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay">
              {event.tag}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <CalendarDays size={14} /> {event.dateLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-tight text-forest-deep sm:text-5xl">
            {event.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-ink/75">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} className="text-forest" /> {event.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-forest" /> {event.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            {event.blurb}
          </p>
        </Reveal>

        {event.description && event.description.length > 0 && (
          <div className="mt-6 space-y-4">
            {event.description.map((para, i) => (
              <Reveal key={i} delay={0.14 + i * 0.04}>
                <p className="text-[1.02rem] leading-relaxed text-muted">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        )}

        {event.gallery && event.gallery.length > 0 && (
          <div className="mt-14">
            <Reveal>
              <h2 className="eyebrow text-clay">Gallery</h2>
            </Reveal>
            <div className="mt-6">
              <EventGallery images={event.gallery} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
