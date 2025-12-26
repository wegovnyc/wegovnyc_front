import Link from 'next/link';
import { getNewsFeed } from '@/lib/rss';

export default async function NewsFeed({ data }) {
    const items = await getNewsFeed();
    const { title, description } = data || {};

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <section className="news-feed-section">
            <div className="container">
                <h2>{title || 'News & Events'}</h2>
                {description && <p className="section-description">{description}</p>}
                <div className="news-grid">
                    {items.map((item) => (
                        <article key={item.guid || item.link} className="news-card">
                            {item.imageUrl && (
                                <div className="news-image-wrapper">
                                    <img src={item.imageUrl} alt={item.title} className="news-image" />
                                </div>
                            )}
                            <div className="news-content">
                                <div className="news-date">
                                    {new Date(item.pubDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                                <h3>
                                    <Link href={item.link} target="_blank" className="news-title">
                                        {item.title}
                                    </Link>
                                </h3>
                                <div className="news-excerpt" dangerouslySetInnerHTML={{ __html: item.contentSnippet?.slice(0, 150) + (item.contentSnippet?.length > 150 ? '...' : '') || item.content?.slice(0, 150) + '...' }} />
                                <Link href={item.link} target="_blank" className="news-link">
                                    Read More &rarr;
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="news-footer">
                    <Link href="https://wegov.nyc/news-events/" target="_blank" className="btn btn-secondary">
                        View All News
                    </Link>
                </div>
            </div>
        </section>
    );
}
