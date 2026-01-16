import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Austria",
            "Online Marketing Agency Austria",
            "Performance Marketing Österreich",
            "Google Ads Agentur Österreich",
            "Social Media Marketing Austria"
        ],
        description:
            "Result-driven digital marketing services in Austria focused on performance, lead generation, and measurable business growth across paid and organic channels.",
    },

    location: {
        name: "Austria",
        slug: "austria",
        type: "country",
        country: "Austria",
        adjective: "Austrian",
        context: "across the Austrian digital market",
        metaTitleSuffix: "Austria | Performance Marketing Experts",
        traits: ["central european business", "quality focused", "innovation"],
    },

    meta: {
        title: "Digital Marketing Agentur Österreich | Performance & Wachstum",
        description:
            "Performance-orientierte Digital Marketing Agentur in Österreich. Wir skalieren Marken mit Google Ads, Social Media Werbung und datengetriebenen Strategien.",
        canonical: "/digital-marketing-austria",
    },

    content: {
        hero: {
            title: "Digital Marketing, das in Österreich Ergebnisse liefert",
            subtitle:
                "Mehr Leads, mehr Umsatz, volle Transparenz – datengetriebene Marketing-Strategien für nachhaltiges Wachstum im österreichischen Markt.",
        },

        overview: {
            title: "Messbares Online-Wachstum für österreichische Unternehmen",
            text:
                "Der digitale Wettbewerb in Österreich wächst stetig. Um sichtbar zu bleiben, braucht es mehr als Reichweite – es braucht Performance. Ekanostudio entwickelt zielgerichtete Digital-Marketing-Strategien für österreichische Unternehmen, die auf messbare Ergebnisse ausgelegt sind. Von Google Ads über Social Media Kampagnen bis hin zu Conversion-Optimierung sorgen wir dafür, dass Ihr Marketing-Budget effizient eingesetzt wird und echtes Geschäftswachstum erzielt.",
        },

        whyChoose: {
            title: "Warum Ekanostudio für Digital Marketing?",
            points: [
                {
                    title: "Performance-Fokus",
                    desc:
                        "Jede Kampagne ist auf Conversions, Leads und Umsatz optimiert – nicht auf leere Klicks.",
                },
                {
                    title: "DACH-Marktexpertise",
                    desc:
                        "Erfahrung mit Konsumverhalten, Wettbewerb und Plattformen im österreichischen Markt.",
                },
                {
                    title: "Volle Transparenz",
                    desc:
                        "Klare Reportings und verständliche KPIs statt Blackbox-Marketing.",
                },
            ],
        },

        deliverables: [
            "Individuelle Digital-Marketing-Strategie",
            "Google Ads (Search, Display & YouTube)",
            "Paid Social Kampagnen (Meta, LinkedIn, TikTok)",
            "E-Mail Marketing & Funnel Automatisierung",
            "Conversion-Rate-Optimierung (CRO)",
            "Live Performance Dashboards & Reports",
        ],

        process: {
            title: "Unser Performance-Marketing-Prozess",
            steps: [
                {
                    title: "Analyse & Zieldefinition",
                    desc:
                        "Definition Ihrer Zielgruppen, Ziele und KPIs für den österreichischen Markt.",
                },
                {
                    title: "Kampagnen-Setup",
                    desc:
                        "Technisches Setup von Tracking, Ads und Conversion-Pfaden.",
                },
                {
                    title: "Optimierung & Skalierung",
                    desc:
                        "Kontinuierliche Verbesserung auf Basis von Daten und Nutzerverhalten.",
                },
                {
                    title: "Reporting & Insights",
                    desc:
                        "Regelmäßige Auswertungen mit klaren Handlungsempfehlungen.",
                },
            ],
        },

        cta: {
            title: "Bereit für profitables Online-Wachstum?",
            text:
                "Lassen Sie uns Ihre Digital-Marketing-Strategie für Österreich gemeinsam entwickeln.",
        },

        relatedServices: [
            {
                title: "SEO",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Content Erstellung",
                link: "/services/content-creation/content-writing",
            },
            {
                title: "Webdesign",
                link: "/services/web-design-development/website-development",
            },
        ],
    },
};
