import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: ["UI/UX Design", "Responsive Web Design", "Custom Website Design"],
        description: "Create a stunning, high-performance website that captures your brand's essence and converts visitors into customers.",
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
        title: "Création de Site Web France | Agence Design Premium",
        description: "Premium web design for the French market. We build stunning, GDPR-compliant websites for luxury, tech, and corporate clients in France.",
        canonical: "/website-design-france",
    },
    content: {
        hero: {
            title: "L'Excellence Digitale pour les Marques Françaises",
            subtitle: "Elegant, fast, and sophisticated. We design websites that capture the essence of French style and innovation.",
        },
        overview: {
            title: "Conception Web Sur Mesure",
            text: "In France, aesthetics and functionality must go hand in hand. ekanostudio provides high-end web design services for French businesses. Whether you operate in Paris fashion, Bordeaux wine, or Lyon tech, we create digital experiences that resonate with your discerning audience. We ensure full GDPR (RGPD) compliance and French language localization.",
        },
        whyChoose: {
            title: "Pourquoi Nous Choisir",
            points: [
                { title: "French Aesthetic", desc: "Designs tailored to the sophisticated tastes of the French market." },
                { title: "RGPD Compliant", desc: "Strict adherence to European data privacy laws." },
                { title: "Localization", desc: "Perfect French typography and content structure." }
            ]
        },
        deliverables: [
            "Site Web Premium (Next.js)",
            "Conformité RGPD / Cookies",
            "Design Mobile Responsive",
            "Optimisation SEO Technique",
            "Intégration CMS",
            "Formation et Support"
        ],
        process: {
            title: "Notre Processus",
            steps: [
                { title: "Découverte", desc: "Understanding your brand DNA and French market goals." },
                { title: "Maquette", desc: "Prototyping elegant user interfaces." },
                { title: "Développement", desc: "Coding with precision and performance." },
                { title: "Lancement", desc: "Deployment and final quality checks." }
            ]
        },
        cta: {
            title: "Prêt à lancer votre projet ?",
            text: "Contactez-nous pour une devis personnalisé."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Branding", link: "/services/branding/brand-identity-design" },
            { title: "Marketing Digital", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
