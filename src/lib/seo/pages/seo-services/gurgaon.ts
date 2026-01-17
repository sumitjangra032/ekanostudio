import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Agency Gurgaon",
            "SEO Services Gurugram",
            "Corporate SEO NCR",
            "Local SEO Gurgaon",
            "Enterprise SEO Cyber City",
            "B2B SEO India"
        ],
        description:
            "Enterprise-grade SEO services crafted for Gurgaon’s corporate ecosystem. Improve rankings, authority, and organic traffic with our data-led strategies.",
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
        title: "SEO Agency in Gurgaon | Enterprise Ranking & Lead Growth",
        description:
            "Dominate search in Gurugram’s competitive landscape. We provide precision SEO for MNCs, B2B firms, and high-growth startups in Cyber City and beyond.",
        canonical: "/seo-services-gurgaon",
    },

    content: {
        hero: {
            title: "Enterprise SEO for Gurgaon's High-Growth Businesses",
            subtitle:
                "From Cyber City to Golf Course Road—our performance-driven SEO strategies put your brand in front of decision-makers and high-intent customers.",
        },

        overview: {
            title: "SEO Designed for Gurgaon's Corporate Powerhouses",
            text:
                "Gurgaon is India’s most aggressive corporate market, where SEO is no longer optional—it’s a strategic advantage. Whether you're an MNC in DLF Cyber City, a fintech startup in Udyog Vihar, or a real-estate leader in Sector 62, ranking for high-intent search terms directly impacts your pipeline. Our Gurgaon-focused SEO methodology blends technical optimization, authority building, and advanced keyword intelligence tailored for NCR’s competitive environment.",
        },

        whyChoose: {
            title: "What Makes Our Gurgaon SEO Unique?",
            points: [
                {
                    title: "B2B Keyword Strategy",
                    desc: "Precision targeting for enterprise-level and decision-maker search queries unique to NCR.",
                },
                {
                    title: "Technical Depth",
                    desc: "We optimize Core Web Vitals, architecture, and indexing for large-scale corporate sites.",
                },
                {
                    title: "Local + National Authority",
                    desc: "Improving visibility on Google Maps, Gurgaon-specific SERPs, and nationwide rankings.",
                },
            ],
        },

        deliverables: [
            "Full Technical SEO Infrastructure Audit",
            "Enterprise Keyword Mapping & Intent Clusters",
            "Authority-Building Content Strategy",
            "Local SEO for Gurgaon & NCR",
            "High-Quality Backlink Outreach",
            "Real-Time Performance & Ranking Dashboards",
        ],

        process: {
            title: "Our Gurgaon-Focused SEO Framework",
            steps: [
                {
                    title: "Insight",
                    desc: "Studying NCR competitor tactics and identifying your corporate keyword gaps.",
                },
                {
                    title: "Action",
                    desc: "Optimizing technical structure, schema, UX, and on-page ranking factors.",
                },
                {
                    title: "Authority",
                    desc: "Securing authoritative backlinks and mentions relevant to NCR industries.",
                },
                {
                    title: "Monitor",
                    desc: "Tracking keywords, traffic, and conversions with transparent reporting.",
                },
            ],
        },

        cta: {
            title: "Looking to dominate organic search?",
            text: "Speak with our Gurgaon SEO specialists to unlock your growth opportunities.",
        },

        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" },
        ],
    },
};
