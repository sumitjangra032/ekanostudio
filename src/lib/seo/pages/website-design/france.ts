import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "website-design",
        name: "Website Design",
        slug: "website-design",
        targetServiceSlug: "website-design-uiux",
        categorySlug: "web-design-development",
        keywords: [
            "Création de site web France",
            "Agence web design France",
            "UI UX Design France",
            "Site vitrine France",
            "Développement web sur mesure"
        ],
        description:
            "Premium website design services for the French market. Crafting elegant, high-performance websites that reflect strong brand identity and convert visitors.",
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
        title: "Agence Web Design France | Création de Sites Premium",
        description:
            "Agence de création de site web premium en France. Nous concevons des sites élégants, rapides et conformes au RGPD pour les marques françaises et entreprises haut de gamme.",
        canonical: "/website-design-france",
    },

    content: {
        hero: {
            title: "Design Web Haut de Gamme pour les Marques Françaises",
            subtitle:
                "Sobriété, élégance et performance. Nous créons des expériences digitales qui reflètent le style français et la précision technologique.",
        },

        overview: {
            title: "Création de Sites Web Sur Mesure en France",
            text:
                "En France, l’esthétique et la cohérence de marque jouent un rôle essentiel. Votre site doit allier élégance française, fluidité, et excellence technique. ekanostudio propose des solutions web premium adaptées aux secteurs du luxe, de la mode, de la gastronomie, du tourisme et de la technologie. Nous assurons également une conformité RGPD irréprochable et une localisation linguistique parfaite.",
        },

        whyChoose: {
            title: "Pourquoi Choisir Notre Agence Web",
            points: [
                {
                    title: "Design Inspiré du Luxe Français",
                    desc: "Expériences visuelles raffinées adaptées aux attentes des consommateurs français.",
                },
                {
                    title: "Conformité RGPD",
                    desc: "Intégration complète des normes européennes de protection des données.",
                },
                {
                    title: "Localisation Française",
                    desc: "Typographie, structure et contenu optimisés pour le marché francophone.",
                }
            ],
        },

        deliverables: [
            "Site Web Premium (Next.js)",
            "Mise en conformité RGPD & Cookies",
            "Design Responsive Mobile-first",
            "SEO Technique Optimisé",
            "Intégration CMS (Headless / WordPress)",
            "Support et Formation Utilisateur"
        ],

        process: {
            title: "Notre Processus de Création",
            steps: [
                {
                    title: "Découverte",
                    desc: "Analyse de votre ADN de marque et de vos objectifs sur le marché français.",
                },
                {
                    title: "Design",
                    desc: "Création de maquettes élégantes et orientées conversion.",
                },
                {
                    title: "Développement",
                    desc: "Développement performant et sécurisé selon les standards européens.",
                },
                {
                    title: "Lancement",
                    desc: "Mise en ligne, optimisation finale et accompagnement post-lancement.",
                }
            ],
        },

        cta: {
            title: "Prêt à créer votre site web premium ?",
            text: "Contactez-nous pour un devis personnalisé adapté au marché français.",
        },

        relatedServices: [
            { title: "SEO France", link: "/services/seo/on-page-seo" },
            { title: "Branding", link: "/services/branding/brand-identity-design" },
            { title: "Marketing Digital", link: "/services/digital-marketing/digital-marketing" }
        ]
    }
};
