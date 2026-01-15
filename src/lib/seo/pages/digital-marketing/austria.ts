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
        name: "Austria",
        slug: "austria",
        type: "country",
        country: "Austria",
        adjective: "Austrian",
        context: "in Austria",
        metaTitleSuffix: "Austria | Digital Solutions",
        traits: ["central european business", "quality focused", "innovation"],
    },
    meta: {
        title: "Digital Marketing Österreich | Performance & Wachstum",
        description: "Skalieren Sie Ihr Unternehmen in Österreich. Wir steuern effiziente Werbekampagnen auf Google und Social Media für maximale ROI.",
        canonical: "/digital-marketing-austria",
    },
    content: {
        hero: {
            title: "Performance Marketing für den österreichischen Markt",
            subtitle: "Wir sorgen dafür, dass Ihr Marketing-Budget in Österreich echte Ergebnisse und messbares Wachstum liefert.",
        },
        overview: {
            title: "Gezieltes Wachstum in der Alpenrepublik",
            text: "Österreichs Online-Markt bietet große Chancen. ekanostudio unterstützt Sie dabei, diese zu nutzen. Wir entwickeln integrierte Marketing-Strategien, die exakt auf das Konsumverhalten in Österreich abgestimmt sind – von datengetriebenen Google Ads bis hin zu wirksamen Social-Media-Kampagnen.",
        },
        whyChoose: {
            title: "Unsere Marketing-Power",
            points: [
                { title: "Maximaler ROI", desc: "Fokus auf Conversions und reale Geschäftsergebnisse." },
                { title: "DACH-Markt Erfahrung", desc: "Tiefes Verständnis für die regionale Dynamik." },
                { title: "Vollständige Transparenz", desc: "Regelmäßige Insights in Ihre Performance-Daten." }
            ]
        },
        deliverables: [
            "Ganzheitliche Marketing-Strategie",
            "Google Search & Display Ads",
            "Paid Social (Meta, LinkedIn, TikTok)",
            "Email Marketing & Funnel-Bau",
            "Conversion-Rate-Optimierung",
            "Maßgeschneiderte Analysedashboards"
        ],
        process: {
            title: "Ihr Weg zu mehr Umsatz",
            steps: [
                { title: "Targeting", desc: "Definition Ihrer Zielgruppe in Österreich." },
                { title: "Setup", desc: "Einrichtung der Kampagnen mit messbarem Tracking." },
                { title: "Optimierung", desc: "Laufende Anpassung für beste Ergebnisse." },
                { title: "Reporting", desc: "Klarer Überblick über Ihren Erfolg." }
            ]
        },
        cta: {
            title: "Bereit für mehr Wachstum?",
            text: "Lassen Sie uns Ihre Marketing-Strategie für Österreich besprechen."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Erstellung", link: "/services/content-creation/content-writing" },
            { title: "Webdesign", link: "/services/web-design-development/website-development" }
        ]
    }
};
