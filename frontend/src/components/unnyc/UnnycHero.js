'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * Hero section for the UNNYC hub page.
 *
 * Features an animated count-up for key statistics (Member States,
 * NYC Agencies, NYS Offices) driven by IntersectionObserver +
 * requestAnimationFrame with a cubic ease-out curve.
 */
export default function UnnycHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const counters = section.querySelectorAll('[data-count]');

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 2000;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);

        /* Cubic ease-out: 1 - (1 - t)^3 */
        const eased = 1 - Math.pow(1 - progress, 3);

        el.textContent = Math.floor(eased * target);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="unnyc-hero" ref={sectionRef}>
      <div className="unnyc-hero__bg" aria-hidden="true" />
      <div className="unnyc-hero__content">
        <span className="unnyc-hero__eyebrow">Information Hub</span>

        <h1 className="unnyc-hero__title">
          Where the <em>United Nations</em> Meets <em>New York</em>
        </h1>

        <p className="unnyc-hero__subtitle">
          Connecting UN staff, NYC agencies, and NYS offices through shared
          resources, events, and policy collaboration in the world&apos;s most
          international city.
        </p>

        <a href="#open-source" className="unnyc-hero__banner">
          <span className="unnyc-hero__banner-tag">New</span>
          Barcelona became the first city to endorse the UN Open Source
          Principles — NYC should be next&nbsp;→
        </a>

        <div className="unnyc-hero__cta">
          <Link href="/unnyc/campaign" className="unnyc-btn unnyc-btn--primary">
            Sign the Open Letter
          </Link>
          <Link href="/unnyc/guide" className="unnyc-btn unnyc-btn--outline">
            Recommendations for NYC
          </Link>
          <a href="#events" className="unnyc-btn unnyc-btn--outline">
            Upcoming Events
          </a>
        </div>

        <div className="unnyc-hero__stats">
          <div className="unnyc-hero__stat">
            <span className="unnyc-hero__stat-number" data-count="193">0</span>
            <span className="unnyc-hero__stat-label">UN Member States</span>
          </div>
          <div className="unnyc-hero__stat">
            <span className="unnyc-hero__stat-number" data-count="130">0</span>
            <span className="unnyc-hero__stat-label">NYC Agencies</span>
          </div>
          <div className="unnyc-hero__stat">
            <span className="unnyc-hero__stat-number" data-count="50">0</span>
            <span className="unnyc-hero__stat-label">NYS Offices in NYC</span>
          </div>
        </div>
      </div>

      <div className="unnyc-hero__scroll-indicator">
        <span className="unnyc-hero__scroll-text">SCROLL</span>
        <span className="unnyc-hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  );
}
