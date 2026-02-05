import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "KI Automatisierung",
            "Business Automation",
            "AI Workflows",
            "n8n Integration"
        ],
        description:
            "Optimieren Sie Geschäftsprozesse und reduzieren Sie manuelle Arbeit durch maßgeschneiderte KI-Automatisierung und intelligente Workflows.",
    },

    location: {
        name: "Austria",
        slug: "austria",
        type: "country",
        country: "Austria",
        adjective: "Austrian",
        context: "in Österreich",
        metaTitleSuffix: "Österreich | Digitale Lösungen",
        traits: ["zentraleuropäische Wirtschaft", "qualitätsorientiert", "innovativ"],
    },

    meta: {
        title: "KI-Automatisierung Österreich | Workflows mit n8n",
        description:
            "Professionelle KI-Automatisierung für Unternehmen in Österreich. Wir entwickeln sichere n8n-Workflows, die Zeit sparen und nachhaltig Kosten senken.",
        canonical: "/ai-automation-austria",
    },

    content: {
        hero: {
            title: "KI-Automatisierung für Unternehmen in Österreich",
            subtitle:
                "Automatisieren Sie wiederkehrende Aufgaben, steigern Sie Effizienz und entlasten Sie Ihr Team mit intelligenten KI-Workflows.",
        },

        overview: {
            title: "Intelligente Automatisierung für nachhaltige Effizienz",
            text:
                "Immer mehr österreichische Unternehmen setzen auf digitale Prozessoptimierung. Ekanostudio unterstützt Sie dabei mit moderner KI-Automatisierung auf Basis von n8n und OpenAI. Wir entwickeln sichere Workflows zur Automatisierung von Datenverarbeitung, Lead-Management und Kundenkommunikation – individuell angepasst an Ihre Geschäftsabläufe.",
        },

        whyChoose: {
            title: "Warum KI-Automatisierung sinnvoll ist",
            points: [
                {
                    title: "Mehr Zeit für Wesentliches",
                    desc:
                        "Reduzieren Sie manuelle Tätigkeiten und gewinnen Sie wertvolle Zeit für strategische Entscheidungen.",
                },
                {
                    title: "Sichere & skalierbare Lösungen",
                    desc:
                        "Unsere Automatisierungen berücksichtigen europäische Standards und wachsen mit Ihrem Unternehmen.",
                },
                {
                    title: "Langfristige Kosteneffizienz",
                    desc:
                        "Optimierte Prozesse senken operative Kosten und steigern die Produktivität nachhaltig.",
                },
            ],
        },

        deliverables: [
            "Individuell entwickelte n8n-Workflows",
            "KI-gestützte Chatbots und Assistenzsysteme",
            "Automatisierung von Back-Office-Prozessen",
            "CRM-Integrationen (Salesforce, HubSpot u. a.)",
            "Automatisierte Reporting- und Analyse-Systeme",
            "Praxisnahe Workshops für Ihr Team",
        ],

        process: {
            title: "Ihre KI-Automatisierungs-Roadmap",
            steps: [
                {
                    title: "Analyse",
                    desc:
                        "Identifikation von zeitintensiven Prozessen und Automatisierungspotenzialen.",
                },
                {
                    title: "Konzeption",
                    desc:
                        "Planung einer stabilen und effizienten Automatisierungsarchitektur.",
                },
                {
                    title: "Umsetzung",
                    desc:
                        "Entwicklung, Test und Feinabstimmung der KI-Workflows.",
                },
                {
                    title: "Implementierung & Übergabe",
                    desc:
                        "Live-Schaltung, Dokumentation und Schulung Ihres Teams.",
                },
            ],
        },

        cta: {
            title: "Möchten Sie jede Woche wertvolle Zeit sparen?",
            text:
                "Entdecken Sie, wie KI-Automatisierung Ihr Unternehmen in Österreich effizienter machen kann.",
        },

        relatedServices: [
            {
                title: "Webentwicklung",
                link: "/services/app-development/web-app-development",
            },
            {
                title: "Performance Marketing",
                link: "/services/digital-marketing/digital-marketing",
            },
            {
                title: "CRM-Setup & Automatisierung",
                link: "/services/email-automation/crm-setup",
            },
        ],
    },
};
