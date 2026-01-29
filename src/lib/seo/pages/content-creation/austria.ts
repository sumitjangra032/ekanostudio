import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Erstellung Österreich",
            "Content Marketing",
            "Copywriting Deutsch",
            "Videoproduktion Österreich",
            "Brand Content"
        ],
        description:
            "Hochwertige Content-Erstellung für Unternehmen in Österreich – Texte, Videos und visuelle Inhalte mit klarer Markenbotschaft.",
    },

    location: {
        name: "Austria",
        slug: "austria",
        type: "country",
        country: "Austria",
        adjective: "Austrian",
        context: "in Austria",
        metaTitleSuffix: "Austria | Content & Media Studio",
        traits: ["qualitätsbewusst", "vertrauensbasiert", "markenorientiert"],
    },

    meta: {
        title: "Content Erstellung Österreich | Video & Brand Content",
        description:
            "Professionelle Content-Erstellung für österreichische Unternehmen. Wir produzieren Videos, Texte und Designs mit klarer Strategie und messbarer Wirkung.",
        canonical: "/content-creation-austria",
    },

    content: {
        hero: {
            title: "Professioneller Content für den österreichischen Markt",
            subtitle:
                "Strategische Inhalte, die Vertrauen aufbauen, Marken stärken und Ihre Zielgruppe nachhaltig erreichen.",
        },

        overview: {
            title: "Content mit Substanz – nicht nur Reichweite",
            text:
                "Im österreichischen Markt zählen Glaubwürdigkeit, Qualität und klare Kommunikation. Ekanostudio unterstützt Unternehmen dabei, Inhalte zu entwickeln, die nicht nur gut aussehen, sondern wirken. Von durchdachtem Copywriting über visuelles Storytelling bis hin zu Video-Content erstellen wir digitale Assets, die Ihre Marke professionell positionieren und langfristig Vertrauen aufbauen.",
        },

        whyChoose: {
            title: "Warum Content von Ekanostudio?",
            points: [
                {
                    title: "Muttersprachliche Inhalte",
                    desc:
                        "Deutschsprachiges Copywriting mit Gespür für Tonalität, Kultur und Zielgruppen in Österreich.",
                },
                {
                    title: "Visuelle Qualität",
                    desc:
                        "Professionelle Videos und Grafiken, die Ihrer Marke ein hochwertiges Erscheinungsbild geben.",
                },
                {
                    title: "Strategischer Ansatz",
                    desc:
                        "Jeder Inhalt folgt einer klaren Content- und Markenstrategie – kein zufälliger Output.",
                },
            ],
        },

        deliverables: [
            "Professionelles Video Editing & Motion Content",
            "SEO-optimierte Blogartikel auf Deutsch",
            "Social Media Content & Redaktionspläne",
            "Newsletter & E-Mail-Kampagnen",
            "Whitepaper, Guides & Fachartikel",
            "Brand Storytelling & Content Guidelines",
        ],

        process: {
            title: "Unser Content-Workflow",
            steps: [
                {
                    title: "Strategie",
                    desc:
                        "Analyse Ihrer Marke, Zielgruppe und Kommunikationsziele.",
                },
                {
                    title: "Produktion",
                    desc:
                        "Erstellung von Texten, Videos und visuellen Inhalten auf hohem Qualitätsniveau.",
                },
                {
                    title: "Optimierung",
                    desc:
                        "Feinschliff basierend auf Feedback, Performance und SEO-Anforderungen.",
                },
                {
                    title: "Auslieferung",
                    desc:
                        "Strukturierte Übergabe der Inhalte für Website, Social Media und Kampagnen.",
                },
            ],
        },

        cta: {
            title: "Bereit für besseren Content?",
            text:
                "Lassen Sie uns Inhalte entwickeln, die Ihre Marke in Österreich nachhaltig stärken.",
        },

        relatedServices: [
            {
                title: "Social Media Marketing",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "SEO Optimierung",
                link: "/services/seo/on-page-seo",
            },
            {
                title: "Branding & Design",
                link: "/services/branding/brand-identity-design",
            },
        ],
    },
};
