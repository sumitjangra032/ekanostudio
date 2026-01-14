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
        name: "Italy",
        slug: "italy",
        type: "country",
        country: "Italy",
        adjective: "Italian",
        context: "in Italy",
        metaTitleSuffix: "Italy | Servizi Digitali",
        traits: ["design excellence", "fashion & industry", "creative market"],
    },
    meta: {
        title: "Creazione Contenuti Italia | Video, Copywriting e Digital Art",
        description: "Racconta la tua storia con lo stile italiano. Produciamo video, testi e grafiche di alta qualità per coinvolgere il pubblico in Italia.",
        canonical: "/content-creation-italy",
    },
    content: {
        hero: {
            title: "Contenuti che Parlano al Cuore dell'Italia",
            subtitle: "Dalla scrittura creativa alla produzione video professionale, diamo voce al tuo brand nel mercato italiano.",
        },
        overview: {
            title: "Storytelling Strategico per Brand Italiani",
            text: "In Italia, la comunicazione è un'arte. Ekanostudio aiuta le aziende a trasmettere i propri valori attraverso contenuti originali e coinvolgenti. Che si tratti di un blog post ottimizzato o di un video promozionale per i social media, curiamo ogni parola e immagine per massimizzare l'impatto sul tuo target.",
        },
        whyChoose: {
            title: "L'Arte della Comunicazione",
            points: [
                { title: "Copywriting Italiano", desc: "Testi scritti da professionisti madrelingua per un tono di voce autentico." },
                { title: "Produzione Multimediale", desc: "Video e grafiche che catturano l'attenzione al primo sguardo." },
                { title: "Strategia Editoriale", desc: "Pianifichiamo i contenuti per mantenere alta l'authority del tuo brand." }
            ]
        },
        deliverables: [
            "Video Editing e Motion Graphics",
            "Copywriting per Blog e Siti Web",
            "Grafiche per Social Media",
            "Newsletter e DEM",
            "White Paper e Case Studies",
            "Script per Spot e Presentazioni"
        ],
        process: {
            title: "Come Nascono i Nostri Contenuti",
            steps: [
                { title: "Ideazione", desc: "Sviluppiamo concept creativi basati sulle tendenze italiane." },
                { title: "Sviluppo", desc: "Realizziamo i contenuti con strumentazione professionale." },
                { title: "Revisione", desc: "Affiniamo ogni dettaglio insieme a te." },
                { title: "Social Ready", desc: "Adattiamo i contenuti per ogni tua piattaforma digitale." }
            ]
        },
        cta: {
            title: "Hai una storia da raccontare?",
            text: "Creiamo insieme contenuti che ispirano i tuoi clienti italiani."
        },
        relatedServices: [
            { title: "Social Media Marketing", link: "/services/social-media-marketing/social-media-management" },
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
