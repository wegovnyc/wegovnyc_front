import { getStrapiMedia } from '@/lib/api';

export default function FeatureGrid({ data }) {
    return (
        <section className="feature-grid">
            <div className="container">
                {data.title && <h2>{data.title}</h2>}
                {data.description && <p className="description">{data.description}</p>}

                <div className="grid">
                    {data.cards && data.cards.map((card) => {
                        const imageUrl = card.image?.url ? getStrapiMedia(card.image.url) : null;

                        return (
                            <div key={card.id} className="card">
                                {imageUrl && (
                                    <div className="card-image">
                                        <img src={imageUrl} alt={card.title} />
                                    </div>
                                )}
                                <div className="card-content">
                                    <h3>{card.title}</h3>
                                    {card.description && <p>{card.description}</p>}
                                    {card.link && (
                                        <a href={card.link.url} className="card-link">
                                            {card.link.label} &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
