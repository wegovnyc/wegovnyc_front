"use client";
import { useState } from 'react';
import Link from 'next/link';

/**
 * Main site navigation with optional dropdown submenus.
 * Nav links with a `children` array render as dropdown menus.
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
                                className={link.children ? 'navbar-dropdown' : ''}
                                onMouseEnter={() => link.children && setOpenDropdown(link.id)}
                                onMouseLeave={() => link.children && setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.url}
                                    target={link.isExternal ? '_blank' : '_self'}
                                    className={`navbar-link ${link.children ? 'navbar-link--has-dropdown' : ''}`}
                                >
                                    {link.label}
                                    {link.children && <span className="navbar-dropdown-arrow">▾</span>}
                                </Link>
                                {link.children && openDropdown === link.id && (
                                    <ul className="navbar-dropdown-menu">
                                        {link.children.map((child) => (
                                            <li key={child.id}>
                                                <Link
                                                    href={child.url}
                                                    target={child.isExternal ? '_blank' : '_self'}
                                                    className="navbar-dropdown-link"
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
        </nav>
    );
}
