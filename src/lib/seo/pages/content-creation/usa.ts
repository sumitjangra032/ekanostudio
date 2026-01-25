import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "content-creation",
        name: "Content Creation",
        slug: "content-creation",
        targetServiceSlug: "content-writing",
        categorySlug: "content-creation",
        keywords: [
            "Content Creation USA",
            "Content Marketing Agency USA",
            "Video Production USA",
            "Copywriting Services USA",
            "Brand Content Strategy USA"
        ],
        description:
            "Professional content creation services in the USA, including video production, SEO copywriting, and scalable brand storytelling for growth-driven businesses.",
    },

    location: {
        name: "USA",
        slug: "usa",
        type: "country",
        country: "USA",
        adjective: "US-based",
        context: "across the United States market",
        metaTitleSuffix: "USA | Global Content Agency",
        traits: ["competitive market", "innovation leaders", "high-value customers"],
    },

    meta: {
        title: "Content Creation Services USA | Video, Copywriting & Strategy",
        description:
            "US-focused content creation agency delivering video, SEO copywriting, and scalable brand content tailored for American audiences and search intent.",
        canonical: "/content-creation-usa",
    },

    content: {
        hero: {
            title: "Scalable Content for the US Market",
            subtitle:
                "High-impact visuals, persuasive copy, and strategic storytelling built for American brands and fast-moving digital platforms.",
        },

        overview: {
            title: "Content Built for the American Digital Landscape",
            text:
                "The US market moves fast and competition is intense. To stand out, content must be clear, authentic, and designed for performance. Ekanostudio helps US businesses scale their content production without sacrificing quality. From short-form video and paid ad creatives to long-form blogs and thought leadership, we create assets that support visibility, trust, and conversion across US audiences.",
        },

        whyChoose: {
            title: "Why US Brands Choose Ekanostudio",
            points: [
                {
                    title: "US-Market Writing Standards",
                    desc:
                        "Content written in American English with the right tone, clarity, and cultural context.",
                },
                {
                    title: "Performance-Driven Content",
                    desc:
                        "Every asset is designed to support engagement, conversion, and SEO growth.",
                },
                {
                    title: "Scalable Production Model",
                    desc:
                        "Increase output quickly without the cost and complexity of in-house teams.",
                },
            ],
        },

        deliverables: [
            "Short-form video editing (Reels, Shorts, TikTok)",
            "Long-form SEO copywriting (US English)",
            "Podcast editing and production",
            "Static and video ad creatives",
            "Email marketing sequences",
            "Centralised brand asset libraries",
        ],

        process: {
            title: "Our Content Production Pipeline",
            steps: [
                {
                    title: "Strategy Alignment",
                    desc:
                        "Understanding your brand voice, audience, and US market objectives.",
                },
                {
                    title: "Content Creation",
                    desc:
                        "Producing video, copy, and visual assets aligned with platform best practices.",
                },
                {
                    title: "Review & Optimisation",
                    desc:
                        "Refining content for clarity, performance, and brand consistency.",
                },
                {
                    title: "Delivery & Scale",
                    desc:
                        "Providing ready-to-publish assets optimized for US digital channels.",
                },
            ],
        },

        cta: {
            title: "Ready to scale your content?",
            text:
                "Partner with a content team built for growth-focused US brands.",
        },

        relatedServices: [
            {
                title: "Video Editing",
                link: "/services/content-creation/video-editing",
            },
            {
                title: "Social Media Management",
                link: "/services/social-media-marketing/social-media-management",
            },
            {
                title: "Digital Marketing",
                link: "/services/digital-marketing/digital-marketing",
            },
        ],
    },
};