import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Marketing Digital France",
            "Agence Marketing France",
            "Performance Marketing France",
            "Publicité Google France",
            "Agence Social Media France"
        ],
        description:
            "Comprehensive digital marketing solutions to scale your business across all online channels.",
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
        title: "Marketing Digital France | Publicité, Performance & Croissance",
        description:
            "Boostez votre croissance en France. Campagnes Google Ads, Social Media et stratégie digitale optimisées pour le marché français.",
        canonical: "/digital-marketing-france",
    },

    content: {
        hero: {
            title: "Marketing Digital Haute Performance pour la France",
            subtitle:
                "Touchez la bonne audience au bon moment. Nous générons des résultats mesurables pour les entreprises partout en France.",
        },

        overview: {
            title: "Croissance Digitale Adaptée au Marché Français",
            text:
                "Le marketing digital en France est unique : un marché sophistiqué, un public exigeant, et une réglementation stricte (RGPD). Ekanostudio accompagne les entreprises françaises avec des stratégies data-driven mêlant Google Ads, Meta Ads, LinkedIn et email marketing. Chaque campagne est optimisée pour un ROI maximal, tout en respectant les normes européennes.",
        },

        whyChoose: {
            title: "Pourquoi Nous Choisir",
            points: [
                {
                    title: "Conformité RGPD",
                    desc: "Des stratégies marketing pensées pour la confidentialité et la sécurité.",
                },
                {
                    title: "Expertise Locale",
                    desc: "Compréhension approfondie des comportements consommateurs français.",
                },
                {
                    title: "Transparence Totale",
                    desc: "Rapports clairs, KPI suivis et optimisation continue.",
                },
            ],
        },

        deliverables: [
            "Stratégie Digitale Complète",
            "Google Search & Display Ads",
            "Publicité Réseaux Sociaux (Meta, LinkedIn)",
            "Email Marketing & Automatisation",
            "Optimisation du Taux de Conversion (CRO)",
            "Tableaux de Bord & Reporting",
        ],

        process: {
            title: "Méthodologie de Croissance",
            steps: [
                {
                    title: "Analyse",
                    desc: "Étude de vos concurrents et personas en France.",
                },
                {
                    title: "Lancement",
                    desc: "Mise en place des campagnes et tracking avancé.",
                },
                {
                    title: "Optimisation",
                    desc: "Ajustements continus pour un meilleur CPA.",
                },
                {
                    title: "Scale",
                    desc: "Extension de vos campagnes à grande échelle.",
                },
            ],
        },

        cta: {
            title: "Prêt à accélérer votre croissance ?",
            text: "Demandez un audit marketing gratuit pour votre entreprise en France.",
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Création de Contenu", link: "/services/content-creation/content-writing" },
            { title: "Création de Site Web", link: "/services/web-design-development/website-development" },
        ],
    },
};
