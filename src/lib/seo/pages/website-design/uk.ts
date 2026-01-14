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
        title: "Website Design Agency for UK Businesses | London & Beyond",
        description: "Premium web design services for the UK market. We build GDPR-compliant, accessible, and high-performance websites for British brands.",
        canonical: "/website-design-uk",
    },
    content: {
        hero: {
            title: "Digital Craftsmanship for British Brands",
            subtitle: "Elegant, functional, and compliant. We design websites that resonate with the UK's sophisticated digital audience.",
        },
        overview: {
            title: "Bespoke Web Design for the UK Market",
            text: "The UK market balances heritage with innovation. Your website needs to reflect quality and trust. Ekanostudio provides end-to-end web design solutions tailored for British businesses—from London fintechs to Manchester manufacturing. We prioritize clean aesthetics, strict GDPR compliance, and seamless functionality.",
        },
        whyChoose: {
            title: "Why UK SMEs Partner With Us",
            points: [
                { title: "GDPR Compliance", desc: "Built-in privacy controls and cookie management for UK law." },
                { title: "Modern Aesthetics", desc: "Clean, minimal designs that align with European sensibilities." },
                { title: "Reliable Support", desc: "Consistent communication and project updates." }
            ]
        },
        deliverables: [
            "GDPR-Ready Framer/Next.js Site",
            "Cookie Consent Integration",
            "Accessibility (WCAG 2.1 AA)",
            "Mobile Responsive Design",
            "Speed Optimization (Core Web Vitals)",
            "CMS Training (Sanity/Wordpress)"
        ],
        process: {
            title: "Our UK Design Process",
            steps: [
                { title: "Brief", desc: "Understanding your brand position in the UK market." },
                { title: "Structure", desc: "Wireframing user journeys for British consumers." },
                { title: "Craft", desc: "Developing with precision and clean code." },
                { title: "Launch", desc: "Deploying on UK-optimized servers for speed." }
            ]
        },
        cta: {
            title: "Ready to elevate your online presence?",
            text: "Get a quote for your UK web project today."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/technical-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
