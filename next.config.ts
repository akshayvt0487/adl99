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
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
