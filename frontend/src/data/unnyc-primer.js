/**
 * Content for the UNNYC hub (/unnyc) — the education-first "primer" framing.
 * Audience: NYC government technology staff. Goal: explain the key concepts the UN system has
 * united around (unopensource.org/agenda) and how the world is advancing
 * them, funneling to the endorse-the-Principles campaign.
 *
 * Sourced/verified against: unite.un.org (UN OS Principles + the 16
 * endorsing organizations, 25 Mar 2025), unopensource.org/agenda (OSW 2026
 * themes), OSOR/Interoperable Europe (Barcelona, Paris, Munich OSPOs),
 * sovereign.tech (funding figures), x-road.global / NIIS (Estonia).
 * Static-first (like data/unnyc.js); move to Strapi later if needed.
 */

export const primerHero = {
    eyebrow: 'A Primer for NYC Government Technologists',
    titleParts: [
        'The UN in New York City is organizing a Global Movement for Open Source Government.',
        'New York City Government Should Join It.',
    ],
    subtitle:
        'Every June, UN Open Source Week brings 2,600+ participants from 120+ countries to UN Headquarters in Manhattan. In 2025, Barcelona became the first city to formally endorse the UN Open Source Principles. The city that hosts the movement hasn’t joined it — yet.',
    ctas: [
        { text: 'Sign the Open Letter', href: '/unnyc/campaign', style: 'primary', internal: true },
        { text: 'Key Concepts', href: '#concepts', style: 'outline' },
        { text: 'Case Studies', href: '#cases', style: 'outline' },
    ],
    stats: [
        { number: '8', label: 'UN Open Source Principles' },
        { number: '17+', label: 'Endorsing Organizations' },
        { number: '120+', label: 'Countries at UN OSW 2026' },
        { number: '1', label: 'City Endorsed — NYC Next?' },
    ],
};

export const movement = {
    eyebrow: 'The Movement',
    title: 'How the UN Came to Champion Open Source',
    lede:
        'Open source at the UN is not a side conversation — it is official policy direction, adopted at the highest coordination level of the UN system and backed by an annual summit at UN Headquarters. Here’s the arc.',
    timeline: [
        {
            year: '2019',
            title: 'Digital Public Goods Alliance founded',
            desc: 'A multi-stakeholder initiative (endorsed in the Secretary-General’s digital cooperation agenda) begins vetting and promoting open source solutions that advance the SDGs.',
        },
        {
            year: '2020',
            title: 'SG’s Roadmap for Digital Cooperation',
            desc: 'The Secretary-General names digital public goods — open source software, open data, open standards — as essential to an inclusive digital future.',
        },
        {
            year: '2023–24',
            title: '"OSPOs for Good" at UN Headquarters',
            desc: 'The UN convenes governments and foundations in New York around Open Source Programme Offices as the institutional home for public-sector open source.',
        },
        {
            year: 'Sept 2024',
            title: 'Global Digital Compact adopted',
            desc: 'At the Summit of the Future, member states commit to shared principles for an open, safe digital future — including explicit support for digital public goods and infrastructure.',
        },
        {
            year: 'March 2025',
            title: 'UN Open Source Principles adopted',
            desc: 'The UN CEB’s Digital and Technology Network adopts eight principles — "open by default," "contribute back," and more. The Open Source Initiative endorses first; sixteen more organizations follow, from the Linux Foundation to Germany’s Sovereign Tech Agency.',
        },
        {
            year: 'June 2025',
            title: 'First UN Open Source Week',
            desc: 'OSPOs for Good grows into a full week at UN Headquarters spanning AI, digital public infrastructure, and community-led events.',
        },
        {
            year: 'Nov 2025',
            title: 'Barcelona endorses — a city first',
            desc: 'Barcelona becomes the first city in the world to formally endorse the Principles, pairing the signature with an OSPO, a citizen agreement, and a municipal open source fund.',
        },
        {
            year: 'June 2026',
            title: 'UN OSW draws 2,600+ from 120+ countries',
            desc: 'Themed days — UN Tech Over, Open Source × AI, DPI Day, OSPOs for Good — plus the launch of the Public Code Observatory mapping public-sector open source worldwide.',
        },
    ],
};

