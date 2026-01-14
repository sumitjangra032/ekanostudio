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
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in the Silicon Valley of India",
        metaTitleSuffix: "Bangalore | Top Rated Agency",
        traits: ["tech startups", "innovative businesses", "IT hubs"],
    },
    meta: {
        title: "Top SEO Agency in Bangalore | ROI-Driven Ranking",
        description: "Dominate Bangalore's search results. Our data-driven SEO strategies help startups and enterprises rank #1 for high-intent keywords.",
        canonical: "/seo-services-bangalore",
    },
    content: {
        hero: {
            title: "Data-Driven SEO for Bangalore's Competitive Market",
            subtitle: "Stop guessing. Start ranking. We help Bangalore businesses capture organic traffic that actually converts.",
        },
        overview: {
            title: "Search Dominance in the IT Capital",
            text: "With thousands of businesses launching in Bangalore every year, visibility is your most valuable asset. Our SEO approach goes beyond basic keywords—we build comprehensive topical authority that positions your brand as a leader in Bangalore's digital space.",
        },
        whyChoose: {
            title: "Why We Are Bangalore's SEO Choice",
            points: [
                { title: "Technical Expertise", desc: "We fix deep technical issues that generic agencies miss." },
                { title: "Content That Ranks", desc: "Our content team understands the nuance of your industry." },
                { title: "Transparent Reporting", desc: "No jargon. Just clear monthly reports on your growth." }
            ]
        },
        deliverables: [
            "Technical Site Audit",
            "Keyword Strategy Map",
            "On-Page Optimization",
            "Monthly Backlink Building",
            "Google Business Profile Setup",
            "Ranking Dashboard Access"
        ],
        process: {
            title: "SEO Roadmap for Success",
            steps: [
                { title: "Audit", desc: "Deep dive into your current site health and competitors." },
                { title: "Strategy", desc: "Identifying low-hanging fruit and long-term targets." },
                { title: "Optimization", desc: "Fixing technical errors and optimizing content." },
                { title: "Authority", desc: "Building high-quality backlinks to boost credibility." }
            ]
        },
        cta: {
            title: "Want meaningful traffic?",
            text: "Get a free SEO audit for your Bangalore business today."
        },
        relatedServices: [
            { title: "Web Design", link: "/services/web-design-development/website-design-uiux" },
            { title: "Content Writing", link: "/services/content-creation/content-writing" },
            { title: "Google Ads", link: "/services/performance-marketing/google-ads" }
        ]
    }
};
