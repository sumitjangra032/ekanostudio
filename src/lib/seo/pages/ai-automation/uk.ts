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
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK",
        context: "across the United Kingdom",
        metaTitleSuffix: "UK | Trusted Partners",
        traits: ["established businesses", "digital transformation", "service sector"],
    },
    meta: {
        title: "AI Automation Services UK | n8n & Workflow Optimization",
        description: "Modernize your UK business operations. We implement custom AI automation and n8n workflows to reduce admin costs and boost efficiency.",
        canonical: "/ai-automation-uk",
    },
    content: {
        hero: {
            title: "Smart Automation for British Enterprise",
            subtitle: "Enhance productivity with intelligent workflows. We bring next-gen AI automation to UK businesses.",
        },
        overview: {
            title: "Operational Efficiency for the UK Market",
            text: "In the post-Brexit economy, efficiency is paramount. UK businesses are turning to automation to solve staffing challenges and reduce overhead. Ekanostudio provides bespoke AI solutions using tools like n8n and OpenAI. We automate invoicing, customer service, and data entry, ensuring your business runs smoothly 24/7.",
        },
        whyChoose: {
            title: "Why Automate With Ekanostudio",
            points: [
                { title: "GDPR Compliant AI", desc: "Ensuring all automated data processing meets UK standards." },
                { title: "Cost Reduction", desc: "Significantly lowering operational costs vs hiring." },
                { title: "Custom Integration", desc: "Connecting your existing UK accounting/CRM software." }
            ]
        },
        deliverables: [
            "Custom n8n Workflows",
            "AI Chatbot Implementation",
            "Process Automation Audit",
            "CRM Integration (Xero/Hubspot)",
            "Automated Reporting Systems",
            "Staff Training Workshops"
        ],
        process: {
            title: "Automation Roadmap",
            steps: [
                { title: "Assess", desc: "Identifying high-value automation opportunities." },
                { title: "Design", desc: "Mapping out secure and compliant workflows." },
                { title: "Build", desc: "Developing the automation scripts and agents." },
                { title: "Deploy", desc: "Integrating into your live UK operations." }
            ]
        },
        cta: {
            title: "Want to save time and money?",
            text: "Discover how AI can transform your UK business."
        },
        relatedServices: [
            { title: "Web development", link: "/services/app-development/web-app-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" }
        ]
    }
};
