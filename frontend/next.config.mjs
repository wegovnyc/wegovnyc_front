/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.DIST_DIR || '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '4337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'dedicated-cherry-1494c7faee.strapiapp.com',
        pathname: '/uploads/**',
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
        hostname: 'strapi.wegov.nyc',
        pathname: '/uploads/**',
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
  async headers() {
    return [
      {
        // Allow Strapi Cloud to embed the site in an iframe for Preview
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.strapiapp.com https://dedicated-cherry-1494c7faee.strapiapp.com https://strapi.wegov.nyc http://localhost:1337",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'unnyc.wegov.nyc',
          },
        ],
        destination: 'https://wegov.nyc/unnyc/:path*',
        permanent: true,
      },
      // The primer draft was promoted to be the main /unnyc hub (and its
      // crosswalk sub-page to /unnyc/crosswalk); keep old draft links working.
      {
        source: '/unnyc/primer/crosswalk',
        destination: '/unnyc/crosswalk',
        permanent: true,
      },
      {
        source: '/unnyc/primer',
        destination: '/unnyc',
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
