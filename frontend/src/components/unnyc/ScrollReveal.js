'use client';

import { useEffect, useRef } from 'react';

/**
 * Wrapper component that fades in children when they scroll into view.
 *
 * Uses IntersectionObserver to add a `unnyc-visible` class once the
 * element crosses the viewport threshold, enabling CSS-driven reveal
 * animations without a heavy animation library.
 */
export default function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('unnyc-visible');
          observer.unobserve(node);
        }
      },
      // threshold 0 (not 0.1): a fractional threshold can never fire for a
      // section taller than ~10 viewports' worth of its own height (10% of
      // the element must fit on screen at once), which left very tall
      // sections (e.g. a long news grid) permanently hidden after deep hash
      // jumps. Any-pixel intersection + the -40px bottom margin keeps the
      // reveal feel while guaranteeing it always fires.
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`unnyc-reveal ${className}`}>
      {children}
    </div>
  );
}
