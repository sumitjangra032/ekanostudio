import { SeoPageData } from "../../types";

export const data: SeoPageData = {
    service: {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "digital-marketing",
        targetServiceSlug: "social-media-strategy",
        categorySlug: "social-media-marketing",
        keywords: [
            "Digital Marketing Dubai",
            "Performance Marketing UAE",
            "Lead Generation UAE",
            "Google Ads Dubai",
            "Social Media Marketing UAE",
            "Dubai Marketing Agency"
        ],
        description:
            "High-performance digital marketing tailored for Dubai, Abu Dhabi, and the wider UAE business ecosystem.",
    },

    location: {
        name: "UAE",
        slug: "uae",
        type: "country",
        country: "UAE",
        adjective: "UAE",
        context: "in the United Arab Emirates",
        metaTitleSuffix: "UAE | Dubai & Abu Dhabi",
        traits: ["luxury market", "rapid development", "global business hub"],
    },

    meta: {
        title: "Top Digital Marketing Agency in UAE",
        description:
            "Grow faster in the UAE. We manage premium Google Ads, Instagram Ads, and LinkedIn campaigns tailored for Dubai & Abu Dhabi’s high-value audience.",
        canonical: "/digital-marketing-uae",
    },

    content: {
        hero: {
            title: "High-Performance Digital Marketing for UAE Brands",
            subtitle:
                "Reach premium audiences. Convert high-intent leads. We help UAE businesses achieve measurable, scalable digital growth.",
        },

        overview: {
            title: "Marketing Built for the UAE’s Luxury & High-Growth Market",
            text:
                "The UAE market is one of the most competitive in the world—defined by luxury spending, fast digital adoption, and culturally diverse audiences. Ekanostudio builds ROI-focused campaigns that combine high-intent Google Search ads with conversion-ready Instagram, TikTok, and Snapchat strategies. Whether you're targeting tourists, expats, or Emirati buyers, our marketing systems help your brand stay ahead in Dubai and Abu Dhabi.",
        },

        whyChoose: {
            title: "Why UAE Businesses Choose Us",
            points: [
                {
                    title: "GCC-Specific Strategy",
                    desc: "Ad creatives and messaging aligned with cultural norms, privacy rules, and regional buying psychology.",
                },
                {
                    title: "High-Net-Worth Targeting",
                    desc: "Advanced segmentation to reach luxury buyers, investors, and corporate decision-makers.",
                },
                {
                    title: "Arabic + English Campaigns",
                    desc: "Native-quality bilingual ads for maximum reach across UAE demographics.",
                },
            ],
        },

        deliverables: [
            "UAE-Focused Digital Strategy",
            "Google & YouTube Ads Management",
            "Instagram, TikTok & Snapchat Advertising",
            "LinkedIn B2B Lead Generation",
            "Automated Lead Funnels",
            "ROI & Analytics Dashboard"
        ],

        process: {
            title: "Our UAE Growth Framework",
            steps: [
                {
                    title: "Market Mapping",
                    desc: "Understanding buyer intent across Dubai, Abu Dhabi, and the wider Emirates.",
                },
                {
                    title: "Launch",
                    desc: "Deploying high-impact creatives with platform-specific targeting.",
                },
                {
                    title: "Optimize",
                    desc: "Daily refinement to reduce CPA, increase ROAS, and improve audience accuracy.",
                },
                {
                    title: "Scale",
                    desc: "Expanding into GCC markets and high-performing channels.",
                },
            ],
        },

        cta: {
            title: "Want predictable growth in the UAE?",
            text: "Schedule a strategy call with our Dubai performance marketing team.",
        },

        relatedServices: [
            { title: "SEO", link: "/services/seo/on-page-seo" },
            { title: "Content Creation", link: "/services/content-creation/content-writing" },
            { title: "AI Automation", link: "/services/ai-automation/ai-automation-n8n" }
        ],
    },
};
