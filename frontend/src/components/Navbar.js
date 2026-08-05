"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Main site navigation with an optional in-flow submenu bar.
 * A nav link with a `children` array renders a secondary nav that is shown
 * exactly when that link's section is active (route-driven, not click-toggled):
 * it appears on the section's pages and is hidden everywhere else.
 *
 * NOTE: the submenu is currently UNEXERCISED. Its only ever consumer was the
 * hardcoded UNNYC nav item, removed when that campaign moved to its own site
 * (2026-08-05), and no CMS nav link defines `children`. The machinery is kept
 * because it is generic and CMS-drivable — give any Payload nav link children
 * and it works. The hash-based variant and its IntersectionObserver scroll-spy
 * were UNNYC-specific and are gone; children are matched by route only now.
 */
export default function Navbar({ data, siteName }) {
    const pathname = usePathname();

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

    // On mobile the subnav is a single scrollable line; keep the active chip in
    // view. Only runs when the subnav actually overflows (i.e. mobile) and
    // scrolls the container's own scrollLeft, so it can never move the page
    // vertically.
    useEffect(() => {
        const container = document.querySelector('.navbar-submenu-links');
        const activeEl = container?.querySelector('.navbar-submenu-link--active');
        if (!container || !activeEl) return;
        if (container.scrollWidth <= container.clientWidth) return; // no overflow (desktop)
        const centered = activeEl.offsetLeft - (container.clientWidth - activeEl.offsetWidth) / 2;
        const left = Math.max(0, Math.min(centered, container.scrollWidth - container.clientWidth));
        container.scrollLeft = left; // instant: smooth programmatic scroll is unreliable here
    }, [pathname]);


    // A link is active when the current path equals its URL or is nested
    // beneath it (so /section/page keeps the /section item active). Home ('/')
    // and hash links only match exactly, avoiding false positives.
    const isActive = (url) => {
        if (!url || url === '/' || url.includes('#')) return pathname === url;
        return pathname === url || pathname.startsWith(url + '/');
    };

    // Submenu children are matched by route. Hash children (e.g. /page#section)
    // will never report active: marking those needs a scroll-spy, which existed
    // only for UNNYC and went with it. Use path-based children.
    const isChildActive = (url) => isActive(url);

    if (!data) return null;

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link href="/" className="navbar-logo">
                    {siteName || 'WeGovNYC'}
                </Link>

                {/* Spacer. Held the theme-switcher until it was retired
                    (2026-08-05, docs/RETIRED-THEMES.md) and is now empty — but
                    it is NOT decorative: `.navbar-center { flex: 1 }` is what
                    pushes the logo and the nav apart. Deleting the div collapses
                    the navbar layout. */}
                <div className="navbar-center" />

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
