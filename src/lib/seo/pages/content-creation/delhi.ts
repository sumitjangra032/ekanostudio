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
        title: "Professional Content Creation Agency in Delhi | Video & Copy",
        description: "Elevate your brand narrative. We produce high-quality video, graphic, and written content tailored for Delhi's diverse and demanding audience.",
        canonical: "/content-creation-delhi",
    },
    content: {
        hero: {
            title: "Storytelling That Resonates in Delhi",
            subtitle: "From corporate films in Gurgaon to brand campaigns in South Delhi, we create content that captivates and converts.",
        },
        overview: {
            title: "The Voice of Your Brand in the Capital",
            text: "Delhi is a melting pot of cultures and languages. Connecting here requires nuance and flair. Ekanostudio's content team brings together expert copywriters, filmmakers, and designers to craft narratives that cut through the noise. We help established Delhi brands reinvent themselves and newcomers make a bold entrance.",
        },
        whyChoose: {
            title: "Why Choose Our Content Studio",
            points: [
                { title: "Multilingual Capabilities", desc: "Hindi, English, and Hinglish content that speaks to everyone." },
                { title: "End-to-End Production", desc: "Script-to-screen services for video and ad campaigns." },
                { title: "Corporate Standards", desc: "Professionalism suitable for B2B and government facing clients." }
            ]
        },
        deliverables: [
            "4K Brand Films / Ad Shoots",
            "SEO-Optimized Blog Packages",
            "Social Media Design Kits",
            "Corporate Presentations / Decks",
            "Whitepapers & Case Studies",
            "Full Usage Rights & Raw Files"
        ],
        process: {
            title: "Content Production Workflow",
            steps: [
                { title: "Ideation", desc: "Brainstorming concepts that align with Delhi trends." },
                { title: "Production", desc: "Executing shoots or drafting copy with top-tier talent." },
                { title: "Editing", desc: "Post-production polishing to meet broadcast standards." },
                { title: "Distribution", desc: "Formatting content for all your digital channels." }
            ]
        },
        cta: {
            title: "Have a story to tell?",
            text: "Let's create something iconic for your Delhi audience."
        },
        relatedServices: [
            { title: "Social Media Marketing", link: "/services/social-media-marketing/social-media-management" },
            { title: "Branding", link: "/services/branding/brand-identity-design" },
            { title: "Website Design", link: "/services/web-design-development/landing-page-development" }
        ]
    }
};
