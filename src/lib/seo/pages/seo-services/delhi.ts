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
        name: "Delhi",
        slug: "delhi",
        type: "city",
        country: "India",
        adjective: "Delhi-based",
        context: "in the heart of India's capital",
        metaTitleSuffix: "Delhi | Premium Services",
        traits: ["corporate enterprises", "established brands", "growing businesses"],
    },
    meta: {
        title: "Leading SEO Company in Delhi | Enterprise SEO Solutions",
        description: "Scale your visibility in India's capital. We provide high-stakes SEO services for Delhi's competitive industries, ensuring long-term dominance.",
        canonical: "/seo-services-delhi",
    },
    content: {
        hero: {
            title: "Dominate Search Results in Delhi NCR",
            subtitle: "Capture the vast audience of the capital. We implement high-impact SEO strategies for Delhi's most competitive sectors.",
        },
        overview: {
            title: "Strategic SEO for the Capital's Market",
            text: "Competition in Delhi is fierce across every vertical—from real estate to healthcare. Generic SEO strategies don't cut it here. Ekanostudio delivers surgical SEO campaigns that target high-value commercial intent keywords, ensuring your business stays visible to the decision-makers in Delhi NCR.",
        },
        whyChoose: {
            title: "Why Delhi Businesses Rely on Us",
            points: [
                { title: "Competitive Edge", desc: "We reverse-engineer your top competitors to outrank them." },
                { title: "Local Focus", desc: "Specialized in ranking for 'Near Me' and Delhi-specific queries." },
                { title: "Content Leadership", desc: "We produce authoritative content that establishes thought leadership." }
            ]
        },
        deliverables: [
            "Enterprise Site Audit",
            "Competitor Gap Analysis",
            "Local SEO (Google Business Profile)",
            "High-Authority PR Backlinks",
            "Content Strategy Document",
            "Quarterly Business Reviews"
        ],
        process: {
            title: "Our Delhi SEO Methodology",
            steps: [
                { title: "Analysis", desc: "Understanding the Delhi market landscape for your niche." },
                { title: "Technical", desc: "Ensuring your large-scale site is indexable and fast." },
                { title: "Content", desc: "Creating whitepapers and articles that build trust." },
                { title: "Outreach", desc: "Securing placements in reputable industry publications." }
            ]
        },
        cta: {
            title: "Ready to lead the market?",
            text: "Secure your #1 spot in Delhi with our expert SEO services."
        },
        relatedServices: [
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Performance Marketing", link: "/services/performance-marketing/google-ads" },
            { title: "Web Development", link: "/services/web-design-development/website-development" }
        ]
    }
};
