import Link from 'next/link';
import '../primer.css';
import HeaderHeightVar from '@/components/unnyc/primer/HeaderHeightVar';
import { primerPolicies } from '@/data/unnyc-primer';

export const metadata = {
    title: 'Turning UN Concepts into NYC Reality — The Crosswalk | UNNYC',
    description:
        'A concept-by-concept crosswalk between the UN open source agenda and what New York City already has in place — open by default, an NYC OSPO, digital public infrastructure, contributing back, open-standards procurement, and a seat at the global table.',
    openGraph: {
        title: 'Turning UN Concepts into NYC Reality — The Crosswalk',
        description:
            'How the UN open source agenda maps onto what New York City already does — and the next step in each case.',
        type: 'article',
    },
};

/**
 * /unnyc/crosswalk — full write-up of the hub's "UN Concepts ↔
 * NYC Reality" section. Each crosswalk card on the primer links here and
 * jumps to the matching section (#<slug>). Content is the single source in
 * data/unnyc-primer.js (primerPolicies.items), so the primer cards and this
 * page never drift.
 */
export default function CrosswalkPage() {
    const { items } = primerPolicies;

    return (
        <div className="unnyc-pr">
            <HeaderHeightVar />

            {/* Mini nav — back to the primer */}
            <nav className="unnyc-pr-nav" aria-label="Crosswalk">
                <div className="unnyc-pr-nav__inner">
                    <Link href="/unnyc" className="unnyc-pr-nav__logo" title="Back to the UNNYC hub">
                        <span className="unnyc-pr-nav__logo-mark">UN</span>
                        <span className="unnyc-pr-nav__logo-ny">NYC</span>
                        <span className="unnyc-pr-nav__logo-tag">Crosswalk</span>
                    </Link>
                    <ul className="unnyc-pr-nav__links">
                        {items.map((it) => (
                            <li key={it.slug}>
                                <a href={`#${it.slug}`} className="unnyc-pr-nav__link">{it.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Header */}
            <header className="unnyc-pr-cw__header">
                <div className="unnyc-container">
                    <p className="unnyc-pr-cw__header-eyebrow">{primerPolicies.eyebrow}</p>
                    <h1 className="unnyc-pr-cw__header-title">{primerPolicies.title}</h1>
                    <p className="unnyc-pr-cw__lede">
                        {primerPolicies.lede} Each concept below pairs what the UN system has agreed on
                        with what New York already has in place — and the next step to close the gap.
                    </p>
                </div>
            </header>

            {/* One section per crosswalk item */}
            <div className="unnyc-pr-cw">
                {items.map((it) => (
                    <section key={it.slug} id={it.slug} className="unnyc-pr-cw__section">
                        <div className="unnyc-container unnyc-container--narrow">
                            <div className="unnyc-pr-cw__heading">
                                <span className="unnyc-pr-cw__icon" aria-hidden="true">{it.icon}</span>
                                <h2 className="unnyc-pr-cw__title">{it.title}</h2>
                            </div>

                            <div className="unnyc-pr-cw__summary">
                                <div className="unnyc-pr-cw__col">
                                    <h3 className="unnyc-pr-cw__col-label unnyc-pr-cw__col-label--un">UN Concept</h3>
                                    <p>{it.un}</p>
                                </div>
                                <div className="unnyc-pr-cw__col">
                                    <h3 className="unnyc-pr-cw__col-label unnyc-pr-cw__col-label--nyc">NYC Reality</h3>
                                    <p>{it.nyc}</p>
                                </div>
                            </div>

                            <div className="unnyc-pr-cw__prose">
                                {it.detail.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Foot CTA */}
            <section className="unnyc-pr-cw__foot">
                <div className="unnyc-container unnyc-container--narrow">
                    <p>Convinced? The ask is a signature and a light-touch roadmap.</p>
                    <div className="unnyc-pr-cw__foot-ctas">
                        <Link href="/unnyc/campaign" className="unnyc-btn unnyc-btn--primary">
                            Read &amp; Sign the Open Letter
                        </Link>
                        <Link href="/unnyc" className="unnyc-btn unnyc-btn--outline">
                            ← Back to the hub
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
