import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing USA",
            "Performance Marketing Agency USA",
            "Google Ads Management USA",
            "Meta Ads USA",
            "Lead Generation Agency USA",
            "Growth Marketing US"
        ],
        description:
            "Revenue-focused digital marketing solutions built for the high-competition US market, designed to maximize ROAS and lifetime value.",
    },

    location: {
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "in the United States market",
        metaTitleSuffix: "USA | Global Growth Partner",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },

    meta: {
        title: "Digital Marketing Agency USA | Performance, Growth & ROI",
        description:
            "Scale faster in the United States. We manage Google Ads, Meta Ads, and Email campaigns built to convert traffic into measurable revenue.",
        canonical: "/digital-marketing-usa",
    },

    content: {
        hero: {
            title: "High-Performance Digital Marketing for US Businesses",
            subtitle:
                "Win in the world’s most competitive ad market with data-driven campaigns built for scale, speed, and profitability.",
        },

        overview: {
            title: "Revenue-Driven Growth in the United States",
            text:
                "The US digital advertising landscape is high-cost and unforgiving. Success requires more than traffic—it requires precision. Ekanostudio helps American businesses compete by engineering performance marketing systems optimized for Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), and real revenue. Whether you’re targeting buyers in California, Texas, New York, or nationwide, every campaign is designed to scale profitably.",
        },

        whyChoose: {
            title: "Why US Companies Work With Us",
            points: [
                {
                    title: "Built for High CPC Markets",
                    desc: "Strategies engineered specifically for expensive US ad auctions.",
                },
                {
                    title: "Always-On Optimization",
                    desc: "Campaigns are actively monitored and improved across time zones.",
                },
                {
                    title: "Platform-Level Expertise",
                    desc: "Deep experience across Google Ads, Meta, LinkedIn, and email funnels.",
                }
            ]
        },

        deliverables: [
            "US Market Media Buying Strategy",
            "Conversion Rate Optimization (CRO)",
            "High-Converting Funnel Architecture",
            "Advanced Retargeting & Lookalike Setup",
            "Analytics & Attribution Configuration",
            "Weekly Performance & Revenue Reports"
        ],

        process: {
            title: "US Growth Execution Framework",
            steps: [
                {
                    title: "Market Research",
                    desc: "Deep analysis of US audience behavior, intent, and competition.",
                },
                {
                    title: "Infrastructure Setup",
                    desc: "Implementing clean tracking, attribution, and conversion events.",
                },
                {
                    title: "Creative Testing",
                    desc: "Rapid A/B testing of US-specific messaging and offers.",
                },
                {
                    title: "Scalable Growth",
                    desc: "Increasing spend only on consistently profitable campaigns.",
                }
            ]
        },

        cta: {
            title: "Stop burning ad spend.",
            text: "Get a free audit of your current US digital marketing campaigns."
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "Email Automation", link: "/services/email-automation/email-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" }
        ]
    }
};
