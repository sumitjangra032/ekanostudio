import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: ["UI/UX Design", "Responsive Web Design", "Custom Website Design"],
        description: "Create a stunning, high-performance website that captures your brand's essence and converts visitors into customers.",
    },
    location: {
        name: "Gurgaon",
        slug: "gurgaon",
        type: "city",
        country: "India",
        adjective: "Gurgaon-based",
        context: "in the corporate hub of NCR",
        metaTitleSuffix: "Gurgaon | Leading Agency",
        traits: ["MNCs", "financial districts", "tech startups"],
    },
    meta: {
        title: "Website Design Agency in Gurgaon | Cyber City Digital Experts",
        description: "Premium web design for Gurgaon's MNCs and tech startups. We build high-performance, enterprise-grade websites in the heart of Cyber City.",
        canonical: "/website-design-gurgaon",
    },
    content: {
        hero: {
            title: "Digital Excellence for Gurgaon's Corporate Hub",
            subtitle: "From Cyber City to Golf Course Road, we design websites that define Gurgaon's leading enterprises.",
        },
        overview: {
            title: "Enterprise-Grade Web Design in Gurgaon",
            text: "Gurgaon (Gurugram) is India's premier corporate and tech destination. Your brand needs a digital presence that matches the scale of Cyber City. Ekanostudio delivers world-class web design for Gurgaon's MNCs, financial firms, and high-growth startups, focusing on performance, scalability, and premium aesthetics.",
        },
        whyChoose: {
            title: "Why Gurgaon's Global Firms Choose Us",
            points: [
                { title: "MNC Standard Design", desc: "Corporate-grade UI/UX that meets international brand guidelines." },
                { title: "Cyber-Fast Performance", desc: "Ultra-fast Next.js architecture for maximum user retention." },
                { title: "Bespoke Solutions", desc: "Tailored features for financial services, real estate, and tech sectors." }
            ]
        },
        deliverables: [
            "Corporate UI/UX Design System",
            "High-Security Web Development",
            "Enterprise CMS Integration",
            "SEO-First Site Infrastructure",
            "Advanced Lead Capture Systems",
            "Continuous Support & Maintenance"
        ],
        process: {
            title: "Our Corporate Design Workflow",
            steps: [
                { title: "Strategic Discovery", desc: "Aligning with your global brand objectives and market position." },
                { title: "Architecture", desc: "Planning for high-traffic and complex user journeys." },
                { title: "Execution", desc: "Building with the most secure and modern tech stacks." },
                { title: "Launch", desc: "Zero-downtime deployment with rigorous quality checks." }
            ]
        },
        cta: {
            title: "Ready to elevate your corporate identity?",
            text: "Request a bespoke web design proposal for your Gurgaon business."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" }
        ]
    }
};
