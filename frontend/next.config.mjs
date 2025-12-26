/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://wp.wegov.nyc/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
