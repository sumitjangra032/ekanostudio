import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation Pune",
            "Video Production Pune",
            "Copywriting Services Pune",
            "Educational Content Pune",
            "B2B Content Marketing Pune"
        ],
        description:
            "Professional content creation services in Pune, including video production, SEO copywriting, and strategic content for education, IT, and manufacturing brands.",
    },

    location: {
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in Pune, Maharashtra",
        metaTitleSuffix: "Pune | Professional Content Studio",
        traits: ["education sector", "manufacturing hubs", "IT parks"],
    },

    meta: {
        title: "Content Creation Services in Pune | Video, Copywriting & SEO",
        description:
            "High-quality content creation in Pune. We produce professional videos, SEO-optimized copy, and digital assets for education and IT firms.",
        canonical: "/content-creation-pune",
    },

    content: {
        hero: {
            title: "Strategic Content for Pune’s Knowledge-Driven Businesses",
            subtitle:
                "Purpose-built content for education, IT, and industrial brands that value clarity, credibility, and long-term growth.",
        },

        overview: {
            title: "Content That Reflects Pune’s Academic and Industrial Strength",
            text:
                "Pune is known for its universities, IT parks, and manufacturing ecosystem. Content here must balance creativity with substance. Ekanostudio creates structured, high-impact content for organizations that need to educate, inform, and convert—from institutional storytelling to B2B-focused digital media that supports reputation and trust.",
        },

        whyChoose: {
            title: "Why Pune Organizations Work With Us",
            points: [
                {
                    title: "Sector-Aware Content",
                    desc:
                        "Experience creating content for education, SaaS, manufacturing, and professional services.",
                },
                {
                    title: "SEO + Substance",
                    desc:
                        "Search-optimized writing that maintains depth, accuracy, and reader value.",
                },
                {
                    title: "Consistent Brand Voice",
                    desc:
                        "Messaging frameworks that keep communication aligned across platforms.",
                },
            ],
        },

        deliverables: [
            "Corporate and institutional video production",
            "SEO-focused blog and article writing",
            "Educational and explainer content",
            "Social media design and visual assets",
            "Email and newsletter content",
            "Content strategy and editorial planning documents",
        ],

        process: {
            title: "Our Content Development Framework",
            steps: [
                {
                    title: "Requirement Mapping",
                    desc:
                        "Understanding your audience, sector, and communication goals in Pune.",
                },
                {
                    title: "Content Planning",
                    desc:
                        "Defining formats, messaging, and distribution priorities.",
                },
                {
                    title: "Production",
                    desc:
                        "Creating videos, visuals, and written content with editorial discipline.",
                },
                {
                    title: "Delivery",
                    desc:
                        "Supplying final assets ready for web, social, and internal use.",
                },
            ],
        },

        cta: {
            title: "Build content that educates and converts",
            text:
                "Partner with us to create content that strengthens your presence in Pune.",
        },

        relatedServices: [
            {
                title: "SEO & Content Optimization",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Social Media Management",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Brand Identity & Design",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
