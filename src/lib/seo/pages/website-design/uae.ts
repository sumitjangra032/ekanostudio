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
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE",
        context: "in the United Arab Emirates",
        metaTitleSuffix: "UAE | Dubai & Abu Dhabi",
        traits: ["luxury market", "rapid development", "global business hub"],
    },
    meta: {
        title: "Web Design Agency UAE | Dubai & Abu Dhabi | Premium UI/UX",
        description: "World-class website design for the UAE market. We create stunning, bilingual (Arabic/English) websites tailored for Dubai's luxury and corporate sectors.",
        canonical: "/website-design-uae",
    },
    content: {
        hero: {
            title: "Exquisite Web Design for UAE Brands",
            subtitle: "Merging innovation with luxury. We build digital experiences that standout in Dubai and Abu Dhabi.",
        },
        overview: {
            title: "Digital Excellence for the Emirates",
            text: "The UAE is a global hub of innovation and luxury. Your digital presence must reflect this high standard. ekanostudio creates premium websites that cater to the diverse and sophisticated audience of the UAE. From bilingual corporate sites in Abu Dhabi to high-fashion e-commerce in Dubai, we deliver excellence.",
        },
        whyChoose: {
            title: "Why UAE Visionaries Choose Us",
            points: [
                { title: "Bilingual Capable", desc: "Expertise in RTL (Right-to-Left) layouts for Arabic content." },
                { title: "Premium Aesthetics", desc: "Designs that match the high expectations of the UAE market." },
                { title: "Speed & Security", desc: "Hosting solutions optimized for the GCC region." }
            ]
        },
        deliverables: [
            "Bilingual Website (EN/AR Support)",
            "RTL Layout Optimization",
            "High-End UI/UX Design",
            "Mobile-First Architecture",
            "CMS Integration",
            "SEO-Ready Structure"
        ],
        process: {
            title: "Our UAE Design Process",
            steps: [
                { title: "Vision", desc: "Understanding your goals for the GCC market." },
                { title: "Design", desc: "Creating prototypes that blend modern trends with local culture." },
                { title: "Develop", desc: "Coding robust sites with full bilingual support." },
                { title: "Launch", desc: "Deploying and ensuring perfect performance across the Emirates." }
            ]
        },
        cta: {
            title: "Ready to impress Dubai?",
            text: "Partner with us for your premium web project."
        },
        relatedServices: [
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "Branding", link: "/services/branding/brand-identity-design" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" }
        ]
    }
};
