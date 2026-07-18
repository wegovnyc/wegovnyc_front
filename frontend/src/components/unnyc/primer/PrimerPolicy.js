import { primerPolicies } from '@/data/unnyc-primer';

/**
 * PrimerPolicy — the reframed policy-intersections section: open source /
 * digital governance concepts crosswalked to what NYC already has.
 * Reuses the hub's unnyc-policy card CSS with primer-specific data.
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
                        <div key={index} className="unnyc-policy__card">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
