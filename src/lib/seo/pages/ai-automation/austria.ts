import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: ["Business Automation", "AI Workflows", "n8n Integration"],
        description: "Streamline your operations and reduce costs with cutting-edge AI automation and workflow optimization.",
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
        title: "KI-Automatisierung Österreich | Intelligente Workflows & n8n",
        description: "Modernisieren Sie Ihr österreichisches Unternehmen mit KI. Wir bauen maßgeschneiderte Automatisierungen, um Zeit zu sparen und Kosten zu senken.",
        canonical: "/ai-automation-austria",
    },
    content: {
        hero: {
            title: "Künstliche Intelligenz für Österreichs Wirtschaft",
            subtitle: "Eliminieren Sie mühsame Routineaufgaben und steigern Sie die Effizienz Ihres Teams durch smarte Automatisierung.",
        },
        overview: {
            title: "Effizienz durch intelligente Prozesse",
            text: "Österreichische Unternehmen setzen verstärkt auf digitale Transformation. Ekanostudio bringt modernste KI-Automatisierung in die Alpenrepublik. Mit n8n und OpenAI entwickeln wir Workflows, die Ihre Datenverarbeitung, Lead-Verwaltung und Kundenkommunikation sicher und effizient automatisieren.",
        },
        whyChoose: {
            title: "Warum Automatisierung?",
            points: [
                { title: "Zeitgewinn", desc: "Mehr Fokus auf strategische Aufgaben statt auf Datenpflege." },
                { title: "Sichere Umsetzung", desc: "Automatisierungen unter Berücksichtigung lokaler Standards." },
                { title: "Kostensenkung", desc: "Nachhaltige Optimierung Ihrer operativen Ausgaben." }
            ]
        },
        deliverables: [
            "Individuelle n8n Workflows",
            "KI-gestützte Chatbots",
            "Automatisierung von Back-Office Prozessen",
            "CRM-Integrationen (Salesforce, HubSpot, etc.)",
            "Automatisierte Reporting-Systeme",
            "Workshops für Ihr Team"
        ],
        process: {
            title: "Ihre Automatisierungs-Roadmap",
            steps: [
                { title: "Diagnose", desc: "Identifikation von Zeitfressern in Ihrem Unternehmen." },
                { title: "Planung", desc: "Architektur des perfekten automatisierten Workflows." },
                { title: "Coding", desc: "Entwicklung und Testen der Automatisierungen." },
                { title: "Handoff", desc: "Implementierung und Einschulung Ihres Teams." }
            ]
        },
        cta: {
            title: "Wollen Sie 10+ Stunden pro Woche sparen?",
            text: "Entdecken Sie die Möglichkeiten der KI für Ihr Unternehmen in Österreich."
        },
        relatedServices: [
            { title: "Web Entwicklung", link: "/services/app-development/web-app-development" },
            { title: "Performance Marketing", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" }
        ]
    }
};
