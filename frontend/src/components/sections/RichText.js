import ReactMarkdown from 'react-markdown';

export default function RichText({ data }) {
    if (!data?.content) return null;

    return (
        <section className="rich-text-section">
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="prose">
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                </div>
            </div>
        </section>
    );
}
