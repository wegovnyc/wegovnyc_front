import { fetchAPI, getStrapiMedia } from '@/lib/api';
import Link from 'next/link';
import { draftMode } from 'next/headers';

export const revalidate = 3600;

async function getBlogPage() {
    const { isEnabled } = await draftMode();
    try {
        const response = await fetchAPI(
            '/pages?filters[slug][$eq]=blog&populate[content][on][sections.hero][populate]=*&populate[content][on][sections.articles][populate]=*&populate[seo][populate]=*',
            { isDraftMode: isEnabled }
        );
        return response.data?.[0] || null;
    } catch (error) {
        console.error('Error fetching blog page:', error);
        return null;
    }
}

async function getArticles(isDraftMode) {
    try {
        const response = await fetchAPI('/articles?populate=image&sort=originalPublishDate:desc', { isDraftMode });
        return response.data || [];
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}

export async function generateMetadata() {
    const page = await getBlogPage();
    if (page?.seo) {
        return {
            title: page.seo.metaTitle || 'Blog | WeGovNYC',
            description: page.seo.metaDescription || 'Updates and news from WeGovNYC',
        };
    }
    return {
        title: 'Blog | WeGovNYC',
        description: 'Updates and news from WeGovNYC',
    };
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

export default async function BlogPage() {
    const { isEnabled } = await draftMode();
    const page = await getBlogPage();
    const articles = await getArticles(isEnabled);

    // Get hero data from page content if available
    const heroSection = page?.content?.find(c => c.__component === 'sections.hero');
    const heroTitle = heroSection?.title || 'Blog';
    const heroSubtitle = heroSection?.subtitle || 'Updates, tutorials, and news from WeGovNYC';

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="blog-hero-content">
                    <h1>{heroTitle}</h1>
                    <p className="blog-hero-subtitle">
                        {heroSubtitle}
                    </p>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="blog-grid">
                    {articles.length === 0 ? (
                        <p className="no-articles">No articles found.</p>
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
