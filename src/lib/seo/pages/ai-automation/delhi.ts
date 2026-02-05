import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation Delhi",
            "Business Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Automate complex business operations and reduce manual workload with custom AI automation and n8n workflows built for high-volume teams.",
    },

    location: {
        name: "Delhi",
        slug: "delhi",
        type: "city",
        country: "India",
        adjective: "Delhi-based",
        context: "in India’s capital and major business hub",
        metaTitleSuffix: "Delhi | AI Automation Specialists",
        traits: ["large enterprises", "operations-heavy businesses", "process-driven organizations"],
    },

    meta: {
        title: "AI Automation Delhi | Enterprise Workflows",
        description:
            "AI automation services for Delhi businesses. We design secure n8n workflows and AI systems to reduce overhead, improve accuracy, and scale efficiently.",
        canonical: "/ai-automation-delhi",
    },

    content: {
        hero: {
            title: "AI Automation Services in Delhi",
            subtitle:
                "Reduce manual effort, improve consistency, and scale operations with intelligent automation built for complex business environments.",
        },

        overview: {
            title: "Driving Operational Efficiency with AI Automation",
            text:
                "Delhi is home to large enterprises, established brands, and high-volume operations where efficiency directly impacts margins. Ekanostudio helps Delhi-based organizations implement AI automation using tools like n8n and OpenAI. From lead processing and reporting to internal approvals and customer workflows, we design systems that reduce errors, save time, and bring structure to complex operations.",
        },

        whyChoose: {
            title: "Why Choose Ekanostudio for AI Automation",
            points: [
                {
                    title: "Business-Rule Driven Automation",
                    desc:
                        "We build workflows that follow your exact approval chains, logic, and operational requirements.",
                },
                {
                    title: "n8n-Centered Architecture",
                    desc:
                        "Our automations are built on secure, flexible n8n setups that you fully control.",
                },
                {
                    title: "Seamless System Integration",
                    desc:
                        "We integrate automation into your existing CRM, email, spreadsheets, and internal tools without disruption.",
                },
            ],
        },

        deliverables: [
            "Custom n8n workflow implementation",
            "AI agent configuration and tuning",
            "End-to-end process mapping documentation",
            "Secure API and system integrations",
            "Monitoring and error-handling setup",
            "Team training and handover sessions",
        ],

        process: {
            title: "Our Automation Deployment Approach",
            steps: [
                {
                    title: "Operational Review",
                    desc:
                        "We analyze existing workflows to identify bottlenecks across your Delhi operations.",
                },
                {
                    title: "Workflow Architecture",
                    desc:
                        "We design structured, scalable automation flows aligned with your business rules.",
                },
                {
                    title: "Development & Testing",
                    desc:
                        "Automations are developed, tested in controlled environments, and optimized.",
                },
                {
                    title: "Deployment & Ownership Transfer",
                    desc:
                        "We deploy the solution and ensure your team can manage and extend it confidently.",
                },
            ],
        },

        cta: {
            title: "Looking to reduce operational load?",
            text:
                "Schedule a free AI automation consultation for your Delhi-based business.",
        },

        relatedServices: [
            {
                title: "Digital Marketing",
                link: "/services/digital-marketing/digital-marketing",
            },
            {
                title: "CRM Setup & Automation",
                link: "/services/email-automation/crm-setup",
            },
            {
                title: "Web Application Development",
                link: "/services/app-development/web-app-development",
            },
        ],
    },
};
