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
        title: "Marketing Digital France | Publicité & Croissance",
        description: "Accélérez votre croissance en France. We manage high-performance campaigns on Google and Social Media suited for the French market.",
        canonical: "/digital-marketing-france",
    },
    content: {
        hero: {
            title: "Performance Marketing pour le Marché Français",
            subtitle: "Reach the right audience. We drive measurable results for businesses across France.",
        },
        overview: {
            title: "Croissance Numérique en France",
            text: "Digital marketing in France is evolving fast. You need a partner who understands the local ecosystem. ekanostudio provides rigorous performance marketing services. We manage campaigns across Google, Meta, and LinkedIn, ensuring strict adherence to RGPD (GDPR) while delivering maximum ROI for your budget.",
        },
        whyChoose: {
            title: "Notre Approche",
            points: [
                { title: "Respect RGPD", desc: "Privacy-first marketing strategies." },
                { title: "Local Platforms", desc: "Experience with French consumer behaviors." },
                { title: "Reporting Clair", desc: "Transparent metrics on your growth." }
            ]
        },
        deliverables: [
            "Stratégie Digitale Globale",
            "Campagnes Google Ads",
            "Publicité Réseaux Sociaux",
            "Email Marketing Automatisé",
            "Optimisation du Taux de Conversion",
            "Tableaux de Bord de Performance"
        ],
        process: {
            title: "Cycle de Croissance",
            steps: [
                { title: "Analyse", desc: "Understanding your French competitors and audience." },
                { title: "Lancement", desc: "Deploying targeted ad campaigns." },
                { title: "Optimisation", desc: "Refining for better CPA and ROI." },
                { title: "Scale", desc: "Expanding your reach nationwide." }
            ]
        },
        cta: {
            title: "Prêt à croître ?",
            text: "Demandez votre audit marketing gratuit."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Création de Contenu", link: "/services/content-creation/content-writing" },
            { title: "Création Site Web", link: "/services/web-design-development/website-development" }
        ]
    }
};
