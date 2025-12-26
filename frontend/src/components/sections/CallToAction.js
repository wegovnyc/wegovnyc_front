export default function CallToAction({ data }) {
    return (
        <section className="cta-section">
            <div className="container">
                <h2>{data.title}</h2>
                {data.text && <p className="cta-text">{data.text}</p>}
                {data.buttons && (
                    <div className="cta-buttons">
                        {data.buttons.map((button) => (
                            <a
                                key={button.id}
                                href={button.url}
                                className={`btn btn-${button.style || 'primary'}`}
                                target={button.isExternal ? '_blank' : '_self'}
                            >
                                {button.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
