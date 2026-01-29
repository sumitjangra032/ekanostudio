import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation UAE",
            "Business Automation Dubai",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Automate high-volume business operations with secure AI automation and n8n workflows designed for fast-growing UAE enterprises.",
    },

    location: {
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE",
        context: "across the United Arab Emirates",
        metaTitleSuffix: "UAE | AI Automation Experts",
        traits: ["service-driven economy", "real estate & logistics", "global business hub"],
    },

    meta: {
        title: "AI Automation UAE | Dubai & Abu Dhabi Workflows",
        description:
            "AI automation solutions for UAE businesses. We build secure n8n workflows and AI systems to automate operations, improve service speed, and scale efficiently.",
        canonical: "/ai-automation-uae",
    },

    content: {
        hero: {
            title: "AI Automation for High-Growth Businesses in the UAE",
            subtitle:
                "Improve service speed, reduce manual workload, and scale operations with intelligent automation.",
        },

        overview: {
            title: "Smart Automation for a Digital-First Economy",
            text:
                "The UAE is a global leader in technology adoption, real estate, logistics, and service-driven industries where speed and accuracy are critical. Ekanostudio helps UAE-based organizations implement AI automation using n8n and OpenAI. From customer inquiries and lead qualification to operations reporting and internal workflows, our solutions reduce manual effort while supporting high-volume, round-the-clock operations.",
        },

        whyChoose: {
            title: "Why UAE Businesses Choose AI Automation",
            points: [
                {
                    title: "Built for Scale and Speed",
                    desc:
                        "Automation systems designed to handle rapid growth and high transaction volumes.",
                },
                {
                    title: "24/7 Customer Engagement",
                    desc:
                        "AI agents that respond instantly across channels, improving service availability.",
                },
                {
                    title: "Reduced Operational Errors",
                    desc:
                        "Automated workflows eliminate repetitive manual entry and improve data accuracy.",
                },
            ],
        },

        deliverables: [
            "AI-powered WhatsApp and customer support bots",
            "Automation for real estate and lead management",
            "Custom n8n workflow development",
            "CRM integrations (Salesforce, Zoho, and more)",
            "Automated invoicing and operations workflows",
            "Bilingual AI chatbot configuration",
        ],

        process: {
            title: "Our AI Automation Implementation Process",
            steps: [
                {
                    title: "Operational Assessment",
                    desc:
                        "We identify inefficiencies and automation opportunities across your operations.",
                },
                {
                    title: "Workflow Design",
                    desc:
                        "We architect secure and scalable automation flows tailored to your business.",
                },
                {
                    title: "Implementation & Testing",
                    desc:
                        "AI workflows are built, tested, and optimized for reliability and performance.",
                },
                {
                    title: "Ongoing Optimization",
                    desc:
                        "We monitor, refine, and support automation as your business scales.",
                },
            ],
        },

        cta: {
            title: "Ready to scale with intelligent automation?",
            text:
                "Explore AI automation solutions designed for businesses in the UAE.",
        },

        relatedServices: [
            {
                title: "Web Application Development",
                link: "/services/app-development/web-app-development",
            },
            {
                title: "Digital Marketing",
                link: "/services/digital-marketing/digital-marketing",
            },
            {
                title: "CRM Setup & Automation",
                link: "/services/email-automation/crm-setup",
            },
        ],
    },
};
