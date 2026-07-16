import { openSource } from '@/data/unnyc';
import UnnycCampaignSignup from '@/components/unnyc/UnnycCampaignSignup';

/**
 * UnnycCampaign — Server component for the UN Open Source Principles campaign.
 * Dark-band section: Barcelona precedent + NYC case, the eight principles,
 * and the endorsement ask aimed at OTI / Mayor's Office for International Affairs.
 */
export default function UnnycCampaign() {
    return (
        <section id="open-source" className="unnyc-section unnyc-campaign">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow unnyc-campaign__eyebrow">
                        {openSource.eyebrow}
                    </span>
                    <h2 className="unnyc-section__title unnyc-campaign__title">
                        {openSource.title}
                    </h2>
                    <p className="unnyc-section__desc unnyc-campaign__lede">
                        {openSource.lede}
                    </p>
                </header>

                <div className="unnyc-campaign__columns">
                    <div className="unnyc-campaign__panel">
                        <h3 className="unnyc-campaign__panel-title">{openSource.barcelona.title}</h3>
                        <p className="unnyc-campaign__panel-intro">{openSource.barcelona.intro}</p>
                        <ul className="unnyc-campaign__list">
                            {openSource.barcelona.commitments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <a
                            href={openSource.barcelona.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="unnyc-campaign__panel-link"
                        >
                            Read the full story →
                        </a>
                    </div>

                    <div className="unnyc-campaign__panel">
                        <h3 className="unnyc-campaign__panel-title">{openSource.nycCase.title}</h3>
                        <p className="unnyc-campaign__panel-intro">{openSource.nycCase.intro}</p>
                        <ul className="unnyc-campaign__list">
                            {openSource.nycCase.points.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="unnyc-campaign__principles">
                    <h3 className="unnyc-campaign__principles-title">The Eight Principles</h3>
                    <div className="unnyc-campaign__principles-grid">
                        {openSource.principles.map((principle, index) => (
                            <div key={index} className="unnyc-campaign__principle">
                                <span className="unnyc-campaign__principle-num">{index + 1}</span>
                                <div>
                                    <h4 className="unnyc-campaign__principle-title">{principle.title}</h4>
                                    <p className="unnyc-campaign__principle-desc">{principle.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="unnyc-campaign__ask">
                    <h3 className="unnyc-campaign__ask-heading">{openSource.ask.heading}</h3>
                    <p className="unnyc-campaign__ask-text">{openSource.ask.text}</p>
                    <div className="unnyc-campaign__ask-ctas">
                        {openSource.ask.ctas.map((cta, index) => (
                            <a
                                key={index}
                                href={cta.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`unnyc-btn unnyc-btn--${cta.style}`}
                            >
                                {cta.text}
                            </a>
                        ))}
                    </div>
                </div>

                <UnnycCampaignSignup campaign="un-open-source" />
            </div>
        </section>
    );
}
