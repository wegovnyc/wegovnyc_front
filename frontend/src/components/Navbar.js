"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/* UNNYC hub sections, in page (document) order. The scroll-spy marks the
   submenu child whose hash matches whichever of these sits at the top of
   the viewport. Kept in sync with the section ids in components/unnyc/*. */
const UNNYC_SPY_IDS = ['about', 'events', 'policy', 'open-source', 'resources', 'directory', 'map', 'news'];

/**
 * Main site navigation with an optional in-flow submenu bar.
 * A nav link with a `children` array renders a secondary nav that is shown
 * exactly when that link's section is active (route-driven, not click-toggled):
 * it appears on the section's pages and is hidden everywhere else.
 */
export default function Navbar({ data, siteName, children }) {
    const pathname = usePathname();

    // Hash of the UNNYC section currently at the top of the viewport
    // ('' = above the first section, i.e. the hero). Only tracked on /unnyc.
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        if (pathname !== '/unnyc') {
            setActiveHash('');
            return undefined;
        }

        const sections = UNNYC_SPY_IDS
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (!sections.length) return undefined;

        // Line just below the sticky header; a section counts as "current"
        // once its top crosses above it. Active = last such section.
        const OFFSET = 96;

        const compute = () => {
            let hash = '';
            for (const sec of sections) {
                if (sec.getBoundingClientRect().top <= OFFSET) hash = `#${sec.id}`;
                else break;
            }
            // At page bottom a short last section may never reach OFFSET —
            // force it active so the final item highlights.
            const atBottom = window.innerHeight + Math.ceil(window.scrollY)
                >= document.documentElement.scrollHeight - 2;
            if (atBottom) hash = `#${sections[sections.length - 1].id}`;
            setActiveHash((prev) => (prev === hash ? prev : hash));
        };

        // IntersectionObserver fires as each section crosses the OFFSET line
        // (rootMargin trims the viewport to a top band); scroll/resize cover
        // the page-bottom edge and deep-link/initial load.
        const observer = new IntersectionObserver(compute, {
            rootMargin: `-${OFFSET}px 0px -60% 0px`,
            threshold: 0,
        });
        sections.forEach((s) => observer.observe(s));

        compute();
        window.addEventListener('scroll', compute, { passive: true });
        window.addEventListener('resize', compute);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', compute);
            window.removeEventListener('resize', compute);
        };
    }, [pathname]);

    // A link is active when the current path equals its URL or is nested
    // beneath it (so /unnyc/guide keeps the UNNYC item active). Home ('/')
    // and hash links only match exactly, avoiding false positives.
    const isActive = (url) => {
        if (!url || url === '/' || url.includes('#')) return pathname === url;
        return pathname === url || pathname.startsWith(url + '/');
    };

    // Submenu children come in two flavors: path-based (e.g. /unnyc/guide,
    // matched by route) and hash-based (e.g. /unnyc#events, matched by the
    // scroll-spy while on /unnyc).
    const isChildActive = (url) => {
        if (url && url.includes('#')) {
            if (pathname !== '/unnyc') return false;
            return url.slice(url.indexOf('#')) === activeHash;
        }
        return isActive(url);
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
                                            className={`navbar-submenu-link${isChildActive(child.url) ? ' navbar-submenu-link--active' : ''}`}
                                            aria-current={isChildActive(child.url) ? 'page' : undefined}
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
