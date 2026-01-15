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
        name: "Pune",
        slug: "pune",
        type: "city",
        country: "India",
        adjective: "Pune-based",
        context: "in the Oxford of the East",
        metaTitleSuffix: "Pune | Expert Solutions",
        traits: ["education sector", "manufacturing hubs", "IT parks"],
    },
    meta: {
        title: "Website Design Agency in Pune | UI/UX & Web Development",
        description: "Looking for top web design in Pune? We build high-performance, mobile-responsive websites for Pune's leading IT, education, and manufacturing sectors.",
        canonical: "/website-design-pune",
    },
    content: {
        hero: {
            title: "Digital Excellence for Pune's Hub of Innovation",
            subtitle: "From Hinjewadi to Magarpatta, we design websites that drive business growth in the Oxford of the East.",
        },
        overview: {
            title: "Modern Web Design for Pune's Business Landscape",
            text: "Pune is a unique blend of heritage, industry, and cutting-edge tech. Your website needs to bridge that gap. ekanostudio provides high-end web design services tailored for Pune's diverse sectors—whether you are a scaling tech startup, an educational institute, or a global manufacturing giant.",
        },
        whyChoose: {
            title: "Why Pune's Best Businesses Choose Us",
            points: [
                { title: "Tech-Forward Design", desc: "Utilizing the latest stacks like Next.js for superior speed and SEO." },
                { title: "Mobile Optimized", desc: "Perfectly responsive sites for an audience that is always on the go." },
                { title: "Local Insight", desc: "Understanding the Pune market from IT hubs to institutional needs." }
            ]
        },
        deliverables: [
            "Custom UI/UX Design (Figma)",
            "High-Performance Web Development",
            "SEO-Friendly Infrastructure",
            "Scalable CMS Integration",
            "Security & SSL Setup",
            "Launch & Post-Launch Support"
        ],
        process: {
            title: "Our Design Journey",
            steps: [
                { title: "Consult", desc: "Understanding your vision for the Pune and global market." },
                { title: "Blueprint", desc: "Creating the structure and user journeys." },
                { title: "Craft", desc: "Designing and developing with precision." },
                { title: "Go Live", desc: "Seamless launch and optimization." }
            ]
        },
        cta: {
            title: "Ready to upgrade your online presence?",
            text: "Partner with Pune's trusted digital design agency."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/technical-seo" },
            { title: "Digital Marketing", link: "/services/digital-marketing/social-media-strategy" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" }
        ]
    }
};
