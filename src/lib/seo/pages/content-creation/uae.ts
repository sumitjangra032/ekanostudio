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
        title: "Content Creation Agency UAE | Video, Copy & Social",
        description: "Premium content for luxury and corporate brands in Dubai and Abu Dhabi. We create high-impact video, visuals, and copy in English and Arabic.",
        canonical: "/content-creation-uae",
    },
    content: {
        hero: {
            title: "World-Class Content for UAE Brands",
            subtitle: "Visuals that captivate. Words that sell. We produce premium content for the Emirates' leading companies.",
        },
        overview: {
            title: "Elevating Brands in Dubai & Abu Dhabi",
            text: "In a market defined by luxury and innovation, standard content falls flat. Ekanostudio creates exceptional digital assets tailored for the UAE. From cinematic corporate videos to high-end social media visuals, we help your brand stand out in the crowded feed of Dubai's elite.",
        },
        whyChoose: {
            title: "Why Leading UAE Brands Trust Us",
            points: [
                { title: "Luxury Aesthetic", desc: "Design language that fits the premium UAE market." },
                { title: "Cultural Sensitivity", desc: "Content that respects local values and traditions." },
                { title: "Bilingual Production", desc: "Seamless creation of English and Arabic assets." }
            ]
        },
        deliverables: [
            "Corporate Brand Films",
            "Social Media Reels/Tikok",
            "Bilingual Blog Articles",
            "Company Profiles & Brochures",
            "Event Coverage",
            "Visual Identity Guidelines"
        ],
        process: {
            title: "Production Workflow",
            steps: [
                { title: "Concept", desc: "Developing ideas that resonate with the UAE audience." },
                { title: "Shoot", desc: "Capturing high-quality footage or drafting copy." },
                { title: "Edit", desc: "Post-production to international standards." },
                { title: "Deliver", desc: "Ready-to-post assets for all platforms." }
            ]
        },
        cta: {
            title: "Ready to tell your story?",
            text: "Contact us for a content strategy session."
        },
        relatedServices: [
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Web Design", link: "/services/web-design-development/website-design-uiux" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
