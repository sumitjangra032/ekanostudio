import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Agency Delhi",
            "Performance Marketing Delhi NCR",
            "Online Marketing Services Delhi",
            "PPC Agency Delhi",
            "Growth Marketing Delhi"
        ],
        description:
            "End-to-end digital marketing services in Delhi NCR focused on performance, lead generation, and scalable revenue growth across paid and organic channels.",
    },

    location: {
        name: "Delhi",
        slug: "delhi",
        type: "city",
        country: "India",
        adjective: "Delhi-based",
        context: "across Delhi NCR",
        metaTitleSuffix: "Delhi NCR | Performance Marketing Experts",
        traits: ["corporate enterprises", "established brands", "growing businesses"],
    },

    meta: {
        title: "Digital Marketing Delhi NCR | Performance & Growth",
        description:
            "Performance-driven digital marketing agency in Delhi NCR. We help brands grow with Google Ads, Social Media, PPC, and full-funnel strategies.",
        canonical: "/digital-marketing-delhi",
    },

    content: {
        hero: {
            title: "Performance-Driven Digital Marketing for Delhi NCR",
            subtitle:
                "From visibility to revenue. We build integrated marketing systems that convert Delhi’s traffic into measurable business growth.",
        },

        overview: {
            title: "Full-Funnel Digital Growth for Delhi Businesses",
            text:
                "Delhi NCR is one of India’s most competitive business markets. Winning here requires precision, speed, and consistency across channels. Ekanostudio designs full-funnel digital marketing strategies that guide your audience from first interaction to final conversion. By combining Google Ads, Social Media advertising, email nurturing, and CRO, we help Delhi-based brands scale sustainably while maintaining strong ROI.",
        },

        whyChoose: {
            title: "Why Delhi Brands Work With Us",
            points: [
                {
                    title: "Performance-First Strategy",
                    desc:
                        "Every campaign is optimized for ROAS, leads, and revenue—not vanity metrics.",
                },
                {
                    title: "Omnichannel Execution",
                    desc:
                        "Unified presence across Google, LinkedIn, Meta, Email, and Display networks.",
                },
                {
                    title: "B2B & B2C Expertise",
                    desc:
                        "Proven experience with startups, enterprises, and industrial brands across Delhi NCR.",
                },
            ],
        },

        deliverables: [
            "Custom Digital Marketing Strategy",
            "Google Ads & PPC Campaign Management",
            "Paid Social Advertising (Meta, LinkedIn, YouTube)",
            "Advanced Performance Dashboards (Looker Studio)",
            "Audience Segmentation & Retargeting Lists",
            "Continuous A/B Testing & Optimization",
        ],

        process: {
            title: "Delhi Growth Marketing Framework",
            steps: [
                {
                    title: "Blueprint",
                    desc:
                        "Defining buyer personas, funnels, and channel priorities for the Delhi NCR market.",
                },
                {
                    title: "Launch",
                    desc:
                        "Deploying campaigns with precise targeting, creatives, and tracking.",
                },
                {
                    title: "Analyze",
                    desc:
                        "Monitoring performance data daily to identify scale opportunities.",
                },
                {
                    title: "Scale",
                    desc:
                        "Increasing budgets and reach on high-performing ads and audiences.",
                },
            ],
        },

        cta: {
            title: "Ready to scale your revenue in Delhi?",
            text:
                "Book a free strategy consultation with our Delhi NCR growth specialists.",
        },

        relatedServices: [
            {
                title: "SEO Services",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "AI Automation",
                link: "/services/ai-automation/ai-automation-n8n",
            },
            {
                title: "Video Editing",
                link: "/services/content-creation/video-editing",
            },
        ],
    },
};
