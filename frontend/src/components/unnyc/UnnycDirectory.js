import { directory } from '@/data/unnyc';

/**
 * UnnycDirectory — Server component rendering the 3-column office directory.
 * Color-coded headers distinguish UN, NYC, and NYS categories.
 */
export default function UnnycDirectory() {
    const categories = ['un', 'nyc', 'nys'];

    return (
        <section id="directory" className="unnyc-section">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">Key Offices</span>
                    <h2 className="unnyc-section__title">Directory</h2>
                </header>

                <div className="unnyc-directory__grid">
                    {categories.map((key) => {
                        const category = directory[key];
                        return (
                            <div key={key} className="unnyc-directory__column">
                                <h3 className={`unnyc-directory__header unnyc-directory__header--${key}`}>
                                    {category.label}
                                </h3>
                                <ul className="unnyc-directory__list">
                                    {category.items.map((item, index) => (
                                        <li key={index} className="unnyc-directory__item">
                                            <strong className="unnyc-directory__name">{item.name}</strong>
                                            <span className="unnyc-directory__address">{item.address}</span>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="unnyc-directory__link"
                                            >
                                                Visit site ↗
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
