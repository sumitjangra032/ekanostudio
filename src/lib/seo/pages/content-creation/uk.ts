import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation UK",
            "Content Marketing Agency UK",
            "Video Production UK",
            "Copywriting Services UK",
            "Brand Content Strategy UK"
        ],
        description:
            "Professional content creation services in the UK, including video production, SEO copywriting, and strategic brand storytelling for growth-focused businesses.",
    },

    location: {
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK-based",
        context: "across the United Kingdom",
        metaTitleSuffix: "UK | Trusted Content Partners",
        traits: ["established businesses", "digital transformation", "service sector"],
    },

    meta: {
        title: "Content Creation Services UK | Video, Copywriting & Strategy",
        description:
            "UK-focused content creation agency delivering video, SEO copywriting, and brand storytelling tailored to British audiences and search intent.",
        canonical: "/content-creation-uk",
    },

    content: {
        hero: {
            title: "Strategic Content for the UK Market",
            subtitle:
                "Clear messaging, refined storytelling, and high-quality visuals designed for British brands and audiences.",
        },

        overview: {
            title: "Content That Connects With UK Audiences",
            text:
                "UK audiences value clarity, credibility, and relevance. Loud marketing and exaggerated claims rarely perform well. Ekanostudio creates content grounded in strategy—designed to inform, engage, and convert. From SEO-led blog articles to polished corporate video and social media assets, our content is built to support long-term brand authority and measurable growth across the UK market.",
        },

        whyChoose: {
            title: "Why UK Businesses Work With Us",
            points: [
                {
                    title: "UK-Specific Tone & Style",
                    desc:
                        "Content written in British English with the right balance of professionalism, clarity, and approachability.",
                },
                {
                    title: "Search-First Approach",
                    desc:
                        "Every piece of content is structured to support SEO, user intent, and long-term organic visibility.",
                },
                {
                    title: "Reliable Production",
                    desc:
                        "Consistent output and delivery schedules that support your marketing and editorial calendar.",
                },
            ],
        },

        deliverables: [
            "SEO-optimised blog articles (British English)",
            "Corporate and brand video editing",
            "Social media visuals and short-form video",
            "Whitepapers, reports, and long-form content",
            "Email newsletter and campaign copy",
            "Brand voice and content guidelines",
        ],

        process: {
            title: "Our UK Content Workflow",
            steps: [
                {
                    title: "Research & Planning",
                    desc:
                        "Analysing UK search trends, audience intent, and competitive positioning.",
                },
                {
                    title: "Content Creation",
                    desc:
                        "Producing copy, visuals, and video aligned with brand and SEO goals.",
                },
                {
                    title: "Quality Review",
                    desc:
                        "Ensuring tone, accuracy, and consistency meet UK market expectations.",
                },
                {
                    title: "Delivery & Optimisation",
                    desc:
                        "Supplying ready-to-publish assets optimised for web, search, and social platforms.",
                },
            ],
        },

        cta: {
            title: "Strengthen your content strategy",
            text:
                "Let’s create content that builds authority and trust with your UK audience.",
        },

        relatedServices: [
            {
                title: "SEO Services",
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
