import Link from 'next/link';
import { primerPolicies } from '@/data/unnyc-primer';

/**
 * PrimerPolicy — the reframed policy-intersections section: open source /
 * digital governance concepts crosswalked to what NYC already has.
 * Reuses the hub's unnyc-policy card CSS; each card links to the matching
 * section on the full crosswalk page (/unnyc/crosswalk#<slug>).
 */
export default function PrimerPolicy() {
    return (
        <section id="policy" className="unnyc-section unnyc-section--alt">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">{primerPolicies.eyebrow}</span>
                    <h2 className="unnyc-section__title">{primerPolicies.title}</h2>
                    <p className="unnyc-section__desc">{primerPolicies.lede}</p>
                </header>

                <div className="unnyc-policy__grid">
                    {primerPolicies.items.map((policy, index) => (
                        <Link
                            key={index}
                            href={`/unnyc/crosswalk#${policy.slug}`}
                            className="unnyc-policy__card unnyc-policy__card--link"
                        >
                            <div className="unnyc-policy__card-header">
                                <span className="unnyc-policy__card-icon" aria-hidden="true">
                                    {policy.icon}
                                </span>
                                <h3 className="unnyc-policy__card-title">{policy.title}</h3>
                            </div>
                            <div className="unnyc-policy__card-body">
                                <div className="unnyc-policy__framework">
                                    <h4 className="unnyc-policy__framework-label">UN Concept</h4>
                                    <p>{policy.un}</p>
                                </div>
                                <div className="unnyc-policy__framework">
                                    <h4 className="unnyc-policy__framework-label">NYC Reality</h4>
                                    <p>{policy.nyc}</p>
                                </div>
                            </div>
                            <span className="unnyc-pr-policy__more">Read the full crosswalk →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
