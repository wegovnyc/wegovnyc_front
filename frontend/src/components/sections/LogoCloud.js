import { getStrapiMedia } from '@/lib/api';

export default function LogoCloud({ data }) {
    return (
        <section className="logo-cloud">
            <div className="container">
                {data.title && <h2>{data.title}</h2>}
                <div className="logo-grid">
                    {data.logos && data.logos.map((logo) => {
                        const imageUrl = logo.image?.url ? getStrapiMedia(logo.image.url) : null;
                        return (
                            <div key={logo.id} className="logo-item" title={logo.name}>
                                {imageUrl ? (
                                    <img src={imageUrl} alt={logo.name} />
                                ) : (
                                    <span className="logo-placeholder">{logo.name}</span>
                                )}
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
