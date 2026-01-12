import { fetchAPI, getStrapiMedia } from '@/lib/api';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateMetadata({ params }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    return {
        title: `${decodedCategory} | Blog | WeGovNYC`,
        description: `Articles in the ${decodedCategory} category`,
    };
}

async function getArticlesByCategory(category) {
    try {
        const decodedCategory = decodeURIComponent(category);
        const response = await fetchAPI(
            `/articles?filters[category][$eq]=${encodeURIComponent(decodedCategory)}&populate=image&sort=originalPublishDate:desc`
        );
        return response.data || [];
    } catch (error) {
        console.error('Error fetching articles by category:', error);
        return [];
    }
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default async function CategoryPage({ params }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const articles = await getArticlesByCategory(category);

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="blog-hero-content">
                    <h1>{decodedCategory}</h1>
                    <p className="blog-hero-subtitle">
                        Articles in the {decodedCategory} category
                    </p>
                    <Link href="/blog" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                        ← Back to All Articles
                    </Link>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="blog-grid">
                    {articles.length === 0 ? (
                        <p className="no-articles">No articles found in this category.</p>
                    ) : (
                        articles.map((article) => {
                            const imageUrl = article.image?.url
                                ? getStrapiMedia(article.image.url)
                                : null;

                            return (
                                <article key={article.id} className="blog-card">
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
                                        <h2 className="blog-card-title">
                                            <Link href={`/blog/${article.slug}`}>
                                                {article.title}
                                            </Link>
                                        </h2>
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
                                                {formatDate(article.originalPublishDate)}
                                            </time>
                                        </div>
                                        {article.description && (
                                            <p className="blog-card-excerpt">{article.description}</p>
                                        )}
                                    </div>
                                </article>
                            );
                        })
                    )}
                </div>
            </section>
        </div>
    );
}
