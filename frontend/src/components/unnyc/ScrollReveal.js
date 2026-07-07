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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
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
