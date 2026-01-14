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
        name: "Canada",
        slug: "canada",
        type: "country",
        country: "Canada",
        adjective: "Canadian",
        context: "in the Canadian market",
        metaTitleSuffix: "Canada | Digital Experts",
        traits: ["tech innovation", "diverse economy", "growth sector"],
    },
    meta: {
        title: "Content Creation Services Canada | Video & Copywriting",
        description: "Tell your Canadian brand story. We produce high-quality video, blog, and social content tailored for the diverse Canadian audience.",
        canonical: "/content-creation-canada",
    },
    content: {
        hero: {
            title: "Authentic Content for Canadian Brands",
            subtitle: "From coast to coast. We create digital assets that resonate with the values of the Canadian consumer.",
        },
        overview: {
            title: "Storytelling for the Great White North",
            text: "Canadian consumers value authenticity, diversity, and quality. Ekanostudio's content team helps you craft narratives that stick. Whether it's bilingual social media campaigns or corporate video production for Toronto enterprises, we deliver content that builds trust and drives engagement across the country.",
        },
        whyChoose: {
            title: "Why Canada Trusts Us",
            points: [
                { title: "Cultural Fit", desc: "Content that reflects Canadian diversity and values." },
                { title: "Bilingual Options", desc: "Production capabilities in both English and French." },
                { title: "Quality First", desc: "High-production value for video and graphics." }
            ]
        },
        deliverables: [
            "Brand Films & Commercials",
            "SEO Blog Writing (Canadian English)",
            "Social Media Content Kits",
            "Email Marketing Copy",
            "Case Studies & Whitepapers",
            "Podcast Production"
        ],
        process: {
            title: "Creative Workflow",
            steps: [
                { title: "Concept", desc: "Brainstorming ideas relevant to Canadian trends." },
                { title: "Draft", desc: "Writing and designing initial versions." },
                { title: "Refine", desc: "Polishing based on your feedback." },
                { title: "Launch", desc: "Delivering assets ready for distribution." }
            ]
        },
        cta: {
            title: "Ready to engage your audience?",
            text: "Let's create content that matters."
        },
        relatedServices: [
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "Graphic Design", link: "/services/branding/brand-identity-design" }
        ]
    }
};
