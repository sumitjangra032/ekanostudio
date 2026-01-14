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
        name: "Austria",
        slug: "austria",
        type: "country",
        country: "Austria",
        adjective: "Austrian",
        context: "in Austria",
        metaTitleSuffix: "Austria | Digital Solutions",
        traits: ["central european business", "quality focused", "innovation"],
    },
    meta: {
        title: "Content Erstellung Österreich | Video, Copywriting & Design",
        description: "Erzählen Sie Ihre Geschichte mit österreichischer Qualität. Wir produzieren erstklassige Videos, Texte und Grafiken für Ihr Business in Österreich.",
        canonical: "/content-creation-austria",
    },
    content: {
        hero: {
            title: "Content, der in Österreich begeistert",
            subtitle: "Von kreativen Texten bis hin zur professionellen Videoproduktion – wir machen Ihre Marke sichtbar.",
        },
        overview: {
            title: "Strategisches Storytelling für Österreich",
            text: "In Österreich zählen Authentizität und Vertrauen. Ekanostudio hilft Ihnen dabei, Ihre Botschaft klar und überzeugend zu kommunizieren. Wir erstellen hochwertige digitale Assets, die Ihre Zielgruppe direkt ansprechen und Ihre Marke als Experten im österreichischen Markt positionieren.",
        },
        whyChoose: {
            title: "Kreative Exzellenz",
            points: [
                { title: "Muttersprachliches Copywriting", desc: "Texte, die genau den Ton Ihrer österreichischen Kunden treffen." },
                { title: "Moderne Videoproduktion", desc: "High-End Visuals für Ihre Social Media und Website." },
                { title: "Ganzheitlicher Ansatz", desc: "Strategische Planung aller Inhalte für maximale Wirkung." }
            ]
        },
        deliverables: [
            "Professionelles Video Editing",
            "SEO-optimierte Blogartikel (Deutsch)",
            "Social Media Content-Pakete",
            "Newsletter-Texte & Kampagnen",
            "Whitepaper & Fachartikel",
            "Brand-Storytelling Leitfaden"
        ],
        process: {
            title: "Unser Kreativ-Prozess",
            steps: [
                { title: "Idee", desc: "Entwicklung von Konzepten, die in Österreich funktionieren." },
                { title: "Erstellung", desc: "Produktion der Inhalte mit modernster Technik." },
                { title: "Feinschliff", desc: "Optimierung basierend auf Ihrem Feedback." },
                { title: "Distribution", desc: "Bereitstellung der Assets für alle Kanäle." }
            ]
        },
        cta: {
            title: "Haben Sie eine Geschichte zu erzählen?",
            text: "Lassen Sie uns gemeinsam Content erstellen, der bewegt."
        },
        relatedServices: [
            { title: "Social Media Marketing", link: "/services/social-media-marketing/social-media-management" },
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Logo & Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
