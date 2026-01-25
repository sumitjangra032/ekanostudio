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
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "in the US market",
        metaTitleSuffix: "USA | Global Agency",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },

    meta: {
        title: "Website Design Agency USA | Premium UI/UX for American Brands",
        description:
            "High-performance, ADA-compliant websites built for the American market. Silicon-Valley-grade UI/UX, fast delivery, and enterprise-ready architecture.",
        canonical: "/website-design-usa",
    },

    content: {
        hero: {
            title: "World-Class Website Design for American Businesses",
            subtitle:
                "Combining US-standard innovation with global execution speed. We build digital experiences that stand out across the United States.",
        },

        overview: {
            title: "High-Performance Web Design for the US Market",
            text:
                "The United States has the most demanding digital landscape in the world. Your website needs to meet high standards for accessibility, performance, aesthetics, and compliance. Ekanostudio builds enterprise-grade websites tailored for American audiences—optimized for ADA accessibility, CCPA privacy compliance, and the design expectations of top US brands.",
        },

        whyChoose: {
            title: "Why US Companies Choose Us",
            points: [
                {
                    title: "Silicon Valley Quality",
                    desc: "Clean architecture, pixel-perfect UI, and performance that matches leading US tech firms.",
                },
                {
                    title: "Time Zone Friendly",
                    desc: "Flexible overlap with EST, CST, and PST for smooth communication.",
                },
                {
                    title: "Cost-Efficient Excellence",
                    desc: "Agency-level quality without the high overhead of NYC/SF studios.",
                },
            ],
        },

        deliverables: [
            "ADA-Compliant Design Systems",
            "Next.js / React Development",
            "CCPA & GDPR Ready Architecture",
            "Mobile-First Responsive Layouts",
            "High-Fidelity Figma Prototypes",
            "Core Web Vitals Optimization"
        ],

        process: {
            title: "Our US-Focused Workflow",
            steps: [
                {
                    title: "Sync",
                    desc: "Smooth onboarding with scheduled calls matching US time zones.",
                },
                {
                    title: "Design",
                    desc: "Iterative, high-fidelity prototyping with async feedback loops.",
                },
                {
                    title: "Build",
                    desc: "Agile, sprint-based development ensuring quality and speed.",
                },
                {
                    title: "Scale",
                    desc: "Optimized deployment on AWS or Vercel for fast US nationwide performance.",
                },
            ],
        },

        cta: {
            title: "Need a high-performance American website?",
            text: "Get a world-class website built for the US market.",
        },

        relatedServices: [
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "SaaS Development", link: "/services/web-design-development/saas-development" },
            { title: "SEO Services", link: "/services/seo/technical-seo" }
        ]
    }
};
