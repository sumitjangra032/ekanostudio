import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Agency Pune",
            "Performance Marketing Pune",
            "Lead Generation Pune",
            "Google Ads Pune",
            "Social Media Marketing Pune",
            "Growth Marketing Pune"
        ],
        description:
            "Result-driven digital marketing services designed to help Pune businesses generate leads, sales, and measurable growth.",
    },

    location: {
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in Pune",
        metaTitleSuffix: "Pune | Expert Solutions",
        traits: ["education sector", "manufacturing hubs", "IT parks"],
    },

    meta: {
        title: "Digital Marketing Agency Pune | Lead Generation & Growth",
        description:
            "Grow your Pune business with performance-focused digital marketing. We manage Google Ads, social campaigns, and conversion funnels that deliver ROI.",
        canonical: "/digital-marketing-pune",
    },

    content: {
        hero: {
            title: "Performance-Driven Digital Marketing for Pune Businesses",
            subtitle:
                "Generate qualified leads, increase sales, and scale faster with data-backed digital marketing built for Pune’s competitive market.",
        },

        overview: {
            title: "Growth Marketing Built for Pune’s Business Ecosystem",
            text:
                "Pune is home to IT parks, manufacturing clusters, educational institutes, and fast-growing local brands. Each requires a different growth strategy. Ekanostudio builds performance marketing systems that combine high-intent Google Search, targeted social media advertising, and conversion-optimized landing pages—helping Pune businesses turn traffic into revenue.",
        },

        whyChoose: {
            title: "Why Pune Brands Choose Ekanostudio",
            points: [
                {
                    title: "Local + Performance Focus",
                    desc: "Campaigns tailored to Pune audiences with clear conversion goals.",
                },
                {
                    title: "Multi-Channel Execution",
                    desc: "Seamless strategy across Google, Meta, LinkedIn, and Email.",
                },
                {
                    title: "Transparent ROI Tracking",
                    desc: "Clear visibility into leads, costs, and return on ad spend.",
                },
            ],
        },

        deliverables: [
            "Pune-Focused Digital Marketing Strategy",
            "Google Ads & Search Campaign Management",
            "Social Media Lead Generation Campaigns",
            "Marketing Automation & Lead Nurturing",
            "Conversion Rate Optimization (CRO)",
            "Monthly Performance Reporting & Reviews",
        ],

        process: {
            title: "Our Growth Execution Process",
            steps: [
                {
                    title: "Market Research",
                    desc: "Understanding Pune’s audience behavior, demand, and competition.",
                },
                {
                    title: "Campaign Setup",
                    desc: "Building high-conversion ads, creatives, and tracking systems.",
                },
                {
                    title: "Optimization",
                    desc: "Continuous improvement to reduce CPL and improve lead quality.",
                },
                {
                    title: "Scale",
                    desc: "Increasing budgets on proven channels for sustainable growth.",
                },
            ],
        },

        cta: {
            title: "Looking for consistent leads?",
            text: "Book a free digital marketing consultation for your Pune business.",
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/landing-page-development" },
        ],
    },
};
