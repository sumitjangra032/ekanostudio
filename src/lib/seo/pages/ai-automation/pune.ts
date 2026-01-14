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
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in the Oxford of the East",
        metaTitleSuffix: "Pune | Expert Solutions",
        traits: ["education sector", "manufacturing hubs", "IT parks"],
    },
    meta: {
        title: "AI Automation Services in Pune | n8n & Workflow Excellence",
        description: "Modernize your Pune business. We build custom AI and automation workflows to reduce manual work and boost efficiency for Pune's industries.",
        canonical: "/ai-automation-pune",
    },
    content: {
        hero: {
            title: "Intelligent Automation for Pune's Future-Ready Business",
            subtitle: "Eliminate busywork. Empower your team. Cutting-edge AI automation solutions in Pune.",
        },
        overview: {
            title: "Operational Excellence with AI in Pune",
            text: "In the IT and manufacturing hub of Pune, manual errors are costly. Ekanostudio brings advanced AI automation to your doorstep. Using n8n and OpenAI, we build secure, custom workflows that manage everything from lead entry to complex data reporting, saving you hundreds of hours every month.",
        },
        whyChoose: {
            title: "Why Automate with Us",
            points: [
                { title: "Deep n8n Expertise", desc: "Advanced workflow design that connects all your existing tools." },
                { title: "Custom AI Agents", desc: "Bots that understand your specific business logic." },
                { title: "Fast ROI", desc: "Reducing operational costs within the first month of implementation." }
            ]
        },
        deliverables: [
            "Workflow Process Mapping",
            "Custom n8n Integrations",
            "AI Chatbot Implementation",
            "Automated CRM Hygiene",
            "Invoicing & Triage Bots",
            "Staff Training & Support"
        ],
        process: {
            title: "Your Automation Journey",
            steps: [
                { title: "Audit", desc: "Analyzing your current operations for automation points." },
                { title: "Design", desc: "Mapping out the efficient automated roadmap." },
                { title: "Build", desc: "Developing and testing the workflows safely." },
                { title: "Go Live", desc: "Full deployment and handoff to your team." }
            ]
        },
        cta: {
            title: "Want to save 20+ hours a week?",
            text: "Request a free automation audit for your Pune firm."
        },
        relatedServices: [
            { title: "Web development", link: "/services/web-design-development/website-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" }
        ]
    }
};
