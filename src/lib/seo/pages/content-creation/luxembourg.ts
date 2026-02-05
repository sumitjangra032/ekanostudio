import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation Luxembourg",
            "Corporate Content Luxembourg",
            "Thought Leadership Content",
            "Executive Video Production",
            "B2B Content Marketing Luxembourg"
        ],
        description:
            "High-end content creation services in Luxembourg, including executive copywriting, corporate video production, and thought leadership assets.",
    },

    location: {
        name: "Luxembourg",
        slug: "luxembourg",
        type: "country",
        country: "Luxembourg",
        adjective: "Luxembourg",
        context: "in Luxembourg",
        metaTitleSuffix: "Luxembourg | Corporate Content Studio",
        traits: ["financial sector", "high-end business", "european hub"],
    },

    meta: {
        title: "Content Creation Luxembourg | Video & Thought Leadership",
        description:
            "Premium content creation for Luxembourg businesses. Executive copywriting, corporate video, and strategic content for finance and consulting.",
        canonical: "/content-creation-luxembourg",
    },

    content: {
        hero: {
            title: "Corporate Content for Luxembourg’s Decision-Makers",
            subtitle:
                "Strategic storytelling, executive-grade visuals, and content built for trust in regulated and high-value markets.",
        },

        overview: {
            title: "Content Designed for Trust, Clarity, and Authority",
            text:
                "Luxembourg operates at the intersection of finance, regulation, and international business. Content here must be precise, credible, and strategically positioned. Ekanostudio creates high-authority content for firms operating in finance, consulting, investment, and cross-border services—helping brands communicate clearly, reinforce credibility, and support long-term growth.",
        },

        whyChoose: {
            title: "Why Leading Firms Choose Our Content Team",
            points: [
                {
                    title: "Executive-Level Communication",
                    desc:
                        "Tone, structure, and messaging aligned with board-level and institutional audiences.",
                },
                {
                    title: "Multilingual Precision",
                    desc:
                        "Content crafted for English, French, and German business environments.",
                },
                {
                    title: "Strategic Intent",
                    desc:
                        "Every asset is designed to support reputation, compliance, and positioning.",
                },
            ],
        },

        deliverables: [
            "Executive and corporate video production",
            "Thought leadership articles and long-form content (EN / FR / DE)",
            "Corporate case studies and success stories",
            "Investor and stakeholder presentations",
            "Brand narrative and messaging frameworks",
            "Executive-focused social media content kits",
        ],

        process: {
            title: "Our Structured Content Approach",
            steps: [
                {
                    title: "Context Analysis",
                    desc:
                        "Understanding your sector, audience expectations, and regulatory environment.",
                },
                {
                    title: "Strategic Direction",
                    desc:
                        "Defining messaging pillars and content formats aligned with business goals.",
                },
                {
                    title: "Production",
                    desc:
                        "Creating polished content with a focus on clarity, accuracy, and authority.",
                },
                {
                    title: "Delivery",
                    desc:
                        "Providing publication-ready assets across web, internal, and external channels.",
                },
            ],
        },

        cta: {
            title: "Position your brand with confidence",
            text:
                "Let’s create content that reflects the credibility of your Luxembourg business.",
        },

        relatedServices: [
            {
                title: "SEO & Content Optimization",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Social Media Strategy",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Brand Identity & Positioning",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
