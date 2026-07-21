'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { endorsers } from '@/data/unnyc-primer';

/**
 * PrimerMovementNow — combined "who's already in" section. Merges the former
 * "The World Is Moving" map (governments advancing open source) with the
 * "Endorsers & Contributors" list (organizations that endorsed the UN
 * Principles) into one momentum/social-proof block: governments on the map,
 * organizations on the list, Barcelona as first city, and the ask to add NYC.
 *
 * Leaflet needs browser globals, so the map is dynamically imported (ssr:false).
 */
const PrimerMapInner = dynamic(() => import('./PrimerMapInner'), { ssr: false });

export default function PrimerMovementNow() {
    return (
        <section id="going-open-source" className="unnyc-section unnyc-section--alt unnyc-section--map">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">Who&rsquo;s Already In</span>
                    <h2 className="unnyc-section__title">The World is Going Open Source</h2>
                    <p className="unnyc-section__desc">
                        Governments on the map, organizations on the list — the movement is real
                        and growing. One marker is still an ask.
                    </p>
                </header>

                <PrimerMapInner />

                <p className="unnyc-pr-map__source">
                    This map is illustrative. For the full global picture, explore the{' '}
                    <a href="https://dpimap.org/" target="_blank" rel="noopener noreferrer">
                        DPI Map
                    </a>{' '}
                    (UCL IIPP) — click any of 210 countries to see the digital ID, payment,
                    and data-exchange systems it runs.
                </p>

                <div className="unnyc-pr-mn__endorsers">
                    <h3 className="unnyc-pr-mn__subhead">The organizations that have signed on</h3>
                    <p className="unnyc-pr-mn__lede">{endorsers.lede}</p>

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
            </div>
        </section>
    );
}
