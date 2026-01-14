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
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE",
        context: "in the United Arab Emirates",
        metaTitleSuffix: "UAE | Dubai & Abu Dhabi",
        traits: ["luxury market", "rapid development", "global business hub"],
    },
    meta: {
        title: "Digital Marketing Agency Dubai | UAE Performance Marketing",
        description: "Accelerate your growth in the UAE. We manage high-ROI advertising campaigns across Google, Instagram, and LinkedIn for Dubai & Abu Dhabi businesses.",
        canonical: "/digital-marketing-uae",
    },
    content: {
        hero: {
            title: "High-Performance Marketing for the UAE",
            subtitle: "Drive real business results. We help UAE companies turn clicks into loyal customers.",
        },
        overview: {
            title: "Growth Marketing in the Emirates",
            text: "The UAE audience is mobile-first and socially active. To reach them, you need a smart strategy. Ekanostudio provides data-driven digital marketing services. We combine precision targeting on Instagram and TikTok with high-intent Google Ads to ensure your brand captures the booming demand in Dubai and Abu Dhabi.",
        },
        whyChoose: {
            title: "Our UAE Marketing Edge",
            points: [
                { title: "Platform Mastery", desc: "Expertise in Instagram, Snapchat, and TikTok ads tailored for GCC." },
                { title: "High-Value Targeting", desc: "Strategies to reach HNIs and corporate decision makers." },
                { title: "Bilingual Ads", desc: "Campaigns running in both English and Arabic." }
            ]
        },
        deliverables: [
            "Integrated Digital Strategy",
            "Performance Ad Management",
            "Social Media Marketing",
            "Lead Generation Funnels",
            "Influencer Collaboration",
            "ROI Reporting Dashboard"
        ],
        process: {
            title: "UAE Growth Cycle",
            steps: [
                { title: "Analyze", desc: "Understanding your audience in the Emirates." },
                { title: "Launch", desc: "Deploying targeted ads across key channels." },
                { title: "optimize", desc: "Refining campaigns for lower CPA and higher ROI." },
                { title: "Scale", desc: "Expanding reach across the Gulf region." }
            ]
        },
        cta: {
            title: "Ready to grow your revenue?",
            text: "Book a consultation with our Dubai marketing team."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" }
        ]
    }
};
