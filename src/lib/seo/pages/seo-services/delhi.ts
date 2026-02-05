import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Services Delhi",
            "SEO Agency Delhi NCR",
            "Delhi SEO Company",
            "Local SEO Delhi",
            "Enterprise SEO India",
            "Delhi NCR Search Optimization"
        ],
        description:
            "Enterprise-level SEO solutions designed for Delhi’s competitive market. Improve rankings, authority, and organic conversions with data-backed strategies.",
    },

    location: {
        name: "Delhi",
        slug: "delhi",
        type: "city",
        country: "India",
        adjective: "Delhi-based",
        context: "in the heart of India's capital",
        metaTitleSuffix: "Delhi | Premium Services",
        traits: ["corporate enterprises", "established brands", "growing businesses"],
    },

    meta: {
        title: "Best SEO Agency in Delhi | Enterprise & Local SEO Experts",
        description:
            "Rank higher in Delhi NCR. Our SEO team specializes in competitive industries like real estate, healthcare, finance, and corporate sectors.",
        canonical: "/seo-services-delhi",
    },

    content: {
        hero: {
            title: "SEO Strategies Built for Delhi’s Competitive Ecosystem",
            subtitle:
                "Capture high-intent traffic across Delhi NCR. We deliver enterprise-grade SEO built to outperform your competitors.",
        },

        overview: {
            title: "SEO That Matches Delhi’s Intensity",
            text:
                "Delhi is India’s most competitive digital market—where every niche is flooded with hundreds of businesses fighting for the same keywords. To win here, you need more than standard optimization. Our SEO framework blends local search dominance, commercial-intent keyword targeting, and authority-building content crafted for Delhi's decision-makers across sectors like real estate, healthcare, finance, education, and IT.",
        },

        whyChoose: {
            title: "Why Delhi Brands Trust Our SEO Expertise",
            points: [
                {
                    title: "Competitor Intelligence",
                    desc: "We analyze top-ranking Delhi competitors and replicate what works—then outperform them.",
                },
                {
                    title: "Hyper-Local Targeting",
                    desc: "Expertise in ranking for 'Delhi', 'NCR', 'Near Me', and neighbourhood-level queries.",
                },
                {
                    title: "Authority Content",
                    desc: "We craft deep-dive content, sector reports, and guides that build leadership and trust.",
                },
            ],
        },

        deliverables: [
            "Enterprise SEO & Technical Audit",
            "Competitor & Keyword Gap Mapping",
            "Google Business Profile Optimization",
            "High-Authority Industry Backlinks",
            "Content Strategy Blueprint",
            "Quarterly SEO Growth Reviews",
        ],

        process: {
            title: "Delhi-Focused SEO Roadmap",
            steps: [
                {
                    title: "Market Research",
                    desc: "Identifying search behaviour and demand trends in Delhi NCR.",
                },
                {
                    title: "Technical Optimization",
                    desc: "Fixing crawl issues, Core Web Vitals, architecture, and indexability.",
                },
                {
                    title: "Content Expansion",
                    desc: "Building blogs, thought-leadership articles, and location pages.",
                },
                {
                    title: "Authority Building",
                    desc: "Securing digital PR, industry mentions, and niche backlinks for long-term dominance.",
                },
            ],
        },

        cta: {
            title: "Want to outrank your Delhi competitors?",
            text: "Get a detailed SEO audit for your Delhi business today.",
        },

        relatedServices: [
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Performance Marketing", link: "/services/performance-marketing/google-ads" },
            { title: "Web Development", link: "/services/web-design-development/website-development" },
        ],
    },
};
