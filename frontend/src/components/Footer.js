import Link from 'next/link';

export default function Footer({ data, siteName }) {
    if (!data) return null;

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-newsletter">
                        <h3>{data.newsletterTitle || 'Get Involved'}</h3>
                        {data.newsletterText && <p>{data.newsletterText}</p>}
                    </div>
                    <div className="footer-links">
                        {data.socialLinks && data.socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                className="footer-link"
                                target={link.isExternal ? '_blank' : '_self'}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {siteName || 'WeGovNYC'}</p>
                </div>
            </div>
        </footer>
    );
}
