import { resources } from '@/data/unnyc';

/**
 * UnnycResources — Server component rendering practical resource cards.
 * Each card has a title, description, and nested external links.
 */
export default function UnnycResources() {
    return (
        <section id="resources" className="unnyc-section unnyc-section--alt">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">Practical Info</span>
                    <h2 className="unnyc-section__title">Resources for Public Servants</h2>
                </header>

                <div className="unnyc-resources__grid">
                    {resources.map((resource, index) => (
                        <div key={index} className="unnyc-resources__card">
                            <span className="unnyc-resources__card-icon" aria-hidden="true">
                                {resource.icon}
                            </span>
                            <h3 className="unnyc-resources__card-title">{resource.title}</h3>
                            <p className="unnyc-resources__card-desc">{resource.description}</p>
                            <ul className="unnyc-resources__links">
                                {resource.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="unnyc-resources__link"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
