"use client";
import { useState } from 'react';
import Link from 'next/link';

/**
 * Main site navigation with optional horizontal submenu bar.
 * Nav links with a `children` array render as an in-flow submenu
 * that pushes page content down (not an overlay).
 */
export default function Navbar({ data, siteName, children }) {
    const [openDropdown, setOpenDropdown] = useState(null);

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
                                onMouseEnter={() => link.children && setOpenDropdown(link.id)}
                                onMouseLeave={() => link.children && setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.url}
                                    target={link.isExternal ? '_blank' : '_self'}
                                    className={`navbar-link ${link.children ? 'navbar-link--has-submenu' : ''}`}
                                >
                                    {link.label}
                                    {link.children && <span className="navbar-submenu-arrow">▾</span>}
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

            {/* Submenu bar — renders in document flow, pushes content down */}
            {data.links && data.links.map((link) => (
                link.children && openDropdown === link.id && (
                    <div
                        key={`sub-${link.id}`}
                        className="navbar-submenu-bar"
                        onMouseEnter={() => setOpenDropdown(link.id)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <div className="container">
                            <ul className="navbar-submenu-links">
                                {link.children.map((child) => (
                                    <li key={child.id}>
                                        <Link
                                            href={child.url}
                                            target={child.isExternal ? '_blank' : '_self'}
                                            className="navbar-submenu-link"
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