export const concepts = {
    eyebrow: 'Key Concepts',
    title: 'The Vocabulary of the Movement',
    lede:
        'Ten terms that recur across UN Open Source Week, the Global Digital Compact, and every government open source program worth studying. Learn these and you can follow — and join — any conversation in this space.',
    terms: [
        {
            term: 'Open Source (FOSS)',
            def: 'Software whose source code anyone can inspect, use, modify, and share. "Free and open source software" is about freedom and public auditability, not price.',
            nyc: 'NYC already publishes city code on GitHub — open source is a practice the city has started, not a leap into the unknown.',
            link: { url: 'https://en.wikipedia.org/wiki/Free_and_open-source_software', label: 'Wikipedia' },
        },
        {
            term: 'UN Open Source Principles',
            def: 'Eight commitments adopted by the UN’s Digital and Technology Network in 2025 — from "open by default" to "sustain and scale" — defining how the UN system approaches software.',
            nyc: 'Endorsement is a signature plus a roadmap, not a procurement overhaul. It’s the entry ticket to a global community of practice.',
            link: { url: 'https://unite.un.org/en/news/sixteen-organizations-endorse-un-open-source-principles', label: 'unite.un.org' },
        },
        {
            term: 'OSPO — Open Source Programme Office',
            def: 'A dedicated team that coordinates an institution’s open source strategy: what to use, what to publish, how to contribute, and how to stay secure and compliant.',
            nyc: 'Paris, Munich, and the UN itself run OSPOs. NYC’s Office of Technology & Innovation is the natural home for one.',
            link: { url: 'https://en.wikipedia.org/wiki/Open_Source_Program_Office', label: 'Wikipedia' },
        },
        {
            term: 'Digital Public Goods (DPGs)',
            def: 'Open source software, open data, open AI models, standards, and content that adhere to privacy and best practices and help attain the SDGs — vetted via the DPG Standard and listed in the DPGA registry.',
            nyc: 'Tools NYC builds could qualify as DPGs — and tools in the registry are free for NYC to adopt instead of procuring proprietary equivalents.',
            link: { url: 'https://www.digitalpublicgoods.net/', label: 'DPG Alliance' },
        },
        {
            term: 'Digital Public Infrastructure (DPI)',
            def: 'The shared digital rails a society runs on — identity, payments, data exchange. Like roads or the power grid, DPI works best as interoperable public infrastructure rather than a set of walled gardens.',
            nyc: 'Cities everywhere face the same needs — benefits access, permits, identity, participation. Increasingly they solve them once and share: platforms like Decidim and X-Road are built by one government and reused by dozens. NYC can join that exchange instead of buying its own silo.',
            link: { url: 'https://en.wikipedia.org/wiki/Digital_public_infrastructure', label: 'Wikipedia' },
        },
        {
            term: 'Digital Sovereignty',
            def: 'A government’s ability to control its own digital destiny — to understand, run, audit, and change the systems it depends on, rather than being locked into any single vendor.',
            nyc: 'Every proprietary contract renewal NYC can’t walk away from is a sovereignty question. Open source is the strongest structural answer.',
            link: { url: 'https://en.wikipedia.org/wiki/Digital_sovereignty', label: 'Wikipedia' },
        },
        {
            term: 'Global Digital Compact (GDC)',
            def: 'The framework adopted by UN member states in September 2024 committing to an inclusive, open, safe and secure digital future — with digital public goods and infrastructure named as shared priorities.',
            nyc: 'The GDC is the diplomatic umbrella. When NYC aligns local tech policy with it, the city speaks a language 193 member states have already agreed to.',
            link: { url: 'https://www.un.org/global-digital-compact', label: 'un.org' },
        },
        {
            term: 'Open Standards & Interoperability',
            def: 'Publicly documented formats and protocols that let systems from different makers work together — the difference between an ecosystem and a lock-in.',
            nyc: 'Writing open standards into procurement is the single highest-leverage clause NYC’s buyers control.',
            link: { url: 'https://en.wikipedia.org/wiki/Open_standard', label: 'Wikipedia' },
        },
        {
            term: 'Universal DPI Safeguards Framework',
            def: 'A UN-backed framework for building digital public infrastructure that protects rights by design — privacy, security, inclusion, and accountability baked in from the start.',
            nyc: 'A ready-made rights checklist NYC can apply to every resident-facing system it builds or buys — no need to invent one.',
            link: { url: 'https://www.dpi-safeguards.org/', label: 'dpi-safeguards.org' },
        },
        {
            term: '"Public Money, Public Code"',
            def: 'The principle that software paid for by the public should be available to the public as open source — popularized in Europe and adopted as policy by cities like Munich.',
            nyc: 'A slogan NYC’s civic tech community already believes in; endorsement would make it official posture.',
            link: { url: 'https://publiccode.eu/', label: 'FSFE' },
        },
    ],
};

