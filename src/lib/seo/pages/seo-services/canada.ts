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
        name: "Canada",
        slug: "canada",
        type: "country",
        country: "Canada",
        adjective: "Canadian",
        context: "in the Canadian market",
        metaTitleSuffix: "Canada | Digital Experts",
        traits: ["tech innovation", "diverse economy", "growth sector"],
    },
    meta: {
        title: "SEO Services Canada | Rank on Google.ca",
        description: "Increase your organic visibility in Canada. We specialize in Canadian SEO strategies that target local and national search intent effectively.",
        canonical: "/seo-services-canada",
    },
    content: {
        hero: {
            title: "Dominating Google.ca Search Results",
            subtitle: "Reach customers in Ontario, BC, Quebec, and beyond. Precision SEO for the Canadian market.",
        },
        overview: {
            title: "Strategic SEO for the Canadian Landscape",
            text: "Ranking in Canada means understanding the unique blend of US influence and local preference. Ekanostudio's SEO experts specialize in Google.ca algorithms. We help you target high-value Canadian keywords, optimize for local intent in major cities, and navigate the bilingual SEO requirements of the Quebec market.",
        },
        whyChoose: {
            title: "Our Canadian SEO Advantage",
            points: [
                { title: "Local Nuance", desc: "Targeting Canadian spelling and terminology." },
                { title: "Regional Strategy", desc: "Specific tactics for Western Canada vs The Maritimes." },
                { title: ".ca Authority", desc: "Building links from trusted Canadian domains." }
            ]
        },
        deliverables: [
            "Canadian Keyword Research",
            "Bilingual SEO Roadmap",
            "Local SEO (Google Business Profile)",
            "Technical Audit (Speed & Core Web Vitals)",
            "Backlink Acquisition (.ca)",
            "Monthly Growth Reports"
        ],
        process: {
            title: "Canada Ranking Strategy",
            steps: [
                { title: "Audit", desc: "Analyzing your current presence on Google.ca." },
                { title: "Localize", desc: "Adapting content for Canadian audiences." },
                { title: "Optimize", desc: "Fixing technical barriers to indexing." },
                { title: "Grow", desc: "Building authority through Canadian partnerships." }
            ]
        },
        cta: {
            title: "Want more Canadian traffic?",
            text: "Start your national SEO campaign today."
        },
        relatedServices: [
            { title: "Content Writing", link: "/services/content-creation/content-writing" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" }
        ]
    }
};
