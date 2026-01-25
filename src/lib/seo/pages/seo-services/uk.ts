import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Agency UK",
            "SEO Services UK",
            "SEO Company London",
            "Local SEO UK",
            "National SEO UK",
            "Google.co.uk SEO",
            "British SEO Agency",
            "UK Search Engine Optimization"
        ],
        description:
            "Professional SEO services in the UK focused on Google.co.uk rankings, local visibility, and long-term organic growth.",
    },

    location: {
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK",
        context: "across England, Scotland, Wales, and Northern Ireland",
        metaTitleSuffix: "UK | Trusted SEO Agency",
        traits: ["established businesses", "digital transformation", "service sector"],
    },

    meta: {
        title: "SEO Agency UK | Google.co.uk Rankings & Organic Growth",
        description:
            "Rank higher on Google.co.uk with a UK-focused SEO agency. We drive qualified British traffic through local and national SEO strategies.",
        canonical: "/seo-services-uk",
    },

    content: {
        hero: {
            title: "SEO Services Built for the UK Market",
            subtitle:
                "From local visibility to national dominance — we help UK businesses rank higher, attract quality traffic, and convert leads.",
        },

        overview: {
            title: "Search Engine Optimisation for the United Kingdom",
            text:
                "The UK search landscape demands precision. British spelling, regional intent, and competitive industries require a tailored SEO approach. Ekanostudio delivers UK-specific SEO strategies focused on Google.co.uk — optimising technical performance, content relevance, and authoritative backlinks to help businesses win visibility across England, Scotland, Wales, and Northern Ireland.",
        },

        whyChoose: {
            title: "Why UK Businesses Choose Our SEO",
            points: [
                {
                    title: "UK Search Intent Expertise",
                    desc: "We optimise for British English, local phrasing, and regional buying behaviour.",
                },
                {
                    title: "Trusted UK Authority Building",
                    desc: "Backlinks from reputable .co.uk and UK industry publications.",
                },
                {
                    title: "Conversion-Focused SEO",
                    desc: "Ranking is not enough — we optimise for enquiries, calls, and revenue.",
                },
            ],
        },

        deliverables: [
            "Comprehensive Technical SEO Audit",
            "UK Keyword Research & Search Intent Mapping",
            "On-Page SEO (British English)",
            "Local SEO & Google Business Profile Optimisation",
            "UK Authority Link Building (.co.uk)",
            "Monthly SEO Growth & Conversion Reports"
        ],

        process: {
            title: "Our UK SEO Execution Framework",
            steps: [
                {
                    title: "Audit",
                    desc: "Evaluating your visibility, competitors, and technical health on Google.co.uk.",
                },
                {
                    title: "Localise",
                    desc: "Aligning content, structure, and metadata with UK search behaviour.",
                },
                {
                    title: "Optimise",
                    desc: "Improving site speed, content relevance, and on-page performance.",
                },
                {
                    title: "Scale",
                    desc: "Building authority and expanding rankings across priority UK keywords.",
                }
            ]
        },

        cta: {
            title: "Ready to rank higher in the UK?",
            text: "Get a free UK SEO audit and growth roadmap today.",
        },

        relatedServices: [
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Web Development", link: "/services/web-design-development/website-development" },
            { title: "Copywriting", link: "/services/content-creation/content-writing" }
        ]
    }
};
