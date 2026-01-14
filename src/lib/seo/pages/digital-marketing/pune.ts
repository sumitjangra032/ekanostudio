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
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in the Oxford of the East",
        metaTitleSuffix: "Pune | Expert Solutions",
        traits: ["education sector", "manufacturing hubs", "IT parks"],
    },
    meta: {
        title: "Digital Marketing Agency in Pune | Growth & lead Gen",
        description: "Scale your revenue in Pune. Our digital marketing services include Google Ads, Social Ads, and Email Automation specifically optimized for Pune's market.",
        canonical: "/digital-marketing-pune",
    },
    content: {
        hero: {
            title: "Performance Marketing for Pune's Dynamic Economy",
            subtitle: "Reach the right customers. Maximize your ROAS. We drive digital growth for Pune's smartest firms.",
        },
        overview: {
            title: "Growth Marketing Tailored for Pune",
            text: "Scaling in Pune requires a smart mix of local targeting and global reach. Ekanostudio provides end-to-end digital marketing solutions. From managing Google Ads for recruitment firms to running Instagram campaigns for luxury brands in Koregaon Park, we deliver ROI-focused results.",
        },
        whyChoose: {
            title: "Our Marketing Advantage",
            points: [
                { title: "Data-Driven ROI", desc: "Every campaign is optimized for conversion, not just clicks." },
                { title: "Omnichannel strategy", desc: "A unified presence across Google, Meta, and LinkedIn." },
                { title: "Transparent Reporting", desc: "Live dashboards so you always know your CAC and ROAS." }
            ]
        },
        deliverables: [
            "Full-Stack Digital Strategy",
            "Google Ads (PPC) Management",
            "Social Media Advertising",
            "Lead Nurturing Automation",
            "Conversion Rate Optimization",
            "Weekly Performance Calls"
        ],
        process: {
            title: "Market Launch Cycle",
            steps: [
                { title: "Analyze", desc: "In-depth research on Pune's demographic and competitors." },
                { title: "Setup", desc: "Deploying tracking pixels and creative assets." },
                { title: "Launch", desc: "Going live with targeted campaigns." },
                { title: "Scale", desc: "Refining and growing the budgets for winning ad sets." }
            ]
        },
        cta: {
            title: "Ready to scale your business?",
            text: "Get a free marketing consultation for your Pune brand."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/landing-page-development" }
        ]
    }
};
