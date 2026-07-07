'use client';

import dynamic from 'next/dynamic';

/**
 * Dynamic wrapper for the Leaflet map component.
 *
 * Leaflet relies on browser globals (`window`, `document`), so we
 * dynamically import UnnycMapInner with `ssr: false` to prevent
 * server-side rendering failures in Next.js.
 */
const UnnycMapInner = dynamic(() => import('./UnnycMapInner'), { ssr: false });

export default function UnnycMap() {
  return (
    <section id="map" className="unnyc-map-section unnyc-section--alt">
      <div className="unnyc-map-header">
        <span className="unnyc-eyebrow">Geography</span>
        <h2 className="unnyc-section-title">Key Locations</h2>
        <p className="unnyc-section-desc">
          The United Nations and New York share more than a mailing
          address&mdash;they share a geography of institutions, agencies, and
          offices that shape global and local policy alike.
        </p>
      </div>

      <UnnycMapInner />
    </section>
  );
}
