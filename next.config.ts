import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.adl99.com.au',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    // Disable these forced redirects on localhost
    if (process.env.NODE_ENV === 'development') {
      return [];
    }

    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'adl99.com.au',
          },
        ],
        destination: 'https://www.adl99.com.au/:path*',
        permanent: true, // 301 redirect
      },
      // Redirect HTTP www to HTTPS www
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.adl99.com.au/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
