import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Services USA",
            "National SEO United States",
            "Local SEO USA",
            "American SEO Agency",
            "Google SEO USA",
            "SEO for US Businesses",
            "US Search Engine Optimization"
        ],
        description:
            "Strategic SEO services for the US market, focused on national ranking, local visibility, and long-term organic authority.",
    },

    location: {
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "across the United States",
        metaTitleSuffix: "USA | Global SEO Specialists",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },

    meta: {
        title: "SEO Services USA | Rank Nationwide on Google.com",
        description:
            "Dominate Google.com with US-focused SEO. We help businesses rank nationally and locally across all 50 states using advanced, white-hat SEO strategies.",
        canonical: "/seo-services-usa",
    },

    content: {
        hero: {
            title: "SEO Services Built for the United States",
            subtitle:
                "From Silicon Valley startups to East Coast enterprises — we help American businesses achieve national and state-level dominance.",
        },

        overview: {
            title: "Winning SEO for the American Search Landscape",
            text:
                "Ranking in the United States is uniquely challenging. Competitors are stronger, search intent is broader, and Google’s US algorithms demand high technical accuracy. ekanostudio builds US-centric SEO strategies powered by semantic optimization, entity-based targeting, and large-scale content architecture — giving your brand the authority needed to rank across all 50 states.",
        },

        whyChoose: {
            title: "Why US Companies Choose Us",
            points: [
                {
                    title: "Semantic & Entity SEO",
                    desc: "We align your site with Google's US Knowledge Graph for maximum topical relevance.",
                },
                {
                    title: "National + Local Coverage",
                    desc: "Structured SEO to rank in major states like California, Texas, Florida, and New York.",
                },
                {
                    title: "Scalable US Operations",
                    desc: "From enterprise sites to agencies — our systems support large-volume SEO execution.",
                }
            ],
        },

        deliverables: [
            "Technical SEO & Crawl Architecture",
            "National Keyword Strategy (50-State Coverage)",
            "Local SEO for Multi-Location Businesses",
            "Schema & Entity Markup Implementation",
            "US-Based Authority Link Building",
            "Looker Studio Reports & KPI Dashboards"
        ],

        process: {
            title: "Our US SEO Execution Framework",
            steps: [
                {
                    title: "Audit",
                    desc: "Analyzing US competitors, SERP volatility, and site performance on Google.com.",
                },
                {
                    title: "Fix",
                    desc: "Solving crawl budget issues, Core Web Vitals, and structural indexing gaps.",
                },
                {
                    title: "Optimize",
                    desc: "Enhancing content, metadata, and E-E-A-T signals for US search behavior.",
                },
                {
                    title: "Scale",
                    desc: "Building strong US links, digital PR, and expanding rankings nationwide.",
                }
            ]
        },

        cta: {
            title: "Ready to scale across the USA?",
            text: "Get your free SEO growth plan for national and local ranking in the United States.",
        },

        relatedServices: [
            { title: "Content Marketing", link: "/services/content-creation/content-writing" },
            { title: "PPC Management", link: "/services/performance-marketing/google-ads" },
            { title: "Local SEO", link: "/services/seo/local-seo" }
        ]
    }
};
