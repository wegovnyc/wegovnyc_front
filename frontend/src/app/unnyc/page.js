import './primer.css';
import HeaderHeightVar from '@/components/unnyc/primer/HeaderHeightVar';
import PrimerHero from '@/components/unnyc/primer/PrimerHero';
import PrimerMovement from '@/components/unnyc/primer/PrimerMovement';
import PrimerConcepts from '@/components/unnyc/primer/PrimerConcepts';
import PrimerCases from '@/components/unnyc/primer/PrimerCases';
import PrimerPolicy from '@/components/unnyc/primer/PrimerPolicy';
import PrimerMovementNow from '@/components/unnyc/primer/PrimerMovementNow';
import PrimerResources from '@/components/unnyc/primer/PrimerResources';
import PrimerContacts from '@/components/unnyc/primer/PrimerContacts';
import UnnycCampaign from '@/components/unnyc/UnnycCampaign';
import PrimerNewsEvents from '@/components/unnyc/primer/PrimerNewsEvents';
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
};

/**
 * /unnyc — the UNNYC hub, framed as an education-first primer on the UN open
 * source agenda (unopensource.org/agenda) for NYC government technologists,
 * funneling to the endorse-the-Principles campaign.
 *
 * Sections are navigated by the global UNNYC submenu (see app/layout.js
 * children + Navbar UNNYC_SPY_IDS, kept in sync with the section ids here).
 * The Campaign section is reused as-is; CMS events + news merge into one
 * "News & Events" section (PrimerNewsEvents). The full crosswalk write-up
 * lives at /unnyc/crosswalk. Revalidated hourly so new CMS entries appear.
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
        <div className="unnyc-pr">
            <HeaderHeightVar />
            <PrimerHero />
            <UnnycCampaign hideHeader />
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
                <PrimerMovementNow />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerResources />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerContacts />
            </ScrollReveal>
            <ScrollReveal>
                <PrimerNewsEvents news={news} events={events} />
            </ScrollReveal>
        </div>
    );
}
