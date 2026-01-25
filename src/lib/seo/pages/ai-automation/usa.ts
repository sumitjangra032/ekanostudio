import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation USA",
            "Business Process Automation",
            "AI Workflows",
            "n8n Integration",
            "AI Agents for Business"
        ],
        description:
            "Build scalable AI automation and n8n workflows tailored for US businesses to reduce operational costs and improve execution speed.",
    },

    location: {
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "in the US market",
        metaTitleSuffix: "USA | AI Automation Experts",
        traits: ["high labor costs", "scale-driven growth", "results-focused businesses"],
    },

    meta: {
        title: "AI Automation Services USA | Scalable n8n & AI Workflow Solutions",
        description:
            "AI automation for US companies. We design custom n8n workflows and AI agents that replace repetitive tasks, reduce overhead, and scale operations.",
        canonical: "/ai-automation-usa",
    },

    content: {
        hero: {
            title: "Scalable AI Automation for US Businesses",
            subtitle:
                "Reduce operational overhead and increase execution speed with AI workflows built for the American market.",
        },

        overview: {
            title: "Automation Built for a High-Cost, High-Scale Market",
            text:
                "In the United States, labor is expensive and expectations are high. Automation is no longer optional—it’s a competitive advantage. Ekanostudio helps American businesses deploy AI-powered workflows using n8n and OpenAI. From customer support and lead qualification to internal reporting and data processing, our systems act as reliable digital operators that work continuously without increasing payroll.",
        },

        whyChoose: {
            title: "Why US Companies Choose Automation",
            points: [
                {
                    title: "Lower Operational Costs",
                    desc:
                        "Reduce dependency on large admin and support teams without sacrificing quality.",
                },
                {
                    title: "Always-On Execution",
                    desc:
                        "AI workflows run 24/7, meeting the availability expectations of US customers.",
                },
                {
                    title: "Built to Scale",
                    desc:
                        "Handle rapid growth and seasonal spikes without hiring or retraining staff.",
                },
            ],
        },

        deliverables: [
            "AI-powered customer support agents",
            "Sales and lead qualification automation",
            "Internal knowledge base chatbots",
            "CRM data cleanup and synchronization",
            "Invoice and document processing automation",
            "Secure self-hosted AI deployment",
        ],

        process: {
            title: "Our AI Automation Implementation Process",
            steps: [
                {
                    title: "SOP Review",
                    desc:
                        "We analyze existing workflows to identify automation-ready processes.",
                },
                {
                    title: "Prototype",
                    desc:
                        "A working AI workflow is built to validate performance and ROI.",
                },
                {
                    title: "System Integration",
                    desc:
                        "Automation connects seamlessly with tools like Salesforce, HubSpot, or Slack.",
                },
                {
                    title: "Enablement",
                    desc:
                        "Your team is trained to monitor, manage, and extend the AI systems.",
                },
            ],
        },

        cta: {
            title: "Ready to modernize operations?",
            text:
                "See how AI automation can replace repetitive work in your US business.",
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