export const cases = {
    eyebrow: 'Case Studies',
    title: 'Governments Doing This Now',
    lede:
        'None of this is theoretical. Cities and nations have run open source government programs for years — and increasingly build them together, sharing one codebase across dozens of governments instead of each buying its own. Results NYC can learn from, and networks it can join.',
    items: [
        {
            place: 'Barcelona',
            flag: '🇪🇸',
            headline: 'The endorsement playbook',
            body:
                'In November 2025 Barcelona became the first city in the world to formally endorse the UN Open Source Principles — sparked by attending UN Open Source Week. The signature came with three commitments: a citizen agreement on democratic technologies, an Open Source Programme Office, and a municipal fund for open source innovation.',
            lesson: 'Endorsement is cheap, concrete, and pairs a signature with a light-touch roadmap. This is the model NYC can copy directly.',
            link: 'https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/barcelona-first-city-globally-adopt-un-open-source-principles',
        },
        {
            place: 'Paris',
            flag: '🇫🇷',
            headline: 'A city OSPO running 300+ services',
            body:
                'Paris runs Lutèce, an open source platform powering more than 300 city web services — permits, housing, the participatory budget. Its OSPO (begun 2019, fully established 2022, among the first city OSPOs anywhere) coordinates the city’s open source assets, and Lutèce has been redeployed as far away as Baltimore.',
            lesson: 'A city OSPO isn’t bureaucracy — it’s how one city’s investment becomes 300 reusable services, and other cities’ free head start.',
            link: 'https://www.projets-libres.org/en/podcast/offering-free-digital-services-to-citizens-from-lutece-to-cite-libre-paris-fr/',
        },
        {
            place: 'Munich',
            flag: '🇩🇪',
            headline: '"Public money, public code" as council policy',
            body:
                'After a decade of hard-won lessons on desktop Linux, Munich came back smarter: a 2023 City Council motion created an OSPO inside its IT department with a dual mandate — use open source where it’s strong, and publish the city’s own software under "public money, public code."',
            lesson: 'The mature posture isn’t all-or-nothing migration — it’s an institutional office with a publish-by-default rule.',
            link: 'https://opensource.muenchen.de/ospo.html',
        },
        {
            place: 'Estonia',
            flag: '🇪🇪',
            headline: 'Open sourcing the national data backbone',
            body:
                'X-Road, the data exchange layer connecting Estonia’s entire digital state, was open sourced under the MIT license in 2016. Estonia and Finland founded a joint institute (NIIS) to steward it; their national systems federated in 2018, Iceland followed, and roughly 20 more countries now run it.',
            lesson: 'Opening core infrastructure didn’t weaken it — it turned one country’s backbone into a shared international standard with pooled maintenance.',
            link: 'https://x-road.global/',
        },
        {
            place: 'Germany',
            flag: '🇩🇪',
            headline: 'Funding the open source that everything runs on',
            body:
                'Germany’s Sovereign Tech Agency (launched 2022) has invested over €24 million in 60+ critical open source components — the libraries, protocols, and tools every government and company silently depends on. Demand tells the story: nearly 500 applications seeking €114M+.',
            lesson: 'Open source infrastructure needs maintenance money, and a public fund for it is now a proven, exportable model.',
            link: 'https://www.sovereign.tech/',
        },
        {
            place: 'India',
            flag: '🇮🇳',
            headline: 'DPI at population scale',
            body:
                'India’s digital public infrastructure — open APIs and platforms for identity and payments — shows what shared rails do at scale: UPI processes billions of transactions a month across hundreds of competing apps. The open source ID platform MOSIP, born of the same thinking, is now adopted by countries across Asia and Africa.',
            lesson: 'When the rails are open and interoperable, the private sector competes on top of them instead of owning them.',
            link: 'https://www.mosip.io/',
        },
        {
            place: 'Decidim',
            flag: '🗳️',
            headline: 'One participation platform, ~90 governments',
            body:
                'Barcelona built Decidim, an open source citizen-participation platform — itself forked from Madrid’s Consul. It now runs in close to 90 cities, regions, and institutions reaching over a million people, while Consul’s lineage spans 35 countries. Governments pool code, features, and translations instead of each commissioning its own tool.',
            lesson: 'When one city opens its platform, the next gets it for free — and improves it for everyone. NYC could adopt and contribute rather than procure from scratch.',
            link: 'https://decidim.org/',
        },
        {
            place: 'DHIS2',
            flag: '🩺',
            headline: 'Health data for 80+ countries, one codebase',
            body:
                'DHIS2, stewarded by the University of Oslo with a global network of regional support groups, is the government health-information system of record in more than 80 countries — reaching roughly 3.2 billion people. National ministries co-fund and shape a single shared open source platform instead of buying 80 separate ones.',
            lesson: 'A public institution can steward critical government software as a shared good for decades. Pooled maintenance beats duplicated procurement.',
            link: 'https://dhis2.org/',
        },
        {
            place: 'OpenCRVS',
            flag: '🧾',
            headline: 'Civil registration, configured per country',
            body:
                'OpenCRVS is an open source birth-, death-, and marriage-registration platform built for multi-country adoption: configurable workflows adapt to each nation’s laws, and it interoperates with identity (MOSIP), payments, and health (DHIS2) systems. A digital public good governments deploy and extend together.',
            lesson: 'Foundational government systems can be built once as open standards and localized per jurisdiction — exactly the reusability NYC procurement could ask for.',
            link: 'https://www.opencrvs.org/',
        },
    ],
};

