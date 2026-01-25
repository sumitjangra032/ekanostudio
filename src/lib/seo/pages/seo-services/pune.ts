import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Services Pune",
            "SEO Company Pune",
            "Search Engine Optimization Pune",
            "Local SEO Pune",
            "IT Company SEO Pune",
            "Manufacturing SEO Pune"
        ],
        description:
            "Advanced SEO services in Pune designed to increase rankings, organic traffic, and qualified leads through data-driven and technical optimization.",
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
        title: "SEO Services Pune | Local & Enterprise SEO Experts",
        description:
            "Rank higher on Google in Pune with expert SEO services. We help IT companies, manufacturers, and startups drive consistent organic growth.",
        canonical: "/seo-services-pune",
    },

    content: {
        hero: {
            title: "High-Impact SEO for Pune Businesses",
            subtitle:
                "Turn search visibility into revenue. Precision SEO strategies built for Pune’s IT, education, and industrial sectors.",
        },

        overview: {
            title: "Strategic SEO for Pune’s Growth Economy",
            text:
                "Pune’s digital landscape is highly competitive, especially across IT services, SaaS, manufacturing, and education sectors. Ekanostudio delivers advanced SEO strategies tailored for Pune-based businesses—combining technical SEO, content authority, and local search dominance to ensure long-term ranking stability and lead generation.",
        },

        whyChoose: {
            title: "Why Pune Companies Choose Our SEO",
            points: [
                {
                    title: "Local + National Keyword Strategy",
                    desc: "Ranking for Pune-specific intent while scaling nationwide keywords.",
                },
                {
                    title: "Technical SEO Mastery",
                    desc: "Deep audits covering Core Web Vitals, indexing, and site architecture.",
                },
                {
                    title: "Maps & Local Visibility",
                    desc: "Optimized Google Business Profile for high-conversion local searches.",
                },
            ],
        },

        deliverables: [
            "Advanced Technical SEO Audit",
            "Pune-Focused Keyword Research & Mapping",
            "On-Page & Content Optimization",
            "Google Business Profile Optimization",
            "High-Quality Backlink Building",
            "Monthly SEO Performance Reports",
        ],

        process: {
            title: "Our SEO Execution Framework",
            steps: [
                {
                    title: "Discovery",
                    desc: "Evaluating your current rankings, competitors, and Pune search demand.",
                },
                {
                    title: "Optimization",
                    desc: "Fixing technical gaps and strengthening content relevance.",
                },
                {
                    title: "Authority",
                    desc: "Building trust through industry-relevant backlinks.",
                },
                {
                    title: "Scale",
                    desc: "Expanding rankings across new keywords and locations.",
                },
            ],
        },

        cta: {
            title: "Ready to rank higher in Pune?",
            text: "Request a free SEO strategy session for your Pune business.",
        },

        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" }
        ],
    },
};
