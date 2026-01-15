import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation UK",
            "Business Process Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Improve operational efficiency with secure AI automation and n8n workflows tailored for UK businesses.",
    },

    location: {
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK",
        context: "across the United Kingdom",
        metaTitleSuffix: "UK | AI Automation Specialists",
        traits: ["service-led economy", "regulated industries", "digital transformation"],
    },

    meta: {
        title: "AI Automation Services UK | Secure n8n Workflow Solutions",
        description:
            "AI automation for UK businesses. We design compliant n8n workflows and AI systems to reduce admin workload, improve accuracy, and scale operations.",
        canonical: "/ai-automation-uk",
    },

    content: {
        hero: {
            title: "Reliable AI Automation for UK Businesses",
            subtitle:
                "Reduce operational overhead and improve accuracy with intelligent automation built for the UK market.",
        },

        overview: {
            title: "Operational Efficiency in a Service-Driven Economy",
            text:
                "UK organisations operate in a highly regulated, service-oriented environment where efficiency and accuracy matter. Ekanostudio helps businesses across the United Kingdom adopt AI automation using n8n and OpenAI. We streamline processes such as invoicing, CRM updates, customer queries, and internal reporting—helping teams work faster while maintaining compliance and data control.",
        },

        whyChoose: {
            title: "Why UK Companies Automate with Ekanostudio",
            points: [
                {
                    title: "Compliance-First Automation",
                    desc:
                        "Workflows designed with GDPR and UK data protection standards in mind.",
                },
                {
                    title: "Reduced Administrative Costs",
                    desc:
                        "Automation replaces repetitive tasks without increasing headcount.",
                },
                {
                    title: "Seamless Tool Integration",
                    desc:
                        "We connect accounting, CRM, and internal systems already used by UK teams.",
                },
            ],
        },

        deliverables: [
            "Custom n8n workflow development",
            "AI-powered customer support automation",
            "Operational process automation audit",
            "CRM & accounting system integrations",
            "Automated reporting and data handling",
            "Team onboarding and documentation",
        ],

        process: {
            title: "Our UK Automation Implementation Process",
            steps: [
                {
                    title: "Assessment",
                    desc:
                        "We identify manual processes that consume time and resources.",
                },
                {
                    title: "Workflow Design",
                    desc:
                        "Automation is planned with security, reliability, and compliance in mind.",
                },
                {
                    title: "Build & Test",
                    desc:
                        "AI workflows are developed and tested in controlled environments.",
                },
                {
                    title: "Deployment",
                    desc:
                        "Systems are integrated into live UK operations with minimal disruption.",
                },
            ],
        },

        cta: {
            title: "Ready to improve efficiency?",
            text:
                "See how AI automation can support your UK business operations.",
        },

        relatedServices: [
            {
                title: "Web Application Development",
                link: "/services/app-development/web-app-development",
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
