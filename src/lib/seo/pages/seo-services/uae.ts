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
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE",
        context: "in the United Arab Emirates",
        metaTitleSuffix: "UAE | Dubai & Abu Dhabi",
        traits: ["luxury market", "rapid development", "global business hub"],
    },
    meta: {
        title: "SEO Services UAE | Rank #1 in Dubai & Abu Dhabi",
        description: "Dominate search results in the UAE. We offer Arabic and English SEO strategies to help your business capture the booming Gulf market.",
        canonical: "/seo-services-uae",
    },
    content: {
        hero: {
            title: "Leading SEO Agency in the UAE",
            subtitle: "Capture the GCC market. We help businesses rank high for English and Arabic keywords across the Emirates.",
        },
        overview: {
            title: "Search Dominance for Dubai & Abu Dhabi",
            text: "The UAE digital landscape is unique, requiring a dual-language strategy. ekanostudio specializes in SEO for the Emirates. We help real estate, tourism, and corporate clients rank for high-value terms in both English and Arabic, ensuring you reach the entire expatriate and local population.",
        },
        whyChoose: {
            title: "Our UAE SEO Expertise",
            points: [
                { title: "Bilingual SEO", desc: "Ranking strategies for both English and Arabic queries." },
                { title: "Local Authority", desc: "Building citations and links from trusted UAE domains." },
                { title: "Sector Focus", desc: "Experience in Real Estate, Setup Services, and Luxury." }
            ]
        },
        deliverables: [
            "Bilingual Keyword Research",
            "Technical SEO Audit",
            "Arabic Content Optimization",
            "Google Maps (Local SEO)",
            "Backlink Building (GCC)",
            "Competitor Analysis"
        ],
        process: {
            title: "UAE Ranking Strategy",
            steps: [
                { title: "Audit", desc: "Analyzing your visibility in UAE search results." },
                { title: "Target", desc: "Identifying high-intent keywords in EN and AR." },
                { title: "Optimize", desc: "Fine-tuning your site structure and content." },
                { title: "Grow", desc: "Building authority to secure top positions." }
            ]
        },
        cta: {
            title: "Want more leads in UAE?",
            text: "Get a free SEO consultation for your business."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "PPC Management", link: "/services/performance-marketing/google-ads" },
            { title: "Web Development", link: "/services/web-design-development/website-development" }
        ]
    }
};
