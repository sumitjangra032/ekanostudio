import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Création de contenu France",
            "Marketing de contenu",
            "Rédaction web française",
            "Production vidéo France",
            "Contenu de marque"
        ],
        description:
            "Création de contenu haut de gamme pour les entreprises en France – rédaction, vidéo et design au service de votre image de marque.",
    },

    location: {
        name: "France",
        slug: "france",
        type: "country",
        country: "France",
        adjective: "French",
        context: "en France",
        metaTitleSuffix: "France | Studio Créatif",
        traits: ["exigence qualitative", "culture de marque", "marché européen"],
    },

    meta: {
        title: "Création de Contenu France | Vidéo, Rédaction & Image de Marque",
        description:
            "Studio de création de contenu pour les marques françaises. Vidéos, rédaction SEO et contenus visuels pensés pour l’élégance, la crédibilité et la performance.",
        canonical: "/content-creation-france",
    },

    content: {
        hero: {
            title: "Création de Contenu pour les Marques Françaises",
            subtitle:
                "Des contenus élégants, cohérents et stratégiques, conçus pour renforcer votre image et votre crédibilité.",
        },

        overview: {
            title: "Une Approche Éditoriale Exigeante",
            text:
                "En France, le contenu est un vecteur d’image autant qu’un levier marketing. ekanostudio accompagne les marques françaises dans la création de contenus à forte valeur ajoutée. Rédaction web, storytelling de marque, production vidéo ou supports visuels : chaque contenu est pensé pour respecter les codes culturels, la langue et les attentes d’un public exigeant.",
        },

        whyChoose: {
            title: "Pourquoi Choisir ekanostudio",
            points: [
                {
                    title: "Maîtrise Culturelle & Linguistique",
                    desc:
                        "Des contenus rédigés en français naturel, précis et adaptés au marché local.",
                },
                {
                    title: "Qualité Visuelle Premium",
                    desc:
                        "Production vidéo et design soignés pour des marques soucieuses de leur image.",
                },
                {
                    title: "Vision Stratégique",
                    desc:
                        "Chaque contenu s’inscrit dans une logique éditoriale et marketing cohérente.",
                },
            ],
        },

        deliverables: [
            "Vidéos de marque et contenus promotionnels",
            "Articles de blog SEO en français",
            "Visuels et contenus pour réseaux sociaux",
            "Newsletters et campagnes emailing",
            "Présentations corporate et supports institutionnels",
            "Stratégie éditoriale et ligne de contenu",
        ],

        process: {
            title: "Notre Processus de Création",
            steps: [
                {
                    title: "Analyse",
                    desc:
                        "Compréhension de votre marque, de votre audience et de votre positionnement.",
                },
                {
                    title: "Conception",
                    desc:
                        "Définition des messages, formats et axes éditoriaux.",
                },
                {
                    title: "Production",
                    desc:
                        "Rédaction, tournage et design avec un haut niveau d’exigence.",
                },
                {
                    title: "Livraison",
                    desc:
                        "Contenus prêts à être diffusés sur tous vos canaux.",
                },
            ],
        },

        cta: {
            title: "Envie de contenus à la hauteur de votre marque ?",
            text:
                "Construisons ensemble une stratégie de contenu efficace pour le marché français.",
        },

        relatedServices: [
            {
                title: "Social Media Marketing",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Branding & Identité Visuelle",
                link: "/services/branding/brand-identity-design",
            },
            {
                title: "SEO & Optimisation de Contenu",
                link: "/services/seo/on-page-seo",
            },
        ],
    },
};
