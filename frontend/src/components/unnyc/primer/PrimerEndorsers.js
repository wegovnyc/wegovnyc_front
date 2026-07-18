import Link from 'next/link';
import { endorsers } from '@/data/unnyc-primer';

/**
 * PrimerEndorsers — the sixteen organizations that endorsed the UN Open
 * Source Principles at launch (per unite.un.org, 25 Mar 2025), Barcelona
 * as the first endorsing city, and the funnel into the NYC campaign.
 */
export default function PrimerEndorsers() {
    return (
        <section id="endorsers" className="unnyc-section unnyc-section--alt">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">{endorsers.eyebrow}</span>
                    <h2 className="unnyc-section__title">{endorsers.title}</h2>
                    <p className="unnyc-section__desc">{endorsers.lede}</p>
                </header>

                <ul className="unnyc-pr-endorsers__grid">
                    {endorsers.orgs.map((org, i) => (
                        <li key={i} className="unnyc-pr-endorsers__org">
                            <a href={org.url} target="_blank" rel="noopener noreferrer">
                                {org.name} ↗
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="unnyc-pr-endorsers__city">
                    <span className="unnyc-pr-endorsers__city-badge">First City</span>
                    <div>
                        <strong>{endorsers.city.name}</strong>
                        <p>{endorsers.city.desc}</p>
                    </div>
                </div>

                <div className="unnyc-pr-endorsers__cta">
                    <p>{endorsers.cta.text}</p>
                    <Link href={endorsers.cta.href} className="unnyc-btn unnyc-btn--primary">
                        {endorsers.cta.label}
                    </Link>
                </div>
            </div>
        </section>
    );
}