/* Reframed policy intersections — open source & digital governance only.
   Same card shape the hub's UnnycPolicy uses (icon / title / un / nyc). */
export const primerPolicies = {
    eyebrow: 'The Crosswalk',
    title: 'UN Concepts ↔ NYC Reality',
    lede: 'NYC is closer to the UN’s open source posture than most people inside the city realize. Map the concepts to what already exists.',
    items: [
        {
            icon: '🔓',
            slug: 'open-by-default',
            title: 'Open by Default',
            un: 'UN Open Source Principle #1: open source as the standard approach for projects across the UN system.',
            nyc: 'NYC Open Data Law (Local Law 11 of 2012) made data open by default — the same move for code is the natural next step. City code already appears on GitHub.',
            detail: [
                '"Open by default" is the first of the eight UN Open Source Principles, and it reverses the usual burden of proof. Instead of asking teams to justify why a piece of software should be open, it asks them to justify why it should be closed — with legitimate exceptions for security, privacy, or third-party licensing. It is a posture, not an absolute: the goal is that openness becomes the presumption a project starts from, rather than an afterthought someone has to fight for.',
                'New York City has already made exactly this move once — with data. The Open Data Law (Local Law 11 of 2012) is among the strongest municipal transparency mandates in the country, requiring city agencies to publish their public data on the NYC Open Data portal by default. The cultural and legal precedent for an "open by default" presumption is therefore not hypothetical in New York; it is a decade old, and city code already appears in public repositories on GitHub.',
                'What is missing is the same presumption extended from data to software. Endorsing the Principle would formalize what parts of the city already do informally, and give agencies clear cover to publish: a stated default, a short list of valid exceptions, and the expectation that new projects begin in the open. It costs little, aligns with existing law, and turns scattered good practice into policy.',
            ],
        },
        {
            icon: '🏛️',
            slug: 'nyc-ospo',
            title: 'An NYC OSPO',
            un: 'The UN runs its own OSPO and convenes "OSPOs for Good" at UN Headquarters; Paris, Munich, and Barcelona show the city version.',
            nyc: 'The Office of Technology & Innovation already coordinates citywide tech — it is the natural institutional home for an NYC OSPO.',
            detail: [
                'An Open Source Programme Office is the institutional home for an organization’s open source practice. It coordinates four things that otherwise happen ad hoc: what open source the organization uses, what of its own work it publishes, how it contributes back to the projects it depends on, and how it stays secure and legally compliant while doing so. The UN runs one, and its annual "OSPOs for Good" convening at UN Headquarters exists precisely to help governments stand theirs up.',
                'Cities have shown what this looks like at the municipal scale. Paris built one of the first city OSPOs and now maintains a platform of 300+ services other cities can reuse; Munich’s OSPO operates under a "public money, public code" mandate; Barcelona paired its endorsement of the UN Principles with a commitment to create one. In each case the OSPO is small — a team and a mandate, not a new agency — but it is the difference between open source happening by accident and happening on purpose.',
                'New York already has the natural host: the Office of Technology & Innovation coordinates technology across city agencies. An NYC OSPO would not require new infrastructure so much as a defined remit — inventory the city’s open source, set a publish-by-default workflow, review contributions and security, and advise agencies and vendors. It is the single most concrete institutional step the city could take, and the one every peer city has found repays itself.',
            ],
        },
        {
            icon: '🗽',
            slug: 'dpi',
            title: 'Digital Public Infrastructure',
            un: 'DPI Day at UN OSW: identity, payments, and data exchange as open, interoperable public rails, with a Universal Safeguards Framework.',
            nyc: 'Cities worldwide face the same needs — identity, payments, benefits access — and increasingly share open components rather than each buying its own. The question is whether NYC builds on reusable open rails or locks into another silo.',
            detail: [
                'Digital Public Infrastructure is the idea that the digital systems a society runs on — identity, payments, data exchange — should be treated like roads or the power grid: shared, interoperable public rails rather than a collection of disconnected proprietary silos. UN Open Source Week dedicates a full day to it, and pairs it with a Universal DPI Safeguards Framework so that these rails are built to protect privacy, security, and inclusion from the start rather than bolting them on later.',
                'The strategic insight of DPI is that cities and countries face nearly identical problems — registering residents, moving money, sharing records between agencies — and increasingly solve them once and share the result. Estonia open-sourced its national data-exchange layer (X-Road) and roughly twenty countries now run it; Barcelona’s participation platform (Decidim) runs in close to ninety governments. The alternative — every jurisdiction commissioning its own bespoke system — is slower, costlier, and locks each buyer into a single vendor.',
                'For New York the question is not whether it has DPI — any large resident-facing platform is DPI in effect — but whether it builds on open, reusable, standards-based components or on closed ones. Choosing open rails keeps the city able to audit, extend, and move its own systems, lets it draw on solutions other governments have already hardened, and lets its own investments become reusable by others. The Universal Safeguards Framework gives NYC a ready-made rights checklist to apply along the way.',
            ],
        },
        {
            icon: '🤝',
            slug: 'contribute-back',
            title: 'Contribute Back',
            un: 'Principle #2: active participation in the open source ecosystem, not just consumption.',
            nyc: 'NYC Planning Labs has shipped open source tools for years — proof the city can contribute, not only consume. Policy would scale the practice.',
            detail: [
                'The second UN Open Source Principle is "contribute back": institutions that benefit from open source should be active participants in it, not just downstream consumers. In practice that means upstreaming bug fixes and improvements to the projects an organization depends on, publishing genuinely reusable tools rather than one-off scripts, and engaging with the communities that maintain the software the organization relies on. It is the difference between taking from a commons and helping sustain it.',
                'New York has a real track record here to build on. NYC Planning Labs spent years shipping open source mapping and civic tools in public, and other city teams have published code and data pipelines that outside developers — and other governments — have reused. This proves the city can contribute, not merely consume; what has been missing is the policy and the plumbing to make it routine rather than dependent on individual teams’ initiative.',
                'Scaling the practice is mostly a matter of permission and process: a contribution policy that lets staff upstream their fixes, a default that reusable work is published, and light guidance on licensing and community norms. The payoff is concrete — better-maintained dependencies, a stronger reputation that helps recruit technologists, and reusable tools that raise the city’s leverage on every future project.',
            ],
        },
        {
            icon: '🧩',
            slug: 'procurement',
            title: 'Open Standards & Procurement',
            un: 'GDC and DPI frameworks stress interoperability and open standards as the guard against lock-in.',
            nyc: 'NYC’s procurement rules are where open standards become real — an "open by default" preference clause is the highest-leverage reform available.',
            detail: [
                'Open standards — publicly documented formats and protocols that any vendor can implement — are the mechanism that keeps digital systems an ecosystem rather than a trap. The Global Digital Compact and the UN’s DPI frameworks return to them repeatedly, because interoperability is what lets a government change vendors, connect systems built by different makers, and avoid the slow accumulation of lock-in that makes every proprietary renewal non-negotiable.',
                'For a city, procurement is where this stops being philosophy and becomes leverage. The contracts NYC signs decide whether its data stays portable, whether its formats are documented, and whether a future administration can switch providers without rebuilding from scratch. A preference clause — favoring open standards and open source where they meet the need, and requiring data export and documented interfaces — is the single highest-leverage reform available, because it shapes every system the city buys for years afterward.',
                'New York’s scale makes this unusually powerful. As one of the largest municipal technology buyers in the United States, the standards NYC writes into its solicitations ripple through the vendor market well beyond the five boroughs. Other governments have already written open source and open-standards preferences into public procurement; endorsing the UN Principles gives NYC both the language and the international precedent to do the same.',
            ],
        },
        {
            icon: '🌐',
            slug: 'global-table',
            title: 'A Seat at the Global Table',
            un: 'UN Open Source Week brings 120+ countries to Manhattan every June; the Global Digital Compact gives the shared vocabulary.',
            nyc: 'NYC pioneered city-to-UN reporting with its Voluntary Local Review (2018) — endorsement of the Principles is the same move for technology.',
            detail: [
                'Every June, UN Open Source Week brings more than 2,600 participants from over 120 countries to UN Headquarters — in New York City. The Global Digital Compact, adopted by member states in 2024, gives that gathering a shared vocabulary: digital public goods, digital public infrastructure, open standards. It is, in effect, a standing global table on public-interest technology, convened a subway ride from City Hall, at which New York is currently a host but not a participant.',
                'New York has a distinctive habit of being first to that kind of table. It was the first U.S. city to submit a Voluntary Local Review of its Sustainable Development Goal progress to the UN in 2018 — a model since copied by cities worldwide — and the first U.S. city to join the UN’s Safe Cities initiative. In each case a relatively low-cost act of alignment gave the city outsized visibility and leadership. Endorsing the UN Open Source Principles is the same move, applied to technology.',
                'The practical benefits of taking the seat are real: access to a global community of practice, to solutions other governments have already built and battle-tested, and to the contacts who can help NYC adopt them. And there is a first-mover opportunity — no city in the Americas has yet endorsed the Principles. New York, which hosts the movement each year, is the natural candidate to be first to join it.',
            ],
        },
    ],
};

