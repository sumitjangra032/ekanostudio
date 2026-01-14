import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: ["Search Engine Optimization", "Keyword Ranking", "Organic Traffic Growth"],
        description: "Boost your search engine rankings and drive organic traffic with our data-driven SEO strategies.",
    },
    location: {
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in the Oxford of the East",
        metaTitleSuffix: "Pune | Expert Solutions",
        traits: ["education sector", "manufacturing hubs", "IT parks"],
    },
    meta: {
        title: "SEO Services in Pune | Rank #1 on Google for Your Business",
        description: "Boost your visibility in Pune and beyond. Our SEO experts deliver surgical keyword strategies and technical audits to rank your business higher.",
        canonical: "/seo-services-pune",
    },
    content: {
        hero: {
            title: "Dominate Search Results in Pune",
            subtitle: "Capture high-intent traffic from the Oxford of the East. Strategic SEO for Pune's top businesses.",
        },
        overview: {
            title: "Surgical SEO for Pune's Competitive Market",
            text: "Competition in Pune's IT and manufacturing sectors is fierce. Generic SEO just doesn't cut it. Ekanostudio provides specialized SEO services in Pune, from technical on-page audits to high-authority backlink building, ensuring your business stays ahead of the curve.",
        },
        whyChoose: {
            title: "Our Pune SEO Edge",
            points: [
                { title: "Keyword Dominance", desc: "Targeting high-volume Pune-centric and global queries." },
                { title: "Technical Excellence", desc: "Audit and fix core web vitals and crawl errors." },
                { title: "Local Presence", desc: "Boosting your visibility on Google Maps for Pune." }
            ]
        },
        deliverables: [
            "Comprehensive Technical SEO Audit",
            "Keyword Research & Mapping",
            "Content Optimization Strategy",
            "Local SEO Setup (GBP)",
            "High-Authority Backlink Acquisition",
            "Monthly Performance Reporting"
        ],
        process: {
            title: "Our SEO Methodology",
            steps: [
                { title: "Audit", desc: "Analyzing your current standing and competitor gaps." },
                { title: "Implement", desc: "Optimizing your site's technical and content health." },
                { title: "Build", desc: "Acquiring authority through high-quality links." },
                { title: "Report", desc: "Monitoring traffic and conversion growth regularly." }
            ]
        },
        cta: {
            title: "Want more organic leads?",
            text: "Get a free SEO roadmap for your Pune business."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web development", link: "/services/web-design-development/website-development" }
        ]
    }
};
