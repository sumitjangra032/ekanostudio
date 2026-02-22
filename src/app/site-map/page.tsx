import SitemapPageClient from "./sitemap-client";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Sitemap - All Pages | Ekanostudio",
    description: "Complete overview of our digital services, resources, and company pages.",
    alternates: {
        canonical: `${SITE_URL}/site-map`,
    },
};

export default function SitemapPage() {
    return <SitemapPageClient />;
}
