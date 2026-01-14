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
        title: "Content Creation Services for USA | Video & Copywriting",
        description: "Engage the American audience. Premium content production agency offering video editing, copywriting, and design for US businesses.",
        canonical: "/content-creation-usa",
    },
    content: {
        hero: {
            title: "Content That Speaks to the American Consumer",
            subtitle: "High-impact storytelling tailored for the fast-paced US social and digital landscape.",
        },
        overview: {
            title: "Capturing Attention in the US Economy",
            text: "American consumers value authenticity and speed. Your content needs to be visually striking and culturally relevant. Ekanostudio produces high-volume, high-quality creative assets that fuel your US marketing channels—from TikTok Reels to LinkedIn Thought Leadership articles.",
        },
        whyChoose: {
            title: "Your Remote Creative Team",
            points: [
                { title: "US English Proficiency", desc: "Native-level copywriting with correct nuance and spelling." },
                { title: "Trend Awareness", desc: "Stay ahead of US-based viral trends and formats." },
                { title: "Scalable Production", desc: "Produce 100s of assets monthly without hiring in house." }
            ]
        },
        deliverables: [
            "Reels / Shorts Editing",
            "Long-form Copywriting (US English)",
            "Podcast Production / Editing",
            "Ad Creatives (Static & Video)",
            "Email Marketing Sequence",
            "Brand Asset Library"
        ],
        process: {
            title: "The Creative Pipeline",
            steps: [
                { title: "Brief", desc: "Downloading your brand voice and US market goals." },
                { title: "Draft", desc: "Creating initial concepts for review." },
                { title: "Refine", desc: "Polishing based on your specific feedback." },
                { title: "Deliver", desc: "Providing raw and edit files ready for platform upload." }
            ]
        },
        cta: {
            title: "Need more content?",
            text: "Scale your creative output with our dedicated team."
        },
        relatedServices: [
            { title: "Video Editing", link: "/services/content-creation/video-editing" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
