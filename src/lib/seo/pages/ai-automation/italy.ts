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
        title: "Automazione IA Italia | Soluzioni n8n e Workflow Intelligenti",
        description: "Trasforma la tua azienda italiana con l'intelligenza artificiale. Automatizziamo processi e integriamo AI per ridurre i costi e aumentare l'efficienza.",
        canonical: "/ai-automation-italy",
    },
    content: {
        hero: {
            title: "L'Intelligenza Artificiale al Servizio delle Imprese Italiane",
            subtitle: "Riduci le attività ripetitive e libera il potenziale del tuo team con l'automazione intelligente.",
        },
        overview: {
            title: "Efficienza Operativa con l'IA",
            text: "L'Italia sta entrando in una nuova era di digitalizzazione. Ekanostudio porta le soluzioni più avanzate di AI Automation nel Bel Paese. Utilizzando strumenti come n8n e OpenAI, creiamo workflow personalizzati che gestiscono autonomamente lead, fatturazione, customer care e molto altro, garantendo sicurezza e conformità.",
        },
        whyChoose: {
            title: "Perché Automatizzare Ora",
            points: [
                { title: "Scalabilità Immediata", desc: "Gestisci più lavoro senza dover assumere nuovo personale amministrativo." },
                { title: "Zero Errori Manuali", desc: "L'automazione garantisce precisione costante in ogni operazione." },
                { title: "Integrazione Perfetta", desc: "Colleghiamo i tuoi software (CRM, Email, ERP) per farli lavorare insieme." }
            ]
        },
        deliverables: [
            "Analisi e Mappatura dei Processi",
            "Workflow n8n e Integrazioni API",
            "Agenti AI per Customer Service",
            "Automazione Lead Generation",
            "Sistemi di Reporting Automatici",
            "Formazione e Trasferimento Tecnologico"
        ],
        process: {
            title: "La Tua Roadmap verso l'Automazione",
            steps: [
                { title: "Audit", desc: "Identifichiamo i colli di bottiglia operativi nella tua azienda." },
                { title: "Sviluppo", desc: "Costruiamo e testiamo i tuoi workflow personalizzati." },
                { title: "Integrazione", desc: "Mettiamo in comunicazione i tuoi strumenti digitali." },
                { title: "Handoff", desc: "Ti consegniamo il sistema e formiamo il tuo personale." }
            ]
        },
        cta: {
            title: "Vuoi risparmiare tempo e risorse?",
            text: "Scopri come l'AI può trasformare la tua realtà in Italia."
        },
        relatedServices: [
            { title: "Sviluppo Web", link: "/services/app-development/web-app-development" },
            { title: "Marketing Digitale", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM Setup", link: "/services/email-automation/crm-setup" }
        ]
    }
};
