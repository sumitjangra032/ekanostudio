import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation Pune",
            "Business Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Improve process efficiency and reduce manual workload with custom AI automation and n8n workflows built for Pune-based businesses.",
    },

    location: {
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in one of India’s leading engineering and manufacturing hubs",
        metaTitleSuffix: "Pune | AI Automation Specialists",
        traits: ["engineering-driven companies", "manufacturing operations", "IT services"],
    },

    meta: {
        title: "AI Automation Services in Pune | n8n Workflow Solutions",
        description:
            "AI automation solutions for Pune businesses. We design reliable n8n workflows and AI systems to reduce errors, improve efficiency, and streamline operations.",
        canonical: "/ai-automation-pune",
    },

    content: {
        hero: {
            title: "AI Automation for Process-Driven Businesses in Pune",
            subtitle:
                "Reduce repetitive work, improve accuracy, and streamline operations with intelligent automation.",
        },

        overview: {
            title: "Practical AI Automation for Pune’s Engineering Ecosystem",
            text:
                "Pune is known for its strong engineering talent, manufacturing units, and IT service organizations where structured processes and accuracy matter. Ekanostudio helps Pune-based businesses implement AI automation using n8n and OpenAI. We design workflows that automate lead handling, reporting, invoicing, and internal operations—helping teams reduce manual effort while maintaining process control.",
        },

        whyChoose: {
            title: "Why Pune Businesses Choose Ekanostudio",
            points: [
                {
                    title: "Process-Focused Automation",
                    desc:
                        "Workflows designed to match structured business processes and operational discipline.",
                },
                {
                    title: "Custom AI Aligned to Your Logic",
                    desc:
                        "AI agents built around your specific rules, data flows, and internal systems.",
                },
                {
                    title: "Clear and Measurable ROI",
                    desc:
                        "Automation that reduces errors, saves time, and delivers value from the early stages.",
                },
            ],
        },

        deliverables: [
            "End-to-end process and workflow mapping",
            "Custom n8n integrations and automation",
            "AI chatbot and internal assistant setup",
            "CRM data cleanup and automation",
            "Automation for invoicing and task triage",
            "Team training, support, and documentation",
        ],

        process: {
            title: "Our Automation Implementation Approach",
            steps: [
                {
                    title: "Operational Review",
                    desc:
                        "We analyze existing processes to identify automation opportunities.",
                },
                {
                    title: "Workflow Design",
                    desc:
                        "We create a clear and efficient automation roadmap.",
                },
                {
                    title: "Development & Testing",
                    desc:
                        "Workflows are built and tested for reliability and accuracy.",
                },
                {
                    title: "Deployment & Enablement",
                    desc:
                        "We go live and ensure your team can confidently manage the system.",
                },
            ],
        },

        cta: {
            title: "Ready to simplify your operations?",
            text:
                "Request a free AI automation assessment for your Pune-based business.",
        },

        relatedServices: [
            {
                title: "Website Development",
                link: "/services/web-design-development/website-development",
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
