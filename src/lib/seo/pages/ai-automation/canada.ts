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
        name: "Canada",
        slug: "canada",
        type: "country",
        country: "Canada",
        adjective: "Canadian",
        context: "in the Canadian market",
        metaTitleSuffix: "Canada | Digital Experts",
        traits: ["tech innovation", "diverse economy", "growth sector"],
    },
    meta: {
        title: "AI Automation Services Canada | n8n & Workflow Optimization",
        description: "Modernize your Canadian business. We build custom AI agents and n8n automations to reduce admin work and boost efficiency for Canadian firms.",
        canonical: "/ai-automation-canada",
    },
    content: {
        hero: {
            title: "Smart Automation for Canadian Enterprise",
            subtitle: "Boost productivity and reduce costs. We implement secure AI automation solutions for forward-thinking Canadian companies.",
        },
        overview: {
            title: "Operational Efficiency with AI",
            text: "Canadian businesses are known for efficiency. AI takes that to the next level. Ekanostudio helps you automate repetitive tasks like invoicing, customer triage, and data entry. We use tools like n8n and OpenAI to build secure, private automation flows that keep your data within Canadian compliance standards where possible.",
        },
        whyChoose: {
            title: "Why Automate With Us",
            points: [
                { title: "Data Sovereignty", desc: " prioritizing Canadian data residency solutions." },
                { title: "Bilingual AI", desc: "Chatbots configured for both EN and FR support." },
                { title: "Cost Effective", desc: "Significant ROI compared to hiring administrative staff." }
            ]
        },
        deliverables: [
            "Custom n8n Workflows",
            "AI Customer Service Agents",
            "Sales Outreach Automation",
            "HR & Onboarding Bots",
            "API Integration Services",
            "Staff Training & Handoff"
        ],
        process: {
            title: "Automation Rollout",
            steps: [
                { title: "Audit", desc: "Identifying your most time-consuming manual tasks." },
                { title: "Design", desc: "Mapping out the automated workflow." },
                { title: "Build", desc: "Developing and testing the solution securely." },
                { title: "Deploy", desc: "Integrating into your live business environment." }
            ]
        },
        cta: {
            title: "Ready to save time?",
            text: "Discover the power of AI automation."
        },
        relatedServices: [
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" },
            { title: "Web Apps", link: "/services/app-development/web-app-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
