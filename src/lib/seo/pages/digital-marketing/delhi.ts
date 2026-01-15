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
        name: "Delhi",
        slug: "delhi",
        type: "city",
        country: "India",
        adjective: "Delhi-based",
        context: "in the heart of India's capital",
        metaTitleSuffix: "Delhi | Premium Services",
        traits: ["corporate enterprises", "established brands", "growing businesses"],
    },
    meta: {
        title: "360° Digital Marketing Agency in Delhi | Performance & Growth",
        description: "Accelerate your growth with Delhi's premier digital agency. We integrate PPC, Social, and Email to drive measurable revenue for businesses in NCR.",
        canonical: "/digital-marketing-delhi",
    },
    content: {
        hero: {
            title: "Integrated Marketing for Delhi's Fast-Paced Economy",
            subtitle: "We don't just run ads. We build digital ecosystems that drive leads, sales, and loyalty for Delhi's smartest businesses.",
        },
        overview: {
            title: "Full-Funnel Growth in Delhi NCR",
            text: "To win in Delhi, you need more than just Facebook likes. You need a cohesive strategy that follows your customer from discovery to purchase. ekanostudio provides end-to-end digital marketing services—combining the precision of Google Ads with the reach of Social Media—to ensure you saturate the market effectively.",
        },
        whyChoose: {
            title: "Our Marketing Advantage",
            points: [
                { title: "Data-First Approach", desc: "Every rupee spent is tracked and optimized for ROAS." },
                { title: "Omnichannel Strategy", desc: "Seamless presence across Google, LinkedIn, Meta, and Email." },
                { title: "B2B & B2C Expertise", desc: "Proven success with both consumer brands and industrial clients." }
            ]
        },
        deliverables: [
            "Comprehensive Marketing Strategy",
            "Cross-Channel Ad Setup",
            "Performance Dashboards (Looker)",
            "Audience Segmentation Lists",
            "Creative Ad Sets (A/B Testing)",
            "Weekly Optimization Logs"
        ],
        process: {
            title: "Growth Marketing Cycle",
            steps: [
                { title: "Blueprint", desc: "Mapping your customer avatars in the Delhi region." },
                { title: "Launch", desc: "Going live with targeted campaigns across selected channels." },
                { title: "Analyze", desc: "Reviewing click-through and conversion data daily." },
                { title: "Scale", desc: "Doubling down on winning creatives and audiences." }
            ]
        },
        cta: {
            title: "Ready to scale your revenue?",
            text: "Book a strategy session with Delhi's growth experts."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" },
            { title: "Video Editing", link: "/services/content-creation/video-editing" }
        ]
    }
};
