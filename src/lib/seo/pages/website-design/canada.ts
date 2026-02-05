import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: [
            "Website Design Canada",
            "Web Design Agency Toronto",
            "UI UX Design Canada",
            "Custom Website Design Canada",
            "Responsive Web Design Canada",
            "Bilingual Web Design Canada"
        ],
        description:
            "Create a stunning, high-performance website that builds trust with Canadian customers and delivers measurable business results.",
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
        title: "Website Design Canada | Toronto • Vancouver • Montreal",
        description:
            "Premium website design services in Canada. We build fast, accessible, and bilingual-ready websites using modern frameworks for Canadian growth.",
        canonical: "/website-design-canada",
    },

    content: {
        hero: {
            title: "Modern Website Design for Canadian Businesses",
            subtitle:
                "From Toronto’s finance hubs to Vancouver’s tech startups, we design high-performance websites that elevate Canadian brands.",
        },

        overview: {
            title: "Web Design Built for the Canadian Market",
            text:
                "Canada’s digital landscape demands speed, accessibility, and bilingual readiness. Ekanostudio delivers enterprise-grade websites that meet AODA compliance, support English–French localization, and are optimized for global reach. Whether you're in SaaS, eCommerce, or professional services, we craft websites that perform across all Canadian provinces.",
        },

        whyChoose: {
            title: "Why Canadian Companies Work with Us",
            points: [
                {
                    title: "AODA & WCAG Compliance",
                    desc: "Ensuring your website meets Canadian accessibility standards.",
                },
                {
                    title: "Bilingual Ready (EN/FR)",
                    desc: "Seamless language toggles for nationwide customer reach.",
                },
                {
                    title: "Optimized for Canadian Traffic",
                    desc: "Fast load times using local servers and CDN routing.",
                }
            ],
        },

        deliverables: [
            "AODA-Compliant UI/UX Design",
            "Bilingual CMS Setup (EN/FR)",
            "Next.js or Shopify Development",
            "Mobile-First Responsive Layouts",
            "Core Web Vitals Optimization",
            "Canadian Hosting + CDN Integration"
        ],

        process: {
            title: "Our Canadian Web Design Workflow",
            steps: [
                {
                    title: "Discovery",
                    desc: "Understanding your brand, province-specific audience, and business goals.",
                },
                {
                    title: "Strategy",
                    desc: "Planning bilingual structure, accessibility, and UX flows.",
                },
                {
                    title: "Build",
                    desc: "Developing pixel-perfect interfaces with clean, scalable code.",
                },
                {
                    title: "Launch",
                    desc: "Deploying on Canadian cloud environments for best performance.",
                }
            ],
        },

        cta: {
            title: "Ready to Elevate Your Website?",
            text: "Request a custom proposal for your Canada-based website project.",
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "Brand Identity Design", link: "/services/branding/brand-identity-design" }
        ]
    }
};
