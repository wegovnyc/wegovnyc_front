/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Allow Strapi Cloud to embed the site in an iframe for Preview
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.strapiapp.com https://dedicated-cherry-1494c7faee.strapiapp.com",
          },
        ],
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
