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
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in the Oxford of the East",
        metaTitleSuffix: "Pune | Expert Solutions",
        traits: ["education sector", "manufacturing hubs", "IT parks"],
    },

    meta: {
        title: "Website Design Agency in Pune | UI/UX & Web Development",
        description:
            "Looking for premium web design in Pune? We build fast, mobile-responsive, and conversion-focused websites for leading brands and enterprises.",
        canonical: "/website-design-pune",
    },

    content: {
        hero: {
            title: "High-Performance Web Design for Pune’s Innovation Hub",
            subtitle:
                "From Hinjewadi tech parks to Magarpatta enterprises, we design websites that fuel growth in the Oxford of the East.",
        },

        overview: {
            title: "Modern Web Design for Pune’s Digital Ecosystem",
            text:
                "Pune blends academia, industry, and technology—and your website must reflect that dynamic environment. Ekanostudio creates high-performance websites tailored for Pune’s evolving business landscape, whether you’re a tech startup, an educational institution, or a manufacturing leader expanding globally.",
        },

        whyChoose: {
            title: "Why Pune Businesses Trust Our Web Design Expertise",
            points: [
                {
                    title: "Future-Ready Technology",
                    desc: "Built with modern frameworks like Next.js for unmatched speed, SEO, and scalability.",
                },
                {
                    title: "Mobile-First Interfaces",
                    desc: "Designed for a fast-growing, on-the-move audience across Pune’s urban districts.",
                },
                {
                    title: "Local Market Insight",
                    desc: "Strategic understanding of Pune’s IT, education, and industrial ecosystem.",
                },
            ],
        },

        deliverables: [
            "Custom UI/UX Design (Figma)",
            "High-Performance Next.js Development",
            "SEO-Optimized Web Architecture",
            "Scalable CMS (Sanity / Strapi)",
            "Security & SSL Configuration",
            "Launch Support + Post-Launch Maintenance"
        ],

        process: {
            title: "Our End-to-End Web Design Workflow",
            steps: [
                {
                    title: "Consult",
                    desc: "Understanding your goals for Pune and global audiences.",
                },
                {
                    title: "Blueprint",
                    desc: "Mapping user journeys and defining conversion-focused layouts.",
                },
                {
                    title: "Craft",
                    desc: "Designing and developing clean, high-quality interfaces.",
                },
                {
                    title: "Go Live",
                    desc: "Launching with full optimization and performance checks.",
                },
            ],
        },

        cta: {
            title: "Ready to elevate your digital presence?",
            text: "Work with Pune’s trusted web design and development experts.",
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/technical-seo" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" }
        ]
    }
};
