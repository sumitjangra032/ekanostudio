import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation UAE",
            "Video Production Dubai",
            "Corporate Content Abu Dhabi",
            "Bilingual Content UAE",
            "Luxury Brand Content Middle East"
        ],
        description:
            "Premium content creation services in the UAE, including corporate video production, bilingual copywriting, and high-end digital assets for luxury and enterprise brands.",
    },

    location: {
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE-based",
        context: "across the United Arab Emirates",
        metaTitleSuffix: "UAE | Dubai & Abu Dhabi",
        traits: ["luxury market", "rapid development", "global business hub"],
    },

    meta: {
        title: "Content Creation UAE | Video, Copywriting & Branding",
        description:
            "High-end content creation in the UAE. We produce corporate videos, bilingual copy, and premium digital content for brands in Dubai and Abu Dhabi.",
        canonical: "/content-creation-uae",
    },

    content: {
        hero: {
            title: "Premium Content for the UAE’s Global Brands",
            subtitle:
                "Strategic storytelling, cinematic visuals, and refined copy crafted for Dubai, Abu Dhabi, and the wider Emirates.",
        },

        overview: {
            title: "Content Built for a Luxury-Driven Market",
            text:
                "The UAE is a market where presentation, precision, and perception matter. Ekanostudio works with businesses that operate at a global standard—delivering content that reflects ambition and credibility. From executive brand films to bilingual digital campaigns, we create assets that align with the expectations of decision-makers, investors, and premium audiences across the Emirates.",
        },

        whyChoose: {
            title: "Why UAE Brands Partner With Us",
            points: [
                {
                    title: "Premium Brand Positioning",
                    desc:
                        "Content designed to match the visual and editorial standards of luxury and enterprise brands.",
                },
                {
                    title: "Cultural & Regional Awareness",
                    desc:
                        "Messaging that respects local values while appealing to an international audience.",
                },
                {
                    title: "Bilingual Execution",
                    desc:
                        "Professional English and Arabic content delivered with consistency and accuracy.",
                },
            ],
        },

        deliverables: [
            "Corporate and executive brand films",
            "High-end social media video and reels",
            "Bilingual website and blog content (EN / AR)",
            "Company profiles, brochures, and pitch decks",
            "Event coverage and highlight videos",
            "Brand and visual identity documentation",
        ],

        process: {
            title: "Our Content Production Approach",
            steps: [
                {
                    title: "Market Alignment",
                    desc:
                        "Understanding your positioning within the UAE’s competitive landscape.",
                },
                {
                    title: "Creative Direction",
                    desc:
                        "Defining tone, visuals, and messaging aligned with brand goals.",
                },
                {
                    title: "Production",
                    desc:
                        "Executing video shoots, design, and copywriting to international standards.",
                },
                {
                    title: "Final Delivery",
                    desc:
                        "Supplying ready-to-publish assets optimized for web, social, and presentations.",
                },
            ],
        },

        cta: {
            title: "Position your brand at the highest level",
            text:
                "Let’s create content that strengthens your presence across the UAE market.",
        },

        relatedServices: [
            {
                title: "Social Media Management",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Website Design & UI/UX",
                link: "/services/web-design-development/website-design-uiux",
            },
            {
                title: "Brand Identity & Strategy",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
