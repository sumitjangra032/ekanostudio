import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation Delhi",
            "Content Marketing Delhi NCR",
            "Copywriting Services Delhi",
            "Video Production Delhi",
            "Corporate Content Agency"
        ],
        description:
            "Professional content creation for Delhi-based brands—corporate video, copywriting, and digital media built for authority and scale.",
    },

    location: {
        name: "Delhi",
        slug: "delhi",
        type: "city",
        country: "India",
        adjective: "Delhi-based",
        context: "in the heart of India's capital",
        metaTitleSuffix: "Delhi | Corporate Content Experts",
        traits: ["enterprise brands", "policy-facing organisations", "large-scale businesses"],
    },

    meta: {
        title: "Professional Content Creation Agency in Delhi | Video & Copywriting",
        description:
            "Content creation for Delhi NCR businesses. We produce corporate videos, multilingual copy, and digital content built for credibility and impact.",
        canonical: "/content-creation-delhi",
    },

    content: {
        hero: {
            title: "Authoritative Content for Delhi’s Leading Brands",
            subtitle:
                "Strategic storytelling designed for enterprises, institutions, and high-visibility brands in Delhi NCR.",
        },

        overview: {
            title: "Content That Commands Attention in the Capital",
            text:
                "Delhi is one of India’s most competitive and diverse markets, where credibility matters as much as creativity. ekanostudio helps organisations craft content that communicates authority, clarity, and professionalism. From corporate communication and brand films to long-form content and digital campaigns, we support established businesses and institutions in shaping a strong public narrative.",
        },

        whyChoose: {
            title: "Why Delhi Brands Work With Us",
            points: [
                {
                    title: "Multilingual Communication",
                    desc:
                        "Content in English, Hindi, and Hinglish tailored for Delhi’s diverse audiences.",
                },
                {
                    title: "Corporate-Grade Production",
                    desc:
                        "High standards suitable for enterprises, public-facing organisations, and B2B brands.",
                },
                {
                    title: "End-to-End Capability",
                    desc:
                        "From concept and scripting to production, editing, and delivery.",
                },
            ],
        },

        deliverables: [
            "Corporate brand films and commercial videos",
            "SEO-optimised blogs and long-form articles",
            "Social media design and content kits",
            "Corporate presentations and pitch decks",
            "Whitepapers, reports, and case studies",
            "Full usage rights with organised asset delivery",
        ],

        process: {
            title: "Our Content Production Process",
            steps: [
                {
                    title: "Concept Development",
                    desc:
                        "Aligning messaging with your brand goals and Delhi market context.",
                },
                {
                    title: "Production",
                    desc:
                        "Executing video shoots, copywriting, and design with experienced professionals.",
                },
                {
                    title: "Post-Production",
                    desc:
                        "Editing, refinement, and quality control to meet professional standards.",
                },
                {
                    title: "Distribution Readiness",
                    desc:
                        "Preparing content for websites, campaigns, and digital platforms.",
                },
            ],
        },

        cta: {
            title: "Ready to strengthen your brand presence?",
            text:
                "Let’s create content that reflects authority and trust in the Delhi market.",
        },

        relatedServices: [
            {
                title: "Social Media Marketing",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Brand Identity & Design",
                link: "/services/branding/brand-identity-design",
            },
            {
                title: "Website Design & Development",
                link: "/services/web-design-development/landing-page-development",
            },
        ],
    },
};
