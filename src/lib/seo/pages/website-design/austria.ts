import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: [
            "Webdesign Österreich",
            "UI/UX Agentur Österreich",
            "Responsive Webdesign",
            "Corporate Website Austria",
            "Next.js Website Development",
            "Barrierefreies Webdesign",
            "SEO Friendly Webdesign"
        ],
        description:
            "Premium Webdesign und UI/UX-Lösungen für österreichische Unternehmen. Schnelle, moderne und DSGVO-konforme Websites, die Besucher in zahlende Kunden verwandeln.",
    },

    location: {
        name: "Austria",
        slug: "austria",
        type: "country",
        country: "Austria",
        adjective: "Austrian",
        context: "in Österreich",
        metaTitleSuffix: "Österreich | Premium Webdesign",
        traits: ["central european business", "quality focused", "innovation"],
    },

    meta: {
        title: "Webdesign Agentur Österreich | Premium Websites & UI/UX",
        description:
            "Exzellentes Webdesign für Österreich. Wir erstellen schnelle, hochwertige und DSGVO-konforme Websites für KMUs und Unternehmen in Wien, Graz, Linz und Salzburg.",
        canonical: "/website-design-austria",
    },

    content: {
        hero: {
            title: "Modernes Webdesign für österreichische Unternehmen",
            subtitle:
                "Wir entwickeln leistungsstarke Websites, die Vertrauen schaffen, professionell aussehen und messbare Ergebnisse liefern.",
        },

        overview: {
            title: "Professionelle Websites für den österreichischen Markt",
            text:
                "In Österreich zählt Qualität, Präzision und Benutzerfreundlichkeit. Ihre Website muss nicht nur gut aussehen – sie muss performant, sicher und intuitiv sein. Ekanostudio entwickelt maßgeschneiderte Webdesigns, die perfekt auf österreichische Marken und KMUs abgestimmt sind, egal ob in Wien, Innsbruck oder Salzburg.",
        },

        whyChoose: {
            title: "Warum Unternehmen in Österreich uns wählen",
            points: [
                {
                    title: "Modernste UI/UX Standards",
                    desc: "Benutzerfreundliche, konversionsstarke Designs, optimiert für österreichische Nutzer.",
                },
                {
                    title: "DSGVO & Sicherheitskonform",
                    desc: "Hosting, Tracking & Cookies – alles rechtskonform für den österreichischen Markt.",
                },
                {
                    title: "Mobil & Performance Optimiert",
                    desc: "Schnelle Ladezeiten, perfekte Mobile-Darstellung und Top-Werte bei Core Web Vitals.",
                }
            ],
        },

        deliverables: [
            "Individuelles UI/UX Design",
            "Next.js / React Website Entwicklung",
            "CMS-Integration (Headless, WordPress oder Custom)",
            "SEO-Basisoptimierung & Strukturaufbau",
            "Barrierefreies Webdesign (WCAG)",
            "Performance-Optimierung (Core Web Vitals)"
        ],

        process: {
            title: "Unser Website-Prozess",
            steps: [
                {
                    title: "Analyse",
                    desc: "Verstehen Ihrer Ziele, Branche und österreichischen Zielgruppe.",
                },
                {
                    title: "Design",
                    desc: "Erstellung eines klar strukturierten UI/UX-Konzepts mit Wireframes & Prototypen.",
                },
                {
                    title: "Entwicklung",
                    desc: "Sauberer, skalierbarer Code für höchste Geschwindigkeit und Sicherheit.",
                },
                {
                    title: "Launch",
                    desc: "Sicheres Go-Live, Monitoring & fortlaufende Optimierung.",
                }
            ]
        },

        cta: {
            title: "Starten wir Ihr Webprojekt in Österreich",
            text: "Fordern Sie ein unverbindliches Beratungsgespräch an und erfahren Sie, wie wir Ihre neue Website realisieren können.",
        },

        relatedServices: [
            { title: "SEO Services", link: "/services/seo/technical-seo" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
