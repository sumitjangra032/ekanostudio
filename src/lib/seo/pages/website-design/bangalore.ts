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
        title: "Best Website Design Company in Bangalore | Ekanostudio",
        description: "Looking for premium website design in Bangalore? We craft stunning, high-performance websites tailored for Bangalore's tech-savvy startups and enterprises.",
        canonical: "/website-design-bangalore",
    },
    content: {
        hero: {
            title: "World-Class Web Design for Bangalore's Innovators",
            subtitle: "From Koramangala startups to Whitefield MNCs, we build digital experiences that define brands in India's Silicone Valley.",
        },
        overview: {
            title: "Elevate Your Brand in Bangalore's Tech Ecosystem",
            text: "In a city buzzing with innovation, your website needs to do more than just exist—it needs to perform. As a premier Bangalore web design agency, Ekanostudio combines cutting-edge aesthetics with robust technology to deliver sites that stand out in the competitive landscape of Karnataka's capital.",
        },
        whyChoose: {
            title: "Why Bangalore Businesses Trust Us",
            points: [
                { title: "Startup-Ready Speed", desc: "We deploy MVPs and full-scale sites at the speed of Bangalore's startup ecosystem." },
                { title: "Tech-Forward Design", desc: "Our designs reflect the modern, innovative spirit of the city." },
                { title: "Local Support", desc: "We are available for in-person consultations across Bangalore." }
            ]
        },
        deliverables: [
            "Next.js Source Code",
            "Figma UI/UX Files",
            "Speed Optimization Report (>95)",
            "Mobile Responsive Testing",
            "Vercel Deployment Setup",
            "Google Analytics 4 Integration"
        ],
        process: {
            title: "Our Bangalore Web Design Process",
            steps: [
                { title: "Discovery", desc: "Coffee meeting or call to understand your brand's vision." },
                { title: "Wireframing", desc: "Blueprinting your site's structure for maximum conversion." },
                { title: "Development", desc: "Coding pixel-perfect interfaces using modern tech stacks." },
                { title: "Launch", desc: "Going live with full SEO and performance checks." }
            ]
        },
        cta: {
            title: "Ready to dominate the Bangalore market?",
            text: "Let's build a website that puts you ahead of the competition."
        },
        relatedServices: [
            { title: "SEO Services", link: "/services/seo/on-page-seo" },
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "Social Media", link: "/services/social-media-marketing/social-media-management" }
        ]
    }
};
