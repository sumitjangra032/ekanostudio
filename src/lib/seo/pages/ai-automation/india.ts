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
        name: "India",
        slug: "india",
        type: "country",
        country: "India",
        adjective: "Indian",
        context: "across the Indian market",
        metaTitleSuffix: "India | #1 Digital Agency",
        traits: ["rapidly growing market", "diverse audience", "digital-first consumers"],
    },
    meta: {
        title: "AI Automation Services India | n8n & Workflow Strategy",
        description: "Future-proof your Indian business. We build custom AI and automation workflows to boost productivity and reduce operational overhead for Indian firms.",
        canonical: "/ai-automation-india",
    },
    content: {
        hero: {
            title: "Intelligent Automation for the Modern Indian Enterprise",
            subtitle: "Boost productivity. Reduce manual errors. We bring secure AI and workflow automation to India.",
        },
        overview: {
            title: "Leading the AI Revolution in Indian Business",
            text: "India's tech-savvy businesses are rapidly adopting AI to stay ahead. Ekanostudio brings high-level AI automation to your office. Using tools like n8n and OpenAI, we build custom workflows that automate administrative tasks, customer triage, and data analysis—saving your firm significant time and capital.",
        },
        whyChoose: {
            title: "Why Automate with Ekanostudio?",
            points: [
                { title: "Expert n8n Workflow Design", desc: "Build connections between all your current business tools." },
                { title: "Custom AI Solutions", desc: "Tailored agents that understand your specific company needs." },
                { title: "Rapid Development", desc: "Deploying stable automation flows in weeks, not months." }
            ]
        },
        deliverables: [
            "Operation & Workflow Audit",
            "Custom n8n Enterprise Workflows",
            "AI Chatbot & Support Automation",
            "Secure API Integration Hub",
            "Automated Reporting & BI",
            "Full Training & Documentation"
        ],
        process: {
            title: "Your Path to Automation",
            steps: [
                { title: "Audit", desc: "Identifying manual friction in your Indian operations." },
                { title: "Design", desc: "Crafting a secure and scalable automated path." },
                { title: "Execute", desc: "Developing and staging your custom AI flows." },
                { title: "Handoff", desc: "Final deployment and training your internal teams." }
            ]
        },
        cta: {
            title: "Want to save hundreds of hours?",
            text: "Request a free automation audit for your Indian firm today."
        },
        relatedServices: [
            { title: "Web development", link: "/services/web-design-development/website-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" }
        ]
    }
};
