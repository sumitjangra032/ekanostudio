import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "AI Automation Gurgaon",
            "Enterprise Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Automate complex enterprise workflows and reduce operational costs with secure AI automation and n8n-based systems built for scale.",
    },

    location: {
        name: "Gurgaon",
        slug: "gurgaon",
        type: "city",
        country: "India",
        adjective: "Gurgaon-based",
        context: "in NCR’s corporate and financial hub",
        metaTitleSuffix: "Gurgaon | Enterprise Automation Experts",
        traits: ["multinational corporations", "financial operations", "enterprise technology teams"],
    },

    meta: {
        title: "AI Automation Gurgaon | Enterprise Workflows",
        description:
            "AI automation for Gurgaon enterprises. We design secure n8n workflows and AI systems to improve efficiency, reduce errors, and scale operations.",
        canonical: "/ai-automation-gurgaon",
    },

    content: {
        hero: {
            title: "AI Automation for Gurgaon’s Enterprise Ecosystem",
            subtitle:
                "Streamline high-volume operations, reduce manual risk, and improve consistency with enterprise-grade AI automation.",
        },

        overview: {
            title: "Enterprise Automation for High-Volume Operations",
            text:
                "Gurgaon is home to multinational corporations, finance teams, and operations-heavy enterprises where speed, accuracy, and reliability are critical. Ekanostudio helps Gurgaon-based organizations implement AI automation using n8n and OpenAI. We design workflows that automate sales qualification, document handling, finance operations, and internal reporting—helping teams operate efficiently at scale.",
        },

        whyChoose: {
            title: "Why Enterprises in Gurgaon Choose Us",
            points: [
                {
                    title: "Enterprise-Grade Architecture",
                    desc:
                        "Robust n8n workflows designed to integrate with global CRMs, ERPs, and internal systems.",
                },
                {
                    title: "AI Built Around Your Business Logic",
                    desc:
                        "Custom AI agents configured to follow your approval flows, compliance rules, and data structure.",
                },
                {
                    title: "Clear and Measurable ROI",
                    desc:
                        "Automation that reduces operational cost, improves turnaround time, and minimizes human error.",
                },
            ],
        },

        deliverables: [
            "Enterprise process and automation audit",
            "Custom n8n workflows for large teams",
            "AI-powered customer and operations agents",
            "Secure API and internal system integrations",
            "Automation for finance, reporting, and triage",
            "Ongoing support, training, and maintenance",
        ],

        process: {
            title: "Our Enterprise Automation Framework",
            steps: [
                {
                    title: "Operational Assessment",
                    desc:
                        "We analyze workflow bottlenecks across your Gurgaon-based operations.",
                },
                {
                    title: "Automation Blueprint",
                    desc:
                        "We design a secure, scalable automation architecture aligned with enterprise needs.",
                },
                {
                    title: "Controlled Development",
                    desc:
                        "AI workflows are built, tested, and validated in staged environments.",
                },
                {
                    title: "Deployment & Enablement",
                    desc:
                        "We deploy the system and ensure your teams are fully trained to operate it.",
                },
            ],
        },

        cta: {
            title: "Ready to optimize enterprise operations?",
            text:
                "Schedule a free AI automation consultation for your Gurgaon-based organization.",
        },

        relatedServices: [
            {
                title: "CRM Setup & Automation",
                link: "/services/email-automation/crm-setup",
            },
            {
                title: "Website Development",
                link: "/services/web-design-development/website-development",
            },
            {
                title: "Digital Marketing",
                link: "/services/digital-marketing/digital-marketing",
            },
        ],
    },
};
