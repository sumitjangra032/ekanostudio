import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "seo-services",
        name: "SEO Services",
        slug: "seo-services",
        targetServiceSlug: "on-page-seo",
        categorySlug: "seo",
        keywords: [
            "Agence SEO France",
            "SEO Google.fr",
            "Référencement Naturel France",
            "SEO pour Entreprises Françaises",
            "Optimisation Mots-clés FR",
            "Consultant SEO France"
        ],
        description:
            "SEO spécialisé pour le marché français. Maximisez vos positions sur Google.fr grâce à nos stratégies data-driven et adaptées à la culture française.",
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
        title: "Agence SEO France | Experts en Référencement Google.fr",
        description:
            "Augmentez votre visibilité en France. Nous proposons des stratégies SEO avancées pour vous positionner sur les requêtes à forte intention sur Google.fr.",
        canonical: "/seo-services-france",
    },

    content: {
        hero: {
            title: "Stratégies SEO Avancées pour le Marché Français",
            subtitle:
                "Renforcez votre visibilité sur Google.fr. Nous accompagnons les entreprises françaises vers des résultats SEO mesurables et durables.",
        },

        overview: {
            title: "Un SEO Aligné avec les Exigences du Marché Français",
            text:
                "Le référencement en France repose sur une compréhension précise de la recherche sémantique, des habitudes linguistiques et du comportement digital hexagonal. Nous optimisons vos contenus en français natif, renforçons votre autorité avec des backlinks FR de qualité, et améliorons la performance technique de votre site pour offrir une expérience adaptée au public français et conforme aux standards européens.",
        },

        whyChoose: {
            title: "Pourquoi Choisir Notre Agence SEO en France ?",
            points: [
                {
                    title: "SEO 100% Français",
                    desc: "Rédaction, optimisation et balisage en parfait français, sans traduction approximative.",
                },
                {
                    title: "Backlinks FR de Confiance",
                    desc: "Partenariats avec sites français, médias locaux et annuaires professionnels.",
                },
                {
                    title: "Performance Européenne",
                    desc: "Optimisation technique adaptée aux normes UX, RGPD et Core Web Vitals en Europe.",
                },
            ],
        },

        deliverables: [
            "Audit Technique SEO (FR)",
            "Étude de Mots-clés pour Google.fr",
            "Optimisation On-Page en Français",
            "Stratégie de Netlinking Locale",
            "SEO Local pour Google Maps",
            "Rapports Mensuels de Performance",
        ],

        process: {
            title: "Notre Méthodologie SEO France",
            steps: [
                {
                    title: "Analyse",
                    desc: "Évaluation de votre visibilité actuelle sur Google.fr et vos concurrents français.",
                },
                {
                    title: "Optimisation",
                    desc: "Révision du contenu, du maillage interne et de la structure technique.",
                },
                {
                    title: "Autorité",
                    desc: "Acquisition de backlinks qualitatifs provenant de domaines français.",
                },
                {
                    title: "Suivi",
                    desc: "Mesure continue du trafic, des mots-clés et des conversions.",
                },
            ],
        },

        cta: {
            title: "Prêt à gagner en visibilité ?",
            text: "Recevez une analyse SEO gratuite de votre site dès aujourd’hui.",
        },

        relatedServices: [
            { title: "Marketing Digital", link: "/services/digital-marketing/digital-marketing" },
            { title: "Rédaction Web", link: "/services/content-creation/content-writing" },
            { title: "Développement Web", link: "/services/web-design-development/website-development" },
        ],
    },
};
