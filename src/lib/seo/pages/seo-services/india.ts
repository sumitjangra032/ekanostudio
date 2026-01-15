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
        name: "India",
        slug: "india",
        type: "country",
        country: "India",
        adjective: "Indian",
        context: "across the Indian market",
        metaTitleSuffix: "India | #1 Digital Agency",
        traits: ["rapidly growing market", "diverse audience", "digital-first consumers"],
    },
    meta: {
        title: "SEO Services India | Rank #1 with Our Experts",
        description: "Boost your organic visibility across India. We provide data-driven SEO strategies to rank your business for high-volume keywords and drive growth.",
        canonical: "/seo-services-india",
    },
    content: {
        hero: {
            title: "Dominating Search Results Across India",
            subtitle: "Capture massive traffic. Build lasting authority. Performance-led SEO for the Indian market.",
        },
        overview: {
            title: "Strategic SEO for the Modern Indian Brand",
            text: "With a billion internet users, India's search market is the most competitive in the world. ekanostudio's SEO experts provide end-to-end solutions—from technical architecture to high-authority backlink building—ensuring your brand is the first choice for customers across India.",
        },
        whyChoose: {
            title: "Our India SEO Advantage",
            points: [
                { title: "Nationwide Ranking", desc: "Expertise in ranking for competitive pan-India keywords." },
                { title: "Data-Led Insights", desc: "Using advanced tools to uncover high-volume gaps." },
                { title: "White-Hat Growth", desc: "Focusing on long-term authority and sustainable traffic." }
            ]
        },
        deliverables: [
            "Technical SEO Infrastructure Fixes",
            "Aggressive Keyword Research",
            "Content Scaling Strategy",
            "High-Authority Backlink Acquisition",
            "Google Maps & Local Dominance",
            "Comprehensive Growth Dashboards"
        ],
        process: {
            title: "Our SEO Roadmap",
            steps: [
                { title: "Analyze", desc: "Auditing your current search footprint across India." },
                { title: "Optimize", desc: "Fixing technical barriers and content gaps immediately." },
                { title: "Build", desc: "Increasing authority through strategic PR and links." },
                { title: "Scale", desc: "Continuous monitoring and scaling for more keywords." }
            ]
        },
        cta: {
            title: "Want more organic customers?",
            text: "Discuss your SEO roadmap with our specialists in India."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web development", link: "/services/web-design-development/website-development" }
        ]
    }
};
