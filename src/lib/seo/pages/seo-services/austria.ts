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
        title: "SEO Agentur Österreich | Top-Rankings auf Google.at",
        description: "Steigern Sie Ihre Sichtbarkeit in Österreich. Wir bieten datengetriebene SEO-Strategien, um Ihre Zielgruppe auf Google.at gezielt zu erreichen.",
        canonical: "/seo-services-austria",
    },
    content: {
        hero: {
            title: "Dominieren Sie die Suchergebnisse in Österreich",
            subtitle: "Wir bringen Ihre Website auf die erste Seite von Google.at und verwandeln Klicks in treue Kunden.",
        },
        overview: {
            title: "Strategisches SEO für den österreichischen Markt",
            text: "Um in Österreich online gefunden zu werden, benötigen Sie eine fundierte SEO-Strategie. ekanostudio unterstützt Unternehmen dabei, ihre organische Reichweite zu maximieren. Wir optimieren Ihre Technik, Ihre Inhalte und Ihre lokale Präsenz, damit Sie in Wien, Graz, Linz und ganz Österreich ganz oben stehen.",
        },
        whyChoose: {
            title: "Warum SEO mit Uns?",
            points: [
                { title: "Local SEO Expertise", desc: "Gewinnen Sie Kunden in Ihrer Region durch gezielte lokale Optimierung." },
                { title: "Nachhaltiges Linkbuilding", desc: "Aufbau von Autorität durch hochwertige Links aus dem DACH-Raum." },
                { title: "Data-First Ansatz", desc: "Transparente Analyse von Keywords und Wettbewerbern in Österreich." }
            ]
        },
        deliverables: [
            "Technisches SEO Audit",
            "Regionalspezifische Keyword-Recherche",
            "On-Page & Content Optimierung",
            "Google Business Profile Management",
            "Performance SEO & Monitoring",
            "Monatliche Reporting-Updates"
        ],
        process: {
            title: "Unsere SEO-Methodik",
            steps: [
                { title: "Status-Quo", desc: "Analyse Ihrer aktuellen Performance in Österreich." },
                { title: "Optimierung", desc: "Anpassung aller relevanten Ranking-Faktoren." },
                { title: "Autorität", desc: "Stärkung Ihres digitalen Profils im DACH-Markt." },
                { title: "Wachstum", desc: "Kontinuierliche Steigerung von Traffic und Leads." }
            ]
        },
        cta: {
            title: "Wollen Sie mehr Anfragen über Google?",
            text: "Fordern Sie jetzt Ihre kostenlose SEO-Analyse an."
        },
        relatedServices: [
            { title: "Content Erstellung", link: "/services/content-creation/content-writing" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Webdesign", link: "/services/web-design-development/website-design-uiux" }
        ]
    }
};
