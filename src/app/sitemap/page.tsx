import SitemapPageClient from "./sitemap-client";
import { Metadata } from "next";

const SITE_URL = "https://ekanostudio.com";

export const metadata: Metadata = {
  title: "Sitemap - All Pages | Ekanostudio",
  description: "Complete overview of our digital services, resources, and company pages.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/sitemap`,
  },
};

export default function SitemapPage() {
    return <SitemapPageClient />;
}
