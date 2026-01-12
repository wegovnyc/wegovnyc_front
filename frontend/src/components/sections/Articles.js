import Link from 'next/link';
import { fetchAPI, getStrapiMedia } from '@/lib/api';

async function getArticles(count) {
    try {
        const response = await fetchAPI(
            `/articles?populate=image&sort=originalPublishDate:desc&pagination[limit]=${count}`
        );
        return response.data || [];
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}

export default async function Articles({ data }) {
    const { title, description, count = 3, showViewAll = true } = data || {};
    const articles = await getArticles(count);

    if (!articles || articles.length === 0) {
        return null;
    }

    return (
        <section className="articles-section">
            <div className="container">
                <h2>{title || 'Latest Articles'}</h2>
                {description && <p className="section-description">{description}</p>}
                <div className="blog-grid">
                    {articles.map((article) => {
                        const imageUrl = article.image?.url ? getStrapiMedia(article.image.url) : null;
                        const date = article.originalPublishDate || article.createdAt;

                        return (
                            <article key={article.documentId} className="blog-card">
                                <Link href={`/blog/${article.slug}`} className="blog-card-image-link">
                                    {imageUrl ? (
                                        <div className="blog-card-image">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={imageUrl} alt={article.title} />
                                        </div>
                                    ) : (
                                        <div className="blog-card-image blog-card-image-placeholder">
                                            <span>WeGovNYC</span>
                                        </div>
                                    )}
                                </Link>
                                <div className="blog-card-content">
                                    <h3 className="blog-card-title">
                                        <Link href={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>
                                    <div className="blog-card-meta-tags">
                                        {article.category && (
                                            <Link href={`/blog/category/${encodeURIComponent(article.category)}`} className="blog-card-category">
                                                {article.category}
                                            </Link>
                                        )}
                                        {article.tags && article.tags.length > 0 && (
                                            article.tags.map((tag, idx) => (
                                                <Link key={idx} href={`/blog/tag/${encodeURIComponent(tag)}`} className="blog-card-tag">
                                                    {tag}
                                                </Link>
                                            ))
                                        )}
                                    </div>
                                    <div className="blog-card-meta">
                                        {article.author && (
                                            <span className="blog-card-author">{article.author}</span>
                                        )}
                                        <time className="blog-card-date">
                                            {new Date(date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>
                                    {article.description && (
                                        <p className="blog-card-excerpt">
                                            {article.description.slice(0, 120)}
                                            {article.description.length > 120 ? '...' : ''}
                                        </p>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
                {showViewAll && (
                    <div className="articles-footer">
                        <Link href="/blog" className="btn btn-secondary">
                            View All Articles
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
