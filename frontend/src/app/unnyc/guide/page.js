import Link from 'next/link';
import './guide.css';

export const metadata = {
    title: 'NYC Tech × UN Guide — UNNYC',
    description:
        'A guide for NYC government technology leadership on collaborating with the United Nations system — open source, digital infrastructure, events, and more.',
    openGraph: {
        title: 'The UN System & NYC Government Technology — UNNYC',
        description:
            'How NYC tech leaders can participate in UN open source, digital public goods, and urban governance programs.',
        type: 'article',
    },
};

/**
 * UNNYC Guide Page — server component.
 * Long-form article guiding NYC tech leadership on UN collaboration.
 * Ported from UNNY/guide.html with all class names prefixed `unnyc-guide-`.
 */
export default function GuidePage() {
    return (
        <div className="unnyc-guide">
            {/* Navigation */}
            <nav className="unnyc-guide-nav" id="unnyc-guide-nav">
                <div className="unnyc-guide-nav__inner">
                    <Link href="/unnyc" className="unnyc-guide-nav__logo">
                        <span className="unnyc-guide-nav__logo-mark">UN</span>
                        <span className="unnyc-guide-nav__logo-ny">NYC</span>
                    </Link>
                    <div className="unnyc-guide-nav__right">
                        <Link href="/unnyc" className="unnyc-guide-nav__back">
                            ← Back to Hub
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Article */}
            <article>
                <header className="unnyc-guide-article__header">
                    <div className="unnyc-guide-container">
                        <p className="unnyc-guide-article__eyebrow">
                            Guide for NYC Technology Leadership
                        </p>
                        <h1 className="unnyc-guide-article__title">
                            The UN System &amp; NYC Government Technology
                        </h1>
                        <p className="unnyc-guide-article__subtitle">
                            How NYC&apos;s technology and operations leaders can participate in,
                            learn from, and contribute to the United Nations&apos; digital
                            ecosystem — all from a subway ride away.
                        </p>
                        <div className="unnyc-guide-article__meta">
                            <span>
                                Prepared by{' '}
                                <a
                                    href="https://wegov.nyc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WeGovNYC
                                </a>
                                , a program of{' '}
                                <a
                                    href="https://sarapis.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Sarapis
                                </a>
                            </span>
                            <span>February 2026</span>
                        </div>
                    </div>
                </header>

                {/* TOC + Body Layout */}
                <div className="unnyc-guide-container">
                    <div className="unnyc-guide-article__layout">
                        {/* Sticky Table of Contents */}
                        <aside className="unnyc-guide-toc" id="unnyc-guide-toc">
                            <div className="unnyc-guide-toc__inner">
                                <h4 className="unnyc-guide-toc__title">Contents</h4>
                                <ol className="unnyc-guide-toc__list">
                                    <li>
                                        <a href="#summary">Executive Summary</a>
                                    </li>
                                    <li>
                                        <a href="#open-source-principles">
                                            Open Source Principles
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#open-source-week">Open Source Week 2026</a>
                                    </li>
                                    <li>
                                        <a href="#ospo">Open Source Program Office</a>
                                    </li>
                                    <li>
                                        <a href="#gam4dc">
                                            Mayor&apos;s Alliance for Digital Cooperation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#wuf13">World Urban Forum — Baku</a>
                                    </li>
                                    <li>
                                        <a href="#additional">Additional Opportunities</a>
                                    </li>
                                    <li>
                                        <a href="#calendar">Calendar Summary</a>
                                    </li>
                                    <li>
                                        <a href="#first-steps">Recommended First Steps</a>
                                    </li>
                                </ol>
                            </div>
                        </aside>

                        {/* Article Body */}
                        <div className="unnyc-guide-article__body">
                            {/* Executive Summary */}
                            <section id="summary" className="unnyc-guide-section">
                                <h2>Executive Summary</h2>
                                <p>
                                    New York City hosts the headquarters of the United Nations and
                                    dozens of its agencies — yet the technology teams running city
                                    government rarely interact with the digital innovation happening
                                    a few miles uptown at UN Plaza.
                                </p>
                                <p>
                                    This guide maps out specific UN programs, events, and frameworks
                                    that NYC government technology and operations leaders can
                                    participate in, learn from, and contribute to.
                                </p>
                                <div className="unnyc-guide-callout unnyc-guide-callout--blue">
                                    <h4>Three Categories of Opportunity</h4>
                                    <ol>
                                        <li>
                                            <strong>
                                                Open source &amp; digital infrastructure
                                            </strong>{' '}
                                            — The UN is building a global open-source ecosystem that
                                            NYC can both leverage and lead within
                                        </li>
                                        <li>
                                            <strong>
                                                Urban governance &amp; smart cities
                                            </strong>{' '}
                                            — UN-Habitat and allied programs are creating frameworks
                                            for data-driven, digitally inclusive cities
                                        </li>
                                        <li>
                                            <strong>Events &amp; convenings</strong> — Multiple
                                            annual events take place <em>in NYC</em>, requiring zero
                                            travel investment
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* 1. Open Source Principles */}
                            <section
                                id="open-source-principles"
                                className="unnyc-guide-section"
                            >
                                <div className="unnyc-guide-section-number">1</div>
                                <h2>UN Open Source Principles</h2>
                                <div className="unnyc-guide-what-is">
                                    <h4>What it is</h4>
                                    <p>
                                        A set of principles for open-source software development,
                                        use, and distribution adopted by the UN Chief Executive
                                        Board&apos;s Digital Technology Network (DTN). As of
                                        mid-2025,{' '}
                                        <strong>over 60 organizations</strong> have endorsed them,
                                        including the Open Source Initiative (first endorser, Feb
                                        2025) and the Government of France.
                                    </p>
                                </div>
                                <div className="unnyc-guide-why-matters">
                                    <h4>Why it matters for NYC</h4>
                                    <ul>
                                        <li>
                                            <strong>Signal leadership</strong> — NYC would be among
                                            the first U.S. municipal governments to endorse, joining
                                            France at the national level
                                        </li>
                                        <li>
                                            <strong>Align with existing practice</strong> — NYC
                                            already publishes code on GitHub and contributes to
                                            open-source projects
                                        </li>
                                        <li>
                                            <strong>Create a bridge</strong> — Endorsement opens a
                                            formal relationship with the UN&apos;s digital
                                            technology network
                                        </li>
                                    </ul>
                                </div>
                                <div className="unnyc-guide-how-to">
                                    <h4>How to participate</h4>
                                    <ol>
                                        <li>
                                            Review the principles at{' '}
                                            <a
                                                href="https://unopensource.org"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                unopensource.org
                                            </a>
                                        </li>
                                        <li>
                                            Submit a formal endorsement through the UN&apos;s
                                            Digital Technology Network
                                        </li>
                                        <li>
                                            Announce the endorsement at UN Open Source Week
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* 2. Open Source Week */}
                            <section id="open-source-week" className="unnyc-guide-section">
                                <div className="unnyc-guide-section-number">2</div>
                                <h2>UN Open Source Week — June 22–26, 2026</h2>
                                <div className="unnyc-guide-badge unnyc-guide-badge--local">
                                    📍 In NYC — UN Headquarters
                                </div>
                                <div className="unnyc-guide-what-is">
                                    <h4>What it is</h4>
                                    <p>
                                        An annual week-long event at{' '}
                                        <strong>UN Headquarters in New York City</strong>, organized
                                        by ODET and OICT.
                                    </p>
                                </div>
                                <table className="unnyc-guide-table">
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Focus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Monday, June 22</td>
                                            <td>Community Hackathon</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday, June 23</td>
                                            <td>
                                                <strong>Open Source × AI</strong> (new for 2026)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday, June 24</td>
                                            <td>Digital Public Infrastructure Day</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday, June 25</td>
                                            <td>OSPOs for Good</td>
                                        </tr>
                                        <tr>
                                            <td>Friday, June 26</td>
                                            <td>Community-led side events</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="unnyc-guide-why-matters">
                                    <h4>Why it matters for NYC</h4>
                                    <p>
                                        This event happens <em>in your city</em>. It brings together
                                        hundreds of technologists, policymakers, and open-source
                                        leaders — a 15-minute subway ride from City Hall.
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>
                                                Present NYC&apos;s open-source work
                                            </strong>{' '}
                                            — Showcase tools NYC has built
                                        </li>
                                        <li>
                                            <strong>Participate in the hackathon</strong> — Send
                                            developers to collaborate on Digital Public Goods
                                        </li>
                                        <li>
                                            <strong>Host a side event</strong> — Friday is reserved
                                            for community events
                                        </li>
                                        <li>
                                            <strong>Recruit talent and ideas</strong> — Connect with
                                            the UN&apos;s global developer community
                                        </li>
                                    </ul>
                                </div>
                                <div className="unnyc-guide-how-to">
                                    <h4>How to participate</h4>
                                    <ol>
                                        <li>
                                            Register at{' '}
                                            <a
                                                href="https://unopensource.org"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                unopensource.org
                                            </a>
                                        </li>
                                        <li>
                                            Contact ODET to propose a city-led side event or panel
                                        </li>
                                        <li>
                                            Send a delegation of 5–10 from OTI, Cyber Command, and
                                            agency IT leads
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* 3. OSPO */}
                            <section id="ospo" className="unnyc-guide-section">
                                <div className="unnyc-guide-section-number">3</div>
                                <h2>Open Source Program Office (OSPO)</h2>
                                <div className="unnyc-guide-what-is">
                                    <h4>What it is</h4>
                                    <p>
                                        A dedicated unit within an organization that guides
                                        open-source adoption, manages licensing, develops digital
                                        skills, and coordinates contributions to the open-source
                                        ecosystem. The UNDP has integrated OSPOs into its strategy,
                                        and the &quot;OSPOs for Good&quot; initiative focuses on
                                        public-sector OSPOs.
                                    </p>
                                </div>
                                <div className="unnyc-guide-why-matters">
                                    <h4>Why NYC should establish one</h4>
                                    <ul>
                                        <li>
                                            <strong>Centralize governance</strong> — Coordinate
                                            licensing, security audits, and contribution policies
                                            across 130+ agencies
                                        </li>
                                        <li>
                                            <strong>Adopt Digital Public Goods</strong> — Leverage
                                            UN-vetted open-source tools from the{' '}
                                            <a
                                                href="https://digitalpublicgoods.net"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                DPG Registry
                                            </a>{' '}
                                            instead of buying proprietary alternatives
                                        </li>
                                        <li>
                                            <strong>Join a global network</strong> — Connect with
                                            OSPOs at the UN, EU Commission, and France
                                        </li>
                                        <li>
                                            <strong>
                                                Support the UN Common Policy Framework
                                            </strong>{' '}
                                            (released Nov 2024 by ITU) — the blueprint for this
                                            kind of institutional setup
                                        </li>
                                    </ul>
                                </div>
                                <div className="unnyc-guide-how-to">
                                    <h4>How to participate</h4>
                                    <ol>
                                        <li>
                                            Attend &quot;OSPOs for Good&quot; sessions at UN Open
                                            Source Week (June 25, 2026)
                                        </li>
                                        <li>
                                            Connect with UNDP&apos;s digital team to learn from
                                            their implementation
                                        </li>
                                        <li>
                                            Pilot a lightweight OSPO within OTI — start with an
                                            inventory of existing open-source usage
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* 4. GAM-4-DC */}
                            <section id="gam4dc" className="unnyc-guide-section">
                                <div className="unnyc-guide-section-number">4</div>
                                <h2>
                                    UN-Habitat: Global Alliance of Mayors for Digital Cooperation
                                </h2>
                                <div className="unnyc-guide-what-is">
                                    <h4>What it is</h4>
                                    <p>
                                        Launched in 2023 by the UN Secretary-General&apos;s Envoy on
                                        Technology and UN-Habitat, the GAM-4-DC brings together
                                        mayors worldwide to collaborate on using digital
                                        technologies to advance the SDGs and improve urban
                                        governance.
                                    </p>
                                    <div className="unnyc-guide-callout unnyc-guide-callout--gold">
                                        <p>
                                            <strong>NYC is already connected.</strong> The city is a
                                            founding member of the related{' '}
                                            <strong>
                                                Cities Coalition for Digital Rights
                                            </strong>{' '}
                                            (co-founded by NYC, Amsterdam, and Barcelona in 2018,
                                            now 45+ cities). The GAM-4-DC extends this into
                                            operational digital cooperation.
                                        </p>
                                    </div>
                                </div>
                                <div className="unnyc-guide-why-matters">
                                    <h4>Why it matters for NYC</h4>
                                    <ul>
                                        <li>
                                            <strong>Peer learning</strong> — Direct exchange with
                                            Barcelona, Amsterdam, Seoul, and Helsinki on digital
                                            service delivery and AI governance
                                        </li>
                                        <li>
                                            <strong>Influence global standards</strong> — NYC&apos;s
                                            experience with 311, open data, and digital equity can
                                            shape UN guidance to other cities
                                        </li>
                                        <li>
                                            <strong>Mayoral visibility</strong> — Positions the
                                            Mayor&apos;s tech agenda on a global stage
                                        </li>
                                    </ul>
                                </div>
                                <div className="unnyc-guide-how-to">
                                    <h4>How to participate</h4>
                                    <ol>
                                        <li>
                                            The Mayor&apos;s Office for International Affairs is the
                                            natural liaison
                                        </li>
                                        <li>
                                            Request formal engagement through the UN
                                            Secretary-General&apos;s Envoy on Technology
                                        </li>
                                        <li>
                                            Propose a NYC-hosted convening during UN General
                                            Assembly week
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* 5. WUF13 */}
                            <section id="wuf13" className="unnyc-guide-section">
                                <div className="unnyc-guide-section-number">5</div>
                                <h2>World Urban Forum 13 — Baku, May 17–22, 2026</h2>
                                <div className="unnyc-guide-what-is">
                                    <h4>What it is</h4>
                                    <p>
                                        The world&apos;s largest conference on sustainable
                                        urbanization, organized by UN-Habitat. WUF13 focuses on{' '}
                                        <em>
                                            &quot;Housing the World: Safe and Resilient Cities and
                                            Communities&quot;
                                        </em>{' '}
                                        with significant programming on digital transformation,
                                        data-driven governance, and smart city infrastructure. The
                                        Smart Cities Council is organizing a formal delegation.
                                    </p>
                                </div>
                                <div className="unnyc-guide-why-matters">
                                    <h4>Why it matters for NYC</h4>
                                    <ul>
                                        <li>
                                            <strong>Digital governance track</strong> — Sessions on
                                            data-driven cities match NYC&apos;s analytics
                                            infrastructure
                                        </li>
                                        <li>
                                            <strong>Housing × tech</strong> — HPD and NYCHA face
                                            the same challenges discussed at WUF
                                        </li>
                                        <li>
                                            <strong>Smart city showcase</strong> — NYC&apos;s 311,
                                            LinkNYC, and open data portal are world-class examples
                                        </li>
                                        <li>
                                            <strong>10,000+ urban leaders</strong> from 160+
                                            countries
                                        </li>
                                    </ul>
                                </div>
                                <div className="unnyc-guide-how-to">
                                    <h4>How to participate</h4>
                                    <ol>
                                        <li>
                                            Register a delegation at{' '}
                                            <a
                                                href="https://wuf.unhabitat.org"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                wuf.unhabitat.org
                                            </a>
                                        </li>
                                        <li>
                                            Submit abstracts for side sessions showcasing NYC tech
                                        </li>
                                        <li>
                                            Join the Smart Cities Council delegation for structured
                                            introductions
                                        </li>
                                        <li>
                                            Coordinate with the Mayor&apos;s Office for
                                            International Affairs
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* Additional Opportunities */}
                            <section id="additional" className="unnyc-guide-section">
                                <h2>Additional Opportunities</h2>
                                <p>
                                    Our research surfaced several more high-value collaboration
                                    points:
                                </p>

                                <div className="unnyc-guide-opportunity-card">
                                    <h3>Digital Public Goods Alliance (DPGA)</h3>
                                    <p>
                                        A multi-stakeholder initiative (UNDP, UNICEF, Norway)
                                        maintaining a registry of vetted open-source software, data,
                                        AI models, and standards. In 2025, DPGA launched{' '}
                                        <strong>
                                            &quot;DPI Essentials for Public Sector Leaders&quot;
                                        </strong>{' '}
                                        — short courses designed for this exact audience.
                                    </p>
                                    <p className="unnyc-guide-opportunity-action">
                                        <strong>NYC action:</strong> Nominate NYC-built tools to the
                                        DPG Registry. Survey the registry for tools NYC could adopt.
                                        Enroll OTI leadership in DPI Essentials courses.
                                    </p>
                                    <a
                                        href="https://digitalpublicgoods.net"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="unnyc-guide-opportunity-link"
                                    >
                                        digitalpublicgoods.net →
                                    </a>
                                </div>

                                <div className="unnyc-guide-opportunity-card">
                                    <h3>GovStack — Modular Digital Government</h3>
                                    <p>
                                        A UN-backed initiative (ITU, GIZ, Estonia) providing
                                        reusable &quot;building block&quot; specifications for
                                        common government digital services — identity, payments,
                                        data exchange, registries, consent management.
                                    </p>
                                    <p className="unnyc-guide-opportunity-action">
                                        <strong>NYC action:</strong> Use GovStack&apos;s
                                        building-block approach to inform how the city standardizes
                                        shared services across 130+ agencies.
                                    </p>
                                    <a
                                        href="https://govstack.global"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="unnyc-guide-opportunity-link"
                                    >
                                        govstack.global →
                                    </a>
                                </div>

                                <div className="unnyc-guide-opportunity-card">
                                    <h3>
                                        UN Global Compact Leaders Summit — NYC, Sept 22–23, 2026
                                    </h3>
                                    <div className="unnyc-guide-badge unnyc-guide-badge--local">
                                        📍 In NYC
                                    </div>
                                    <p>
                                        A major summit on sustainable business and climate-resilient
                                        growth during UNGA week. Directly intersects with Local Law
                                        97 compliance and NYC&apos;s green economy plan.
                                    </p>
                                    <p className="unnyc-guide-opportunity-action">
                                        <strong>NYC action:</strong> Send procurement and
                                        sustainability leads. Connect with vendors committed to
                                        sustainable practices.
                                    </p>
                                    <a
                                        href="https://unglobalcompact.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="unnyc-guide-opportunity-link"
                                    >
                                        unglobalcompact.org →
                                    </a>
                                </div>

                                <div className="unnyc-guide-opportunity-card">
                                    <h3>Internet Governance Forum (IGF)</h3>
                                    <p>
                                        In December 2025, member states voted to make the IGF a
                                        permanent UN forum. Covers digital inclusion, AI governance,
                                        cybersecurity, and human rights online.
                                    </p>
                                    <p className="unnyc-guide-opportunity-action">
                                        <strong>NYC action:</strong> Present NYC&apos;s digital
                                        equity programs and influence how internet governance
                                        frameworks address municipal priorities.
                                    </p>
                                </div>
                            </section>

                            {/* Calendar Summary */}
                            <section id="calendar" className="unnyc-guide-section">
                                <h2>Calendar Summary</h2>
                                <table className="unnyc-guide-table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Event</th>
                                            <th>Location</th>
                                            <th>NYC Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>May 17–22, 2026</td>
                                            <td>World Urban Forum 13</td>
                                            <td>Baku, Azerbaijan</td>
                                            <td>Send delegation, present NYC tech</td>
                                        </tr>
                                        <tr className="unnyc-guide-highlight-row">
                                            <td>June 22–26, 2026</td>
                                            <td>UN Open Source Week</td>
                                            <td>
                                                <strong>UN HQ, NYC</strong>
                                            </td>
                                            <td>Present, hackathon, side event</td>
                                        </tr>
                                        <tr className="unnyc-guide-highlight-row">
                                            <td>Sept 9–25, 2026</td>
                                            <td>UNGA 81 + Science Summit</td>
                                            <td>
                                                <strong>UN HQ, NYC</strong>
                                            </td>
                                            <td>Align city events with UNGA week</td>
                                        </tr>
                                        <tr className="unnyc-guide-highlight-row">
                                            <td>Sept 22–23, 2026</td>
                                            <td>UN Global Compact Summit</td>
                                            <td>
                                                <strong>NYC</strong>
                                            </td>
                                            <td>Procurement + sustainability leads</td>
                                        </tr>
                                        <tr>
                                            <td>Ongoing</td>
                                            <td>DPI Essentials courses</td>
                                            <td>Online</td>
                                            <td>Enroll OTI leadership</td>
                                        </tr>
                                        <tr>
                                            <td>Ongoing</td>
                                            <td>GAM-4-DC</td>
                                            <td>Virtual + events</td>
                                            <td>Formalize NYC membership</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            {/* Recommended First Steps */}
                            <section id="first-steps" className="unnyc-guide-section">
                                <h2>Recommended First Steps</h2>
                                <div className="unnyc-guide-steps-grid">
                                    <div className="unnyc-guide-step-card">
                                        <div className="unnyc-guide-step-number">1</div>
                                        <h3>Endorse the UN Open Source Principles</h3>
                                        <p>
                                            Low effort, high signal. Position NYC as a leader among
                                            U.S. municipal governments.
                                        </p>
                                    </div>
                                    <div className="unnyc-guide-step-card">
                                        <div className="unnyc-guide-step-number">2</div>
                                        <h3>Send a delegation to UN Open Source Week</h3>
                                        <p>
                                            June 22–26, 2026. It&apos;s in your city — no flights
                                            needed.
                                        </p>
                                    </div>
                                    <div className="unnyc-guide-step-card">
                                        <div className="unnyc-guide-step-number">3</div>
                                        <h3>Establish a lightweight OSPO</h3>
                                        <p>
                                            Start with an inventory of what NYC already uses and
                                            contributes to open source.
                                        </p>
                                    </div>
                                    <div className="unnyc-guide-step-card">
                                        <div className="unnyc-guide-step-number">4</div>
                                        <h3>Enroll leaders in DPI Essentials</h3>
                                        <p>
                                            Quick professional development win for OTI staff and
                                            agency CIOs.
                                        </p>
                                    </div>
                                    <div className="unnyc-guide-step-card">
                                        <div className="unnyc-guide-step-number">5</div>
                                        <h3>Propose a NYC side event during UNGA</h3>
                                        <p>
                                            Tech-focused, co-hosted with the Mayor&apos;s Office
                                            for International Affairs.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Attribution / About */}
                            <section className="unnyc-guide-section unnyc-guide-about">
                                <p>
                                    This guide was prepared by{' '}
                                    <a
                                        href="https://wegov.nyc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <strong>WeGovNYC</strong>
                                    </a>
                                    , a nonprofit program of{' '}
                                    <a
                                        href="https://sarapis.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <strong>Sarapis</strong>
                                    </a>
                                    , dedicated to making New York City the world&apos;s best
                                    municipal government.
                                </p>
                                <p>
                                    <Link href="/unnyc" className="unnyc-guide-back-link">
                                        ← Back to UNNYC Hub
                                    </Link>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </article>

            {/* Footer */}
            <footer className="unnyc-guide-footer">
                <div className="unnyc-guide-container">
                    <div className="unnyc-guide-footer__bottom">
                        <p>
                            © 2026 UNNYC is an open civic technology project by{' '}
                            <a
                                href="https://wegov.nyc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WeGov.NYC
                            </a>{' '}
                            and{' '}
                            <a
                                href="https://sarapis.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sarapis
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
