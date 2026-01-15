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
        name: "Luxembourg",
        slug: "luxembourg",
        type: "country",
        country: "Luxembourg",
        adjective: "Luxembourg",
        context: "in Luxembourg",
        metaTitleSuffix: "Luxembourg | Premium Agency",
        traits: ["financial sector", "high-end business", "european hub"],
    },
    meta: {
        title: "Digital Marketing Luxembourg | Precision & Performance",
        description: "Scale your revenue in the Grand Duchy. We manage high-performance integrated marketing campaigns for Luxembourg's corporate and B2B sectors.",
        canonical: "/digital-marketing-luxembourg",
    },
    content: {
        hero: {
            title: "Precision Marketing for Global Business",
            subtitle: "Maximize your reach across Europe. We drive high-value leads for Luxembourg's smartest companies.",
        },
        overview: {
            title: "Growth Marketing for B2B Leaders",
            text: "Digital marketing in Luxembourg requires a surgical approach. You aren't just looking for clicks; you're looking for decision-makers. ekanostudio provides full-stack marketing solutions that combine the reach of LinkedIn Ads with the high-intent of Google Search, all while maintaining perfect data compliance.",
        },
        whyChoose: {
            title: "Our Marketing Advantage",
            points: [
                { title: "B2B Focus", desc: "Strategies designed to reach high-value corporate clients." },
                { title: "Data Compliance", desc: "Adhering to strict Luxembourgish and EU privacy laws." },
                { title: "ROI Visibility", desc: "Clear reporting on your cost-per-acquisition and growth." }
            ]
        },
        deliverables: [
            "Integrated Marketing Strategy",
            "LinkedIn & Google Ad Management",
            "Performance Social Marketing",
            "Lead Capture & Funnel Architecture",
            "Email Marketing Automation",
            "Executive Performance Dashboards"
        ],
        process: {
            title: "Growth Implementation",
            steps: [
                { title: "Audience Mapping", desc: "Identifying your target niches in Luxembourg and beyond." },
                { title: "Channel Setup", desc: "Deploying high-impact ads across key business channels." },
                { title: "Optimization", desc: "Continuous testing to lower lead costs and improve quality." },
                { title: "Scaling", desc: "Increasing budget on your most profitable campaigns." }
            ]
        },
        cta: {
            title: "Ready to scale your business?",
            text: "Request a strategic marketing audit from our Luxembourg team."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" }
        ]
    }
};
