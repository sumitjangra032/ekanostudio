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
        name: "Bangalore",
        slug: "bangalore",
        type: "city",
        country: "India",
        adjective: "Bangalore-based",
        context: "in the Silicon Valley of India",
        metaTitleSuffix: "Bangalore | Top Rated Agency",
        traits: ["tech startups", "innovative businesses", "IT hubs"],
    },
    meta: {
        title: "Content Creation Agency Bangalore | Video & Copywriting",
        description: "Tell your tech story. We create high-impact video, professional copy, and digital content for Bangalore's leading startups and IT firms.",
        canonical: "/content-creation-bangalore",
    },
    content: {
        hero: {
            title: "Authoritative Content for Bangalore's Tech Ecosystem",
            subtitle: "Media that captivates. Copy that convinces. We tell the stories of India's Silicon Valley.",
        },
        overview: {
            title: "Driving Authority Through Content in Bangalore",
            text: "In Bangalore's fast-paced tech world, your message needs depth. Ekanostudio's content team specializes in creating digital assets for the IT and Startup world—from deep-dive technical blogs to polished video bios for startup founders.",
        },
        whyChoose: {
            title: "Why Our Content Studio?",
            points: [
                { title: "Tech-Savy Tone", desc: "Writing that resonates with developers and founders alike." },
                { title: "Premium Visuals", desc: "4K video and modern design for a global brand image." },
                { title: "Integrated Strategy", desc: "Content designed to perform across LinkedIn, Twitter, and Web." }
            ]
        },
        deliverables: [
            "Startup Brand Films",
            "Technical Blog Posts",
            "Founder Interview Videos",
            "Whitepapers & eBooks",
            "Social Media Design Kits",
            "Brand Narrative Documentation"
        ],
        process: {
            title: "Our Creative Workflow",
            steps: [
                { title: "Discovery", desc: "Identifying your brand's unique edge in the Bangalore market." },
                { title: "Ideation", desc: "Developing concepts aimed at tech decision-makers." },
                { title: "Execution", desc: "Producing high-quality visuals and drafting precise copy." },
                { title: "Fulfillment", desc: "Delivering polished assets for your growth journey." }
            ]
        },
        cta: {
            title: "Need to build more authority?",
            text: "Let's create content that defines your leadership in Bangalore."
        },
        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" },
            { title: "Branding", link: "/services/branding/brand-identity-design" }
        ]
    }
};
