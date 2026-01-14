import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: ["Business Automation", "AI Workflows", "n8n Integration"],
        description: "Streamline your operations and reduce costs with cutting-edge AI automation and workflow optimization.",
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
        title: "AI Automation Services Luxembourg | n8n & Enterprise Workflows",
        description: "Future-proof your Luxembourg business. We build custom AI and automation workflows to boost productivity and security for financial and corporate firms.",
        canonical: "/ai-automation-luxembourg",
    },
    content: {
        hero: {
            title: "Intelligent Automation for Global Powerhouses",
            subtitle: "Boost efficiency. Reduce risk. We bring secure AI and workflow automation to the heart of Luxembourg.",
        },
        overview: {
            title: "Operational Excellence with AI",
            text: "In Luxembourg's high-cost labor market, efficiency is the key to competitive advantage. Ekanostudio helps leading firms implement AI automation. Whether it's automating complex document verification in Finance or streamlining multi-lingual support, our secure n8n workflows and AI agents save thousands of man-hours.",
        },
        whyChoose: {
            title: "Why Automate With Ekanostudio",
            points: [
                { title: "Enterprise Grade", desc: "Self-hosted, secure n8n deployments for data sovereignty." },
                { title: "Risk Mitigation", desc: "Reducing manual errors in high-stakes business processes." },
                { title: "Scale with AI", desc: "Handle increased volume without increasing headcount." }
            ]
        },
        deliverables: [
            "Process Automation Audit",
            "Custom n8n Enterprise Workflows",
            "Bilingual AI Support Agents",
            "Secure API Integration Services",
            "Automated Compliance Monitoring",
            "Internal Training & Documentation"
        ],
        process: {
            title: "Automation Roadmap",
            steps: [
                { title: "Audit", desc: "Identifying high-friction manual processes in your ops." },
                { title: "Architect", desc: "Designing a robust and secure automated solution." },
                { title: "Build", desc: "Developing and staging your custom AI workflows." },
                { title: "Deploy", desc: "Full integration and staff handoff for live operations." }
            ]
        },
        cta: {
            title: "Want to transform your operations?",
            text: "Discuss your automation potential with our Luxembourg experts."
        },
        relatedServices: [
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" },
            { title: "Web Apps", link: "/services/app-development/web-app-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
