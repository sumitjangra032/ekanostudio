import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: [
            "Website Design Bangalore",
            "UI UX Design Company Bangalore",
            "Startup Website Design",
            "Next.js Website Development",
            "Responsive Web Design Bangalore",
            "High Performance Websites India"
        ],
        description:
            "High-performance website design services in Bangalore for startups, SaaS companies, and enterprises. We design fast, scalable, conversion-focused websites.",
    },

    location: {
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in the Silicon Valley of India",
        metaTitleSuffix: "Bangalore | Startup-Focused Web Design",
        traits: ["tech startups", "innovative businesses", "IT hubs"],
    },

    meta: {
        title: "Best Website Design Company in Bangalore",
        description:
            "Top website design company in Bangalore. We build fast, scalable, and conversion-optimized websites designed for startups and tech businesses.",
        canonical: "/website-design-bangalore",
    },

    content: {
        hero: {
            title: "High-Performance Web Design for Bangalore’s Tech Leaders",
            subtitle:
                "From early-stage startups to global tech companies, we design websites that scale with Bangalore’s fast-moving digital ecosystem.",
        },

        overview: {
            title: "Websites Built for Bangalore’s Startup & Tech Economy",
            text:
                "Bangalore is one of the most competitive digital markets in India. A slow or outdated website can cost you users, investors, and credibility. Ekanostudio designs modern, performance-driven websites that align with how Bangalore’s tech-savvy audience thinks, clicks, and converts — whether you’re a SaaS startup, product company, or enterprise brand.",
        },

        whyChoose: {
            title: "Why Bangalore Companies Choose Ekanostudio",
            points: [
                {
                    title: "Startup & SaaS Expertise",
                    desc: "We understand product-led growth, onboarding flows, and conversion funnels.",
                },
                {
                    title: "Performance-First Development",
                    desc: "Websites optimized for speed, Core Web Vitals, and scalability from day one.",
                },
                {
                    title: "Tech-Native Design Thinking",
                    desc: "UI/UX built for developers, founders, and decision-makers alike.",
                }
            ],
        },

        deliverables: [
            "Custom UI/UX Design (Figma)",
            "Next.js / React Website Development",
            "Mobile-First & Responsive Design",
            "Speed Optimization (90+ Lighthouse)",
            "SEO-Ready Architecture",
            "Analytics & Conversion Tracking Setup"
        ],

        process: {
            title: "Our Website Design Process in Bangalore",
            steps: [
                {
                    title: "Product & Market Discovery",
                    desc: "Understanding your users, competitors, and growth goals.",
                },
                {
                    title: "UX Architecture",
                    desc: "Designing user journeys and wireframes focused on conversions.",
                },
                {
                    title: "Development",
                    desc: "Building fast, secure, and scalable interfaces using modern frameworks.",
                },
                {
                    title: "Launch & Optimize",
                    desc: "SEO checks, performance audits, and continuous improvements.",
                }
            ]
        },

        cta: {
            title: "Ready to build a scalable website?",
            text: "Let’s design a website that matches Bangalore’s pace of innovation.",
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
