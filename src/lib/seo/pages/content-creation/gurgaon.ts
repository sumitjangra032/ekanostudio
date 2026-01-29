import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation Gurgaon",
            "Corporate Content Agency Gurgaon",
            "Thought Leadership Content",
            "Video Production Gurgaon",
            "B2B Content Marketing"
        ],
        description:
            "Corporate-focused content creation for Gurgaon-based enterprises—video, copywriting, and thought leadership built for authority and trust.",
    },

    location: {
        name: "Gurgaon",
        slug: "gurgaon",
        type: "city",
        country: "India",
        adjective: "Gurgaon-based",
        context: "in the corporate hub of NCR",
        metaTitleSuffix: "Gurgaon | Enterprise Content Studio",
        traits: ["multinational corporations", "financial services", "enterprise brands"],
    },

    meta: {
        title: "Content Creation Gurgaon | Video & Thought Leadership",
        description:
            "Content creation for Gurgaon enterprises. We produce corporate videos, executive content, and authoritative copy for B2B and enterprise brands.",
        canonical: "/content-creation-gurgaon",
    },

    content: {
        hero: {
            title: "Enterprise-Grade Content for Gurgaon's Leading Brands",
            subtitle:
                "Strategic content designed for boardrooms, decision-makers, and global stakeholders.",
        },

        overview: {
            title: "Content Built for Corporate Credibility",
            text:
                "Gurgaon is home to multinational corporations, consulting firms, and financial leaders where credibility and clarity matter more than noise. Ekanostudio helps enterprise teams communicate complex ideas with precision. From executive thought leadership and investor-ready narratives to polished corporate videos, our content supports reputation, trust, and long-term brand positioning.",
        },

        whyChoose: {
            title: "Why Gurgaon Enterprises Work With Us",
            points: [
                {
                    title: "Executive-Level Tone",
                    desc:
                        "Content crafted for CXOs, stakeholders, and professional audiences.",
                },
                {
                    title: "Enterprise Production Standards",
                    desc:
                        "High-quality video and design aligned with global brand guidelines.",
                },
                {
                    title: "Strategic Distribution",
                    desc:
                        "Content optimised for LinkedIn, websites, internal communications, and sales enablement.",
                },
            ],
        },

        deliverables: [
            "Corporate brand and culture films",
            "Executive thought leadership articles",
            "Leadership interview and keynote videos",
            "Case studies, reports, and whitepapers",
            "LinkedIn content strategy and execution",
            "Brand messaging and narrative frameworks",
        ],

        process: {
            title: "Our Corporate Content Workflow",
            steps: [
                {
                    title: "Stakeholder Discovery",
                    desc:
                        "Understanding your organisation, audience, and communication objectives.",
                },
                {
                    title: "Editorial Planning",
                    desc:
                        "Defining themes, formats, and messaging aligned with enterprise goals.",
                },
                {
                    title: "Production & Review",
                    desc:
                        "Creating and refining content with multiple review cycles.",
                },
                {
                    title: "Delivery & Enablement",
                    desc:
                        "Final assets prepared for internal teams and external distribution.",
                },
            ],
        },

        cta: {
            title: "Looking to elevate your corporate narrative?",
            text:
                "Let’s build content that reflects leadership and credibility in Gurgaon’s enterprise ecosystem.",
        },

        relatedServices: [
            {
                title: "SEO & Content Optimisation",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Social Media Marketing",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Brand Identity & Design",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
