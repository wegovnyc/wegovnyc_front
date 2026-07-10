import { news as staticNews } from '@/data/unnyc';

/**
 * UnnycNews — Server component rendering the news and announcements grid.
 * Each card shows source, title, excerpt, date, and an external link.
 * `news` comes from Strapi via the page (static @/data/unnyc as fallback).
 * Sorted newest-first by machine-readable `sortDate` (ISO) so the most
 * recent announcements lead regardless of source ordering.
 */
export default function UnnycNews({ news = staticNews }) {
    const sortedNews = [...news].sort((a, b) =>
        (b.sortDate || '').localeCompare(a.sortDate || '')
    );

    return (
        <section id="news" className="unnyc-section">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">Latest Updates</span>
                    <h2 className="unnyc-section__title">News &amp; Announcements</h2>
                </header>

                <div className="unnyc-news__grid">
                    {sortedNews.map((item, index) => (
                        <div key={index} className="unnyc-news__card">
                            <span className="unnyc-news__source">{item.source}</span>
                            <h3 className="unnyc-news__title">{item.title}</h3>
                            <p className="unnyc-news__excerpt">{item.excerpt}</p>
                            <div className="unnyc-news__footer">
                                <time className="unnyc-news__date">{item.date}</time>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="unnyc-news__link"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
