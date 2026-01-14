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
        title: "Content Creation Luxembourg | Video, Copy & Thought Leadership",
        description: "Communicate with authority. We produce high-quality video, written content, and digital assets for Luxembourg's leading firms and institutions.",
        canonical: "/content-creation-luxembourg",
    },
    content: {
        hero: {
            title: "Authoritative Content for the Grand Duchy",
            subtitle: "Thought leadership that resonates. Media that captivates. We tell your brand story in the heart of Europe.",
        },
        overview: {
            title: "Crafting the Narrative of Success",
            text: "Luxembourg's sophisticated audience values clarity, professionalism, and nuance. Ekanostudio's content team produces high-stakes digital assets – from deep-dive whitepapers and executive video interviews to multi-format social content that builds international trust.",
        },
        whyChoose: {
            title: "Why Our Content Studio",
            points: [
                { title: "Corporate Nuance", desc: "Tone of voice suitable for the highest level of business." },
                { title: "Visual Excellence", desc: "4K video production and premium graphic design." },
                { title: "Multi-Channel Strategy", desc: "Integrated content flows for LinkedIn, Email, and Web." }
            ]
        },
        deliverables: [
            "Executive Video Production",
            "Thought Leadership Blogs (EN/FR/DE)",
            "Corporate Case Studies",
            "Investor Relation Presentions",
            "Brand Narrative Documentation",
            "Social Content Kits for Executives"
        ],
        process: {
            title: "Content Production Workflow",
            steps: [
                { title: "Ideation", desc: "Developing concepts that align with European market trends." },
                { title: "Production", desc: "Executing high-quality shoots and drafting authoritative copy." },
                { title: "Polishing", desc: "Ensuring every asset meets our premium standards." },
                { title: "Delivery", desc: "Providing ready-to-publish assets for all your channels." }
            ]
        },
        cta: {
            title: "Need to build more authority?",
            text: "Let's create content that defines your leadership in Luxembourg."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
