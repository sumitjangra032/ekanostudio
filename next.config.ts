import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/website-design-hisar",
        destination: "/website-design-in-hisar",
        permanent: true,
      },
      {
        source: "/seo-services-hisar",
        destination: "/seo-services-in-hisar",
        permanent: true,
      },
      {
        source: "/content-creation-hisar",
        destination: "/content-creation-in-hisar",
        permanent: true,
      },
      {
        source: "/digital-marketing-hisar",
        destination: "/digital-marketing-in-hisar",
        permanent: true,
      },
      {
        source: "/ai-automation-hisar",
        destination: "/ai-automation-in-hisar",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/portfolio-new/assets/:path*.mp4",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/portfolio-new/assets/:path*.webm",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/portfolio-new/assets/:path*.mov",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/portfolio-new/assets/:path*.m4v",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/portfolio-new/assets/:path*.avi",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
