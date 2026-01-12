import { fetchAPI, getStrapiMedia } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

async function getArticle(slug) {
    try {
        const response = await fetchAPI(`/articles?filters[slug][$eq]=${slug}&populate=image`);
        return response.data?.[0] || null;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        return { title: 'Article Not Found' };
    }

    return {
        title: `${article.title} | WeGovNYC Blog`,
        description: article.description || article.title,
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

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    const imageUrl = article.image?.url ? getStrapiMedia(article.image.url) : null;

    return (
        <article className="article-page">
            <header className="article-header">
                <Link href="/blog" className="article-back-link">
                    ← Back to Blog
                </Link>
                <h1 className="article-title">{article.title}</h1>
                <div className="article-meta">
                    {article.originalPublishDate && (
                        <time className="article-date">
                            {formatDate(article.originalPublishDate)}
                        </time>
                    )}
                    {article.author && (
                        <span className="article-author">By {article.author}</span>
                    )}
                </div>
                {(article.category || (article.tags && article.tags.length > 0)) && (
                    <div className="article-tags">
                        {article.category && (
                            <Link href={`/blog/category/${encodeURIComponent(article.category)}`} className="blog-card-category">
                                {article.category}
                            </Link>
                        )}
                        {article.tags && article.tags.map((tag, idx) => (
                            <Link key={idx} href={`/blog/tag/${encodeURIComponent(tag)}`} className="blog-card-tag">
                                {tag}
                            </Link>
                        ))}
                    </div>
                )}
            </header>

            {imageUrl && (
                <div className="article-featured-image">
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        width={1200}
                        height={600}
                        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
            )}

            <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </article>
    );
}
