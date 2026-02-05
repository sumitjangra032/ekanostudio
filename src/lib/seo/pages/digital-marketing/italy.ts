import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Marketing Digitale Italia",
            "Agenzia Digital Marketing Italia",
            "Google Ads Italia",
            "Social Media Marketing Italia",
            "Performance Marketing Italia",
            "Lead Generation Italia"
        ],
        description:
            "Soluzioni complete di digital marketing per far crescere il tuo business online nel mercato italiano.",
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
        title: "Marketing Digitale Italia | Crescita & Performance",
        description:
            "Accelera la crescita in Italia con strategie di digital marketing orientate ai risultati. Gestiamo Google Ads, Social Media ed email automation.",
        canonical: "/digital-marketing-italy",
    },

    content: {
        hero: {
            title: "Marketing Digitale Orientato ai Risultati per il Mercato Italiano",
            subtitle:
                "Non puntiamo solo alla visibilità. Costruiamo strategie che generano lead, vendite e crescita reale per il tuo business in Italia.",
        },

        overview: {
            title: "Strategie Digitali su Misura per le Aziende Italiane",
            text:
                "Il mercato digitale italiano è competitivo e guidato dalla fiducia. Per ottenere risultati servono strategia, dati e creatività. Ekanostudio sviluppa sistemi di marketing digitale completi, combinando Google Ads, social advertising e funnel di conversione per accompagnare il cliente dalla scoperta all’acquisto.",
        },

        whyChoose: {
            title: "Perché Sceglierci",
            points: [
                {
                    title: "Performance Basate sui Dati",
                    desc: "Ogni campagna è monitorata e ottimizzata per massimizzare ROAS e conversioni.",
                },
                {
                    title: "Approccio Multicanale",
                    desc: "Integriamo Search, Social ed Email per coprire l’intero customer journey.",
                },
                {
                    title: "Strategie Personalizzate",
                    desc: "Ogni business è diverso: costruiamo piani su misura per il mercato italiano.",
                },
            ],
        },

        deliverables: [
            "Strategia di Marketing Digitale Personalizzata",
            "Gestione Google Ads (Search, Display, Shopping)",
            "Social Media Advertising (Meta, LinkedIn, TikTok)",
            "Email Marketing & Marketing Automation",
            "Ottimizzazione del Tasso di Conversione (CRO)",
            "Analisi e Supporto Strategico Continuo",
        ],

        process: {
            title: "Il Nostro Metodo di Crescita",
            steps: [
                {
                    title: "Analisi",
                    desc: "Studio del target italiano, dei competitor e del posizionamento di mercato.",
                },
                {
                    title: "Implementazione",
                    desc: "Lancio delle campagne con creatività e messaggi ad alta conversione.",
                },
                {
                    title: "Ottimizzazione",
                    desc: "Miglioramento continuo di audience, annunci e funnel.",
                },
                {
                    title: "Reporting",
                    desc: "Report chiari e trasparenti sui risultati ottenuti.",
                },
            ],
        },

        cta: {
            title: "Vuoi far crescere il tuo business in Italia?",
            text: "Prenota una consulenza gratuita con i nostri esperti di marketing digitale.",
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Creazione Contenuti", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" },
        ],
    },
};
