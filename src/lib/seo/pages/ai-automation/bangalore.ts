import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation Bangalore",
            "Business Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Automate business processes and reduce operational load with custom AI automation and n8n workflows built for fast-growing teams.",
    },

    location: {
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in India's leading technology hub",
        metaTitleSuffix: "Bangalore | AI Automation Experts",
        traits: ["technology startups", "scaling companies", "IT-driven businesses"],
    },

    meta: {
        title: "AI Automation Services in Bangalore | n8n Workflow Experts",
        description:
            "AI automation services for Bangalore businesses. We design secure n8n workflows and intelligent systems to save time, reduce errors, and scale operations.",
        canonical: "/ai-automation-bangalore",
    },

    content: {
        hero: {
            title: "AI Automation Services in Bangalore",
            subtitle:
                "Replace repetitive manual work with intelligent automation designed for speed, reliability, and scale.",
        },

        overview: {
            title: "Building Smarter Operations in Bangalore’s Tech Ecosystem",
            text:
                "Bangalore is home to some of the fastest-growing startups and technology-driven companies in India. To stay competitive, businesses need systems that move as fast as they do. ekanostudio helps Bangalore-based teams implement AI automation using tools like n8n and OpenAI—streamlining internal operations, customer workflows, and data handling without disrupting existing systems.",
        },

        whyChoose: {
            title: "Why Choose AI Automation with ekanostudio",
            points: [
                {
                    title: "Automation Built for Scale",
                    desc:
                        "We design workflows that support rapid growth, high volumes, and evolving business needs.",
                },
                {
                    title: "Custom AI, Not Templates",
                    desc:
                        "Each automation is tailored to your tools, processes, and objectives—no one-size-fits-all setups.",
                },
                {
                    title: "Stable & Secure Integrations",
                    desc:
                        "Our n8n-based automations are reliable, maintainable, and easy to extend as your systems grow.",
                },
            ],
        },

        deliverables: [
            "Business process & automation audit",
            "Custom n8n workflow development",
            "AI-powered chatbots and task automation",
            "Secure API and tool integrations",
            "Automated analytics and reporting",
            "Team training and technical documentation",
        ],

        process: {
            title: "Our AI Automation Process",
            steps: [
                {
                    title: "Assessment",
                    desc:
                        "We identify repetitive tasks and inefficiencies across your Bangalore operations.",
                },
                {
                    title: "Workflow Design",
                    desc:
                        "We plan scalable, secure automation flows aligned with your business goals.",
                },
                {
                    title: "Development & Testing",
                    desc:
                        "Automations are built, tested, and refined for accuracy and performance.",
                },
                {
                    title: "Deployment & Enablement",
                    desc:
                        "We deploy the solution and ensure your team knows how to manage and scale it.",
                },
            ],
        },

        cta: {
            title: "Ready to automate and move faster?",
            text:
                "Book a free AI automation consultation for your Bangalore-based business.",
        },

        relatedServices: [
            {
                title: "Website Development",
                link: "/services/web-design-development/website-development",
            },
            {
                title: "Digital Marketing",
                link: "/services/digital-marketing/digital-marketing",
            },
            {
                title: "CRM Setup & Automation",
                link: "/services/email-automation/crm-setup",
            },
        ],
    },
};
