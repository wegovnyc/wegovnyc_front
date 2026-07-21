"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/* UNNYC hub sections, in page (document) order. The scroll-spy marks the
   submenu child whose hash matches whichever of these sits at the top of
   the viewport. Kept in sync with the section ids in components/unnyc/*. */
const UNNYC_SPY_IDS = ['open-source', 'movement', 'concepts', 'cases', 'policy', 'map', 'endorsers', 'resources', 'contacts', 'news'];

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

    // Mobile menu drawer open/closed. Hidden by CSS above the breakpoint, so
    // this only has a visible effect on narrow viewports.
    const [menuOpen, setMenuOpen] = useState(false);

    // Close the drawer on route change (covers path-based links; hash links on
    // the same page are closed by the per-link onClick below).
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Let Escape close the drawer while it's open.
    useEffect(() => {
        if (!menuOpen) return undefined;
        const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    // On mobile the subnav is a single scrollable line; keep the active chip
    // centered as the scroll-spy advances. Only runs when the subnav actually
    // overflows (i.e. mobile) and scrolls the container's own scrollLeft, so it
    // can never move the page vertically.
    useEffect(() => {
        const container = document.querySelector('.navbar-submenu-links');
        const activeEl = container?.querySelector('.navbar-submenu-link--active');
        if (!container || !activeEl) return;
        if (container.scrollWidth <= container.clientWidth) return; // no overflow (desktop)
        const centered = activeEl.offsetLeft - (container.clientWidth - activeEl.offsetWidth) / 2;
        const left = Math.max(0, Math.min(centered, container.scrollWidth - container.clientWidth));
        container.scrollLeft = left; // instant: smooth programmatic scroll is unreliable here
    }, [activeHash, pathname]);

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
        // once its top crosses above it. Active = last such section. The line
        // tracks the real header height (navbar + submenu bar, which grows
        // when web fonts load) plus a small margin, so a section jumped to via
        // the submenu registers as active immediately rather than only after
        // an extra nudge of scrolling.
        const getOffset = () => {
            const headerEl = document.querySelector('.site-header');
            return (headerEl ? headerEl.getBoundingClientRect().height : 72) + 40;
        };

        const compute = () => {
            const OFFSET = getOffset();
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
            rootMargin: `-${getOffset()}px 0px -60% 0px`,
            threshold: 0,
        });
        sections.forEach((s) => observer.observe(s));

        compute();
        window.addEventListener('scroll', compute, { passive: true });
        window.addEventListener('resize', compute);
        window.addEventListener('hashchange', compute);
        // On a deep-link load the hash scroll, the ScrollReveal fade/transform
        // transitions, and the late web-font reflow all shift section positions
        // AFTER this first compute(), and none reliably fires a scroll event to
        // recompute. Poll briefly so the spy converges on the settled layout;
        // self-terminates after ~3s (normal scrolling drives it thereafter).
        let ticks = 0;
        const settle = setInterval(() => {
            compute();
            if (++ticks >= 15) clearInterval(settle);
        }, 200);

        return () => {
            observer.disconnect();
            clearInterval(settle);
            window.removeEventListener('scroll', compute);
            window.removeEventListener('resize', compute);
            window.removeEventListener('hashchange', compute);
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

                {/* Hamburger — visible only below the mobile breakpoint (CSS). */}
                <button
                    type="button"
                    className={`navbar-toggle${menuOpen ? ' navbar-toggle--open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-primary-menu"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span className="navbar-toggle__bar" />
                    <span className="navbar-toggle__bar" />
                    <span className="navbar-toggle__bar" />
                </button>

                <div
                    id="navbar-primary-menu"
                    className={`navbar-menu${menuOpen ? ' navbar-menu--open' : ''}`}
                >
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
                                    onClick={() => setMenuOpen(false)}
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
                                onClick={() => setMenuOpen(false)}
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
