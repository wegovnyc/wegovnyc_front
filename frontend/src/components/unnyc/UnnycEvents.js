'use client';

import { useEffect, useState } from 'react';
import { events as staticEvents } from '@/data/unnyc';

/**
 * Events section with category filter tabs.
 *
 * Renders filterable event cards sourced from `@/data/unnyc`. Events are
 * date-aware: each carries machine-readable `start`/`end` (ISO) alongside the
 * human `date` string, so once past their end date they drop out of the
 * "Upcoming" grid automatically. Categories map to coloured badges:
 * UN (blue), NYC (gold), Joint (navy).
 */

const CATEGORY_LABELS = {
  un: 'UN Event',
  nyc: 'NYC Event',
  joint: 'Joint Event',
};

const FILTERS = ['All', 'UN Events', 'NYC Events', 'Joint Events'];

/** Map filter button label → data category key. */
const filterToCategory = (filter) => {
  if (filter === 'UN Events') return 'un';
  if (filter === 'NYC Events') return 'nyc';
  if (filter === 'Joint Events') return 'joint';
  return null;
};

/** Visitor's local date as 'YYYY-MM-DD'. ISO date strings compare
 *  lexicographically = chronologically, so no timezone math is needed. */
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export default function UnnycEvents({ events = staticEvents }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Soonest-first; deterministic so SSR and client hydration agree.
  const sortedEvents = [...events].sort((a, b) => a.start.localeCompare(b.start));

  // `today` is null until mount so the server-rendered HTML and the first
  // client render are identical (this page is statically built — comparing
  // against a build-time date would cause a hydration mismatch). After mount
  // we know the visitor's real date and drop events whose end has passed.
  const [today, setToday] = useState(null);
  useEffect(() => setToday(todayISO()), []);

  const upcoming = today
    ? sortedEvents.filter((e) => e.end >= today)
    : sortedEvents;

  const category = filterToCategory(activeFilter);
  const filtered = category
    ? upcoming.filter((e) => e.category === category)
    : upcoming;

  return (
    <section id="events" className="unnyc-section unnyc-section--alt">
      <div className="unnyc-container">
        <header className="unnyc-section__header">
          <span className="unnyc-section__eyebrow">What&apos;s Happening</span>
          <h2 className="unnyc-section__title">Upcoming Events</h2>
        </header>

        <div className="unnyc-events__filter">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`unnyc-events__filter-btn ${activeFilter === f ? 'unnyc-events__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="unnyc-events__grid">
          {filtered.map((event) => (
            <article key={event.id} className="unnyc-event-card">
              <span className={`unnyc-event-card__badge unnyc-event-card__badge--${event.category}`}>
                {CATEGORY_LABELS[event.category]}
              </span>
              <time className="unnyc-event-card__date">{event.date}</time>
              <h3 className="unnyc-event-card__title">{event.title}</h3>
              <p className="unnyc-event-card__location">{event.location}</p>
              <p className="unnyc-event-card__desc">{event.description}</p>
              <a href={event.link || '#'} className="unnyc-event-card__link">
                Learn more &rarr;
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              color: 'var(--unnyc-text-muted)',
              padding: 'var(--unnyc-sp-8) 0',
            }}
          >
            No upcoming events in this category right now — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
