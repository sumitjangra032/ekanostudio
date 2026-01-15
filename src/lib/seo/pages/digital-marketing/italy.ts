import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: ["Online Marketing", "Performance Marketing", "Brand Growth"],
        description: "Comprehensive digital marketing solutions to scale your business across all online channels.",
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
        title: "Marketing Digitale Italia | Crescita e Performance Online",
        description: "Accellera la crescita della tua azienda in Italia. Gestiamo campagne Google Ads, Social e Email Marketing ottimizzate per il mercato italiano.",
        canonical: "/digital-marketing-italy",
    },
    content: {
        hero: {
            title: "Strategie di Marketing per il Successo in Italia",
            subtitle: "Non cerchiamo solo visualizzazioni: guidiamo risultati concreti e vendite per la tua attività in Italia.",
        },
        overview: {
            title: "Crescita Gestita per Imprese Italiane",
            text: "Il marketing digitale in Italia richiede una profonda conoscenza dei canali e delle abitudini degli utenti locali. ekanostudio offre soluzioni di marketing a 360 gradi, integrando pubblicità sui social media, campagne search e strategie di fidelizzazione via email per coprire ogni fase del customer journey.",
        },
        whyChoose: {
            title: "Il Nostro Vantaggio Competitivo",
            points: [
                { title: "Performance Data-Driven", desc: "Monitoriamo ogni euro investito per massimizzare il ROAS." },
                { title: "Approccio Multicanale", desc: "Siamo presenti dove si trovano i tuoi clienti italiani." },
                { title: "Personalizzazione Totale", desc: "Nessuna strategia preconfezionata, solo soluzioni su misura." }
            ]
        },
        deliverables: [
            "Strategia di Crescita Digitale",
            "Gestione Google Ads (Search & Display)",
            "Social Media Advertising (Meta, LinkedIn, Tik Tok)",
            "Email Marketing e Automation",
            "Conversion Rate Optimization (CRO)",
            "Supporto Strategico Continuo"
        ],
        process: {
            title: "Il Tuo Ciclo di Crescita",
            steps: [
                { title: "Pianificazione", desc: "Definiamo il piano d’azione basato sul target italiano." },
                { title: "Esecuzione", desc: "Lanciamo campagne targetizzate con creatività coinvolgenti." },
                { title: "Ottimizzazione", desc: "Affinamento continuo delle audience e dei messaggi." },
                { title: "Reporting", desc: "Dati chiari e trasparenti sui progressi ottenuti." }
            ]
        },
        cta: {
            title: "Pronto a scalare il tuo business?",
            text: "Parla con un nostro esperto di marketing digitale in Italia."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Creazione Contenuti", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" }
        ]
    }
};
