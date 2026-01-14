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
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "in the US market",
        metaTitleSuffix: "USA | Global Agency",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },
    meta: {
        title: "AI Automation Services USA | Custom Workflows & n8n",
        description: "US-Standard AI implementation. We replace repetitive tasks with intelligent agents and n8n workflows for American SMEs.",
        canonical: "/ai-automation-usa",
    },
    content: {
        hero: {
            title: "Future-Proof Your Business with AI",
            subtitle: "Bring Silicon Valley efficiency to your operations. Custom AI agents and automation for modern US companies.",
        },
        overview: {
            title: "Automation for the High-Cost US Labor Market",
            text: "Labor costs in the US are rising. The solution isn't just outsourcing—it's automation. Ekanostudio helps US businesses implement 'digital employees'. Our AI agents handle customer support, data entry, and lead qualification 24/7, allowing your expensive US team to focus on high-leverage strategy.",
        },
        whyChoose: {
            title: "Why Automate Now",
            points: [
                { title: "Cut Overhead", desc: "Reduce reliance on large support or admin teams." },
                { title: "Instant Response", desc: "US consumers expect 24/7/365 availability." },
                { title: "Scalability", desc: "Handle 10x volume without hiring 10x staff." }
            ]
        },
        deliverables: [
            "Customer Support AI Agents",
            "Sales Outreach Automation",
            "Internal Knowledge Base Chatbots",
            "CRM Data Hygiene Bots",
            "Invoice Processing Automation",
            "Secure Self-Hosted Deployment"
        ],
        process: {
            title: "Automation Rollout",
            steps: [
                { title: "SOP Audit", desc: "Reviewing your current Standard Operating Procedures." },
                { title: "Prototype", desc: "Building a proof-of-concept AI workflow." },
                { title: "Integrate", desc: "Connecting to your Slack, Salesforce, or Hubspot." },
                { title: "Train", desc: "Showing your team how to manage the AI." }
            ]
        },
        cta: {
            title: "Ready to modernize?",
            text: "See a demo of our AI agents in action."
        },
        relatedServices: [
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" },
            { title: "Web Apps", link: "/services/app-development/web-app-development" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
