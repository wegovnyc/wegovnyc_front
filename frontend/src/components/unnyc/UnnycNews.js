import { news } from '@/data/unnyc';

/**
 * UnnycNews — Server component rendering the news and announcements grid.
 * Each card shows source, title, excerpt, date, and an external link.
 */
export default function UnnycNews() {
    return (
        <section id="news" className="unnyc-section">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">Latest Updates</span>
                    <h2 className="unnyc-section__title">News &amp; Announcements</h2>
                </header>

                <div className="unnyc-news__grid">
                    {news.map((item, index) => (
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
