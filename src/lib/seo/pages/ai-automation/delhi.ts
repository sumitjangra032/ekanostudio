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
        name: "Delhi",
        slug: "delhi",
        type: "city",
        country: "India",
        adjective: "Delhi-based",
        context: "in the heart of India's capital",
        metaTitleSuffix: "Delhi | Premium Services",
        traits: ["corporate enterprises", "established brands", "growing businesses"],
    },
    meta: {
        title: "AI Automation Solutions in Delhi | Efficiency & Scale",
        description: "Modernize your Delhi business with AI. We build custom n8n workflows and AI agents to automate repetitive tasks and boost productivity.",
        canonical: "/ai-automation-delhi",
    },
    content: {
        hero: {
            title: "Smart Automation for Delhi's Future-Ready Businesses",
            subtitle: "Reduce overhead and eliminate manual errors. We bring Silicon Valley grade AI automation to the heart of Delhi NCR.",
        },
        overview: {
            title: "Operational Excellence with AI",
            text: "In a hub like Delhi, efficiency is the difference between profit and loss. Ekanostudio helps traditional and modern businesses alike adopt AI. From automating lead entry to generating instant customer reports, our custom workflows save you hundreds of man-hours every month, allowing your team to focus on growth.",
        },
        whyChoose: {
            title: "Why Automate with Us",
            points: [
                { title: "Custom Logic", desc: "We build workflows that match your exact business rules." },
                { title: "n8n Experts", desc: "Certified expertise in deploying secure, self-hosted automation." },
                { title: "Zero Disruption", desc: "We integrate with your existing tools (CRM, Email, Sheets)." }
            ]
        },
        deliverables: [
            "Custom n8n Workflow Files",
            "AI Agent Configuration",
            "Process Mapping Document",
            "API Integration Setup",
            "Error Handling Protocols",
            "Staff Training Session"
        ],
        process: {
            title: "Automation Deployment",
            steps: [
                { title: "Audit", desc: " identifying bottlenecks in your current Delhi operations." },
                { title: "Design", desc: "Architecting the perfect automated workflow." },
                { title: "Build", desc: "Developing and testing the bots in a sandbox." },
                { title: "Deploy", desc: "Going live and handing over control to you." }
            ]
        },
        cta: {
            title: "Want to save 20+ hours a week?",
            text: "Let's automate your busywork. Get a free consultation."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" },
            { title: "Web App Dev", link: "/services/app-development/web-app-development" }
        ]
    }
};
