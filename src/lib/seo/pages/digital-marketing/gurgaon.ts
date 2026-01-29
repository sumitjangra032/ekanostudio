import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Gurgaon",
            "Performance Marketing Gurgaon",
            "B2B Lead Generation Gurgaon",
            "LinkedIn Ads Gurgaon",
            "Google Ads Agency Gurgaon",
            "Cyber City Marketing Agency"
        ],
        description:
            "Comprehensive digital marketing solutions to scale your business across all online channels.",
    },

    location: {
        name: "Gurgaon",
        slug: "gurgaon",
        type: "city",
        country: "India",
        adjective: "Gurgaon-based",
        context: "in the corporate hub of NCR",
        metaTitleSuffix: "Gurgaon | Leading Agency",
        traits: ["MNCs", "financial districts", "tech startups"],
    },

    meta: {
        title: "Digital Marketing Gurgaon | B2B Lead Gen & ROI",
        description:
            "Accelerate your growth in Gurgaon. High-performance Google Ads, LinkedIn Ads, and omnichannel strategies for Cyber City’s top enterprises.",
        canonical: "/digital-marketing-gurgaon",
    },

    content: {
        hero: {
            title: "Advanced Performance Marketing for Gurgaon's Growth Leaders",
            subtitle:
                "Reach global audiences from Cyber City. We deliver measurable digital growth for enterprises and high-value B2B brands.",
        },

        overview: {
            title: "Enterprise-Grade Digital Marketing for Gurgaon",
            text:
                "Gurgaon demands precision. With its concentration of MNCs, VC-backed startups, and financial institutions, marketing must be data-driven and conversion-focused. Ekanostudio builds high-performance funnels across LinkedIn, Google Search, and paid social—ensuring your budget is spent only on intent-driven audiences, resulting in real pipeline growth.",
        },

        whyChoose: {
            title: "Our Marketing Advantage",
            points: [
                {
                    title: "B2B Lead Gen Expertise",
                    desc: "We specialize in capturing high-value leads for IT, SaaS, finance, and corporate sectors.",
                },
                {
                    title: "Data-Driven ROAS",
                    desc: "Advanced tracking, attribution, and daily optimization for maximum revenue impact.",
                },
                {
                    title: "Omnichannel Strategy",
                    desc: "Unified campaigns across LinkedIn, Google Search, Meta, and automated email workflows.",
                },
            ],
        },

        deliverables: [
            "Corporate Digital Strategy Framework",
            "LinkedIn & Google Ads Management",
            "Automated Lead Nurture & Email Flows",
            "Performance Social Media Campaigns",
            "Conversion Funnel Optimization",
            "C-Suite & Investor Reporting Dashboards",
        ],

        process: {
            title: "Market Penetration Cycle",
            steps: [
                {
                    title: "Research",
                    desc: "Mapping intent, industry keywords, and decision-maker behavior in Gurgaon.",
                },
                {
                    title: "Activation",
                    desc: "Launching highly targeted campaigns across core B2B platforms.",
                },
                {
                    title: "Refine",
                    desc: "Constant A/B testing for lower CAC and improved qualification rates.",
                },
                {
                    title: "Expand",
                    desc: "Scaling winning creatives, audiences, and channels for exponential growth.",
                },
            ],
        },

        cta: {
            title: "Ready to accelerate your growth?",
            text: "Request a strategic, data-driven marketing audit from our Gurgaon experts.",
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" },
        ],
    },
};
