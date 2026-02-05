import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: [
            "Website design Gurgaon",
            "Web design agency Gurgaon",
            "Corporate website design Gurugram",
            "UI UX design Cyber City",
            "Enterprise web development Gurgaon"
        ],
        description:
            "Enterprise-grade website design services in Gurgaon. We build secure, scalable, and conversion-focused websites for MNCs, startups, and corporate brands.",
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
        title: "Website Design Company in Gurgaon | Enterprise Web Experts",
        description:
            "Top website design agency in Gurgaon. We design enterprise-grade, high-performance websites for MNCs, startups, and corporate market leaders.",
        canonical: "/website-design-gurgaon",
    },

    content: {
        hero: {
            title: "Enterprise Web Design for Gurgaon's Business Leaders",
            subtitle:
                "From Cyber City to Golf Course Road, we design scalable digital platforms for Gurgaon's most influential enterprises.",
        },

        overview: {
            title: "Corporate & Enterprise Website Design in Gurgaon",
            text:
                "Gurgaon is the headquarters of India’s most powerful corporations, global MNCs, and fast-scaling startups. Your website must reflect credibility, scale, and trust. Ekanostudio delivers enterprise-grade web design solutions in Gurgaon with a focus on performance, security, UX precision, and global brand alignment. Our websites are built to support high traffic, complex user journeys, and long-term growth.",
        },

        whyChoose: {
            title: "Why Gurgaon's Enterprises Choose Ekanostudio",
            points: [
                {
                    title: "Global Corporate Standards",
                    desc: "UI/UX systems aligned with international MNC brand and compliance requirements.",
                },
                {
                    title: "High-Performance Architecture",
                    desc: "Next.js-based builds optimized for speed, scalability, and Core Web Vitals.",
                },
                {
                    title: "Industry-Specific Expertise",
                    desc: "Proven experience in finance, SaaS, real estate, consulting, and B2B sectors.",
                }
            ],
        },

        deliverables: [
            "Enterprise UI/UX Design System",
            "Secure Next.js Web Development",
            "Scalable CMS Integration",
            "SEO-Optimized Site Architecture",
            "Advanced Lead & CRM Integrations",
            "Ongoing Support & Performance Monitoring"
        ],

        process: {
            title: "Our Enterprise Web Design Process",
            steps: [
                {
                    title: "Business Discovery",
                    desc: "Understanding your enterprise goals, stakeholders, and Gurgaon market positioning.",
                },
                {
                    title: "UX Architecture",
                    desc: "Designing complex user journeys for conversion and usability.",
                },
                {
                    title: "Development",
                    desc: "Building secure, high-performance systems using modern tech stacks.",
                },
                {
                    title: "Launch & Scale",
                    desc: "Enterprise-ready deployment with performance and security validation.",
                }
            ],
        },

        cta: {
            title: "Ready to build an enterprise-grade website?",
            text: "Get a custom website design proposal for your Gurgaon business.",
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "Mobile App Development", link: "/services/app-development/mobile-app-development" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" }
        ]
    }
};
