import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Luxembourg",
            "Marketing Agency Luxembourg",
            "B2B Marketing Luxembourg",
            "Performance Marketing Luxembourg",
            "Lead Generation Luxembourg",
            "LinkedIn Ads Luxembourg"
        ],
        description:
            "Precision-focused digital marketing solutions designed for Luxembourg’s corporate, financial, and B2B sectors.",
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
        title: "Digital Marketing Luxembourg | B2B Growth & ROI",
        description:
            "Drive qualified B2B leads in Luxembourg with data-driven digital marketing. We manage LinkedIn, Google Ads, and conversion funnels.",
        canonical: "/digital-marketing-luxembourg",
    },

    content: {
        hero: {
            title: "High-Precision Digital Marketing for Luxembourg Businesses",
            subtitle:
                "Reach decision-makers, not just clicks. We build performance-driven marketing systems for Luxembourg’s corporate and financial sectors.",
        },

        overview: {
            title: "B2B Growth Marketing Built for Luxembourg",
            text:
                "Luxembourg’s business landscape is international, regulated, and highly competitive. Success requires precision, compliance, and strategic targeting. Ekanostudio delivers performance marketing solutions designed for B2B and enterprise environments—combining LinkedIn Ads, Google Search, and conversion-focused funnels to reach senior decision-makers across Europe.",
        },

        whyChoose: {
            title: "Why Companies Choose Ekanostudio",
            points: [
                {
                    title: "B2B & Enterprise Focus",
                    desc: "Marketing strategies built specifically for corporate, finance, and professional services.",
                },
                {
                    title: "EU & Data Compliance",
                    desc: "Privacy-first execution aligned with GDPR and Luxembourg regulations.",
                },
                {
                    title: "Measurable ROI",
                    desc: "Clear reporting on lead quality, acquisition cost, and revenue impact.",
                },
            ],
        },

        deliverables: [
            "B2B Digital Marketing Strategy",
            "LinkedIn Ads & Google Ads Management",
            "High-Intent Lead Generation Funnels",
            "Performance Social Campaigns",
            "Email Marketing & Lead Nurturing",
            "Executive-Level Performance Dashboards",
        ],

        process: {
            title: "Our Growth Execution Framework",
            steps: [
                {
                    title: "Audience Intelligence",
                    desc: "Identifying decision-makers and niche segments within Luxembourg and EU markets.",
                },
                {
                    title: "Campaign Architecture",
                    desc: "Structuring compliant, conversion-focused ad systems.",
                },
                {
                    title: "Optimization",
                    desc: "Continuous testing to improve lead quality and reduce acquisition cost.",
                },
                {
                    title: "Scale",
                    desc: "Expanding budgets on proven, high-performing channels.",
                },
            ],
        },

        cta: {
            title: "Looking for qualified B2B leads?",
            text: "Book a strategic marketing consultation with our Luxembourg team.",
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" },
        ],
    },
};
