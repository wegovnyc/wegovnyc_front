'use client';

import dynamic from 'next/dynamic';

/**
 * Dynamic wrapper for the primer's world map (Leaflet needs browser
 * globals, so SSR is disabled — same pattern as UnnycMap).
 */
const PrimerMapInner = dynamic(() => import('./PrimerMapInner'), { ssr: false });

export default function PrimerMap() {
    return (
        <section id="map" className="unnyc-section unnyc-section--map">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">The World Is Moving</span>
                    <h2 className="unnyc-section__title">Key Government Players</h2>
                    <p className="unnyc-section__desc">
                        Cities and nations already advancing public-sector open source —
                        endorsements, OSPOs, open infrastructure, and public funding.
                        One marker is still an ask.
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
            </div>
        </section>
    );
}
