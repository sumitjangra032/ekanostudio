import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Agentur Österreich",
            "Suchmaschinenoptimierung Österreich",
            "Google Ranking verbessern Österreich",
            "SEO Wien",
            "SEO Graz",
            "SEO Linz"
        ],
        description:
            "SEO-Strategien, die Sichtbarkeit schaffen, Rankings verbessern und nachhaltigen organischen Traffic für österreichische Unternehmen aufbauen.",
    },

    location: {
        name: "Austria",
        slug: "austria",
        type: "country",
        country: "Austria",
        adjective: "Austrian",
        context: "in Österreich",
        metaTitleSuffix: "Austria | Digital Solutions",
        traits: ["central european business", "quality focused", "innovation"],
    },

    meta: {
        title: "Expert SEO Services in Austria",
        description:
            "Erreichen Sie mehr Kunden auf Google.at. Wir bieten maßgeschneiderte SEO-Services für Unternehmen in Wien, Graz, Linz und ganz Österreich.",
        canonical: "/seo-services-austria",
    },

    content: {
        hero: {
            title: "Top-Platzierungen auf Google.at für Ihr Unternehmen",
            subtitle:
                "Mit präziser Suchmaschinenoptimierung sorgen wir dafür, dass österreichische Kunden Ihre Website zuerst finden.",
        },

        overview: {
            title: "SEO, abgestimmt auf den österreichischen Markt",
            text:
                "Österreich hat ein anspruchsvolles, qualitätsorientiertes Online-Publikum. Um hier sichtbar zu werden, benötigt Ihr Unternehmen eine SEO-Strategie, die lokale Suchanfragen, regionale Suchabsichten und das Nutzerverhalten in Wien, Graz, Linz, Salzburg und Innsbruck versteht. Unser Team optimiert technische Faktoren, Inhalte und Autorität, um Ihre Website langfristig auf Google.at nach vorne zu bringen.",
        },

        whyChoose: {
            title: "Ihre Vorteile mit Ekanostudio",
            points: [
                {
                    title: "Österreich-spezifische Keyword-Strategien",
                    desc: "Gezielte Optimierung für Suchanfragen aus dem gesamten DACH-Raum – mit Fokus auf Google.at.",
                },
                {
                    title: "Nachhaltiger Autoritätsaufbau",
                    desc: "Erprobtes Linkbuilding aus relevanten österreichischen und deutschsprachigen Quellen.",
                },
                {
                    title: "Transparente Daten & Analysen",
                    desc: "Klar verständliche SEO-Reports, basierend auf österreichischen Suchintentionen.",
                },
            ],
        },

        deliverables: [
            "Detailliertes SEO-Technik-Audit",
            "Österreich-spezifische Keyword-Analyse",
            "On-Page Optimierung (Title, Meta, Struktur)",
            "Content-Optimierung & Topic-Clusters",
            "Google Business Profile Optimierung",
            "Laufende SEO-Betreuung & Performance-Tracking",
        ],

        process: {
            title: "Unser SEO-Prozess für Österreich",
            steps: [
                {
                    title: "Analyse",
                    desc: "Bewertung Ihrer Rankings, Website-Struktur und Konkurrenz in Österreich.",
                },
                {
                    title: "Optimierung",
                    desc: "Verbesserung von Technik, Inhalten und User Experience.",
                },
                {
                    title: "Autorität",
                    desc: "Aufbau relevanter Backlinks und lokaler Signale.",
                },
                {
                    title: "Skalierung",
                    desc: "Nachhaltige Steigerung von Keywords, Traffic und qualifizierten Anfragen.",
                },
            ],
        },

        cta: {
            title: "Mehr Sichtbarkeit auf Google.at?",
            text: "Fordern Sie Ihre kostenlose SEO-Analyse für Österreich an.",
        },

        relatedServices: [
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Digital Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "Webdesign", link: "/services/web-design-development/website-design-uiux" },
        ],
    },
};
