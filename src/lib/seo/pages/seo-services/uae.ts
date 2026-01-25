import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Services UAE",
            "SEO Dubai",
            "SEO Abu Dhabi",
            "Arabic SEO",
            "English SEO UAE",
            "Local SEO UAE",
            "Dubai SEO Company",
            "Abu Dhabi SEO Agency"
        ],
        description:
            "Advanced SEO services in the UAE for English and Arabic audiences, designed to improve rankings, visibility, and qualified leads.",
    },

    location: {
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE",
        context: "across Dubai, Abu Dhabi, and the Emirates",
        metaTitleSuffix: "UAE | Dubai & Abu Dhabi",
        traits: ["luxury market", "rapid development", "global business hub"],
    },

    meta: {
        title: "SEO Agency UAE | Arabic & English SEO for Dubai & Abu Dhabi",
        description:
            "Rank higher on Google in the UAE. Our bilingual SEO strategies in English and Arabic help businesses win organic traffic across Dubai and Abu Dhabi.",
        canonical: "/seo-services-uae",
    },

    content: {
        hero: {
            title: "Top-Rated SEO Agency in the UAE",
            subtitle:
                "Grow your business across the GCC. We help companies dominate English and Arabic search results in Dubai and Abu Dhabi.",
        },

        overview: {
            title: "Bilingual SEO for Dubai, Abu Dhabi & the Emirates",
            text:
                "The UAE’s search ecosystem is one of the most diverse in the world, balancing expatriate audiences with native Arabic speakers. Ekanostudio delivers specialized SEO for the UAE market—optimizing your website for English and Arabic search intent, improving rankings for competitive commercial keywords, and strengthening your online authority across Dubai, Abu Dhabi, and the GCC.",
        },

        whyChoose: {
            title: "Why UAE Businesses Trust Our SEO",
            points: [
                {
                    title: "Arabic + English SEO",
                    desc: "Optimized content and keywords for both languages to reach all UAE demographics.",
                },
                {
                    title: "Local UAE Authority",
                    desc: "Backlink building from trusted .ae, GCC, and regional publications.",
                },
                {
                    title: "Industry-Specific Expertise",
                    desc: "Proven results for Real Estate, Tourism, Corporate Services, Luxury, and E-commerce.",
                },
            ],
        },

        deliverables: [
            "English & Arabic Keyword Research",
            "Full Technical SEO Audit",
            "Arabic SEO & Localization",
            "Local SEO for Dubai & Abu Dhabi",
            "GCC High-Authority Backlinks",
            "Competitor & SERP Intelligence"
        ],

        process: {
            title: "Our UAE SEO Framework",
            steps: [
                {
                    title: "Audit",
                    desc: "Assessing your current EN/AR search performance across UAE regions.",
                },
                {
                    title: "Target",
                    desc: "Identifying profitable bilingual keywords and high-intent search clusters.",
                },
                {
                    title: "Optimize",
                    desc: "Improving on-page SEO, technical elements, and Arabic/English content structure.",
                },
                {
                    title: "Grow",
                    desc: "Building lasting authority through regional backlinks and content expansion.",
                },
            ],
        },

        cta: {
            title: "Want more leads in the UAE?",
            text: "Book a free SEO strategy session for your Dubai or Abu Dhabi business.",
        },

        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "PPC Management", link: "/services/performance-marketing/google-ads" },
            { title: "Web Development", link: "/services/web-design-development/website-development" },
        ],
    },
};
