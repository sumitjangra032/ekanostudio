import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: ["UI/UX Design", "Responsive Web Design", "Custom Website Design"],
        description: "Create a stunning, high-performance website that captures your brand's essence and converts visitors into customers.",
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
        title: "Website Design Agency Canada | Toronto, Vancouver, Montreal",
        description: "Custom web design for Canadian businesses. We build fast, accessible, and bilingual-ready websites for the modern Canadian market.",
        canonical: "/website-design-canada",
    },
    content: {
        hero: {
            title: "Digital Excellence for Canadian Business",
            subtitle: "From Toronto's financial district to Vancouver's tech hubs, we design websites that drive growth across Canada.",
        },
        overview: {
            title: "Web Design Tailored for Canada",
            text: "Canada's digital economy is diverse and rapidly evolving. Unifying English and French markets requires a strategic approach. Ekanostudio delivers premium web design services that cater to Canadian standards of accessibility (AODA) and performance. We help startups and established firms in Canada stand out globally.",
        },
        whyChoose: {
            title: "Why Canadian Firms Choose Us",
            points: [
                { title: "AODA Compliance", desc: "Ensuring your site is accessible to all Canadians." },
                { title: "Bilingual Capabilities", desc: "Support for English and French language toggles." },
                { title: "North American Timezone", desc: "Aligned working hours for seamless collaboration." }
            ]
        },
        deliverables: [
            "AODA Compliant UI/UX",
            "Bilingual CMS Setup",
            "Shopify / Next.js Development",
            "Mobile-First Responsive Design",
            "Performance Optimization",
            "Canadian Cloud Hosting Setup"
        ],
        process: {
            title: "Our Canadian Design Process",
            steps: [
                { title: "Discovery", desc: "Understanding your market position in Canada." },
                { title: "Strategy", desc: "Planning for bilingual and regional reach." },
                { title: "Build", desc: "Developing with clean, maintainable code." },
                { title: "Launch", desc: "Deploying to Canadian servers for local speed." }
            ]
        },
        cta: {
            title: "Ready to scale in Canada?",
            text: "Get a custom quote for your website project."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
