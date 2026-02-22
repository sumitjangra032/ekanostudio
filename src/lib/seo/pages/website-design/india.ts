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
        name: "India",
        slug: "india",
        type: "country",
        country: "India",
        adjective: "Indian",
        context: "across the Indian market",
        metaTitleSuffix: "India | #1 Digital Agency",
        traits: ["rapidly growing market", "diverse audience", "digital-first consumers"],
    },

    meta: {
        title: "Best Website Design Company in India",
        description:
            "Transform your digital presence in India. We build high-performance, mobile-first websites for scaling startups, enterprises and global brands.",
        canonical: "/website-design-india",
    },

    content: {
        hero: {
            title: "Digital Excellence for the Indian Market",
            subtitle:
                "We design websites that drive growth, capture hearts, and lead the digital revolution in India.",
        },

        overview: {
            title: "Web Design for the World's Fastest Growing Economy",
            text:
                "India's digital landscape is vast and incredibly diverse. To succeed, you need a website that is as fast as it is beautiful. Ekanostudio delivers premium web design services across India, focusing on mobile-first architecture, superior speed, and world-class aesthetics that resonate with the modern Indian consumer.",
        },

        whyChoose: {
            title: "Why India's Best Brands Choose Us",
            points: [
                { title: "Mobile-First Mastery", desc: "Optimizing for India's billion smartphone users." },
                { title: "Global Aesthetics", desc: "World-class design standards tailored for the Indian market." },
                { title: "Cost-Effective Excellence", desc: "High-end solutions with a focus on value and performance." }
            ]
        },

        deliverables: [
            "Bespoke UI/UX Design",
            "Next.js High-Performance Development",
            "SEO-Friendly Infrastructure",
            "Scalable CMS for All Content",
            "E-commerce Support (Shopify/Next.js)",
            "Lifetime Technical Support"
        ],

        process: {
            title: "Our Seamless Design Process",
            steps: [
                { title: "Audit", desc: "Understanding your vision for the Indian and global markets." },
                { title: "Blueprint", desc: "Mapping user journeys for a diverse audience." },
                { title: "Build", desc: "Developing with modern tech stacks for maximum impact." },
                { title: "Scalability", desc: "Launching and preparing for nationwide growth." }
            ]
        },

        cta: {
            title: "Ready to go digital in India?",
            text: "Partner with India's leading web design experts today."
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/technical-seo" },
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" }
        ]
    }
};
