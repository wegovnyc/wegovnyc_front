import { policies } from '@/data/unnyc';

/**
 * UnnycPolicy — Server component rendering policy intersection cards.
 * Shows where UN frameworks and NYC/NYS priorities converge.
 */
export default function UnnycPolicy() {
    return (
        <section id="policy" className="unnyc-section">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">Common Ground</span>
                    <h2 className="unnyc-section__title">Policy Intersections</h2>
                    <p className="unnyc-section__desc">
                        Where UN frameworks and NYC/NYS priorities converge on the same streets.
                    </p>
                </header>

                <div className="unnyc-policy__grid">
                    {policies.map((policy, index) => (
                        <div key={index} className="unnyc-policy__card">
                            <div className="unnyc-policy__card-header">
                                <span className="unnyc-policy__card-icon" aria-hidden="true">
                                    {policy.icon}
                                </span>
                                <h3 className="unnyc-policy__card-title">{policy.title}</h3>
                            </div>
                            <div className="unnyc-policy__card-body">
                                <div className="unnyc-policy__framework">
                                    <h4 className="unnyc-policy__framework-label">UN Framework</h4>
                                    <p>{policy.un}</p>
                                </div>
                                <div className="unnyc-policy__framework">
                                    <h4 className="unnyc-policy__framework-label">NYC/NYS Action</h4>
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
