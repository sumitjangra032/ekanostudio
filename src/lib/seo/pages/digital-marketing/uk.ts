import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing UK",
            "PPC Agency UK",
            "Social Media Advertising UK",
            "Lead Generation UK",
            "Google Ads London",
            "Performance Marketing UK"
        ],
        description:
            "UK-focused digital marketing solutions designed to increase revenue, reduce acquisition costs, and build long-term brand trust.",
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
        title: "Digital Marketing Agency UK | Growth & Performance",
        description:
            "Grow your business in the United Kingdom. We offer PPC, Social Media Advertising, and Email Automation carefully tailored to British markets and buying behaviour.",
        canonical: "/digital-marketing-uk",
    },

    content: {
        hero: {
            title: "High-Performance Digital Marketing for UK Brands",
            subtitle:
                "Maximise efficiency. Improve conversions. We build and manage data-driven campaigns for businesses across the UK.",
        },

        overview: {
            title: "Building Growth in the UK’s Digital-First Economy",
            text:
                "The UK is one of the most competitive digital landscapes—driven by e-commerce, fintech, and service-led industries. To stand out, your marketing must blend precision targeting with a tone that resonates with British audiences. Ekanostudio creates full-funnel marketing systems, whether you’re targeting busy professionals in London, local customers in Manchester, or nationwide buyers across England, Scotland, Wales, and Northern Ireland.",
        },

        whyChoose: {
            title: "Why British Brands Choose Us",
            points: [
                {
                    title: "GDPR + PECR Compliant",
                    desc: "All campaigns follow strict UK data and communication regulations.",
                },
                {
                    title: "Performance-Driven Strategy",
                    desc: "Optimised campaigns built to lower your CPA and increase revenue in GBP.",
                },
                {
                    title: "UK Market Insight",
                    desc: "Culturally aligned messaging crafted for British preferences and humour.",
                },
            ],
        },

        deliverables: [
            "UK-Specific Digital Strategy",
            "PPC Management (Google & Microsoft Ads)",
            "Meta, LinkedIn & TikTok Advertising",
            "Email Marketing & Automation (UK-compliant)",
            "Conversion Rate Optimisation",
            "Real-Time Analytics Dashboard"
        ],

        process: {
            title: "Our UK Growth Process",
            steps: [
                {
                    title: "Audience Mapping",
                    desc: "Identifying your ideal customer personas within UK regions.",
                },
                {
                    title: "Creative Production",
                    desc: "Crafting ads tailored to British buying behaviour and cultural tone.",
                },
                {
                    title: "Campaign Launch",
                    desc: "Executing structured campaigns with controlled spending.",
                },
                {
                    title: "Optimisation",
                    desc: "Constant refinement of bids, audiences, and messaging for higher ROAS.",
                },
            ],
        },

        cta: {
            title: "Looking to scale in the UK?",
            text: "Book a strategy call and discover how we can grow your brand across the United Kingdom.",
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/website-design-uiux" }
        ],
    },
};
