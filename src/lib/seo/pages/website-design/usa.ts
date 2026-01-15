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
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "American",
        context: "in the US market",
        metaTitleSuffix: "USA | Global Agency",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },
    meta: {
        title: "Top Rated Website Design Agency for USA | US-Standard UI/UX",
        description: "We deliver Silicon Valley quality web design at competitive rates. Custom, high-performance websites tailored for the rigorous US market.",
        canonical: "/website-design-usa",
    },
    content: {
        hero: {
            title: "World-Class Web Design for US Brands",
            subtitle: "Merging American innovation standards with global efficiency. We build websites that compete on the global stage.",
        },
        overview: {
            title: "Digital Excellence for the American Market",
            text: "The US digital landscape is the most competitive in the world. Good enough isn't enough. ekanostudio provides American businesses with cutting-edge web design that exceeds user expectations. We understand US accessibility laws (ADA), privacy standards (CCPA), and the high aesthetic bar set by top tech firms.",
        },
        whyChoose: {
            title: "Why US Companies Partner With Us",
            points: [
                { title: "Time Zone Agility", desc: "We work while you sleep, ensuring rapid turnaround times." },
                { title: "US-Standard Quality", desc: "Code quality and design fidelity that matches Silicon Valley agencies." },
                { title: "Cost Efficiency", desc: "Premium output without the NYC/SF agency price tag." }
            ]
        },
        deliverables: [
            "ADA Compliant Design",
            "Next.js / React Framework",
            "CCPA/GDPR Ready Setup",
            "Mobile-First Architecture",
            "High-Fidelity Prototyping",
            "Speed Index < 1.5s"
        ],
        process: {
            title: "Our Cross-Border Workflow",
            steps: [
                { title: "Sync", desc: "Kickoff calls aligned with your US time zone (EST/PST/CST)." },
                { title: "Design", desc: "Iterative prototyping with Loom updates for async feedback." },
                { title: "Build", desc: "Agile development sprints with weekly demos." },
                { title: "Scale", desc: "Infrastructure setup on AWS/Vercel for US traffic handling." }
            ]
        },
        cta: {
            title: "Looking for top-tier talent?",
            text: "Get a US-standard website built by global experts."
        },
        relatedServices: [
            { title: "App Development", link: "/services/app-development/mobile-app-development" },
            { title: "SaaS Design", link: "/services/web-design-development/saas-development" },
            { title: "SEO", link: "/services/seo/technical-seo" }
        ]
    }
};
