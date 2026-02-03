import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      { protocol: 'https', hostname: 'cdn.nba.com' },
    ],
  },
};

export default nextConfig;
