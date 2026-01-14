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
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK",
        context: "across the United Kingdom",
        metaTitleSuffix: "UK | Trusted Partners",
        traits: ["established businesses", "digital transformation", "service sector"],
    },
    meta: {
        title: "SEO Agency UK | Rank Higher on Google.co.uk",
        description: "Increase your visibility in the United Kingdom. We specialize in UK local SEO and national campaigns to drive relevant British traffic.",
        canonical: "/seo-services-uk",
    },
    content: {
        hero: {
            title: "Dominating Google.co.uk Search Results",
            subtitle: "Strategic SEO for forward-thinking UK companies. We help you capture high-intent leads across England, Scotland, Wales, and NI.",
        },
        overview: {
            title: "Data-Driven SEO for the UK Economy",
            text: "Navigating the UK search landscape requires local nuance. Terms, spelling, and search intent differ significantly from the US. Ekanostudio delivers specialized UK SEO services. We optimize for British English queries, build links from .co.uk domains, and ensure your business appears in local packs from London to Edinburgh.",
        },
        whyChoose: {
            title: "Our UK SEO Edge",
            points: [
                { title: "British English Optimization", desc: "Content optimized for UK spelling (colour vs color) and idioms." },
                { title: "Local Citations", desc: "Building trust with UK-specific directories and listings." },
                { title: "Technical Precision", desc: "Ensuring site speed and structure meets Google's high standards." }
            ]
        },
        deliverables: [
            "Technical Site Audit",
            "UK Keyword Research Map",
            "Content Optimization (British English)",
            "Local SEO Setup (GMB)",
            "Backlink Building (.co.uk/.uk)",
            "Monthly Performance Reports"
        ],
        process: {
            title: "UK Ranking Strategy",
            steps: [
                { title: "Audit", desc: "Analyzing your current standing in the UK SERPs." },
                { title: "Localize", desc: "Adapting content and metadata for the British audience." },
                { title: "Build", desc: "Acquiring high-quality links from UK industry sites." },
                { title: "Report", desc: "Monitoring traffic and leads from the UK region." }
            ]
        },
        cta: {
            title: "Want more UK traffic?",
            text: "Start your SEO campaign with our expert team."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" },
            { title: "Copywriting", link: "/services/content-creation/content-writing" }
        ]
    }
};