/* Global map — governments and institutions advancing public-sector open source. */
export const primerMapMarkers = [
    { type: 'ask', lat: 40.7489, lng: -73.968, label: 'New York City — next?', desc: 'Host of UN Open Source Week. The campaign: make NYC the first city in the Americas to endorse the UN Open Source Principles.' },
    { type: 'city', lat: 41.3874, lng: 2.1686, label: 'Barcelona', desc: 'First city in the world to endorse the UN Open Source Principles (Nov 2025) — with an OSPO, citizen agreement, and municipal open source fund.' },
    { type: 'city', lat: 48.8566, lng: 2.3522, label: 'Paris', desc: 'Pioneer city OSPO (est. 2019); its open source Lutèce platform runs 300+ city services and has been redeployed abroad.' },
    { type: 'city', lat: 48.1351, lng: 11.582, label: 'Munich', desc: 'City Council–mandated OSPO (2023) operating under "public money, public code."' },
    { type: 'nation', lat: 59.437, lng: 24.7536, label: 'Estonia (Tallinn)', desc: 'Open sourced X-Road, the data exchange layer of its digital state, under MIT (2016); co-founded NIIS to steward it.' },
    { type: 'nation', lat: 60.1699, lng: 24.9384, label: 'Finland (Helsinki)', desc: 'Co-founder of NIIS; federated its national data exchange with Estonia’s in 2018.' },
    { type: 'nation', lat: 64.1466, lng: -21.9426, label: 'Iceland (Reykjavík)', desc: 'Runs Straumurinn, its national X-Road environment — open infrastructure crossing borders.' },
    { type: 'nation', lat: 52.52, lng: 13.405, label: 'Germany (Berlin)', desc: 'Sovereign Tech Agency: €24M+ invested in maintaining critical open source; ZenDiS builds openDesk for public administration. Both endorsed the UN Principles.' },
    { type: 'nation', lat: 12.9716, lng: 77.5946, label: 'India (Bengaluru)', desc: 'DPI at population scale (identity, payments) and home of MOSIP, the open source ID platform adopted internationally.' },
    { type: 'nation', lat: 8.4657, lng: -13.2317, label: 'Sierra Leone (Freetown)', desc: 'Ministerial voice at UN OSW 2026 — part of a wide Global South presence shaping the agenda.' },
    { type: 'nation', lat: 17.9714, lng: -76.7931, label: 'Jamaica (Kingston)', desc: 'At the ministerial table at UN OSW 2026 as the Caribbean engages DPI and open source.' },
    { type: 'un', lat: 46.2044, lng: 6.1432, label: 'Geneva — UN system', desc: 'ITU, UNICC and the wider UN digital ecosystem driving open standards and shared platforms.' },
    { type: 'un', lat: 40.7505, lng: -73.9682, label: 'UN Headquarters, NYC', desc: 'Where the UN CEB Digital & Technology Network adopted the eight Principles — and where the world’s open source movement meets every June.' },
];

