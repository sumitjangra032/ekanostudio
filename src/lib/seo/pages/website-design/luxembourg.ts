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
        description:
            "Luxury web design for Luxembourg's financial and corporate sectors. We build sophisticated, high-performance websites for the Grand Duchy's elite businesses.",
        canonical: "/website-design-luxembourg",
    },

    content: {
        hero: {
            title: "Digital Excellence for Luxembourg's Global Leaders",
            subtitle:
                "Sophisticated design meets enterprise-grade security. We create premium websites for the heart of Europe.",
        },

        overview: {
            title: "Premium Web Design for the Grand Duchy",
            text:
                "Luxembourg is a global financial powerhouse where trust and prestige are essential. Your website must reflect this reputation. Ekanostudio delivers high-end web design for Luxembourgish firms with elegant aesthetics, multi-lingual user journeys, and enterprise-grade performance.",
        },

        whyChoose: {
            title: "Why Luxembourg's Elite Choose Us",
            points: [
                {
                    title: "Financial-Grade Security",
                    desc: "Secure architecture and data protection suited for corporate and financial institutions.",
                },
                {
                    title: "Multi-Lingual Experience",
                    desc: "Native support for French, German, and English across the full website experience.",
                },
                {
                    title: "High-End Aesthetics",
                    desc: "Minimalist, premium designs that communicate authority, trust, and global stature.",
                },
            ],
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
                {
                    title: "Strategic Audit",
                    desc: "Aligning your digital goals with Luxembourg’s financial and corporate ecosystem.",
                },
                {
                    title: "Curated Design",
                    desc: "Crafting a premium visual identity tailored to high-value audiences.",
                },
                {
                    title: "Technical Build",
                    desc: "Developing a secure, scalable, and high-performance platform.",
                },
                {
                    title: "Seamless Delivery",
                    desc: "Launching with zero downtime and providing full post-launch support.",
                },
            ],
        },

        cta: {
            title: "Ready to elevate your digital stature?",
            text: "Consult with our premium design team for your Luxembourg project.",
        },

        relatedServices: [
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" },
            { title: "SEO Services", link: "/services/seo/technical-seo" }
        ]
    }
};
