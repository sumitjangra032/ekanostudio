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
        name: "UK",
        slug: "uk",
        type: "country",
        country: "UK",
        adjective: "UK",
        context: "across the United Kingdom",
        metaTitleSuffix: "UK | Trusted Partners",
        traits: ["established businesses", "digital transformation", "service sector"],
    },
    meta: {
        title: "Digital Marketing Agency UK | Growth & Performance",
        description: "Drive revenue in the UK. Our digital marketing services include PPC, Social Media Ads, and Email Automation tailored for the British market.",
        canonical: "/digital-marketing-uk",
    },
    content: {
        hero: {
            title: "Performance Marketing for UK Growth",
            subtitle: "Optimize your spend. Maximize your returns. We run efficient digital campaigns for businesses across the United Kingdom.",
        },
        overview: {
            title: "Scaling Brands in the UK Digital Economy",
            text: "The UK is one of the world's most advanced e-commerce and digital service markets. To standout, you need precision. ekanostudio offers full-stack digital marketing solutions. From Google Ads targeting specific London boroughs to nationwide Meta campaigns, we help you reach your ideal British customer efficiently.",
        },
        whyChoose: {
            title: "Our Marketing Approach",
            points: [
                { title: "Data Privacy First", desc: "Strict adherence to UK GDPR and PECR regulations." },
                { title: "Platform Expertise", desc: "Deep knowledge of the UK's most popular platforms." },
                { title: "Transparent Reporting", desc: "Clear insights into your CAC and ROI in GBP." }
            ]
        },
        deliverables: [
            "Digital Strategy Roadmap",
            "PPC Campaign Management",
            "Social Media Advertising",
            "Email Marketing Automation",
            "Conversion Rate Optimization",
            "Real-time Dashboard Access"
        ],
        process: {
            title: "UK Market Launch",
            steps: [
                { title: "Targeting", desc: "Defining your UK audience segments." },
                { title: "Creative", desc: "Designing ads that appeal to British sensibilities." },
                { title: "Launch", desc: "Going live with controlled budgets." },
                { title: "Optimize", desc: "Refining bids and creatives for maximum efficiency." }
            ]
        },
        cta: {
            title: "Ready to grow in the UK?",
            text: "Book a strategy call with our digital experts."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/website-design-uiux" }
        ]
    }
};
