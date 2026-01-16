import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing India",
            "Performance Marketing India",
            "Google Ads Agency India",
            "Social Media Marketing India",
            "Lead Generation India",
            "Full Funnel Marketing India"
        ],
        description:
            "Comprehensive digital marketing solutions to scale your business across all online channels.",
    },

    location: {
        name: "India",
        slug: "india",
        type: "country",
        country: "India",
        adjective: "Indian",
        context: "across the Indian market",
        metaTitleSuffix: "India | #1 Digital Agency",
        traits: ["rapidly growing market", "diverse audience", "digital-first consumers"],
    },

    meta: {
        title: "Digital Marketing Agency India | Performance, Leads & Growth",
        description:
            "Grow your revenue across India with high-performance Google Ads, Meta Ads, and ROI-driven digital marketing campaigns designed for the Indian consumer landscape.",
        canonical: "/digital-marketing-india",
    },

    content: {
        hero: {
            title: "Performance Marketing for India’s Digital-First Economy",
            subtitle:
                "Target the right audience at the perfect moment. We deliver measurable revenue growth for brands across India.",
        },

        overview: {
            title: "Data-Led Growth in the World’s Fastest Growing Digital Market",
            text:
                "India’s digital ecosystem is massive—and competitive. To win, your brand needs a strategy that blends high-intent Google Search users with social media audiences across Meta, Instagram, and YouTube. At Ekanostudio, we build full-funnel, performance-driven marketing systems that maximize revenue and optimize every rupee you invest.",
        },

        whyChoose: {
            title: "Why Indian Brands Choose Us",
            points: [
                {
                    title: "Scale-Ready Execution",
                    desc: "From local targeting to pan-India expansion, our strategies grow with your business.",
                },
                {
                    title: "Maximum ROI",
                    desc: "We obsess over CAC, LTV, and cost-per-result to ensure profitability.",
                },
                {
                    title: "Full-Funnel Management",
                    desc: "We handle awareness, nurturing, remarketing, and conversion for end-to-end growth.",
                },
            ],
        },

        deliverables: [
            "Nationwide Growth Strategy",
            "Google Ads & PPC Management",
            "Meta, YouTube & LinkedIn Advertising",
            "Email/SMS Automation Workflows",
            "Landing Page & CRO Enhancements",
            "Real-Time Analytics Dashboards",
        ],

        process: {
            title: "Execution Framework",
            steps: [
                {
                    title: "Research",
                    desc: "Studying Indian consumer behavior, search intent, and competitor positioning.",
                },
                {
                    title: "Action",
                    desc: "Launching optimized campaigns across all relevant platforms.",
                },
                {
                    title: "Refine",
                    desc: "Daily optimization to reduce cost-per-conversion and boost scalability.",
                },
                {
                    title: "Growth",
                    desc: "Scaling winning campaigns for pan-India reach and higher profitability.",
                },
            ],
        },

        cta: {
            title: "Ready to scale your business across India?",
            text: "Request a free performance marketing audit today.",
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/landing-page-development" },
        ],
    },
};
