export default function Embed({ data }) {
    if (!data?.html) return null;

    return (
        <section className="embed-section" style={{ padding: '2rem 0' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <div
                    className="embed-container"
                    dangerouslySetInnerHTML={{ __html: data.html }}
                />
            </div>
        </section>
    );
}
