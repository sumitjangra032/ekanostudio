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
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK",
        context: "across the United Kingdom",
        metaTitleSuffix: "UK | Trusted Partners",
        traits: ["established businesses", "digital transformation", "service sector"],
    },
    meta: {
        title: "Content Creation Services UK | Video, Copy & Design",
        description: "Tell your story with British flair. Our content team delivers high-quality video editing, blog writing, and social media assets for UK brands.",
        canonical: "/content-creation-uk",
    },
    content: {
        hero: {
            title: "Compelling Content for the UK Audience",
            subtitle: "From witty social copy to professional corporate video. We create content that engages the British consumer.",
        },
        overview: {
            title: "Brand Storytelling for the UK",
            text: "The UK audience appreciates wit, authenticity, and understatement. Hard selling rarely works. Ekanostudio crafting content that strikes the right chord. Whether it's thought leadership articles for LinkedIn or engaging visuals for Instagram, we ensure your brand voice is perfectly tuned for the UK market.",
        },
        whyChoose: {
            title: "Why UK Brands Choose Us",
            points: [
                { title: "Cultural Nuance", desc: "We understand the subtle differences in British humour and tone." },
                { title: "Multi-Format", desc: "One team for video, graphics, and written content." },
                { title: "Consistent Quality", desc: "Reliable delivery schedules for your content calendar." }
            ]
        },
        deliverables: [
            "SEO Blog Posts (British English)",
            "Social Media Design Packs",
            "Video Editing (Shorts/Reels)",
            "Whitepapers & Reports",
            "Email Newsletter Copy",
            "Brand Voice Guidelines"
        ],
        process: {
            title: "Content Production Cycle",
            steps: [
                { title: "Plan", desc: "Aligning topics with UK trends and seasonality." },
                { title: "Create", desc: "Drafting and designing with attention to detail." },
                { title: "Review", desc: "Ensuring tone and style match your British brand identity." },
                { title: "Publish", desc: "delivering assets ready for your channels." }
            ]
        },
        cta: {
            title: "Need better content?",
            text: "Let's create something remarkable for your UK audience."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Graphic Design", link: "/services/branding/brand-identity-design" }
        ]
    }
};
