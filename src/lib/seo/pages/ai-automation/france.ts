import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "ai-automation",
        name: "AI Automation",
        slug: "ai-automation",
        targetServiceSlug: "ai-automation-n8n",
        categorySlug: "ai-automation",
        keywords: [
            "Automatisation IA France",
            "Automatisation des processus",
            "Workflows IA",
            "Intégration n8n"
        ],
        description:
            "Optimisez vos processus métiers et réduisez les tâches manuelles grâce à des solutions d’automatisation IA sur mesure et des workflows n8n sécurisés.",
    },

    location: {
        name: "France",
        slug: "france",
        type: "country",
        country: "France",
        adjective: "French",
        context: "en France",
        metaTitleSuffix: "France | Agence d’Automatisation IA",
        traits: ["marques premium", "entreprises établies", "marché européen"],
    },

    meta: {
        title: "Automatisation IA en France | Workflows n8n & Chatbots",
        description:
            "Solutions d’automatisation IA. Nous concevons des workflows n8n et des agents intelligents pour améliorer la productivité et réduire les coûts.",
        canonical: "/ai-automation-france",
    },

    content: {
        hero: {
            title: "Automatisation IA pour les Entreprises Françaises",
            subtitle:
                "Améliorez l’efficacité opérationnelle et réduisez les coûts grâce à des solutions d’automatisation intelligentes adaptées au marché français.",
        },

        overview: {
            title: "Automisation Intelligente des Processus Métiers",
            text:
                "Les entreprises françaises adoptent l’automatisation pour rester compétitives tout en maintenant des standards élevés de qualité et de conformité. Ekanostudio accompagne les organisations en France dans la mise en place de solutions d’automatisation IA basées sur n8n et OpenAI. Nous automatisons des processus clés comme le support client, le traitement des données et les tâches administratives, tout en respectant les exigences de sécurité et de souveraineté des données.",
        },

        whyChoose: {
            title: "Pourquoi Choisir l’Automatisation IA",
            points: [
                {
                    title: "Gain de Temps Mesurable",
                    desc:
                        "Libérez vos équipes des tâches répétitives afin qu’elles se concentrent sur des missions à forte valeur ajoutée.",
                },
                {
                    title: "Support Client Multicanal 24/7",
                    desc:
                        "Des agents IA capables de communiquer naturellement en français sur vos canaux digitaux.",
                },
                {
                    title: "Sécurité et Conformité",
                    desc:
                        "Des workflows conçus avec une attention particulière à la protection des données et aux normes européennes.",
                },
            ],
        },

        deliverables: [
            "Workflows n8n personnalisés",
            "Chatbots IA pour le service client",
            "Automatisation des processus administratifs",
            "Intégrations CRM (Salesforce, HubSpot, etc.)",
            "Systèmes de reporting automatisés",
            "Formation et accompagnement des équipes",
        ],

        process: {
            title: "Notre Méthodologie d’Automatisation",
            steps: [
                {
                    title: "Audit",
                    desc:
                        "Analyse de vos processus afin d’identifier les opportunités d’automatisation.",
                },
                {
                    title: "Conception",
                    desc:
                        "Définition d’une architecture de workflows fiable et évolutive.",
                },
                {
                    title: "Développement",
                    desc:
                        "Création et tests des agents IA et des automatisations.",
                },
                {
                    title: "Déploiement",
                    desc:
                        "Mise en production, intégration et formation de vos équipes.",
                },
            ],
        },

        cta: {
            title: "Prêt à automatiser vos processus ?",
            text:
                "Découvrez comment l’automatisation IA peut transformer votre entreprise en France.",
        },

        relatedServices: [
            {
                title: "Développement Web",
                link: "/services/app-development/web-app-development",
            },
            {
                title: "Marketing Digital",
                link: "/services/digital-marketing/digital-marketing",
            },
            {
                title: "CRM & Automatisation",
                link: "/services/email-automation/crm-setup",
            },
        ],
    },
};
