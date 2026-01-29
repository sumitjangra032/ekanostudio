import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "SEO Italia",
            "Agenzia SEO Italia",
            "Servizi SEO Google.it",
            "SEO Nazionale Italia",
            "Posizionamento Organico Italia",
            "Crescita Organica SEO"
        ],
        description:
            "Servizi SEO avanzati per il mercato italiano. Miglioriamo il posizionamento su Google.it, aumentiamo l’autorità del brand e generiamo traffico organico qualificato.",
    },

    location: {
        name: "Italy",
        slug: "italy",
        type: "country",
        country: "Italy",
        adjective: "Italian",
        context: "in Italia",
        metaTitleSuffix: "Italia | Servizi Digitali",
        traits: ["design excellence", "fashion & industry", "creative market"],
    },

    meta: {
        title: "Agenzia SEO Italia | Posizionamento Google & Crescita",
        description:
            "Scala le SERP italiane con strategie SEO data-driven. Aiutiamo le aziende in Italia a posizionarsi su Google.it e a generare traffico organico ad alto valore.",
        canonical: "/seo-services-italy",
    },

    content: {
        hero: {
            title: "SEO Strategico per il Mercato Italiano",
            subtitle:
                "Visibilità, autorevolezza e crescita organica. Portiamo il tuo brand in prima pagina su Google.it.",
        },

        overview: {
            title: "SEO Costruito per Competere in Italia",
            text:
                "Il mercato digitale italiano è competitivo e fortemente orientato alla qualità. Per ottenere risultati duraturi non basta ottimizzare qualche parola chiave. Ekanostudio sviluppa strategie SEO complete per l’Italia, combinando analisi tecnica, search intent, contenuti autorevoli e link building etico per aiutare le aziende a dominare le ricerche nazionali e locali.",
        },

        whyChoose: {
            title: "Perché Scegliere Ekanostudio per la SEO in Italia",
            points: [
                {
                    title: "SEO Nazionale e Locale",
                    desc: "Strategie mirate per keyword nazionali e ricerche locali in tutte le regioni italiane.",
                },
                {
                    title: "Ottimizzazione Tecnica Avanzata",
                    desc: "Miglioriamo velocità, struttura e indicizzazione per siti di ogni dimensione.",
                },
                {
                    title: "Crescita di Autorità a Lungo Termine",
                    desc: "Link building white-hat e contenuti che rafforzano la reputazione del brand.",
                },
            ],
        },

        deliverables: [
            "Audit SEO Tecnico Completo",
            "Ricerca Keyword e Search Intent (Italia)",
            "Ottimizzazione On-Page e Contenuti",
            "Link Building da Domini Autorevoli .it",
            "SEO Locale e Google Business Profile",
            "Dashboard di Monitoraggio e Report Mensili",
        ],

        process: {
            title: "Il Nostro Metodo SEO per l’Italia",
            steps: [
                {
                    title: "Analisi",
                    desc: "Valutazione approfondita del sito, dei competitor e del mercato italiano.",
                },
                {
                    title: "Ottimizzazione",
                    desc: "Interventi tecnici e contenutistici per migliorare ranking e UX.",
                },
                {
                    title: "Autorità",
                    desc: "Costruzione di segnali di fiducia tramite link e citazioni di qualità.",
                },
                {
                    title: "Scalabilità",
                    desc: "Espansione continua delle keyword e crescita costante del traffico.",
                },
            ],
        },

        cta: {
            title: "Vuoi crescere organicamente in Italia?",
            text: "Richiedi una consulenza SEO gratuita e scopri il tuo potenziale.",
        },

        relatedServices: [
            { title: "Marketing Digitale", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/website-design-uiux" },
        ],
    },
};
