import Link from 'next/link';

/**
 * UnnycAbout — Server component rendering the UNNYC About / Mission section.
 * Features mission text and three informational cards.
 */
export default function UnnycAbout() {
    return (
        <section id="about" className="unnyc-section">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">Our Mission</span>
                    <h2 className="unnyc-section__title">A Shared Digital Commons</h2>
                </header>

                <div className="unnyc-about__grid">
                    <div className="unnyc-about__text">
                        <p className="unnyc-about__lead">
                            New York City has hosted the United Nations since 1952 — yet for most
                            New Yorkers, the world of international diplomacy and local governance
                            rarely intersect. UNNYC bridges that gap: a single information hub
                            connecting UN activity, NYC policy, and New York State resources so
                            public servants, residents, and visitors can see where global frameworks
                            meet neighborhood streets.
                        </p>
                        <p>
                            Built by <Link href="/">WeGovNYC</Link> and{' '}
                            <a href="https://sarapis.org" target="_blank" rel="noopener noreferrer">
                                Sarapis
                            </a>, UNNYC is a free, open civic resource — not affiliated with the
                            United Nations or any government agency.
                        </p>
                    </div>

                    <div className="unnyc-about__cards">
                        <div className="unnyc-about__card">
                            <span className="unnyc-about__card-icon" aria-hidden="true">🌐</span>
                            <h3>Global Meets Local</h3>
                            <p>
                                See how UN frameworks like the SDGs and Paris Agreement map directly
                                to NYC laws, programs, and agencies working in your borough.
                            </p>
                        </div>

                        <div className="unnyc-about__card">
                            <span className="unnyc-about__card-icon" aria-hidden="true">🤝</span>
                            <h3>Professional Networking</h3>
                            <p>
                                A directory of UN offices, NYC agencies, and NYS departments —
                                all located in New York City — to help public servants connect
                                across jurisdictions.
                            </p>
                        </div>

                        <div className="unnyc-about__card">
                            <span className="unnyc-about__card-icon" aria-hidden="true">🗽</span>
                            <h3>Living in NYC</h3>
                            <p>
                                Practical resources for transit, housing, health, and city services
                                — curated for international staff and anyone navigating New York&apos;s
                                civic landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
