import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: ["Content Marketing", "Copywriting", "Video Production"],
        description: "Engage your audience with compelling content that tells your story and builds brand authority.",
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
        title: "Content Creation Agency India | Video, Copy & Strategy",
        description: "Tell your story to a billion. We produce high-quality video, authoritative copy, and digital assets for India's leading brands and influencers.",
        canonical: "/content-creation-india",
    },
    content: {
        hero: {
            title: "Authentic Content for the Indian Audience",
            subtitle: "Visuals that resonate. Words that persuade. Your content partner for the Indian digital boom.",
        },
        overview: {
            title: "Storytelling for a Digital-First India",
            text: "India is a content-hungry nation. To win, your brand must produce assets that are relevant, engaging, and culturally resonant. Ekanostudio's content team produces high-impact media for the Indian market—from viral-ready video reels to authoritative blogs that build industry trust.",
        },
        whyChoose: {
            title: "Why Our Content Studio?",
            points: [
                { title: "Diverse Reach", desc: "Content designed to appeal across different Indian demographics." },
                { title: "Premium Media", desc: "High-quality video production and graphic design." },
                { title: "SEO-Ready Copy", desc: "Content that ranks on Google while engaging the reader." }
            ]
        },
        deliverables: [
            "Brand Films & Commercials",
            "SEO-Optimized Blog Writing",
            "Social Media Design Kits",
            "Email Marketing Campaigns",
            "Whitepapers & Case Studies",
            "Corporate Storytelling Docs"
        ],
        process: {
            title: "Creative Workflow in India",
            steps: [
                { title: "Ideate", desc: "Developing concepts aimed at India's digital consumers." },
                { title: "Execute", desc: "Producing high-quality visuals and drafting copy." },
                { title: "Refine", desc: "Polishing assets for maximum engagement." },
                { title: "Deploy", desc: "Providing ready-to-use content for all platforms." }
            ]
        },
        cta: {
            title: "Ready to engage your audience?",
            text: "Let's create content that defines your brand in India."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
