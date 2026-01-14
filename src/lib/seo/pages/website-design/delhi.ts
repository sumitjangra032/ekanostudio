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
        title: "Premium Website Design Agency in Delhi | Corporate & Brand Focused",
        description: "Looking for elite website design in Delhi? We build sophisticated, high-converting websites for Delhi's leading corporates and established brands.",
        canonical: "/website-design-delhi",
    },
    content: {
        hero: {
            title: "Digital Excellence for Delhi's Leading Brands",
            subtitle: "From Connaught Place to Cyber City, we design websites that command authority and drive serious business growth.",
        },
        overview: {
            title: "Corporate-Grade Web Design in the Capital",
            text: "Delhi is the political and corporate powerhouse of India. Your digital presence needs to reflect that stature. At Ekanostudio, we specialize in crafting premium, secure, and scalable websites for Delhi's diverse business landscape—whether you are a policy think-tank, a luxury retailer, or a manufacturing giant.",
        },
        whyChoose: {
            title: "Why Delhi's Top Firms Choose Us",
            points: [
                { title: "Enterprise Reliability", desc: "Secure, scalable hosting and architecture fitting for large organizations." },
                { title: "Brand Authority", desc: "Designs that communicate trust, prestige, and market leadership." },
                { title: "Bilingual Experience", desc: "Capabilities to create multi-lingual sites for diverse audiences." }
            ]
        },
        deliverables: [
            "Custom Next.js Architecture",
            "Enterprise Security Setup",
            "CMS Integration (Sanity/Strapi)",
            "Detailed Brand Guidelines",
            "Load Testing Report",
            "Accessibility Compliance (WCAG)"
        ],
        process: {
            title: "Our Enterprise Design Process",
            steps: [
                { title: "Consultation", desc: "In-depth workshops to align with your corporate objectives." },
                { title: "Strategy", desc: "Developing a user journey that speaks to high-value stakeholders." },
                { title: "Development", desc: "Building robust systems with a focus on security and speed." },
                { title: "Deployment", desc: "Seamless launch with zero downtime protocols." }
            ]
        },
        cta: {
            title: "Ready to upgrade your digital footprint?",
            text: "Partner with Delhi's most trusted digital design agency."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Consulting", link: "/services/consulting/digital-strategy-consulting" },
            { title: "SEO Services", link: "/services/seo/technical-seo" }
        ]
    }
};
