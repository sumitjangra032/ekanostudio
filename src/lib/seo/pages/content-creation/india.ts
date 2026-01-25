import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation India",
            "Content Marketing Agency India",
            "Video Production India",
            "Copywriting Services India",
            "Brand Content Strategy"
        ],
        description:
            "Scalable content creation for Indian brands—video, copywriting, and digital media built to engage diverse audiences and build long-term authority.",
    },

    location: {
        name: "India",
        slug: "india",
        type: "country",
        country: "India",
        adjective: "Indian",
        context: "across the Indian market",
        metaTitleSuffix: "India | Content & Media Studio",
        traits: ["large-scale audiences", "multilingual market", "digital-first consumers"],
    },

    meta: {
        title: "Content Creation Agency India | Video, Copywriting & Strategy",
        description:
            "Content creation for Indian brands at scale. We produce videos, copy, and digital content designed for reach, credibility, and consistent growth.",
        canonical: "/content-creation-india",
    },

    content: {
        hero: {
            title: "Content That Connects Across India",
            subtitle:
                "Strategic storytelling designed for a diverse, digital-first audience across platforms and regions.",
        },

        overview: {
            title: "Building Brands in a High-Volume Content Market",
            text:
                "India is one of the most competitive content markets in the world, with audiences spread across languages, platforms, and formats. Ekanostudio helps brands create content that balances scale with substance. From short-form social videos and campaign creatives to long-form blogs, case studies, and brand narratives, our content is designed to engage, inform, and build lasting trust.",
        },

        whyChoose: {
            title: "Why Brands Across India Choose Us",
            points: [
                {
                    title: "Audience Diversity Expertise",
                    desc:
                        "Content strategies designed to work across regions, industries, and platforms.",
                },
                {
                    title: "Platform-Ready Production",
                    desc:
                        "Assets optimised for web, social media, search, and performance marketing.",
                },
                {
                    title: "SEO & Brand Alignment",
                    desc:
                        "Content that ranks well on Google while reinforcing brand voice and authority.",
                },
            ],
        },

        deliverables: [
            "Brand films, commercials, and digital video content",
            "SEO-focused blogs and long-form articles",
            "Social media content and design systems",
            "Email marketing and campaign copy",
            "Whitepapers, reports, and case studies",
            "Brand messaging and content guidelines",
        ],

        process: {
            title: "Our India-Wide Content Workflow",
            steps: [
                {
                    title: "Research & Planning",
                    desc:
                        "Understanding your audience segments, platforms, and content objectives.",
                },
                {
                    title: "Content Strategy",
                    desc:
                        "Defining formats, messaging, and cadence aligned with scale and consistency.",
                },
                {
                    title: "Production",
                    desc:
                        "Creating written, visual, and video content with quality control at scale.",
                },
                {
                    title: "Delivery & Optimisation",
                    desc:
                        "Final assets prepared for multi-platform distribution and growth.",
                },
            ],
        },

        cta: {
            title: "Ready to scale your content?",
            text:
                "Let’s create content that builds recognition and trust across India.",
        },

        relatedServices: [
            {
                title: "SEO & Content Optimisation",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Social Media Marketing",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Brand Identity & Design",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
