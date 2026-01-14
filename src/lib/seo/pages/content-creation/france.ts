import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: ["Content Marketing", "Copywriting", "Video Production"],
        description: "Engage your audience with compelling content that tells your story and builds brand authority.",
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
        title: "Création de Contenu France | Vidéo, Rédaction & Design",
        description: "Tell your story with French elegance. We produce high-quality video, copywriting, and visual content tailored for the French audience.",
        canonical: "/content-creation-france",
    },
    content: {
        hero: {
            title: "Contenu Créatif pour Marques Françaises",
            subtitle: "Visuals aimed at the heart. Words that persuade. We create premium digital content for France's leading brands.",
        },
        overview: {
            title: "Stratégie de Contenu Premium",
            text: "French consumers demand quality and authenticity. Ekanostudio creates content that meets the high standards of the French market. From video production for luxury brands to SEO copywriting for startups, we ensure your message is culturally relevant, gramatically perfect, and visually stunning.",
        },
        whyChoose: {
            title: "L'Excellence Créative",
            points: [
                { title: "Culture Française", desc: "Content that reflects French values and trends." },
                { title: "Qualité Visuelle", desc: "High-end production values for video and design." },
                { title: "SEO Friendly", desc: "Written content optimized for Google France ranking." }
            ]
        },
        deliverables: [
            "Vidéos Marketing & Reels",
            "Articles de Blog SEO (FR)",
            "Design Réseaux Sociaux",
            "Newsletters & Emailing",
            "Présentations Corporate",
            "Stratégie Éditoriale"
        ],
        process: {
            title: "Workflow de Production",
            steps: [
                { title: "Concept", desc: "Ideation aligned with French market trends." },
                { title: "Création", desc: "Producing assets with attention to detail." },
                { title: "Révision", desc: "Polishing to perfection." },
                { title: "Livraison", desc: "Ready-to-use format for all channels." }
            ]
        },
        cta: {
            title: "Besoin de contenu ?",
            text: "Discutons de votre stratégie éditoriale."
        },
        relatedServices: [
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Branding", link: "/services/branding/brand-identity-design" },
            { title: "SEO", link: "/services/seo/on-page-seo" }
        ]
    }
};
