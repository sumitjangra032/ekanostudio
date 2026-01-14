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
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "in the US market",
        metaTitleSuffix: "USA | Global Agency",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },
    meta: {
        title: "USA SEO Services | Rank National & Local in United States",
        description: "Scale your US traffic. We specialize in ranking businesses across states, from California to New York, using white-hat, data-driven SEO.",
        canonical: "/seo-services-usa",
    },
    content: {
        hero: {
            title: "National SEO for the United States Market",
            subtitle: "Break through the saturation. We help US businesses dominate Google search results from coast to coast.",
        },
        overview: {
            title: "Ranking in the World's Toughest Market",
            text: "Ranking in the USA requires impeccable technical execution and authority building. There is no room for error. Ekanostudio uses advanced semantic SEO and entity mapping to align your content with US search intent. We help you capture high-value queries whether you are targeting a specific state or the entire nation.",
        },
        whyChoose: {
            title: "Our US SEO Expertise",
            points: [
                { title: "Entity-Based Strategy", desc: "Leveraging Google's Knowledge Graph for deeper relevance." },
                { title: "National & Local", desc: "Campaigns structured for state-level or country-wide dominance." },
                { title: "White Label Ready", desc: "We also support other US agencies with backend SEO execution." }
            ]
        },
        deliverables: [
            "Technical SEO Roadmap",
            "National Keyword Strategy",
            "Schema Markup Implementation",
            "Core Web Vitals Optimization",
            "Link Building (US Sites)",
            "Looker Studio Reporting"
        ],
        process: {
            title: "Winning in the USA",
            steps: [
                { title: "Audit", desc: "Comprehensive analysis of US competitors like Yelp/Angi/Giants." },
                { title: "Fix", desc: "Resolving crawl budget and indexation issues." },
                { title: "Optimize", desc: "Updating pages to meet E-E-A-T guidelines." },
                { title: "Amplify", desc: "Driving authority through relevant industry mentions." }
            ]
        },
        cta: {
            title: "Ready to expand nationwide?",
            text: "Start your US growth campaign with Ekanostudio."
        },
        relatedServices: [
            { title: "Content Marketing", link: "/services/content-creation/content-writing" },
            { title: "PPC Management", link: "/services/performance-marketing/google-ads" },
            { title: "Local SEO", link: "/services/seo/local-seo" }
        ]
    }
};
