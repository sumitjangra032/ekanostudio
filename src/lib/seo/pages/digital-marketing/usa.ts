import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: ["Online Marketing", "Performance Marketing", "Brand Growth"],
        description: "Comprehensive digital marketing solutions to scale your business across all online channels.",
    },
    location: {
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "in the US market",
        metaTitleSuffix: "USA | Global Agency",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },
    meta: {
        title: "Digital Marketing Agency for US Businesses | Growth & ROI",
        description: "Performance marketing for the US market. We manage Google Ads, Meta Ads, and Email campaigns that drive dollars, not just clicks.",
        canonical: "/digital-marketing-usa",
    },
    content: {
        hero: {
            title: "Performance Marketing for the US Economy",
            subtitle: "Maximize your ad spend. We implement high-ROAS campaigns tailored for the high-cpc American market.",
        },
        overview: {
            title: "Scaling Revenue in the United States",
            text: "Advertising in the US is expensive. You can't afford wasted clicks. Ekanostudio brings a data-obsessed approach to digital marketing. We optimize for Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC), ensuring your campaigns in New York, Texas, or Florida are profitable from day one.",
        },
        whyChoose: {
            title: "Why US Brands Hire Us",
            points: [
                { title: "Cost Arbitrage", desc: "Get top-tier ad management at a fraction of US agency fees." },
                { title: "24/7 Optimization", desc: "We monitor your campaigns while the US sleeps." },
                { title: "Platform Expertise", desc: "Certified partners for Google, Meta, and LinkedIn." }
            ]
        },
        deliverables: [
            "Media Buying Strategy",
            "Conversion Rate Optimization",
            "Funnel Architecture",
            "Retargeting Setup",
            "Advanced Analytics Setup",
            "Daily/Weekly Reporting"
        ],
        process: {
            title: "US Market Launch",
            steps: [
                { title: "Research", desc: "Analyzing US demographic data for your niche." },
                { title: "Setup", desc: "Configuring pixel perfect tracking and attribution." },
                { title: "Test", desc: "Rapid A/B testing of US-centric creatives." },
                { title: "Scale", desc: "Increasing budget on winning ad sets." }
            ]
        },
        cta: {
            title: "Stop wasting ad budget.",
            text: "Get a free audit of your current US campaigns."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Email Automation", link: "/services/email-automation/email-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" }
        ]
    }
};
