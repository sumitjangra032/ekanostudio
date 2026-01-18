import BlogsComponent from "@/components/BlogsComponent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Blogs & Insights | ekanostudio",
    description: "Explore our latest insights on digital transformation, API integrations, social media marketing, and more.",
    keywords: ["blogs", "digital insights", "tech trends", "marketing tips", "ekanostudio blog"],
    openGraph: {
        title: "Blogs & Insights | ekanostudio",
        description: "Explore our latest insights on digital transformation, API integrations, social media marketing, and more.",
        url: `${SITE_URL}/blogs`,
        siteName: "ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blogs & Insights | ekanostudio",
        description: "Explore our latest insights on digital transformation, API integrations, marketing tips, and more.",
    },
    alternates: {
        canonical: `${SITE_URL}/blogs`,
    },
};

export default function BlogsPage() {
    return (
        <BlogsComponent />
    );
}
