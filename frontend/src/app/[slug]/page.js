import { fetchAPI } from '@/lib/api';
import SectionRenderer from '@/components/sections/SectionRenderer';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function getPageBySlug(slug) {
    const { isEnabled } = await draftMode();
    const query = `/pages?filters[slug][$eq]=${slug}&populate[content][on][sections.hero][populate]=*&populate[content][on][sections.rich-text][populate]=*&populate[content][on][sections.embed]=true`;

    try {
        const response = await fetchAPI(query, { isDraftMode: isEnabled });
        return response.data[0];
    } catch (error) {
        console.error(`Error fetching page with slug ${slug}:`, error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = await getPageBySlug(slug);

    if (!page) {
        return {};
    }

    return {
        title: page.title + ' | WeGovNYC',
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const page = await getPageBySlug(slug);

    if (!page) {
        notFound();
    }

    return (
        <div>
            <SectionRenderer sections={page.content} />
        </div>
    );
}
