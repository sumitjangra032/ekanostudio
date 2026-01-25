import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation Luxembourg",
            "Enterprise Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Improve operational efficiency and reduce risk with secure, enterprise-grade AI automation and n8n workflows designed for Luxembourg-based organizations.",
    },

    location: {
        name: "Luxembourg",
        slug: "luxembourg",
        type: "country",
        country: "Luxembourg",
        adjective: "Luxembourg",
        context: "in Luxembourg",
        metaTitleSuffix: "Luxembourg | Enterprise AI Automation",
        traits: ["financial services", "regulated enterprises", "European headquarters"],
    },

    meta: {
        title: "AI Automation Services in Luxembourg | Secure n8n Workflows",
        description:
            "AI automation solutions for Luxembourg enterprises. We design secure n8n workflows and AI systems for financial, corporate, and regulated organizations.",
        canonical: "/ai-automation-luxembourg",
    },

    content: {
        hero: {
            title: "AI Automation for High-Value Enterprises in Luxembourg",
            subtitle:
                "Increase efficiency, reduce operational risk, and maintain control with secure AI automation built for regulated environments.",
        },

        overview: {
            title: "Enterprise-Grade Automation for Regulated Operations",
            text:
                "Luxembourg is a global hub for finance, investment firms, and multinational headquarters where accuracy, security, and compliance are critical. Ekanostudio helps organizations in Luxembourg implement AI automation using n8n and OpenAI. From document verification and reporting to multilingual customer workflows, our solutions reduce manual workload while maintaining strict control over data and processes.",
        },

        whyChoose: {
            title: "Why Enterprises Choose Ekanostudio",
            points: [
                {
                    title: "Secure, Self-Hosted Architecture",
                    desc:
                        "Enterprise-grade n8n deployments designed for data control, privacy, and sovereignty.",
                },
                {
                    title: "Risk Reduction Through Automation",
                    desc:
                        "Minimize human error in compliance-sensitive and high-impact business processes.",
                },
                {
                    title: "Scalable Without Additional Headcount",
                    desc:
                        "Handle growing operational volume efficiently without increasing staffing costs.",
                },
            ],
        },

        deliverables: [
            "Enterprise process and automation audit",
            "Custom n8n workflows for regulated environments",
            "Multilingual AI support and operations agents",
            "Secure API and internal system integrations",
            "Automation for compliance and reporting workflows",
            "Internal training and operational documentation",
        ],

        process: {
            title: "Our Automation Implementation Framework",
            steps: [
                {
                    title: "Process Assessment",
                    desc:
                        "We identify manual, high-risk, and high-cost processes across your operations.",
                },
                {
                    title: "Solution Architecture",
                    desc:
                        "We design a secure and compliant automation blueprint tailored to your environment.",
                },
                {
                    title: "Development & Validation",
                    desc:
                        "AI workflows are built, tested, and validated in controlled staging environments.",
                },
                {
                    title: "Deployment & Enablement",
                    desc:
                        "We deploy the solution and ensure your teams can operate and extend it confidently.",
                },
            ],
        },

        cta: {
            title: "Looking to optimize enterprise operations?",
            text:
                "Discuss your AI automation requirements with our Luxembourg-focused team.",
        },

        relatedServices: [
            {
                title: "CRM Setup & Automation",
                link: "/services/email-automation/crm-setup",
            },
            {
                title: "Web Application Development",
                link: "/services/app-development/web-app-development",
            },
            {
                title: "Digital Marketing",
                link: "/services/digital-marketing/digital-marketing",
            },
        ],
    },
};
