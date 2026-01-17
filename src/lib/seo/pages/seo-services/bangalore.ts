import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Agency Bangalore",
            "SEO Services Bangalore",
            "SEO for Startups Bangalore",
            "Technical SEO Bangalore",
            "Local SEO Bangalore",
            "Bangalore Search Ranking"
        ],
        description:
            "Advanced SEO strategies built for Bangalore’s competitive digital landscape. Improve rankings, authority, and organic conversions with precision-driven optimization.",
    },

    location: {
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in the Silicon Valley of India",
        metaTitleSuffix: "Bangalore | Top Rated Agency",
        traits: ["tech startups", "innovative businesses", "IT hubs"],
    },

    meta: {
        title: "SEO Agency Bangalore | Rank Faster & Convert More",
        description:
            "Win the rankings battle in the Silicon Valley of India. Our SEO specialists help Bangalore startups, SaaS companies, and enterprises achieve top positions on Google.",
        canonical: "/seo-services-bangalore",
    },

    content: {
        hero: {
            title: "Strategic SEO for Bangalore’s High-Competition Market",
            subtitle:
                "Built for tech-driven companies. We turn your website into a major source of organic leads, traffic, and brand authority.",
        },

        overview: {
            title: "Own the Search Results in India’s Tech Capital",
            text:
                "Bangalore’s digital environment is fast, crowded, and constantly evolving. To stand out, your brand needs more than keywords—you need strong topical authority, optimized technical infrastructure, and content built for decision-makers in the IT and startup ecosystem. Our SEO framework helps you capture qualified organic traffic from Koramangala, Indiranagar, HSR Layout, Whitefield, and the global market you serve.",
        },

        whyChoose: {
            title: "Why Bangalore Brands Trust Us for SEO",
            points: [
                {
                    title: "Deep Technical SEO Expertise",
                    desc: "From core web vitals to schema implementation—we fix issues other agencies overlook.",
                },
                {
                    title: "Industry-Specific Content Strategy",
                    desc: "SaaS, FinTech, AI, D2C, EdTech—we craft content that ranks AND converts.",
                },
                {
                    title: "Real-Time Transparency",
                    desc: "Live dashboards, detailed keyword reporting, and consistent monthly insights.",
                },
            ],
        },

        deliverables: [
            "Advanced Technical SEO Audit",
            "Bangalore Keyword Opportunity Map",
            "On-Page & Content Optimization",
            "Authority Link Building (High-Quality)",
            "Google Business Profile Optimization",
            "Rank Tracking & Live Performance Dashboard",
        ],

        process: {
            title: "SEO Execution Framework",
            steps: [
                {
                    title: "Discovery",
                    desc: "Complete audit of your website, industry landscape, and Bangalore competitors.",
                },
                {
                    title: "Strategic Blueprint",
                    desc: "Building an actionable SEO roadmap tailored to your business and geography.",
                },
                {
                    title: "Optimization",
                    desc: "Technical fixes, content upgrades, UX improvements, and search intent alignment.",
                },
                {
                    title: "Authority Growth",
                    desc: "Acquiring contextually relevant backlinks and strengthening brand trust.",
                },
            ],
        },

        cta: {
            title: "Ready to grow your organic traffic?",
            text: "Request a free SEO growth audit for your Bangalore business.",
        },

        relatedServices: [
            { title: "Web Design", link: "/services/web-design-development/website-design-uiux" },
            { title: "Content Writing", link: "/services/content-creation/content-writing" },
            { title: "Google Ads", link: "/services/performance-marketing/google-ads" },
        ],
    },
};
