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
        title: "Content Creation Agency in Pune | Video & Copywriting",
        description: "Tell your story beautifully. We create high-impact video, professional copy, and digital content for Pune's leading brands and institutes.",
        canonical: "/content-creation-pune",
    },
    content: {
        hero: {
            title: "Compelling Storytelling for Pune's Brands",
            subtitle: "Visuals that captivate. Words that convert. Your comprehensive content partner in Pune.",
        },
        overview: {
            title: "Elevate Your Brand Voice in Pune",
            text: "In the cultural and educational hub of Maharashtra, your message needs depth. Ekanostudio's content team combines creativity with data to produce high-performing digital assets for Pune enterprises—from corporate films to educational blogs.",
        },
        whyChoose: {
            title: "Why Choose Our Studio",
            points: [
                { title: "Multi-Format Expertise", desc: "One team for video, photography, and writing." },
                { title: "SEO-First Content", desc: "Writing that ranks on Google while engaging users." },
                { title: "Educational Focus", desc: "Specialized in creating high-quality content for Pune's academic sector." }
            ]
        },
        deliverables: [
            "Corporate Video Production",
            "SEO-Optimized Blog Writing",
            "Social Media Design Kits",
            "Infographic & Visual Aids",
            "Email Newsletter Management",
            "Content Strategy Documentation"
        ],
        process: {
            title: "Our Creative Process",
            steps: [
                { title: "Brief", desc: "Identifying your brand goals in the Pune region." },
                { title: "Ideate", desc: "Developing creative concepts and scripts." },
                { title: "Produce", desc: "Shooting high-quality visuals and drafting copy." },
                { title: "Deliver", desc: "Providing ready-to-use assets for all your platforms." }
            ]
        },
        cta: {
            title: "Ready to tell your story?",
            text: "Let's create something remarkable for your Pune audience."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
