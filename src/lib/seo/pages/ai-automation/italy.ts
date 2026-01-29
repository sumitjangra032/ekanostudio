import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "Automazione IA Italia",
            "Automazione dei processi aziendali",
            "Workflow IA",
            "Integrazione n8n"
        ],
        description:
            "Ottimizza i processi aziendali e riduci il lavoro manuale grazie a soluzioni di automazione IA su misura e workflow n8n sicuri.",
    },

    location: {
        name: "Italy",
        slug: "italy",
        type: "country",
        country: "Italy",
        adjective: "Italian",
        context: "in Italia",
        metaTitleSuffix: "Italia | Automazione IA per Aziende",
        traits: ["PMI innovative", "brand orientati al design", "settori industriali"],
    },

    meta: {
        title: "Automazione IA Italia | Workflow n8n & Soluzioni",
        description:
            "Soluzioni di automazione IA per aziende italiane. Progettiamo workflow n8n e sistemi intelligenti per aumentare l’efficienza e ridurre i costi operativi.",
        canonical: "/ai-automation-italy",
    },

    content: {
        hero: {
            title: "Automazione IA per le Aziende Italiane",
            subtitle:
                "Riduci le attività ripetitive e migliora l’efficienza operativa con soluzioni di automazione intelligenti.",
        },

        overview: {
            title: "Efficienza Operativa e Innovazione con l’Intelligenza Artificiale",
            text:
                "Il tessuto imprenditoriale italiano è composto da PMI, brand orientati al design e realtà industriali che richiedono efficienza e affidabilità. Ekanostudio supporta le aziende in Italia nell’adozione dell’automazione IA attraverso tecnologie come n8n e OpenAI. Automatizziamo processi chiave come la gestione dei lead, il customer service, la fatturazione e il reporting, garantendo sicurezza, controllo e continuità operativa.",
        },

        whyChoose: {
            title: "Perché Investire nell’Automazione IA",
            points: [
                {
                    title: "Scalabilità Senza Complessità",
                    desc:
                        "Gestisci volumi di lavoro crescenti senza aumentare il carico operativo o il personale amministrativo.",
                },
                {
                    title: "Riduzione degli Errori Operativi",
                    desc:
                        "I workflow automatizzati assicurano precisione e coerenza in ogni fase del processo.",
                },
                {
                    title: "Integrazione con i Tuoi Sistemi",
                    desc:
                        "Colleghiamo CRM, email, ERP e strumenti interni per creare un ecosistema digitale fluido.",
                },
            ],
        },

        deliverables: [
            "Analisi e mappatura dei processi aziendali",
            "Workflow n8n personalizzati e integrazioni API",
            "Agenti IA per il servizio clienti",
            "Automazione dei processi di lead management",
            "Sistemi di reporting e monitoraggio automatici",
            "Formazione e trasferimento di competenze al team",
        ],

        process: {
            title: "Il Nostro Metodo di Implementazione",
            steps: [
                {
                    title: "Analisi",
                    desc:
                        "Individuiamo i colli di bottiglia e le opportunità di automazione.",
                },
                {
                    title: "Sviluppo",
                    desc:
                        "Progettiamo e testiamo workflow IA su misura per la tua azienda.",
                },
                {
                    title: "Integrazione",
                    desc:
                        "Connettiamo i tuoi strumenti digitali in modo sicuro ed efficiente.",
                },
                {
                    title: "Avviamento e Formazione",
                    desc:
                        "Mettiamo il sistema in produzione e formiamo il tuo team.",
                },
            ],
        },

        cta: {
            title: "Vuoi rendere la tua azienda più efficiente?",
            text:
                "Scopri come l’automazione IA può supportare la crescita della tua impresa in Italia.",
        },

        relatedServices: [
            {
                title: "Sviluppo Web",
                link: "/services/app-development/web-app-development",
            },
            {
                title: "Marketing Digitale",
                link: "/services/digital-marketing/digital-marketing",
            },
            {
                title: "CRM & Automazione",
                link: "/services/email-automation/crm-setup",
            },
        ],
    },
};
