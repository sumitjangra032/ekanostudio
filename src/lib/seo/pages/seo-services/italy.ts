import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: ["Search Engine Optimization", "Keyword Ranking", "Organic Traffic Growth"],
        description: "Boost your search engine rankings and drive organic traffic with our data-driven SEO strategies.",
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
        title: "Agenzia SEO Italia | Posizionamento su Google.it",
        description: "Migliora la visibilità del tuo business in Italia. Strategie SEO data-driven per scalare le classifiche di Google.it e attirare traffico qualificato.",
        canonical: "/seo-services-italy",
    },
    content: {
        hero: {
            title: "Domina le Ricerche in Italia",
            subtitle: "Portiamo il tuo sito in prima pagina su Google.it per connetterti con migliaia di potenziali clienti italiani.",
        },
        overview: {
            title: "Strategie SEO per il Successo in Italia",
            text: "In un mercato competitivo come quello italiano, essere visibili online è fondamentale. Ekanostudio offre servizi SEO completi, dall'analisi tecnica alla creazione di contenuti ottimizzati, per garantire che la tua azienda sia la prima scelta degli utenti in Italia.",
        },
        whyChoose: {
            title: "Perché Partner SEO Ekanostudio",
            points: [
                { title: "Local SEO Focus", desc: "Ottimizziamo la tua presenza per le ricerche locali in tutta Italia." },
                { title: "Link Building Etica", desc: "Otteniamo backlink da domini .it autorevoli e pertinenti." },
                { title: "Analisi di Mercato", desc: "Studiamo i competitor italiani per superare i loro risultati." }
            ]
        },
        deliverables: [
            "Audit SEO Tecnico",
            "Ricerca Parole Chiave strategiche",
            "SEO On-Page e Ottimizzazione Contenuti",
            "Strategia di Link Building",
            "Ottimizzazione Google Business Profile",
            "Reporting Mensile dettagliato"
        ],
        process: {
            title: "Il Nostro Percorso SEO",
            steps: [
                { title: "Analisi", desc: "Esaminiamo il tuo sito e il panorama competitivo italiano." },
                { title: "Ottimizzazione", desc: "Interveniamo sulla struttura e sui testi per piacere a Google." },
                { title: "Crescita", desc: "Aumentiamo l'autorità del tuo dominio con link di valore." },
                { title: "Risultati", desc: "Monitoriamo costantemente il traffico e le conversioni." }
            ]
        },
        cta: {
            title: "Vuoi scalare i risultati di ricerca?",
            text: "Richiedi un'analisi SEO gratuita del tuo sito web."
        },
        relatedServices: [
            { title: "Marketing Digitale", link: "/services/digital-marketing/digital-marketing" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "Web Design", link: "/services/web-design-development/website-design-uiux" }
        ]
    }
};
