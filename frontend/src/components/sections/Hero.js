export default function Hero({ data }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{data.title}</h1>
                {data.subtitle && <p className="subtitle">{data.subtitle}</p>}
                {data.buttons && data.buttons.map((button) => (
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
        </section>
    );
}