export const primerMapLegend = [
    { type: 'city', label: 'Cities leading' },
    { type: 'nation', label: 'National programs' },
    { type: 'un', label: 'UN system' },
    { type: 'ask', label: 'NYC — the ask' },
];

export const endorsers = {
    eyebrow: 'Endorsers & Contributors',
    title: 'Who Has Already Signed On',
    lede:
        'The Open Source Initiative was first to endorse the UN Open Source Principles; sixteen more organizations — foundations, industry, and public agencies — joined at the March 2025 launch, and Barcelona became the first endorsing city that November.',
    orgs: [
        { name: 'Open Source Initiative (first endorser)', url: 'https://opensource.org/' },
        { name: 'The Linux Foundation', url: 'https://www.linuxfoundation.org/' },
        { name: 'Eclipse Foundation', url: 'https://www.eclipse.org/' },
        { name: 'GNOME Foundation', url: 'https://foundation.gnome.org/' },
        { name: 'The Document Foundation', url: 'https://www.documentfoundation.org/' },
        { name: 'Open Knowledge Foundation', url: 'https://okfn.org/' },
        { name: 'Open Forum Europe', url: 'https://openforumeurope.org/' },
        { name: 'OpenInfra Foundation', url: 'https://openinfra.dev/' },
        { name: 'Matrix.org Foundation', url: 'https://matrix.org/' },
        { name: 'Sovereign Tech Agency', url: 'https://www.sovereign.tech/' },
        { name: 'ZenDiS — Centre for Digital Sovereignty', url: 'https://zendis.de/' },
        { name: 'Nextcloud', url: 'https://nextcloud.com/' },
        { name: 'Rocket.Chat', url: 'https://www.rocket.chat/' },
        { name: 'Linagora', url: 'https://www.linagora.com/' },
        { name: 'RTE (Réseau de Transport d’Électricité)', url: 'https://www.rte-france.com/' },
        { name: 'Linux Professional Institute', url: 'https://www.lpi.org/' },
        { name: 'European Open Source Academy', url: 'https://opensource.academy/' },
    ],
    city: {
        name: 'Barcelona',
        desc: 'First city in the world to endorse (November 2025)',
    },
    cta: {
        text: 'The list of cities has one name on it. Help add New York’s — sign or endorse the open letter.',
        href: '/unnyc/campaign',
        label: 'Read & Sign the Open Letter',
    },
};

