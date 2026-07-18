"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * PrimerNav — local sticky subnav for the /unnyc/primer draft page.
 *
 * Mirrors the global UNNYC submenu concept (navy band, uppercase links,
 * gold active underline, scroll-spy, one-line scroll on mobile) but is
 * self-contained so the draft doesn't touch the global Navbar. When the
 * primer is promoted to /unnyc, these section ids/labels move into the
 * global submenu (layout.js + Navbar UNNYC_SPY_IDS) and this component
 * goes away.
 */
const SECTIONS = [
    { id: 'movement', label: 'Movement' },
    { id: 'concepts', label: 'Concepts' },
    { id: 'cases', label: 'Cases' },
    { id: 'policy', label: 'Crosswalk' },
    { id: 'events', label: 'Events' },
    { id: 'open-source', label: 'Campaign' },
    { id: 'map', label: 'Map' },
    { id: 'endorsers', label: 'Endorsers' },
    { id: 'resources', label: 'Resources' },
    { id: 'contacts', label: 'Contacts' },
    { id: 'news', label: 'News' },
];

export default function PrimerNav() {
    const [active, setActive] = useState('');

    // The global site-header is sticky at top:0, so this nav must stick just
    // below it. Header height varies by viewport (mobile stacks), so measure
    // it and expose it as a CSS var consumed by .unnyc-pr-nav { top } and the
    // sections' scroll-margin-top.
    useEffect(() => {
        const header = document.querySelector('.site-header');
        const root = document.documentElement;
        if (!header) return undefined;
        const setVar = () => {
            root.style.setProperty('--pr-header-h', `${Math.round(header.getBoundingClientRect().height)}px`);
        };
        setVar();
        const ro = new ResizeObserver(setVar);
        ro.observe(header);
        return () => {
            ro.disconnect();
            root.style.removeProperty('--pr-header-h');
        };
    }, []);

    useEffect(() => {
        const sections = SECTIONS
            .map((s) => document.getElementById(s.id))
            .filter(Boolean);
        if (!sections.length) return undefined;

        // A section is "current" once its top crosses just below this nav's
        // bottom edge (self-measuring, so header-height changes are absorbed).
        const getOffset = () => {
            const nav = document.querySelector('.unnyc-pr-nav');
            return nav ? nav.getBoundingClientRect().bottom + 10 : 96;
        };

        const compute = () => {
            const OFFSET = getOffset();
            let current = '';
            for (const sec of sections) {
                if (sec.getBoundingClientRect().top <= OFFSET) current = sec.id;
                else break;
            }
            const atBottom = window.innerHeight + Math.ceil(window.scrollY)
                >= document.documentElement.scrollHeight - 2;
            if (atBottom) current = sections[sections.length - 1].id;
            setActive((prev) => (prev === current ? prev : current));
        };

        // The observer just triggers recomputes as sections cross a top band;
        // compute() measures the real offset itself, so an approximate margin
        // here is fine (scroll/resize listeners cover the rest).
        const observer = new IntersectionObserver(compute, {
            rootMargin: `-${getOffset()}px 0px -60% 0px`,
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
    }, []);

    // Keep the active chip visible in the one-line mobile strip (same
    // instant-scrollLeft approach as the global Navbar — smooth programmatic
    // scrolling is unreliable on these containers).
    useEffect(() => {
        const container = document.querySelector('.unnyc-pr-nav__links');
        const activeEl = container?.querySelector('.unnyc-pr-nav__link--active');
        if (!container || !activeEl) return;
        if (container.scrollWidth <= container.clientWidth) return;
        const centered = activeEl.offsetLeft - (container.clientWidth - activeEl.offsetWidth) / 2;
        const left = Math.max(0, Math.min(centered, container.scrollWidth - container.clientWidth));
        container.scrollLeft = left;
    }, [active]);

    return (
        <nav className="unnyc-pr-nav" aria-label="Primer sections">
            <div className="unnyc-pr-nav__inner">
                <Link href="/unnyc" className="unnyc-pr-nav__logo" title="Back to the UNNYC hub">
                    <span className="unnyc-pr-nav__logo-mark">UN</span>
                    <span className="unnyc-pr-nav__logo-ny">NYC</span>
                    <span className="unnyc-pr-nav__logo-tag">Primer</span>
                </Link>
                <ul className="unnyc-pr-nav__links">
                    {SECTIONS.map((s) => (
                        <li key={s.id}>
                            <a
                                href={`#${s.id}`}
                                className={`unnyc-pr-nav__link${active === s.id ? ' unnyc-pr-nav__link--active' : ''}`}
                                aria-current={active === s.id ? 'true' : undefined}
                            >
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
