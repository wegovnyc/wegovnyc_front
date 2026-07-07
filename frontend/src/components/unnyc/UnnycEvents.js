'use client';

import { useState } from 'react';
import { events } from '@/data/unnyc';

/**
 * Events section with category filter tabs.
 *
 * Renders filterable event cards sourced from `@/data/unnyc`.
 * Categories map to coloured badges: UN (blue), NYC (gold), Joint (navy).
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

export default function UnnycEvents() {
  const [activeFilter, setActiveFilter] = useState('All');

  const category = filterToCategory(activeFilter);
  const filtered = category
    ? events.filter((e) => e.category === category)
    : events;

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
      </div>
    </section>
  );
}
