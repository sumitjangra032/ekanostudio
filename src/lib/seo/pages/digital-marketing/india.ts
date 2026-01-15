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
        title: "Digital Marketing Agency India | Performance & Growth",
        description: "Scale your revenue across India. We manage high-performance Google Ads and Social Media campaigns for India's fastest-growing businesses.",
        canonical: "/digital-marketing-india",
    },
    content: {
        hero: {
            title: "Performance Marketing for India's Digital Boom",
            subtitle: "Reach the right audience at the right time. We drive measurable results for brands across India.",
        },
        overview: {
            title: "Data-Driven Growth in the World's Most Active Market",
            text: "Digital marketing in India requires a combination of high-intent search and high-reach social. ekanostudio provides rigorous performance marketing services. We build integrated marketing funnels that span Google Search, Meta, and Email, ensuring every rupee spent contributes to your bottom line.",
        },
        whyChoose: {
            title: "Our Marketing Advantage",
            points: [
                { title: "Scale-Ready Strategy", desc: "Designed to grow with your business across India." },
                { title: "Maximum ROI", desc: "Focusing on cost-per-acquisition and lifetime value." },
                { title: "Full-Funnel Management", desc: "Handling everything from awareness to final conversion." }
            ]
        },
        deliverables: [
            "Growth Strategy Roadmap",
            "Google Ads (PPC) Management",
            "Paid Social Media Campaigns",
            "Email & SMS Marketing Automation",
            "Website Conversion Optimization",
            "Live Analytics Dashboards"
        ],
        process: {
            title: "Implementation Cycle",
            steps: [
                { title: "Research", desc: "Analyzing Indian consumer behavior and intent." },
                { title: "Action", desc: "Deploying targeted ad sets across relevant channels." },
                { title: "Refine", desc: "Continuous testing to lower costs and boost volume." },
                { title: "Growth", desc: "Scaling budgets effectively for nationwide reach." }
            ]
        },
        cta: {
            title: "Ready to grow your sales?",
            text: "Request a free marketing audit for your Indian brand."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/landing-page-development" }
        ]
    }
};