export const primerResources = {
    eyebrow: 'Resource Directory',
    title: 'Go Deeper',
    lede: 'The primary sources — read the frameworks, browse the registries, join the communities.',
    groups: [
        {
            title: 'Start Here',
            icon: '📖',
            links: [
                { text: 'UN Open Source Week', url: 'https://www.unopensource.org/', desc: 'The annual convening at UN HQ — agenda, recordings, and community.' },
                { text: 'The UN Open Source Principles', url: 'https://unite.un.org/en/news/sixteen-organizations-endorse-un-open-source-principles', desc: 'The eight principles and the launch announcement.' },
                { text: 'Global Digital Compact', url: 'https://www.un.org/global-digital-compact', desc: 'The member-state framework naming DPGs and DPI as shared priorities.' },
            ],
        },
        {
            title: 'Directories & Registries',
            icon: '📋',
            links: [
                { text: 'DPI Map (UCL IIPP)', url: 'https://dpimap.org/', desc: 'Interactive world map — click any country to see the digital ID, payment, and data-exchange systems it uses. 210 countries; 2025 State of DPI report.' },
                { text: 'DPG Standard & Registry (DPGA)', url: 'https://www.digitalpublicgoods.net/registry', desc: 'The vetted registry of digital public goods, filterable by SDG and searchable by deployment.' },
                { text: 'Universal DPI Safeguards', url: 'https://www.dpi-safeguards.org/', desc: 'The rights-by-design framework for public digital infrastructure.' },
                { text: 'GovStack', url: 'https://www.govstack.global/', desc: 'Building-block specifications for government digital services.' },
                { text: 'X-Road', url: 'https://x-road.global/', desc: 'The open source data exchange layer run by 20+ countries.' },
            ],
        },
        {
            title: 'Communities of Practice',
            icon: '🤝',
            links: [
                { text: 'TODO Group', url: 'https://todogroup.org/', desc: 'The practitioner community for running an OSPO — guides and templates.' },
                { text: 'OSPO Alliance', url: 'https://ospo-alliance.org/', desc: 'European-rooted alliance with an OSPO onboarding handbook.' },
                { text: 'EU Open Source Observatory (OSOR)', url: 'https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor', desc: 'Case studies and news on public-sector open source across Europe.' },
                { text: 'Code for America', url: 'https://codeforamerica.org/', desc: 'The US civic tech network — the domestic ally ecosystem.' },
            ],
        },
        {
            title: 'Money & Maintenance',
            icon: '🌱',
            links: [
                { text: 'Sovereign Tech Agency', url: 'https://www.sovereign.tech/', desc: 'Germany’s public fund for maintaining critical open source infrastructure.' },
                { text: 'Digital Public Goods Alliance', url: 'https://www.digitalpublicgoods.net/', desc: 'Pathways to fund, certify, and scale DPGs.' },
                { text: 'MOSIP', url: 'https://www.mosip.io/', desc: 'The open source ID platform — a study in sustainably governed DPI.' },
            ],
        },
    ],
};

