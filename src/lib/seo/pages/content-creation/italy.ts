import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Creazione Contenuti Italia",
            "Content Marketing Italia",
            "Copywriting Professionale",
            "Produzione Video Italia",
            "Strategia di Contenuto"
        ],
        description:
            "Servizi di creazione contenuti in Italia: copywriting, video e contenuti digitali progettati per rafforzare brand, visibilità e autorevolezza.",
    },

    location: {
        name: "Italy",
        slug: "italy",
        type: "country",
        country: "Italy",
        adjective: "Italian",
        context: "in Italia",
        metaTitleSuffix: "Italia | Content & Media Studio",
        traits: ["design excellence", "fashion & industry", "creative market"],
    },

    meta: {
        title: "Creazione Contenuti Italia | Video, Copywriting e Strategia",
        description:
            "Creiamo contenuti di alta qualità per il mercato italiano: video, testi e visual pensati per coinvolgere, posizionare e far crescere il tuo brand.",
        canonical: "/content-creation-italy",
    },

    content: {
        hero: {
            title: "Contenuti Pensati per il Mercato Italiano",
            subtitle:
                "Creatività, strategia e qualità editoriale per brand che vogliono distinguersi in Italia.",
        },

        overview: {
            title: "Lo Storytelling come Vantaggio Competitivo",
            text:
                "In Italia, il contenuto non è solo comunicazione: è percezione, stile e fiducia. Ekanostudio supporta aziende e brand nella creazione di contenuti digitali che uniscono estetica e strategia. Dalla scrittura SEO-oriented alla produzione video professionale, sviluppiamo asset pensati per rafforzare l’identità del brand e generare risultati concreti nel tempo.",
        },

        whyChoose: {
            title: "Perché Investire nei Contenuti Giusti",
            points: [
                {
                    title: "Copywriting di Qualità",
                    desc:
                        "Testi chiari, autentici e ottimizzati, scritti in italiano professionale.",
                },
                {
                    title: "Produzione Visiva Curata",
                    desc:
                        "Video e grafiche coerenti con il gusto estetico e gli standard italiani.",
                },
                {
                    title: "Approccio Strategico",
                    desc:
                        "Ogni contenuto è progettato per supportare visibilità, posizionamento e fiducia.",
                },
            ],
        },

        deliverables: [
            "Produzione video e post-produzione professionale",
            "Copywriting per siti web e blog aziendali",
            "Contenuti visivi per social media",
            "Newsletter e comunicazioni digitali",
            "White paper e case study",
            "Script per video, spot e presentazioni",
        ],

        process: {
            title: "Il Nostro Metodo di Lavoro",
            steps: [
                {
                    title: "Analisi",
                    desc:
                        "Studio del brand, del pubblico e del contesto competitivo italiano.",
                },
                {
                    title: "Strategia",
                    desc:
                        "Definizione del messaggio, dei formati e dei canali di distribuzione.",
                },
                {
                    title: "Produzione",
                    desc:
                        "Creazione dei contenuti con attenzione a qualità, coerenza e SEO.",
                },
                {
                    title: "Consegna",
                    desc:
                        "Asset pronti per l’uso su web, social e campagne digitali.",
                },
            ],
        },

        cta: {
            title: "Vuoi rafforzare la tua presenza in Italia?",
            text:
                "Costruiamo contenuti che rappresentano davvero il tuo brand.",
        },

        relatedServices: [
            {
                title: "Social Media Marketing",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "SEO & Content Optimization",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Brand Identity & Design",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
