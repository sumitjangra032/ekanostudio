import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Luxembourg",
            "SEO Agency Luxembourg",
            "Search Engine Optimization Luxembourg",
            "Corporate SEO Europe",
            "Financial SEO",
            "Multilingual SEO Luxembourg"
        ],
        description:
            "Advanced SEO services for Luxembourg. We help enterprises rank higher, build authority, and capture organic traffic across multilingual search environments.",
    },

    location: {
        name: "Luxembourg",
        slug: "luxembourg",
        type: "country",
        country: "Luxembourg",
        adjective: "Luxembourg",
        context: "in the Grand Duchy of Luxembourg",
        metaTitleSuffix: "Luxembourg | Premium Agency",
        traits: ["financial sector", "high-end business", "european hub"],
    },

    meta: {
        title: "Top SEO Services in Luxembourg",
        description:
            "Grow your visibility in Luxembourg. We specialize in multilingual, corporate, and finance-sector SEO tailored for the Grand Duchy.",
        canonical: "/seo-services-luxembourg",
    },

    content: {
        hero: {
            title: "Precision SEO for Luxembourg’s Corporate Ecosystem",
            subtitle:
                "Rank higher, attract decision-makers, and build authority across Europe with multilingual, enterprise-grade SEO.",
        },

        overview: {
            title: "Strategic SEO Built for the Grand Duchy",
            text:
                "With its trilingual landscape and global corporate presence, Luxembourg requires SEO strategies that go far beyond traditional optimization. Ekanostudio delivers multilingual, technical and authority-driven SEO solutions designed specifically for Luxembourg’s financial, legal, and international business sectors. We help you become discoverable in French, German, and English while ensuring maximum technical compliance for European markets.",
        },

        whyChoose: {
            title: "Why Leading Luxembourg Companies Choose Us",
            points: [
                {
                    title: "Multilingual SEO Framework",
                    desc: "Optimized ranking strategies for FR / DE / EN, tailored to Luxembourg’s diverse audience.",
                },
                {
                    title: "Corporate & Finance Expertise",
                    desc: "Deep experience with high-value SEO in finance, law, and technology sectors.",
                },
                {
                    title: "Local + Global Visibility",
                    desc: "Positioning your brand for both Luxembourgish searches and international intent.",
                },
            ],
        },

        deliverables: [
            "Full Technical SEO Audit",
            "Multilingual Keyword Research (FR/DE/EN)",
            "Entity & Semantic SEO Optimization",
            "High-Authority EU Backlink Acquisition",
            "Enterprise Analytics Dashboard",
            "Quarterly Strategic SEO Reports",
        ],

        process: {
            title: "Our SEO Methodology for Luxembourg",
            steps: [
                {
                    title: "Audit",
                    desc: "Analyzing your visibility across multilingual SERPs in Luxembourg.",
                },
                {
                    title: "Localization",
                    desc: "Optimizing site architecture, hreflang, and content for regional nuances.",
                },
                {
                    title: "Authority",
                    desc: "Building trust with industry-relevant, high-quality EU backlinks.",
                },
                {
                    title: "Scale",
                    desc: "Expanding rankings across new languages, keywords, and markets.",
                },
            ],
        },

        cta: {
            title: "Ready to lead Luxembourg’s search results?",
            text: "Request a multilingual SEO strategy session with our specialists.",
        },

        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" }
        ],
    },
};
