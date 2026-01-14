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
        name: "Gurgaon",
        slug: "gurgaon",
        type: "city",
        country: "India",
        adjective: "Gurgaon-based",
        context: "in the corporate hub of NCR",
        metaTitleSuffix: "Gurgaon | Leading Agency",
        traits: ["MNCs", "financial districts", "tech startups"],
    },
    meta: {
        title: "Content Creation Agency Gurgaon | Video & Thought Leadership",
        description: "Communicate with corporate excellence. We produce high-quality video, authoritative copy, and digital assets for Gurgaon's leading brands.",
        canonical: "/content-creation-gurgaon",
    },
    content: {
        hero: {
            title: "Authoritative Content for Gurgaon's Enterprise",
            subtitle: "Media that captivates. Copy that convinces. We tell the stories of Gurgaon's most innovative brands.",
        },
        overview: {
            title: "Driving Authority Through Content in Gurgaon",
            text: "Gurgaon's audience is sophisticated and time-pressed. Your content needs to be sharp, professional, and valuable. Ekanostudio's content team specializes in creating digital assets for the NCR corporate world—from deep-dive whitepapers for tech firms to polished video bios for financial leaders.",
        },
        whyChoose: {
            title: "Why Our Content Studio?",
            points: [
                { title: "Corporate Tone", desc: "Authoritative writing that resonates with C-suite executives." },
                { title: "High-End Production", desc: "4K video and premium design for a world-class brand image." },
                { title: "Integrated Strategy", desc: "Content designed to perform across LinkedIn, Email, and Web." }
            ]
        },
        deliverables: [
            "Corporate Brand Films",
            "Thought Leadership Articles",
            "Executive Interview Videos",
            "Case Studies & Whitepapers",
            "LinkedIn Content Management",
            "Brand Narrative Guidelines"
        ],
        process: {
            title: "Our Creative Workflow",
            steps: [
                { title: "Discovery", desc: "Identifying your brand's unique edge in the Gurgaon market." },
                { title: "Ideation", desc: "Developing concepts aimed at corporate decision-makers." },
                { title: "Production", desc: "Executing high-quality shoots and drafting precise copy." },
                { title: "Fulfillment", desc: "Delivering polished assets ready for global distribution." }
            ]
        },
        cta: {
            title: "Need to build more authority?",
            text: "Let's create content that defines your leadership in Gurgaon."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
