"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Main site navigation with an optional in-flow submenu bar.
 * A nav link with a `children` array renders a secondary nav that is shown
 * exactly when that link's section is active (route-driven, not click-toggled):
 * it appears on the section's pages and is hidden everywhere else.
 */
export default function Navbar({ data, siteName, children }) {
    const pathname = usePathname();

    // A link is active when the current path equals its URL or is nested
    // beneath it (so /unnyc/guide keeps the UNNYC item active). Home ('/')
    // and hash links only match exactly, avoiding false positives.
    const isActive = (url) => {
        if (!url || url === '/' || url.includes('#')) return pathname === url;
        return pathname === url || pathname.startsWith(url + '/');
    };

    if (!data) return null;

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link href="/" className="navbar-logo">
                    {siteName || 'WeGovNYC'}
                </Link>

                {/* Center Content (Theme Toggle) */}
                <div className="navbar-center">
                    {children}
                </div>

                <div className="navbar-menu">
                    <ul className="navbar-links">
                        {data.links && data.links.map((link) => (
                            <li
                                key={link.id}
                                className={link.children ? 'navbar-has-submenu' : ''}
                            >
                                <Link
                                    href={link.url}
                                    target={link.isExternal ? '_blank' : '_self'}
                                    className={`navbar-link${isActive(link.url) ? ' navbar-link--active' : ''}`}
                                    aria-current={isActive(link.url) ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {data.button && (
                        <div className="navbar-cta">
                            <a
                                href={data.button.url}
                                target={data.button.isExternal ? '_blank' : '_self'}
                                className={`btn btn-${data.button.style || 'primary'} btn-sm`}
                            >
                                {data.button.label}
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Submenu bar — shown only while its section is active (route-driven),
                rendered in document flow so it pushes page content down. */}
            {data.links && data.links.map((link) => (
                link.children && isActive(link.url) && (
                    <div
                        key={`sub-${link.id}`}
                        className="navbar-submenu-bar"
                    >
                        <div className="container">
                            <ul className="navbar-submenu-links">
                                {link.children.map((child) => (
                                    <li key={child.id}>
                                        <Link
                                            href={child.url}
                                            target={child.isExternal ? '_blank' : '_self'}
                                            className={`navbar-submenu-link${isActive(child.url) ? ' navbar-submenu-link--active' : ''}`}
                                            aria-current={isActive(child.url) ? 'page' : undefined}
                                        >
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            ))}
        </nav>
    );
}
