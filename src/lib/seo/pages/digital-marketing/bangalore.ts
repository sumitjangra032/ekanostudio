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
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in the Silicon Valley of India",
        metaTitleSuffix: "Bangalore | Top Rated Agency",
        traits: ["tech startups", "innovative businesses", "IT hubs"],
    },
    meta: {
        title: "Digital Marketing Agency Bangalore | Growth & ROI",
        description: "Scale your revenue in the Silicon Valley of India. Our performance marketing drives measurable growth for Bangalore's best startups.",
        canonical: "/digital-marketing-bangalore",
    },
    content: {
        hero: {
            title: "Performance Marketing for Bangalore's Startup Culture",
            subtitle: "Reach your users. Maximize your ROAS. We drive digital growth for Bangalore's smartest firms.",
        },
        overview: {
            title: "Growth Marketing Tailored for Bangalore",
            text: "Scaling in Bangalore requires a data-first approach. Ekanostudio provides end-to-end digital marketing solutions. From managing Google Ads for SaaS firms to running performance marketing for D2C brands in Indiranagar, we deliver ROI-focused results.",
        },
        whyChoose: {
            title: "Our Marketing Advantage",
            points: [
                { title: "Data-Driven ROI", desc: "Every campaign is optimized for conversion, not just impressions." },
                { title: "Tech-Focused Strategy", desc: "Deep understanding of SaaS and Tech B2B funnels." },
                { title: "Live Reporting", desc: "Dashboards so you always know your CAC and growth metrics." }
            ]
        },
        deliverables: [
            "Complete Growth Strategy",
            "Google Ads (PPC) Management",
            "Meta & LinkedIn Advertising",
            "App Store Optimization (ASO)",
            "Conversion Funnel Building",
            "Weekly Performance Audits"
        ],
        process: {
            title: "Market Capture Cycle",
            steps: [
                { title: "Audit", desc: "Analyzing your user behavior and competitor landscape in Bangalore." },
                { title: "Setup", desc: "Deploying high-impact creative and tracking setups." },
                { title: "Launch", desc: "Going live with targeted performance campaigns." },
                { title: "Repeat", desc: "Iterating for lower CAC and higher volume." }
            ]
        },
        cta: {
            title: "Ready to scale your startup?",
            text: "Request a free growth audit from our Bangalore team."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/landing-page-development" }
        ]
    }
};
