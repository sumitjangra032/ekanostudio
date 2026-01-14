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
        name: "Luxembourg",
        slug: "luxembourg",
        type: "country",
        country: "Luxembourg",
        adjective: "Luxembourg",
        context: "in Luxembourg",
        metaTitleSuffix: "Luxembourg | Premium Agency",
        traits: ["financial sector", "high-end business", "european hub"],
    },
    meta: {
        title: "Website Design Luxembourg | Premium Digital Agency",
        description: "Luxury web design for Luxembourg's financial and corporate sectors. We build sophisticated, high-performance websites for the Grand Duchy's elite businesses.",
        canonical: "/website-design-luxembourg",
    },
    content: {
        hero: {
            title: "Digital Excellence for Luxembourg's Global Leaders",
            subtitle: "Sophisticated design meets ironclad security. We create premium websites for the heart of Europe.",
        },
        overview: {
            title: "Premium Web Design for the Grand Duchy",
            text: "Luxembourg is a global financial powerhouse where trust and prestige are paramount. Your digital presence must reflect this status. Ekanostudio specializes in high-end web design for Luxembourgish firms, focusing on elegant aesthetics, multi-lingual support, and enterprise-grade performance.",
        },
        whyChoose: {
            title: "Why Luxembourg's Elite Choose Us",
            points: [
                { title: "Financial-Grade Security", desc: "Data protection and secure architecture for corporate clients." },
                { title: "Multi-Lingual Mastery", desc: "Native support for French, German, and English user journeys." },
                { title: "Bespoke Aesthetics", desc: "Minimalist, high-end designs that communicate authority." }
            ]
        },
        deliverables: [
            "Bespoke UI/UX Design System",
            "Secure Next.js Development",
            "Multi-Lingual CMS Integration",
            "Regulatory Compliance Setup (GDPR)",
            "High-Performance Cloud Hosting",
            "Executive Brand Guidelines"
        ],
        process: {
            title: "Our Sovereign Design Process",
            steps: [
                { title: "Strategic Audit", desc: "Aligning your digital goals with Luxembourg's business landscape." },
                { title: "Curated Design", desc: "Crafting a unique visual identity for your brand." },
                { title: "Technical Build", desc: "Developing a robust, scalable, and secure platform." },
                { title: "Seamless Delivery", desc: "Launching with zero-downtime and full support." }
            ]
        },
        cta: {
            title: "Ready to elevate your digital stature?",
            text: "Consult with our premium design team for your Luxembourg project."
        },
        relatedServices: [
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" },
            { title: "SEO Services", link: "/services/seo/technical-seo" }
        ]
    }
};
