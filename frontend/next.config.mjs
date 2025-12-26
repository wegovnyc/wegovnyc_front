/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://updates.wegov.nyc/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
