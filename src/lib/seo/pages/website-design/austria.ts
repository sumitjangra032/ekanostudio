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
        title: "Webdesign Agentur Österreich | Premium UI/UX Design",
        description: "Exzellentes Webdesign für den österreichischen Markt. Wir entwickeln moderne, schnelle und barrierefreie Websites für Unternehmen in Österreich.",
        canonical: "/website-design-austria",
    },
    content: {
        hero: {
            title: "Digitale Exzellenz für österreichische Unternehmen",
            subtitle: "Wir verbinden innovatives Webdesign mit höchster Qualität, um Ihr Business in Österreich online zum Erfolg zu führen.",
        },
        overview: {
            title: "Maßgeschneidertes Webdesign für Österreich",
            text: "Der österreichische Markt verlangt nach Präzision und Verlässlichkeit. Ihre Website ist Ihr digitales Aushängeschild. ekanostudio bietet professionelles Webdesign, das genau auf die Bedürfnisse österreichischer KMUs und etablierter Marken zugeschnitten ist – von Wien bis Salzburg.",
        },
        whyChoose: {
            title: "Ihre Vorteile mit Uns",
            points: [
                { title: "Höchste Qualität", desc: "Design und Code nach modernsten österreichischen und EU-Standards." },
                { title: "DSGVO-Konformität", desc: "Sichere Websites, die alle Datenschutzbestimmungen erfüllen." },
                { title: "Mobile Optimierung", desc: "Perfekte Darstellung auf allen Geräten für Ihre Kunden." }
            ]
        },
        deliverables: [
            "Individuelles UI/UX Design",
            "Next.js Frontend-Entwicklung",
            "Content Management System (CMS)",
            "Suchmaschinenoptimierung (SEO)",
            "Barrierefreies Design (WCAG)",
            "Schnelle Ladezeiten (Core Web Vitals)"
        ],
        process: {
            title: "Unser Weg zum Erfolg",
            steps: [
                { title: "Beratung", desc: "Wir analysieren Ihre Ziele für den österreichischen Markt." },
                { title: "Konzept", desc: "Erstellung von Wireframes und Design-Entwürfen." },
                { title: "Umsetzung", desc: "Präzise Programmierung mit Fokus auf Performance." },
                { title: "Go-Live", desc: "Sicherer Launch und fortlaufende Betreuung." }
            ]
        },
        cta: {
            title: "Bereit für Ihre neue Website?",
            text: "Kontaktieren Sie uns für ein unverbindliches Erstgespräch in Österreich."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/technical-seo" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
