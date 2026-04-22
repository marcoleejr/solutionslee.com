import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mundo.com",
      },
      {
        protocol: "https",
        hostname: "ecdn4.wn.com",
      },
    ],
  },
};

export default nextConfig;
