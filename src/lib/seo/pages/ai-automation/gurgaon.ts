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
        name: "Gurgaon",
        slug: "gurgaon",
        type: "city",
        country: "India",
        adjective: "Gurgaon-based",
        context: "in the corporate hub of NCR",
        metaTitleSuffix: "Gurgaon | Leading Agency",
        traits: ["MNCs", "financial districts", "tech startups"],
    },
    meta: {
        title: "AI Automation Services Gurgaon | n8n & Workflow Excellence",
        description: "Modernize your Gurgaon enterprise. We build custom AI and automation workflows to boost productivity and reduce operational costs for Gurgaon firms.",
        canonical: "/ai-automation-gurgaon",
    },
    content: {
        hero: {
            title: "Intelligent Automation for Gurgaon's Future-Ready Enterprise",
            subtitle: "Boost productivity. Reduce manual error. We bring secure AI and workflow automation to Gurgaon.",
        },
        overview: {
            title: "Operational Excellence with AI in Cyber City",
            text: "In Gurgaon's lightning-fast corporate world, manual overhead is the enemy of scale. Ekanostudio brings high-level AI automation to your business. Using n8n and OpenAI, we build secure, enterprise-grade workflows that automate sales triage, lead entry, and document processing, saving your firm thousands of hours every month.",
        },
        whyChoose: {
            title: "Why Automate with Ekanostudio",
            points: [
                { title: "Enterprise Reliability", desc: "Robust n8n setups that integrate with your global tools." },
                { title: "Custom AI Agents", desc: "Bots designed with your specific business logic and data." },
                { title: "Measurable ROI", desc: "Radically lowering operational costs while improving speed." }
            ]
        },
        deliverables: [
            "Process & Workflow Audit",
            "Custom n8n Enterprise Workflows",
            "AI Customer Success Agents",
            "Secure API Integration Services",
            "Automated Finance & Triage Bots",
            "Training and Maintenance Support"
        ],
        process: {
            title: "Your Automation Roadmap",
            steps: [
                { title: "Analysis", desc: "Identifying friction points in your Gurgaon office's operations." },
                { title: "Blueprint", desc: "Designing a secure and efficient automated path." },
                { title: "Development", desc: "Building and staging your custom AI flows safely." },
                { title: "Full Integration", desc: "Deploying and training your staff for peak efficiency." }
            ]
        },
        cta: {
            title: "Want to transform your operations?",
            text: "Request a free automation consultation for your Gurgaon business."
        },
        relatedServices: [
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" },
            { title: "Web development", link: "/services/web-design-development/website-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
