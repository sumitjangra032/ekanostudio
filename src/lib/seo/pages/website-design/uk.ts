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
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK",
        context: "across the United Kingdom",
        metaTitleSuffix: "UK | Trusted Partners",
        traits: ["established businesses", "digital transformation", "service sector"],
    },

    meta: {
        title: "Website Design Agency UK | London, Manchester & Nationwide",
        description:
            "High-performance website design for UK businesses. We create GDPR-compliant, accessible, and conversion-focused websites for lasting growth.",
        canonical: "/website-design-uk",
    },

    content: {
        hero: {
            title: "Premium Website Design for the UK Market",
            subtitle:
                "Built on trust, performance, and compliance—websites designed for modern British businesses.",
        },

        overview: {
            title: "Web Design Built for British Audiences",
            text:
                "The UK digital landscape demands credibility, usability, and compliance. Ekanostudio designs high-performing websites tailored to British user behaviour, industry standards, and regulatory requirements. From London-based service firms to nationwide enterprises, we craft digital platforms that combine clarity, speed, and long-term scalability.",
        },

        whyChoose: {
            title: "Why UK Businesses Choose Ekanostudio",
            points: [
                {
                    title: "Compliance-First Architecture",
                    desc: "GDPR-ready builds with structured consent management and data protection by design.",
                },
                {
                    title: "Conversion-Led UX",
                    desc: "User journeys optimised for British search intent and decision-making behaviour.",
                },
                {
                    title: "Reliable Delivery",
                    desc: "Clear timelines, structured processes, and dependable post-launch support.",
                },
            ],
        },

        deliverables: [
            "Custom UI/UX Design System",
            "Next.js or Framer Development",
            "GDPR & Cookie Consent Framework",
            "WCAG 2.1 AA Accessibility",
            "Core Web Vitals Optimisation",
            "CMS Setup & Editorial Training"
        ],

        process: {
            title: "Our UK Website Design Workflow",
            steps: [
                {
                    title: "Discovery",
                    desc: "Understanding your market position, audience, and objectives within the UK.",
                },
                {
                    title: "Planning",
                    desc: "Structuring content and navigation for clarity and compliance.",
                },
                {
                    title: "Build",
                    desc: "Developing fast, secure, and maintainable websites with clean architecture.",
                },
                {
                    title: "Release",
                    desc: "Launching with performance validation, SEO readiness, and quality assurance.",
                },
            ],
        },

        cta: {
            title: "Planning a new website for the UK market?",
            text: "Let’s design a platform that supports your growth across the UK.",
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/technical-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
