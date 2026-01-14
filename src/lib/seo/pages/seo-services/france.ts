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
        title: "Agence SEO France | Référencement Naturel Google.fr",
        description: "Boost your visibility on Google France. We offer specialized French SEO services to help you rank for high-value keywords in L'Hexagone.",
        canonical: "/seo-services-france",
    },
    content: {
        hero: {
            title: "Expertise SEO pour le Marché Français",
            subtitle: "Dominate search results on Google.fr. We help French companies capture organic traffic and leads.",
        },
        overview: {
            title: "Référencement Naturel Stratégique",
            text: "Ranking in France requires mastering French search intent and semantic structure. Ekanostudio offers dedicated SEO services for the French market. We optimize your content for Google.fr, build high-quality links from French domains, and ensure your technical foundation supports your growth across the country.",
        },
        whyChoose: {
            title: "Nos Atouts SEO",
            points: [
                { title: "French Native SEO", desc: "Optimization for correct French grammar and idioms." },
                { title: "Local Netlinking", desc: "Acquiring backlinks from trusted French media sites." },
                { title: "Technical Excellence", desc: "Optimizing Core Web Vitals for European users." }
            ]
        },
        deliverables: [
            "Audit SEO Technique",
            "Recherche de Mots-clés",
            "Optimisation de Contenu (FR)",
            "Netlinking & Relations Presse",
            "Référencement Local (Maps)",
            "Rapport Mensuel de Positionnement"
        ],
        process: {
            title: "Stratégie de Référencement",
            steps: [
                { title: "Audit", desc: "Analyzing your current visibility in France." },
                { title: "Optimisation", desc: "Improving site structure and content." },
                { title: "Autorité", desc: "Building trust through quality backlinks." },
                { title: "Suivi", desc: "Monitoring traffic and conversions." }
            ]
        },
        cta: {
            title: "Vous voulez plus de trafic ?",
            text: "Analysez votre site gratuitement aujourd'hui."
        },
        relatedServices: [
            { title: "Marketing Digital", link: "/services/digital-marketing/digital-marketing" },
            { title: "Rédaction Web", link: "/services/content-creation/content-writing" },
            { title: "Développement Web", link: "/services/web-design-development/website-development" }
        ]
    }
};
