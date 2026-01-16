import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Bangalore",
            "Performance Marketing Bangalore",
            "Startup Marketing Agency Bangalore",
            "Growth Marketing for SaaS",
            "ROI Driven Advertising"
        ],
        description:
            "Full-funnel digital marketing services for Bangalore startups, tech companies, and growing brands. Focused on performance, ROI, and scalable user acquisition.",
    },

    location: {
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in India's Silicon Valley",
        metaTitleSuffix: "Bangalore | Performance Driven Agency",
        traits: ["tech startups", "innovative businesses", "IT hubs"],
    },

    meta: {
        title: "Digital Marketing Agency Bangalore | Performance, Growth & ROI",
        description:
            "Performance-first digital marketing agency in Bangalore. We help SaaS, D2C, and tech companies scale revenue with data-driven advertising and precise targeting.",
        canonical: "/digital-marketing-bangalore",
    },

    content: {
        hero: {
            title: "Digital Marketing Built for Bangalore's Startup Ecosystem",
            subtitle:
                "Grow faster with data-backed campaigns, intelligent targeting, and ROI-optimized marketing for Bangalore’s most innovative companies.",
        },

        overview: {
            title: "Growth Marketing for India’s Tech Capital",
            text:
                "Bangalore’s pace demands smarter marketing. Ekanostudio builds performance systems tailored for SaaS, D2C, FinTech, EdTech, and IT brands. Whether you’re targeting Koramangala’s startup crowd or scaling nationwide, our integrated digital marketing engine ensures your budget drives measurable business outcomes. From Google Ads and LinkedIn campaigns to multi-channel growth funnels, we elevate your customer acquisition playbook.",
        },

        whyChoose: {
            title: "Why Bangalore Brands Choose Us",
            points: [
                {
                    title: "ROI-Focused Execution",
                    desc:
                        "Every rupee is optimized for conversions, lower CAC, and profitable scaling.",
                },
                {
                    title: "Startup & SaaS Experience",
                    desc:
                        "Deep understanding of user journeys, B2B funnels, and enterprise buying cycles.",
                },
                {
                    title: "Real-Time Transparency",
                    desc:
                        "Live dashboards tracking CAC, ROAS, retention, and user acquisition.",
                },
            ],
        },

        deliverables: [
            "End-to-End Growth Marketing Strategy",
            "Google Ads & Performance PPC",
            "Meta, LinkedIn & YouTube Advertising",
            "App Store Optimization (ASO)",
            "Multi-Stage Conversion Funnel Setup",
            "Weekly Growth Reports & Experiments",
        ],

        process: {
            title: "Your Bangalore Growth Blueprint",
            steps: [
                {
                    title: "Audit",
                    desc:
                        "Analyzing user behavior, funnel leaks, and competitive dynamics in Bangalore’s market.",
                },
                {
                    title: "Build",
                    desc:
                        "Setting up campaigns, targeting engines, creatives, tracking, and attribution.",
                },
                {
                    title: "Scale",
                    desc:
                        "Launching high-impact campaigns and doubling down on winning channels.",
                },
                {
                    title: "Optimize",
                    desc:
                        "Iterating constantly to reduce CAC and increase MRR, retention, and LTV.",
                },
            ],
        },

        cta: {
            title: "Ready to scale your startup?",
            text:
                "Get a complimentary growth audit tailored for Bangalore’s high-performance market.",
        },

        relatedServices: [
            {
                title: "SEO Services",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Content Creation",
                link: "/services/content-creation/content-writing",
            },
            {
                title: "Web Design",
                link: "/services/web-design-development/landing-page-development",
            },
        ],
    },
};
