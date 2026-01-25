import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: [
            "Website Design Delhi",
            "Corporate Web Design Delhi",
            "UI UX Design Delhi",
            "Custom Website Design Delhi",
            "Responsive Website Design Delhi"
        ],
        description:
            "Build a premium, high-performance website that reflects your brand authority and converts your Delhi audience into customers.",
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
        title: "Best Website Design Company in Delhi | Corporate & Enterprise Web Design",
        description:
            "Premium website design agency in Delhi delivering high-conversion, secure, and brand-focused websites for corporates, enterprises, and fast-growing Delhi businesses.",
        canonical: "/website-design-delhi",
    },

    content: {
        hero: {
            title: "Website Design Excellence for Delhi's Leading Brands",
            subtitle:
                "From Connaught Place to South Delhi and Cyber Hub, we build authoritative, high-performing websites for India’s capital city.",
        },

        overview: {
            title: "Enterprise-Level Web Design for Delhi Businesses",
            text:
                "Delhi is home to India’s top corporate houses, government units, global MNCs, and luxury brands. Your website must reflect credibility, precision, and trust. Ekanostudio provides advanced website design solutions tailored to the capital’s competitive environment—combining strong UI/UX, fast performance, and airtight security.",
        },

        whyChoose: {
            title: "Why Delhi Businesses Trust Our Web Design",
            points: [
                {
                    title: "Enterprise-Ready Architecture",
                    desc: "Secure, scalable, and future-proof systems ideal for corporates and large brands.",
                },
                {
                    title: "Authority-Led Design",
                    desc: "Modern layouts that communicate trust, reliability, and premium brand value.",
                },
                {
                    title: "Multi-Lingual & Multi-Region Ready",
                    desc: "Support for Hindi, English, and regional languages for diverse Delhi audiences.",
                }
            ],
        },

        deliverables: [
            "Custom Next.js Website",
            "Enterprise-Grade Security Setup",
            "CMS Integration (Sanity / Strapi / WordPress)",
            "Brand Guidelines & UI Kits",
            "Load & Performance Testing Reports",
            "Accessibility Compliance (WCAG 2.1)"
        ],

        process: {
            title: "Our Web Design Process for Delhi Enterprises",
            steps: [
                {
                    title: "Consultation",
                    desc: "Workshops to define business goals, audiences, and brand direction.",
                },
                {
                    title: "Strategy",
                    desc: "Crafting high-conversion user journeys and corporate-aligned design systems.",
                },
                {
                    title: "Development",
                    desc: "Building high-performance, secure websites using modern frameworks.",
                },
                {
                    title: "Deployment",
                    desc: "Launching with zero downtime, performance optimization, and SEO readiness.",
                }
            ],
        },

        cta: {
            title: "Ready to Elevate Your Brand Online?",
            text: "Work with the top web design agency trusted by Delhi’s corporates and premium brands.",
        },

        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Consulting", link: "/services/consulting/digital-strategy-consulting" },
            { title: "SEO Services", link: "/services/seo/technical-seo" }
        ]
    }
};
