import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Services Canada",
            "SEO Agency Canada",
            "Google.ca Ranking",
            "Local SEO Canada",
            "Canadian SEO Experts",
            "SEO for Canadian Businesses"
        ],
        description:
            "Advanced SEO strategies tailored for Canadian businesses. Improve your visibility on Google.ca and attract high-intent organic traffic nationwide.",
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
        title: "SEO Agency Canada | Rank Higher on Google.ca",
        description:
            "Grow your organic traffic across Canada. We specialize in Canadian search behaviour, local keyword targeting, and bilingual optimization.",
        canonical: "/seo-services-canada",
    },

    content: {
        hero: {
            title: "SEO Strategies Built for Google.ca",
            subtitle:
                "Reach customers across Ontario, British Columbia, Alberta, and Quebec with performance-driven SEO tailored to Canada’s digital ecosystem.",
        },

        overview: {
            title: "SEO That Matches How Canadians Search",
            text:
                "Canada’s search landscape is uniquely shaped by regional needs, bilingual audiences, and province-specific trends. To rank on Google.ca, you need localized keyword research, culturally accurate messaging, and technical optimization built for Canadian browsing behaviour. Our SEO team helps brands grow organically across Toronto, Vancouver, Montreal, Calgary, Ottawa, and beyond—ensuring you connect with audiences coast to coast.",
        },

        whyChoose: {
            title: "Why Canadian Brands Choose Us",
            points: [
                {
                    title: "Canadian Search Nuance",
                    desc: "We optimize for Canadian spelling, terminology, and province-specific search intent.",
                },
                {
                    title: "Provincial SEO Strategy",
                    desc: "Tailored tactics for Western Canada, Central Canada, Atlantic Canada, and Quebec.",
                },
                {
                    title: ".ca Domain Authority Building",
                    desc: "Acquiring relevant backlinks from trusted Canadian websites and directories.",
                },
            ],
        },

        deliverables: [
            "Canadian Keyword Opportunity Map",
            "English & French SEO Strategy",
            "Local SEO Setup (Google Business Profile)",
            "Technical SEO & Core Web Vitals Optimization",
            "Authority Link Building (.ca Domains)",
            "Monthly Performance Reports & Insights",
        ],

        process: {
            title: "Canada-Focused SEO Framework",
            steps: [
                {
                    title: "Analyze",
                    desc: "Auditing your rankings, competition, and visibility on Google.ca.",
                },
                {
                    title: "Localize",
                    desc: "Optimizing content for Canadian spelling, phrasing, and regional voice.",
                },
                {
                    title: "Optimize",
                    desc: "Improving site structure, speed, schema, and on-page SEO.",
                },
                {
                    title: "Expand",
                    desc: "Building Canadian authority through partnerships and contextual link acquisition.",
                },
            ],
        },

        cta: {
            title: "Ready to increase your Canadian traffic?",
            text: "Start growing with a Canada-focused SEO strategy.",
        },

        relatedServices: [
            { title: "Content Writing", link: "/services/content-creation/content-writing" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" },
        ],
    },
};
