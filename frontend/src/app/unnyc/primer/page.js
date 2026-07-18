import './primer.css';
import PrimerNav from '@/components/unnyc/primer/PrimerNav';
import PrimerHero from '@/components/unnyc/primer/PrimerHero';
import PrimerMovement from '@/components/unnyc/primer/PrimerMovement';
import PrimerConcepts from '@/components/unnyc/primer/PrimerConcepts';
import PrimerCases from '@/components/unnyc/primer/PrimerCases';
import PrimerPolicy from '@/components/unnyc/primer/PrimerPolicy';
import PrimerMap from '@/components/unnyc/primer/PrimerMap';
import PrimerEndorsers from '@/components/unnyc/primer/PrimerEndorsers';
import PrimerResources from '@/components/unnyc/primer/PrimerResources';
import PrimerContacts from '@/components/unnyc/primer/PrimerContacts';
import UnnycEvents from '@/components/unnyc/UnnycEvents';
import UnnycCampaign from '@/components/unnyc/UnnycCampaign';
import UnnycNews from '@/components/unnyc/UnnycNews';
import ScrollReveal from '@/components/unnyc/ScrollReveal';
import { fetchAPI } from '@/lib/api';
import { events as staticEvents, news as staticNews } from '@/data/unnyc';

export const metadata = {
    title: 'The UN Open Source Agenda — A Primer for NYC Government | UNNYC',
    description:
        'The UN system has united around open source: DPI, digital public goods, OSPOs, and the Global Digital Compact. A primer for NYC government technologists — key concepts, case studies, and how NYC can join.',
    openGraph: {
        title: 'The UN Has United Around Open Source. NYC Should Too.',
        description:
            'Key concepts, case studies, and the people to call — a primer for NYC government technologists on the UN open source agenda.',
        type: 'website',
    },
    // Parallel draft of the /unnyc hub — keep out of search indexes until
    // it's promoted to the main URL.
    robots: { index: false, follow: false },
};

/**
 * /unnyc/primer — DRAFT alternate framing of the UNNYC hub.
 *
 * Education-first: explains the concepts the UN system has united around
 * (unopensource.org/agenda) to NYC government tech staff, funneling to the
 * endorse-the-Principles campaign. Same layout/menu concept as the hub,
 * with a self-contained subnav; Events/News/Campaign sections are reused
 * as-is (same CMS data). When approved, this content replaces /unnyc and
 * the global submenu is updated to match.
 */
export const revalidate = 3600;

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
        console.error('Primer: events fetch failed, using static fallback —', e.message);
        return staticEvents;
    }
}

async function getNews() {
    try {
        const res = await fetchAPI('/news-items', { pagination: { pageSize: 100 } });
        const rows = (res?.data || []).map(mapNews);
        return rows.length ? rows : staticNews;
    } catch (e) {
        console.error('Primer: news fetch failed, using static fallback —', e.message);
        return staticNews;
    }
}

export default async function PrimerPage() {
    const [events, news] = await Promise.all([getEvents(), getNews()]);

    return (
        <div className="unnyc-pr">
            <PrimerNav />
            <PrimerHero />
            <ScrollReveal>
                <PrimerMovement />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerConcepts />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerCases />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerPolicy />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycEvents events={events} />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycCampaign />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerMap />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerEndorsers />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerResources />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerContacts />
            </ScrollReveal>
            <ScrollReveal>
                <UnnycNews news={news} />
            </ScrollReveal>
        </div>
    );
}
