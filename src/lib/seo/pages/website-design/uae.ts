import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: ["UI/UX Design", "Responsive Web Design", "Custom Website Design"],
        description:
            "Create a stunning, high-performance website that captures your brand's essence and converts visitors into customers.",
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
        title: "Top Website Design Agency in UAE",
        description:
            "Premium web design for UAE brands. We build bilingual, high-performance websites for Dubai’s luxury market and Abu Dhabi’s corporate sector.",
        canonical: "/website-design-uae",
    },

    content: {
        hero: {
            title: "Luxury Web Design for the UAE’s Most Ambitious Brands",
            subtitle:
                "Where innovation meets opulence—digital experiences crafted for Dubai, Abu Dhabi, and the Emirates.",
        },

        overview: {
            title: "High-End Web Design for the UAE Digital Landscape",
            text:
                "The UAE sets global standards for luxury, technology, and consumer experience. Your website must match that prestige. Ekanostudio builds bilingual, performance-optimized websites for UAE businesses—from Dubai’s high-fashion retail to Abu Dhabi’s corporate and governmental sectors. Our designs blend elegance, speed, and cultural relevance for both local and international audiences.",
        },

        whyChoose: {
            title: "Why Leading UAE Brands Work With Us",
            points: [
                {
                    title: "Native Bilingual Experience",
                    desc: "Full support for Arabic (RTL) and English interfaces with flawless cultural accuracy.",
                },
                {
                    title: "Luxury-Centric Design",
                    desc: "Minimalist, high-end UI/UX crafted for premium industries like real estate, hospitality, and finance.",
                },
                {
                    title: "GCC-Optimized Performance",
                    desc: "Lightning-fast hosting and security tailored for the Middle Eastern market.",
                },
            ],
        },

        deliverables: [
            "Bilingual Website (EN/AR)",
            "Advanced RTL Layout Engineering",
            "Luxury UI/UX Design System",
            "Mobile-First Architecture",
            "Scalable CMS Integration",
            "SEO-Ready & Schema-Optimized Structure"
        ],

        process: {
            title: "Our Refined UAE Web Design Process",
            steps: [
                {
                    title: "Vision",
                    desc: "Understanding your goals and audience across Dubai, Abu Dhabi, and the wider GCC.",
                },
                {
                    title: "Design",
                    desc: "Crafting prototypes that merge UAE cultural elegance with modern global aesthetics.",
                },
                {
                    title: "Develop",
                    desc: "Building secure, scalable, and bilingual-ready websites using cutting-edge frameworks.",
                },
                {
                    title: "Launch",
                    desc: "Deploying with high-speed hosting optimized for the Emirates and conducting final QA.",
                },
            ],
        },

        cta: {
            title: "Ready to stand out in Dubai’s digital landscape?",
            text: "Let’s create a luxury-driven website that defines your brand in the UAE.",
        },

        relatedServices: [
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "Branding", link: "/services/branding/brand-identity-design" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" }
        ]
    }
};
