import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation Canada",
            "Business Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Improve operational efficiency and reduce manual workload with secure, custom AI automation and n8n workflows designed for Canadian businesses.",
    },

    location: {
        name: "Canada",
        slug: "canada",
        type: "country",
        country: "Canada",
        adjective: "Canadian",
        context: "in the Canadian market",
        metaTitleSuffix: "Canada | AI Automation Specialists",
        traits: ["technology-driven", "regulated industries", "innovation-focused"],
    },

    meta: {
        title: "AI Automation Services in Canada | Secure n8n Workflows",
        description:
            "AI automation solutions for Canadian companies. We build secure n8n workflows and AI systems that reduce admin work, improve accuracy, and scale operations.",
        canonical: "/ai-automation-canada",
    },

    content: {
        hero: {
            title: "AI Automation for Canadian Businesses",
            subtitle:
                "Streamline operations, reduce overhead, and improve consistency with secure AI automation tailored to Canadian organizations.",
        },

        overview: {
            title: "Smarter Operations Through AI Automation",
            text:
                "Canadian businesses operate in competitive and often regulated environments where efficiency and reliability matter. Ekanostudio helps organizations across Canada implement AI automation using tools like n8n and OpenAI. Our solutions automate tasks such as customer support routing, reporting, onboarding, and internal workflows—without disrupting existing systems or compromising data security.",
        },

        whyChoose: {
            title: "Why Choose AI Automation With Us",
            points: [
                {
                    title: "Data-Aware Automation",
                    desc:
                        "We design workflows with data privacy and residency considerations in mind, supporting Canadian compliance requirements where applicable.",
                },
                {
                    title: "Bilingual AI Support",
                    desc:
                        "AI systems and chatbots can be configured to support both English and French workflows.",
                },
                {
                    title: "Cost-Efficient Scaling",
                    desc:
                        "Automation helps reduce reliance on manual processes, delivering long-term ROI without increasing headcount.",
                },
            ],
        },

        deliverables: [
            "Custom-built n8n automation workflows",
            "AI-powered customer support agents",
            "Sales and lead management automation",
            "HR and onboarding process automation",
            "Secure API and system integrations",
            "Knowledge transfer and team training",
        ],

        process: {
            title: "Our Automation Implementation Process",
            steps: [
                {
                    title: "Process Review",
                    desc:
                        "We analyze your workflows to identify high-impact automation opportunities.",
                },
                {
                    title: "Workflow Planning",
                    desc:
                        "We design a secure and scalable automation architecture aligned with your goals.",
                },
                {
                    title: "Development & Validation",
                    desc:
                        "Workflows are built, tested, and validated for accuracy and reliability.",
                },
                {
                    title: "Deployment & Support",
                    desc:
                        "We deploy the solution and support your team during adoption and scaling.",
                },
            ],
        },

        cta: {
            title: "Looking to reduce manual work?",
            text:
                "Explore how AI automation can help your Canadian business operate more efficiently.",
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
