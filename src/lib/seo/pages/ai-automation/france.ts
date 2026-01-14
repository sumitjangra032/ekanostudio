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
        name: "France",
        slug: "france",
        type: "country",
        country: "France",
        adjective: "French",
        context: "in France",
        metaTitleSuffix: "France | Agence Numérique",
        traits: ["luxury brands", "art & culture", "european market"],
    },
    meta: {
        title: "Automatisation IA France | Solutions n8n & Chatbots",
        description: "Modernisez votre entreprise. We build custom AI and automation workflows to boost productivity for French companies.",
        canonical: "/ai-automation-france",
    },
    content: {
        hero: {
            title: "L'Intelligence Artificielle pour les Entreprises Françaises",
            subtitle: "Optimize operations. Reduce costs. We bring advanced AI automation to the French market.",
        },
        overview: {
            title: "Efficacité Opérationnelle par l'IA",
            text: "French businesses are embracing digital transformation to stay competitive. Ekanostudio brings the power of AI automation to France. utilizing tools like n8n and OpenAI, we help you automate administrative tasks, customer support, and data processing—all while ensuring data sovereignty and security.",
        },
        whyChoose: {
            title: "Pourquoi Automatiser",
            points: [
                { title: "Gain de Temps", desc: "Free up your team for high-value tasks." },
                { title: "Service Client 24/7", desc: "AI agents that speak perfect French." },
                { title: "Sécurité des Données", desc: "Workflows designed with privacy in mind." }
            ]
        },
        deliverables: [
            "Workflows n8n Sur Mesure",
            "Chatbots IA Service Client",
            "Automatisation Administrative",
            "Intégration CRM (Salesforce/Hubspot)",
            "Génération de Rapports Automatique",
            "Formation des Équipes"
        ],
        process: {
            title: "Projet d'Automatisation",
            steps: [
                { title: "Audit", desc: "Identifying opportunities for automation." },
                { title: "Design", desc: "Creating the workflow architecture." },
                { title: "Construction", desc: "Developing the AI agents and scripts." },
                { title: "Déploiement", desc: "Integration and team training." }
            ]
        },
        cta: {
            title: "Prêt à innover ?",
            text: "Découvrez nos solutions d'automatisation."
        },
        relatedServices: [
            { title: "Développement Web", link: "/services/app-development/web-app-development" },
            { title: "Marketing Digital", link: "/services/digital-marketing/digital-marketing" },
            { title: "CRM", link: "/services/email-automation/crm-setup" }
        ]
    }
};
