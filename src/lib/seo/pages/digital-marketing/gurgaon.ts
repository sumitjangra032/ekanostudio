import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: ["Online Marketing", "Performance Marketing", "Brand Growth"],
        description: "Comprehensive digital marketing solutions to scale your business across all online channels.",
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
        title: "Digital Marketing Agency Gurgaon | lead Gen & Performance",
        description: "Scale your revenue in Gurgaon. We manage high-performance Google Ads, LinkedIn Ads, and Social campaigns for Gurugram's top companies.",
        canonical: "/digital-marketing-gurgaon",
    },
    content: {
        hero: {
            title: "Performance Marketing for Gurgaon's Growth Leaders",
            subtitle: "Reach global audiences from Cyber City. We drive measurable digital growth for Gurgaon's enterprises.",
        },
        overview: {
            title: "Precision Marketing for the Corporate Capital",
            text: "Digital marketing in Gurgaon requires an enterprise-level approach. Ekanostudio provides rigorous performance marketing solutions. We specialize in B2B lead generation via LinkedIn and high-intent Google Search campaigns, ensuring your marketing spend in Cyber City translates into real-world business results.",
        },
        whyChoose: {
            title: "Our Marketing Advantage",
            points: [
                { title: "B2B Lead Mastery", desc: "Specialized in capturing high-value corporate leads." },
                { title: "Data-Driven ROAS", desc: "Every rupee is tracked and optimized for maximum return." },
                { title: "Omnichannel strategy", desc: "Seamless campaigns across LinkedIn, Google, and Email." }
            ]
        },
        deliverables: [
            "Corporate Digital Strategy",
            "LinkedIn & Google Ad Management",
            "Lead Nurturing Automation",
            "Performance Social Marketing",
            "Conversion Funnel Optimization",
            "Executive Growth Dashboards"
        ],
        process: {
            title: "Market Penetration Cycle",
            steps: [
                { title: "Research", desc: "Analyzing decision-maker behavior in Gurgaon's industries." },
                { title: "Activation", desc: "Deploying high-impact ads across key business channels." },
                { title: "Refine", desc: "Continuous A/B testing for lower CAC and higher lead quality." },
                { title: "Expand", desc: "Scaling budgets for winning campaigns." }
            ]
        },
        cta: {
            title: "Ready to accelerate your growth?",
            text: "Request a strategic marketing audit from our Gurgaon team."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" }
        ]
    }
};
