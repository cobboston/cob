import Link from "next/link";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { EVENTS, type EventItem } from "@/lib/content";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function parseDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { year: y, month: MONTHS[m - 1], day: d };
}

function EventCard({ event, past }: { event: EventItem; past?: boolean }) {
  const { month, day } = parseDate(event.dateISO);
  return (
    <Link
      href={`/events/${event.slug}`}
      className={`group flex flex-col gap-5 rounded-2xl border border-forest/10 bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-forest/25 hover:shadow-md sm:flex-row sm:items-stretch sm:gap-6 ${
        past ? "opacity-75" : ""
      }`}
    >
      <div
        className={`flex shrink-0 flex-col items-center justify-center rounded-xl px-5 py-4 sm:w-24 ${
          past ? "bg-sand text-forest" : "bg-forest text-cream"
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-wide">
          {month}
        </span>
        <span className="font-display text-3xl font-semibold leading-none">
          {day}
        </span>
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-clay/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-clay">
            {event.tag}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <CalendarDays size={13} /> {event.dateLabel}
          </span>
        </div>
        <h3 className="font-display mt-2 inline-flex items-center gap-1.5 text-xl font-semibold text-forest-deep">
          {event.title}
          <ArrowRight
            size={16}
            className="text-forest opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
          />
        </h3>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
          {event.blurb}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink/70">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} className="text-forest" /> {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-forest" /> {event.location}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function EventsList() {
  const todayISO = new Date().toISOString().slice(0, 10);
  const sorted = [...EVENTS.items].sort((a, b) =>
    a.dateISO.localeCompare(b.dateISO),
  );
  const upcoming = sorted.filter((e) => e.dateISO >= todayISO);
  const past = sorted.filter((e) => e.dateISO < todayISO).reverse();

  return (
    <section className="bg-cream px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        {upcoming.length > 0 && (
          <>
            <Reveal>
              <h2 className="eyebrow text-clay">Upcoming</h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {upcoming.map((event, i) => (
                <Reveal key={event.title} delay={i * 0.05}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {past.length > 0 && (
          <>
            <Reveal>
              <h2 className="eyebrow mt-16 text-muted">Past</h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {past.map((event, i) => (
                <Reveal key={event.title} delay={i * 0.05}>
                  <EventCard event={event} past />
                </Reveal>
              ))}
            </div>
          </>
        )}

        <Reveal>
          <div className="mt-16 rounded-3xl border border-forest/12 bg-sand p-8 text-center sm:p-10">
            <p className="mx-auto max-w-xl text-lg text-ink/80">
              {EVENTS.cta.note}
            </p>
            <a
              href={EVENTS.cta.href}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream transition-all hover:bg-forest-deep"
            >
              {EVENTS.cta.label}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
