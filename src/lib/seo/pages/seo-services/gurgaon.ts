import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: ["Search Engine Optimization", "Keyword Ranking", "Organic Traffic Growth"],
        description: "Boost your search engine rankings and drive organic traffic with our data-driven SEO strategies.",
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
        title: "SEO Agency in Gurgaon | Rank High in Cyber City",
        description: "Scale your organic traffic in Gurgaon's competitive market. We provide surgical SEO strategies for MNCs and startups in Gurugram.",
        canonical: "/seo-services-gurgaon",
    },
    content: {
        hero: {
            title: "Dominating Search in Gurgaon's Corporate Landscape",
            subtitle: "Reach global decision-makers and local customers. Performance-driven SEO for Gurgaon's elites.",
        },
        overview: {
            title: "Strategic SEO for the Corporate Capital",
            text: "In Gurgaon, visibility is everything. Whether you are in real estate on Golf Course Road or a tech giant in Cyber City, ranking for the right keywords drives growth. ekanostudio offers data-backed SEO services in Gurgaon, focusing on high-intent B2B keywords and technical excellence to outpace your competition.",
        },
        whyChoose: {
            title: "Our Gurgaon SEO Edge",
            points: [
                { title: "B2B Intent Focus", desc: "Targeting high-value corporate and enterprise search terms." },
                { title: "Technical Domination", desc: "Surgical auditing of Core Web Vitals and site structure." },
                { title: "Local Authority", desc: "Enhancing visibility in Gurgaon's local and national maps." }
            ]
        },
        deliverables: [
            "Technical SEO Infrastructure Audit",
            "Advanced Keyword Research & Analysis",
            "Content Strategy for Authority",
            "Local & National SEO Campaigns",
            "Quality Backlink Acquisition",
            "Real-Time Analytics Dashboards"
        ],
        process: {
            title: "Our Winning SEO Strategy",
            steps: [
                { title: "Insight", desc: "Analyzing your market gap and competitor tactics in NCR." },
                { title: "Action", desc: "Optimizing your site for maximum crawlability and ranking." },
                { title: "Authority", desc: "Building trust through relevant, high-quality associations." },
                { title: "Monitor", desc: "Continuous tracking of rankings and conversion metrics." }
            ]
        },
        cta: {
            title: "Want to capture more traffic?",
            text: "Discuss your SEO growth goals with our Gurgaon experts."
        },
        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web development", link: "/services/web-design-development/website-development" }
        ]
    }
};
