import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation Canada",
            "Content Marketing Canada",
            "Copywriting Services Canada",
            "Video Production Canada",
            "Brand Content"
        ],
        description:
            "Strategic content creation for Canadian businesses—copy, video, and digital media designed to build trust and long-term brand authority.",
    },

    location: {
        name: "Canada",
        slug: "canada",
        type: "country",
        country: "Canada",
        adjective: "Canadian",
        context: "in the Canadian market",
        metaTitleSuffix: "Canada | Content & Media Studio",
        traits: ["diverse audiences", "trust-driven brands", "bilingual market"],
    },

    meta: {
        title: "Content Creation Services Canada | Video, Copy & Brand Content",
        description:
            "Professional content creation for Canadian brands. We produce videos, copy, and digital content that resonates across regions and cultures.",
        canonical: "/content-creation-canada",
    },

    content: {
        hero: {
            title: "Authentic Content for Canadian Brands",
            subtitle:
                "Strategic storytelling that reflects Canadian values, diversity, and credibility.",
        },

        overview: {
            title: "Content Built on Trust and Clarity",
            text:
                "Canadian audiences value honesty, inclusivity, and clear communication. Ekanostudio helps brands across Canada create content that feels genuine and consistent across channels. From corporate storytelling and educational blogs to high-quality video and social content, we focus on building long-term brand trust rather than short-term attention.",
        },

        whyChoose: {
            title: "Why Canadian Brands Choose Us",
            points: [
                {
                    title: "Culturally Aware Content",
                    desc:
                        "Messaging designed to resonate with Canada’s diverse audiences and regions.",
                },
                {
                    title: "Bilingual Capability",
                    desc:
                        "Content creation available in both English and French when required.",
                },
                {
                    title: "Quality-Driven Production",
                    desc:
                        "High editorial and visual standards across all formats.",
                },
            ],
        },

        deliverables: [
            "Brand films and corporate videos",
            "SEO-focused blog writing (Canadian English)",
            "Social media content and design kits",
            "Email and newsletter copywriting",
            "Case studies, whitepapers, and long-form content",
            "Podcast and interview-based content production",
        ],

        process: {
            title: "Our Content Creation Process",
            steps: [
                {
                    title: "Research",
                    desc:
                        "Understanding your audience, industry, and regional context.",
                },
                {
                    title: "Content Planning",
                    desc:
                        "Defining themes, formats, and messaging aligned with your goals.",
                },
                {
                    title: "Production",
                    desc:
                        "Writing, filming, and designing content with attention to detail.",
                },
                {
                    title: "Delivery",
                    desc:
                        "Providing ready-to-use assets for web, social, and campaigns.",
                },
            ],
        },

        cta: {
            title: "Ready to strengthen your brand?",
            text:
                "Let’s create content that connects with Canadian audiences.",
        },

        relatedServices: [
            {
                title: "Social Media Marketing",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "SEO & Content Optimization",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Brand Identity & Design",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