export const contacts = {
    eyebrow: 'Who Can Help',
    title: 'The People to Call',
    lede:
        'Outward-facing organizations — with public contact channels — whose job is helping governments adopt open source, DPGs, and DPI. If NYC wants to get on the same page as the UN community, these are the doors to knock on.',
    note: 'All channels listed are the organizations’ own public contact points.',
    groups: [
        {
            title: 'UN System',
            items: [
                {
                    org: 'UN Office for Digital and Emerging Technologies (ODET)',
                    role: 'Stewards the Global Digital Compact follow-up; led by USG Amandeep Singh Gill, the UN’s top digital official.',
                    helps: 'Connecting city digital policy to UN processes and the GDC.',
                    url: 'https://www.un.org/digital-emerging-technologies/',
                },
                {
                    org: 'UN Open Source Week organizers (OICT)',
                    role: 'The team behind the annual convening at UN Headquarters.',
                    helps: 'Getting NYC officials into the room every June — the single easiest first step.',
                    url: 'https://www.unopensource.org/',
                },
            ],
        },
        {
            title: 'Global Institutions',
            items: [
                {
                    org: 'Digital Public Goods Alliance (DPGA)',
                    role: 'The multi-stakeholder body that maintains the DPG Standard and registry.',
                    helps: 'Certifying NYC-built tools as DPGs; finding vetted open solutions to adopt.',
                    url: 'https://www.digitalpublicgoods.net/',
                },
                {
                    org: 'Centre for Digital Public Infrastructure (CDPI)',
                    role: 'Advisory center (co-founded by India Stack architects) that runs a help desk for governments building DPI.',
                    helps: 'Free architectural guidance for any DPI effort NYC takes on.',
                    url: 'https://cdpi.dev/',
                },
                {
                    org: 'TODO Group',
                    role: 'The global community of OSPO practitioners, hosted at the Linux Foundation.',
                    helps: 'Playbooks, templates, and peer mentors for standing up an NYC OSPO.',
                    url: 'https://todogroup.org/',
                },
                {
                    org: 'Open Forum Europe',
                    role: 'Policy think tank on open technologies; among the sixteen endorsers of the UN Principles.',
                    helps: 'Policy language and precedent from European open source legislation.',
                    url: 'https://openforumeurope.org/',
                },
                {
                    org: 'Sovereign Tech Agency',
                    role: 'Germany’s public investor in open source maintenance — and an endorser of the UN Principles.',
                    helps: 'The blueprint for public funding of critical open infrastructure.',
                    url: 'https://www.sovereign.tech/',
                },
            ],
        },
        {
            title: 'New York City',
            items: [
                {
                    org: 'NYC Office of Technology & Innovation (OTI)',
                    role: 'The city’s central technology agency — the campaign’s primary addressee and the natural home of an NYC OSPO.',
                    helps: 'The decision. Endorsing the Principles starts here.',
                    url: 'https://www.nyc.gov/content/oti/pages/',
                },
                {
                    org: 'Mayor’s Office for International Affairs',
                    role: 'NYC’s bridge to the UN and diplomatic community; ran the first-ever Voluntary Local Review.',
                    helps: 'The city-to-UN channel — the office that makes an endorsement diplomatic reality.',
                    url: 'https://www.nyc.gov/site/international/index.page',
                },
                {
                    org: 'WeGovNYC / Sarapis',
                    role: 'The civic tech organizers behind this campaign.',
                    helps: 'Briefings, introductions, and the open letter itself — we’re the local convener.',
                    url: '/unnyc/campaign',
                    internal: true,
                },
            ],
        },
    ],
};
