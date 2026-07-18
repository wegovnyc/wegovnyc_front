import { news as staticNews, events as staticEvents } from '@/data/unnyc';

const CATEGORY_LABELS = {
    un: 'UN Event',
    nyc: 'NYC Event',
    joint: 'Joint Event',
};

/**
 * PrimerNewsEvents — merged "News & Events" section for the primer page.
 *
 * Replaces the hub's separate Upcoming Events section: upcoming events are
 * folded into the news grid as cards (marked "Upcoming · …", gold-edged via
 * primer.css), listed soonest-first ahead of the news items, which keep
 * their newest-first order. Past events are dropped at render time
 * (revalidate window; the weekly CMS hygiene cron unpublishes them anyway).
 */
export default function PrimerNewsEvents({ news = staticNews, events = staticEvents }) {
    const today = new Date().toISOString().slice(0, 10);

    const eventCards = events
        .filter((e) => (e.end || e.start || '') >= today)
        .sort((a, b) => (a.start || '').localeCompare(b.start || ''))
        .map((e) => ({
            isEvent: true,
            source: `Upcoming · ${CATEGORY_LABELS[e.category] || 'Event'}`,
            title: e.title,
            excerpt: `${e.location ? `${e.location}. ` : ''}${e.description || ''}`,
            date: e.date,
            link: e.link,
        }));

    const newsCards = [...news]
        .sort((a, b) => (b.sortDate || '').localeCompare(a.sortDate || ''))
        .map((n) => ({ ...n, isEvent: false }));

    const cards = [...eventCards, ...newsCards];

    return (
        <section id="news" className="unnyc-section">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">What&rsquo;s Happening</span>
                    <h2 className="unnyc-section__title">News &amp; Events</h2>
                </header>

                <div className="unnyc-news__grid">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className={`unnyc-news__card${item.isEvent ? ' unnyc-news__card--event' : ''}`}
                        >
                            <span className="unnyc-news__source">{item.source}</span>
                            <h3 className="unnyc-news__title">{item.title}</h3>
                            <p className="unnyc-news__excerpt">{item.excerpt}</p>
                            <div className="unnyc-news__footer">
                                <time className="unnyc-news__date">{item.date}</time>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="unnyc-news__link"
                                    >
                                        {item.isEvent ? 'Learn more' : 'Read more'}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
