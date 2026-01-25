import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation India",
            "Business Automation India",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Implement intelligent AI automation across your organization and reduce operational overhead with scalable n8n workflows built for Indian businesses.",
    },

    location: {
        name: "India",
        slug: "india",
        type: "country",
        country: "India",
        adjective: "Indian",
        context: "across the Indian market",
        metaTitleSuffix: "India | AI Automation Experts",
        traits: ["large-scale operations", "multi-city businesses", "digital-first enterprises"],
    },

    meta: {
        title: "AI Automation Services in India | Scalable n8n Workflows",
        description:
            "AI automation services for businesses across India. We design secure, scalable n8n workflows and AI systems to improve efficiency, reduce costs, and support growth.",
        canonical: "/ai-automation-india",
    },

    content: {
        hero: {
            title: "AI Automation for Businesses Across India",
            subtitle:
                "Standardize operations, reduce manual effort, and scale efficiently with AI automation built for Indian enterprises.",
        },

        overview: {
            title: "Building Scalable Automation for India’s Diverse Business Landscape",
            text:
                "India’s business ecosystem spans startups, enterprises, and multi-location organizations operating at massive scale. Ekanostudio helps businesses across India adopt AI automation using n8n and OpenAI. Our solutions streamline operations such as lead management, customer support workflows, reporting, and internal processes—helping organizations maintain consistency and efficiency across teams, cities, and regions.",
        },

        whyChoose: {
            title: "Why Businesses Across India Choose Ekanostudio",
            points: [
                {
                    title: "Automation Built for Scale",
                    desc:
                        "Workflows designed to support high volumes, distributed teams, and rapid business growth.",
                },
                {
                    title: "Custom AI for Indian Operations",
                    desc:
                        "AI systems tailored to your tools, processes, and regional operational requirements.",
                },
                {
                    title: "Fast, Reliable Implementation",
                    desc:
                        "Proven automation frameworks that reduce deployment time while ensuring stability.",
                },
            ],
        },

        deliverables: [
            "Organization-wide automation and workflow audit",
            "Custom n8n workflows for multi-team operations",
            "AI-powered chatbots and internal assistants",
            "Secure API and system integration layer",
            "Automated reporting and analytics pipelines",
            "Comprehensive training and documentation",
        ],

        process: {
            title: "Our AI Automation Delivery Model",
            steps: [
                {
                    title: "Discovery & Assessment",
                    desc:
                        "We evaluate processes across teams to identify automation opportunities.",
                },
                {
                    title: "Workflow Architecture",
                    desc:
                        "We design scalable, secure automation frameworks aligned with business goals.",
                },
                {
                    title: "Development & Validation",
                    desc:
                        "AI workflows are built, tested, and optimized for accuracy and reliability.",
                },
                {
                    title: "Deployment & Enablement",
                    desc:
                        "We deploy automation and ensure teams are equipped to manage and scale it.",
                },
            ],
        },

        cta: {
            title: "Ready to scale automation across your business?",
            text:
                "Get a free AI automation assessment for your organization in India.",
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
