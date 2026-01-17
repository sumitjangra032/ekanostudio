import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Services India",
            "SEO Agency India",
            "National SEO India",
            "Enterprise SEO India",
            "Pan India SEO",
            "Organic Growth India"
        ],
        description:
            "Nationwide SEO services built for India’s scale. Rank for high-intent keywords, grow authority, and capture organic demand across every major Indian market.",
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
        title: "SEO Services India | National Rankings & Organic Growth",
        description:
            "Dominate search results across India. We deliver enterprise-grade SEO strategies to rank your business for competitive keywords and drive sustainable organic growth.",
        canonical: "/seo-services-india",
    },

    content: {
        hero: {
            title: "Nationwide SEO for India’s Most Competitive Markets",
            subtitle:
                "From metros to tier-2 cities—our SEO strategies help Indian brands capture demand, authority, and long-term organic growth.",
        },

        overview: {
            title: "SEO Built for India’s Scale and Complexity",
            text:
                "India’s search ecosystem is vast, multilingual, and fiercely competitive. Ranking nationally requires far more than basic keyword optimization. ekanostudio delivers advanced SEO strategies designed for scale—combining technical excellence, search-intent mapping, and authority-driven content to help Indian brands win across industries, regions, and buyer journeys.",
        },

        whyChoose: {
            title: "Why Brands Choose Us for India SEO",
            points: [
                {
                    title: "Pan-India Keyword Strategy",
                    desc: "Targeting high-volume national keywords while balancing regional intent and competition.",
                },
                {
                    title: "Scalable Technical SEO",
                    desc: "Optimized architectures for large websites, marketplaces, and multi-location businesses.",
                },
                {
                    title: "Long-Term Authority Building",
                    desc: "White-hat backlinks, digital PR, and content that compound growth month after month.",
                },
            ],
        },

        deliverables: [
            "Comprehensive Technical SEO Audit",
            "National Keyword & Search Intent Mapping",
            "Scalable Content & Topical Authority Plan",
            "High-Authority Link Building & Digital PR",
            "Google Maps & Multi-Location SEO",
            "Advanced SEO Reporting & Growth Dashboards",
        ],

        process: {
            title: "Our India SEO Execution Framework",
            steps: [
                {
                    title: "Analyze",
                    desc: "Evaluating your current rankings, competitors, and market opportunities across India.",
                },
                {
                    title: "Optimize",
                    desc: "Fixing technical issues, improving content depth, and strengthening internal structure.",
                },
                {
                    title: "Build",
                    desc: "Increasing domain authority through high-quality links and brand mentions.",
                },
                {
                    title: "Scale",
                    desc: "Expanding keyword coverage and traffic through continuous optimization and testing.",
                },
            ],
        },

        cta: {
            title: "Ready to scale organic growth across India?",
            text: "Speak with our SEO specialists and build a national ranking strategy.",
        },

        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" },
        ],
    },
};
