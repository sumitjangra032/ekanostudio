import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: ["UI/UX Design", "Responsive Web Design", "Custom Website Design"],
        description:
            "Create a stunning, high-performance website that captures your brand's essence and converts visitors into customers.",
    },

    location: {
        name: "Italy",
        slug: "italy",
        type: "country",
        country: "Italy",
        adjective: "Italian",
        context: "in Italy",
        metaTitleSuffix: "Italy | Servizi Digitali",
        traits: ["design excellence", "fashion & industry", "creative market"],
    },

    meta: {
        title: "Progettazione Siti Web Italia | Agenzia Design Premium",
        description:
            "Premium web design for the Italian market. We combine Italian design excellence with cutting-edge technology to build high-converting websites.",
        canonical: "/website-design-italy",
    },

    content: {
        hero: {
            title: "Eccellenza Digitale per il Mercato Italiano",
            subtitle:
                "Uniamo lo stile italiano all'innovazione tecnologica per creare siti web che lasciano il segno.",
        },

        overview: {
            title: "Web Design di Classe per Brand Italiani",
            text:
                "L'Italia è sinonimo di stile e qualità. Il tuo sito web deve rispecchiare questa eredità. ekanostudio realizza siti web moderni, veloci e ottimizzati per il mercato italiano, curando ogni dettaglio estetico e funzionale per garantire il successo della tua azienda online.",
        },

        whyChoose: {
            title: "Perché Scegliere Noi",
            points: [
                {
                    title: "Design Made in Italy",
                    desc: "Estetica raffinata che risuona con il gusto e la cultura italiana.",
                },
                {
                    title: "Ottimizzazione Mobile",
                    desc: "Siti perfettamente fruibili da smartphone, come richiesto dagli utenti italiani.",
                },
                {
                    title: "Conformità GDPR",
                    desc: "Siti sicuri e pronti per le normative europee sulla privacy.",
                },
            ],
        },

        deliverables: [
            "Design UI/UX Personalizzato",
            "Sviluppo Next.js ad alte prestazioni",
            "Gestione Contenuti (CMS)",
            "Ottimizzazione per i Motori di Ricerca",
            "Certificato SSL e Sicurezza",
            "Manutenzione e Supporto"
        ],

        process: {
            title: "Il Nostro Metodo di Lavoro",
            steps: [
                { title: "Strategia", desc: "Definiamo insieme gli obiettivi per il mercato nazionale e internazionale." },
                { title: "Progettazione", desc: "Creiamo layout eleganti e funzionali." },
                { title: "Sviluppo", desc: "Scriviamo codice pulito e performante." },
                { title: "Lancio", desc: "Mettiamo online il tuo sito e ne verifichiamo il successo." }
            ]
        },

        cta: {
            title: "Pronto a digitalizzare la tua impresa?",
            text: "Contattaci per una consulenza gratuita sul tuo prossimo sito web."
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/technical-seo" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
