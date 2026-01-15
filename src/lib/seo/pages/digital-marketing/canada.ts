import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: ["Online Marketing", "Performance Marketing", "Brand Growth"],
        description: "Comprehensive digital marketing solutions to scale your business across all online channels.",
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
        title: "Digital Marketing Agency Canada | Growth & ROI",
        description: "Scale your revenue in Canada. We manage high-performance Google Ads and Social Media campaigns specifically optimized for the Canadian market.",
        canonical: "/digital-marketing-canada",
    },
    content: {
        hero: {
            title: "Performance Marketing for Canadian Growth",
            subtitle: "Reach the right audience at the right time. We drive measurable results for businesses across Canada.",
        },
        overview: {
            title: "Data-Driven Growth in Canada",
            text: "The Canadian digital market is sophisticated. ekanostudio helps you navigate it with precision. We build integrated marketing funnels that span Google Search, Facebook, LinkedIn, and Email. Our focus is on lowering your CAC (Customer Acquisition Cost) while maximizing LTV (Lifetime Value) in CAD.",
        },
        whyChoose: {
            title: "Our Marketing Approach",
            points: [
                { title: "CAD Optimization", desc: "Campaigns managed and reported in Canadian Dollars." },
                { title: "Privacy Compliant", desc: "Adhering to CASL (Canada's Anti-Spam Legislation)." },
                { title: "Cross-Channel", desc: "Unified strategy across Search, Social, and Display." }
            ]
        },
        deliverables: [
            "Digital Strategy Roadmap",
            "Google Ads Management",
            "Social Media Advertising",
            "CASL-Compliant Email Marketing",
            "Conversion Rate Optimization",
            "Live Performance Dashboards"
        ],
        process: {
            title: "Canadian Market Launch",
            steps: [
                { title: "Research", desc: "Analyzing Canadian demographics and competitors." },
                { title: "Setup", desc: "Configuring precise tracking and attribution." },
                { title: "Launch", desc: "Going live with targeted ad sets." },
                { title: "Scale", desc: "Increasing budget on high-performing channels." }
            ]
        },
        cta: {
            title: "Ready to grow your sales?",
            text: "Get a free marketing audit for your Canadian business."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/landing-page-development" }
        ]
    }
};
