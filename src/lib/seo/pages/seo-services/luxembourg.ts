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
        name: "Luxembourg",
        slug: "luxembourg",
        type: "country",
        country: "Luxembourg",
        adjective: "Luxembourg",
        context: "in Luxembourg",
        metaTitleSuffix: "Luxembourg | Premium Agency",
        traits: ["financial sector", "high-end business", "european hub"],
    },
    meta: {
        title: "SEO Agency Luxembourg | Rank in the Grand Duchy",
        description: "Scale your visibility in Luxembourg's competitive market. We provide data-driven SEO strategies to rank your business for high-value financial and corporate keywords.",
        canonical: "/seo-services-luxembourg",
    },
    content: {
        hero: {
            title: "Search Dominance for Luxembourg Enterprises",
            subtitle: "Be the first choice for global decision-makers. Strategic SEO tailored for the Luxembourg market.",
        },
        overview: {
            title: "Precision SEO for the Global Hub",
            text: "Luxembourg's search landscape is unique and highly multilingual. To win, you need to rank across multiple languages and high-competition sectors. Ekanostudio delivers targeted SEO campaigns that leverage deep technical expertise and multi-lingual link-building to secure top positions in the Grand Duchy.",
        },
        whyChoose: {
            title: "Our Luxembourg SEO Advantage",
            points: [
                { title: "Multi-Lingual SEO", desc: "Ranking your business in French, German, and English." },
                { title: "Niche Authority", desc: "Expertise in Finance, Law, and Technology sectors." },
                { title: "Global Reach", desc: "Optimizing for both local Luxembourg and international search intent." }
            ]
        },
        deliverables: [
            "Technical Domain Audit",
            "Multi-Lingual Keyword Strategy",
            "Entity-Based Content Optimization",
            "High-Authority Backlink Acquisition",
            "Bespoke Analytics Dashboards",
            "Quarterly Strategic Reviews"
        ],
        process: {
            title: "Winning in search",
            steps: [
                { title: "Analysis", desc: "Evaluating your current footprint in the Luxembourg SERPs." },
                { title: "Localization", desc: "Adapting technical elements for regional search nuances." },
                { title: "Authority", desc: "Building trust through relevant, high-quality links." },
                { title: "Growth", desc: "Scaling visibility for your most profitable keywords." }
            ]
        },
        cta: {
            title: "Want to outrank the competition?",
            text: "Discuss your SEO growth roadmap with our specialists."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web development", link: "/services/web-design-development/website-development" }
        ]
    }
};
