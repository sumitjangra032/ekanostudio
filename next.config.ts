import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/sitemap",
        destination: "/website-map",
      },
    ];
  },
};

export default nextConfig;
