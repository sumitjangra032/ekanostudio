import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Canada",
            "Performance Marketing Canada",
            "Canadian Online Advertising",
            "Google Ads Canada",
            "Social Media Marketing Canada",
            "Growth Marketing Agency Canada"
        ],
        description:
            "Full-funnel digital marketing services tailored for Canadian businesses. Optimized for ROI, compliance, and multi-channel growth across the Canadian market.",
    },

    location: {
        name: "Canada",
        slug: "canada",
        type: "country",
        country: "Canada",
        adjective: "Canadian",
        context: "across Canada",
        metaTitleSuffix: "Canada | Growth Experts",
        traits: ["tech innovation", "diverse economy", "growth sector"],
    },

    meta: {
        title: "Digital Marketing Agency Canada | Performance, ROI & Growth",
        description:
            "Canadian digital marketing experts. Specializing in ROI-driven Google Ads, Social Media campaigns, and cross-channel growth across all of Canada.",
        canonical: "/digital-marketing-canada",
    },

    content: {
        hero: {
            title: "Performance Marketing Tailored for Canadian Businesses",
            subtitle:
                "Reach your ideal customer in every province. We run data-backed campaigns designed for Canada’s competitive digital landscape.",
        },

        overview: {
            title: "Hyper-Targeted Growth Across the Canadian Market",
            text:
                "Canada’s digital economy is evolving fast, with users expecting relevance, clarity, and trust. Ekanostudio builds custom marketing systems optimized for Canadian buying behaviour. From Toronto’s finance crowd to Vancouver’s tech startups and Calgary’s SMB market, our strategies are built on data, compliance, and conversion science. Every campaign is optimized for CAC reduction, LTV expansion, and sustainable revenue growth.",
        },

        whyChoose: {
            title: "Why Canada Chooses Ekanostudio",
            points: [
                {
                    title: "CAD-Native Optimization",
                    desc: "All reporting, bidding, and ROI calculations aligned with Canadian Dollars.",
                },
                {
                    title: "Compliance Ready",
                    desc: "All email and ad workflows follow CASL and Canadian data privacy guidelines.",
                },
                {
                    title: "Cross-Channel Execution",
                    desc: "Integrated approach across Google, Facebook, LinkedIn, YouTube, and Display.",
                },
            ],
        },

        deliverables: [
            "Full Digital Marketing Strategy",
            "Google Ads & Display Campaigns",
            "Paid Social (Meta, LinkedIn, TikTok)",
            "CASL-Compliant Email Marketing",
            "Conversion Rate Optimization (CRO)",
            "Live KPI & Analytics Dashboards",
        ],

        process: {
            title: "Canadian Market Growth Framework",
            steps: [
                {
                    title: "Research",
                    desc:
                        "Analyzing provincial behavior, competition, and industry benchmarks.",
                },
                {
                    title: "Setup",
                    desc:
                        "Building advanced tracking, conversion systems, and attribution models.",
                },
                {
                    title: "Launch",
                    desc:
                        "Deploying high-intent campaigns across key Canadian channels.",
                },
                {
                    title: "Scale",
                    desc:
                        "Increasing budgets and expanding reach based on performance insights.",
                },
            ],
        },

        cta: {
            title: "Ready to grow your business in Canada?",
            text:
                "Get a complimentary marketing audit tailored to your Canadian market goals.",
        },

        relatedServices: [
            {
                title: "SEO",
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
