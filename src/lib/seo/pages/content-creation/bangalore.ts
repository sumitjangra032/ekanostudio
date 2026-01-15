import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation Bangalore",
            "Content Marketing for Startups",
            "Tech Copywriting",
            "Video Production Bangalore",
            "SaaS Content"
        ],
        description:
            "Strategic content creation for Bangalore startups and tech companies—copy, video, and media built to establish authority and drive growth.",
    },

    location: {
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in the Silicon Valley of India",
        metaTitleSuffix: "Bangalore | Content Studio",
        traits: ["startup ecosystem", "SaaS companies", "technology-led brands"],
    },

    meta: {
        title: "Content Creation Agency Bangalore | Tech Copy & Video Studio",
        description:
            "Content creation for Bangalore startups and IT companies. We produce tech-focused copy, videos, and brand content that builds trust and authority.",
        canonical: "/content-creation-bangalore",
    },

    content: {
        hero: {
            title: "High-Impact Content for Bangalore’s Tech Companies",
            subtitle:
                "Content built for founders, SaaS teams, and product-led businesses in India’s tech capital.",
        },

        overview: {
            title: "Content That Builds Trust in a Competitive Tech Market",
            text:
                "Bangalore is crowded with products, platforms, and promises. Standing out requires clarity, credibility, and consistency. ekanostudio helps startups and technology-driven companies create content that explains complex ideas simply, positions founders as experts, and supports long sales cycles. From technical blogs and case studies to founder videos and brand narratives, our content is built for informed decision-makers.",
        },

        whyChoose: {
            title: "Why Bangalore Teams Choose Our Content Studio",
            points: [
                {
                    title: "Tech-First Copywriting",
                    desc:
                        "Content written for developers, product leaders, founders, and enterprise buyers.",
                },
                {
                    title: "Founder & Brand Storytelling",
                    desc:
                        "Videos and narratives that humanize your brand and build credibility.",
                },
                {
                    title: "Distribution-Aware Content",
                    desc:
                        "Assets designed to perform on LinkedIn, websites, pitch decks, and sales funnels.",
                },
            ],
        },

        deliverables: [
            "Startup brand & product videos",
            "Technical blogs & thought leadership articles",
            "Founder interviews & leadership content",
            "Whitepapers, case studies & pitch content",
            "Social media visuals & content kits",
            "Brand messaging & narrative documentation",
        ],

        process: {
            title: "Our Content Production Process",
            steps: [
                {
                    title: "Discovery",
                    desc:
                        "Understanding your product, audience, and competitive positioning in Bangalore.",
                },
                {
                    title: "Content Strategy",
                    desc:
                        "Defining formats, themes, and messaging aligned with your growth stage.",
                },
                {
                    title: "Production",
                    desc:
                        "Writing, filming, and designing content with a focus on clarity and quality.",
                },
                {
                    title: "Delivery",
                    desc:
                        "Final assets delivered ready for marketing, sales, and employer branding.",
                },
            ],
        },

        cta: {
            title: "Ready to strengthen your brand authority?",
            text:
                "Let’s create content that positions your company as a leader in Bangalore’s tech ecosystem.",
        },

        relatedServices: [
            {
                title: "SEO & Content Optimization",
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
