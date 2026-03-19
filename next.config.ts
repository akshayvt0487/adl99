import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
