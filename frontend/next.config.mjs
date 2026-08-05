/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.DIST_DIR || '.next',
  images: {
    remotePatterns: [
      {
        // Payload (Sarapis multi-brand CMS) — hero/media for blog + articles
        protocol: 'https',
        hostname: 'next.sarapis.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sarapis.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'updates.wegov.nyc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wegov.nyc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.basemaps.cartocdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // The UNNYC campaign moved out of this repo (2026-08-04) to its own site
      // at unnyc.wegov.nyc. The /unnyc/* pages still build here but are now
      // unreachable — these 301s retire the duplicate so the two copies stop
      // competing in search. Specific rules must stay ABOVE the catch-all;
      // Next.js matches redirects in array order.
      //
      // /unnyc/guide has no counterpart on the campaign site (the long-form
      // "UN System & NYC Government Technology" article wasn't carried over),
      // so it goes to the nearest equivalent rather than 404ing on the new
      // host. The original still serves at old-unnyc.wegov.nyc/guide.html.
      {
        source: '/unnyc/guide',
        destination: 'https://unnyc.wegov.nyc/resources',
        permanent: true,
      },
      // The primer draft was promoted to be the main /unnyc hub (and its
      // crosswalk sub-page to /unnyc/crosswalk); keep old draft links working.
      // These point straight at the new host to avoid a redirect chain.
      {
        source: '/unnyc/primer/crosswalk',
        destination: 'https://unnyc.wegov.nyc/crosswalk',
        permanent: true,
      },
      {
        source: '/unnyc/primer',
        destination: 'https://unnyc.wegov.nyc/',
        permanent: true,
      },
      {
        source: '/unnyc',
        destination: 'https://unnyc.wegov.nyc/',
        permanent: true,
      },
      {
        source: '/unnyc/:path*',
        destination: 'https://unnyc.wegov.nyc/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://updates.wegov.nyc/:path*',
        },
        {
          source: '/:path*/',
          destination: 'https://updates.wegov.nyc/:path*/',
        },
      ],
    };
  },
};

export default nextConfig;
