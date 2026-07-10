import UnnycHero from '@/components/unnyc/UnnycHero';
import UnnycAbout from '@/components/unnyc/UnnycAbout';
import UnnycEvents from '@/components/unnyc/UnnycEvents';
import UnnycPolicy from '@/components/unnyc/UnnycPolicy';
import UnnycResources from '@/components/unnyc/UnnycResources';
import UnnycDirectory from '@/components/unnyc/UnnycDirectory';
import UnnycMap from '@/components/unnyc/UnnycMap';
import UnnycNews from '@/components/unnyc/UnnycNews';
import ScrollReveal from '@/components/unnyc/ScrollReveal';
import { fetchAPI } from '@/lib/api';
import { events as staticEvents, news as staticNews } from '@/data/unnyc';

/**
 * Main UNNYC hub page at /unnyc.
 * Composes all UNNYC sections in order with scroll reveal animations.
 *
 * Events and news are managed in Strapi (content types `event` / `news-item`)
 * and fetched here; the static arrays in @/data/unnyc are kept as a fallback
 * so the page still renders if the CMS is unavailable at build/revalidate time.
 * Revalidated hourly so new CMS entries appear without a manual rebuild; the
 * date-aware components then handle upcoming-vs-past and ordering client-side.
 */
export const revalidate = 3600;

/** Strapi `event` -> the shape UnnycEvents expects. */
const mapEvent = (i) => ({
    id: i.id,
    category: i.category,
    date: i.dateLabel,
    start: i.startDate,
    end: i.endDate || i.startDate,
    title: i.title,
    location: i.location,
    description: i.description,
    link: i.link,
});

/** Strapi `news-item` -> the shape UnnycNews expects. */
const mapNews = (i) => ({
    source: i.source,
    title: i.title,
    excerpt: i.excerpt,
    date: i.dateLabel,
    sortDate: i.sortDate,
    link: i.link,
});

async function getEvents() {
    try {
        const res = await fetchAPI('/events', { pagination: { pageSize: 100 } });
        const rows = (res?.data || []).map(mapEvent);
        return rows.length ? rows : staticEvents;
    } catch (e) {
        console.error('UNNYC: events fetch failed, using static fallback —', e.message);
        return staticEvents;
    }
}

async function getNews() {
    try {
        const res = await fetchAPI('/news-items', { pagination: { pageSize: 100 } });
        const rows = (res?.data || []).map(mapNews);
        return rows.length ? rows : staticNews;
    } catch (e) {
        console.error('UNNYC: news fetch failed, using static fallback —', e.message);
        return staticNews;
    }
}

export default async function UnnycPage() {
    const [events, news] = await Promise.all([getEvents(), getNews()]);

    return (
        <>
            <UnnycHero />
            <ScrollReveal>
                <UnnycAbout />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycEvents events={events} />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycPolicy />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycResources />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycDirectory />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycMap />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycNews news={news} />
            </ScrollReveal>
        </>
    );
}
