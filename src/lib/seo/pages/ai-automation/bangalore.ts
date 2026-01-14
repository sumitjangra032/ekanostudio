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
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in the Silicon Valley of India",
        metaTitleSuffix: "Bangalore | Top Rated Agency",
        traits: ["tech startups", "innovative businesses", "IT hubs"],
    },
    meta: {
        title: "AI Automation Services Bangalore | n8n & Workflow Strategy",
        description: "Modernize your Bangalore business. We build custom AI and automation workflows to boost productivity and reduce operational overhead for tech firms.",
        canonical: "/ai-automation-bangalore",
    },
    content: {
        hero: {
            title: "Intelligent Automation for Bangalore's Tech Leaders",
            subtitle: "Boost productivity. Reduce manual errors. We bring secure AI and workflow automation to India's Silicon Valley.",
        },
        overview: {
            title: "Leading the AI Revolution in Bangalore Business",
            text: "Bangalore's tech-savvy businesses are rapidly adopting AI to stay ahead. Ekanostudio brings high-level AI automation to your office. Using tools like n8n and OpenAI, we build custom workflows that automate administrative tasks, customer triage, and data analysis—saving your firm significant time and capital.",
        },
        whyChoose: {
            title: "Why Automate with Ekanostudio?",
            points: [
                { title: "Expert n8n Workflow Design", desc: "Build connections between all your current business tools." },
                { title: "Custom AI Solutions", desc: "Tailored agents that understand your specific company needs." },
                { title: "Reliable Integration", desc: "Stable automation flows that scale as you grow." }
            ]
        },
        deliverables: [
            "Operation & Workflow Audit",
            "Custom n8n Workflows",
            "AI Chatbot & Support Automation",
            "Secure API Integration",
            "Automated Reporting",
            "Training and Documentation"
        ],
        process: {
            title: "Your Path to Automation",
            steps: [
                { title: "Audit", desc: "Identifying manual friction in your Bangalore operations." },
                { title: "Design", desc: "Crafting a secure and scalable automated path." },
                { title: "Execute", desc: "Developing and staging your custom AI flows." },
                { title: "Handoff", desc: "Final deployment and training your team." }
            ]
        },
        cta: {
            title: "Want to save hundreds of hours?",
            text: "Request a free automation audit for your Bangalore firm today."
        },
        relatedServices: [
            { title: "Web development", link: "/services/web-design-development/website-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" }
        ]
    }
};
