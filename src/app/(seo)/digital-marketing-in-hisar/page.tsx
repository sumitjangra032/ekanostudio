import { Metadata } from "next";
import ServicePageClient from "@/components/service-sections/ServicePageClient";
import { IServiceType } from "@/constants/services";


export const metadata: Metadata = {
    // 57 characters ✅  (primary keyword first, "Top" removed, brand at end)
    title: "Expert  Digital Marketing Agency in Hisar | Ekanostudio",

    // 155 characters ✅  (local keyword + services listed + CTA)
    description: "Ekanostudio is a digital marketing agency in Hisar offering SEO, social media, Google Ads & content marketing. Grow your business in Haryana. Get a free consultation.",

    alternates: {
        canonical: "https://www.ekanostudio.com/digital-marketing-in-hisar",
    },

    openGraph: {
        // OG title — social-click-optimised, slightly longer is fine
        title: "Expert Digital Marketing Agency in Hisar, Haryana | Ekanostudio",

        // OG description — persuasive, up to ~200 chars, not a ranking factor
        description: "Looking for a reliable digital marketing agency in Hisar? Ekanostudio helps Hisar businesses grow through SEO, social media marketing, Google Ads, and conversion-focused content. Book a free strategy session today.",

        url: "https://www.ekanostudio.com/digital-marketing-in-hisar",
        type: "website",
    },
};

export default function DigitalMarketingHisarPage() {
    const serviceData: IServiceType = {
        slug: "digital-marketing-in-hisar",

        // Breadcrumbs / structured data — natural, not keyword-stuffed
        title: "Digital Marketing in Hisar",

        // Structured data snippet / fallback description
        seo: "Full-service digital marketing agency in Hisar, Haryana. SEO, social media management, Google Ads, and content marketing for local businesses across Haryana.",

        sections: [
            {
                type: "hero",
                data: {
                    category: ["Digital Marketing", "Hisar, Haryana"],

                    // H1 — variation of title tag, covers "services" variant
                    title: "Digital Marketing Services in Hisar, Haryana",

                    // Headline — value proposition, not a keyword repeat
                    headline: "Grow Your Hisar Business Online with Proven Digital Marketing",

                    // Subheadline — natural language, secondary keywords: social media,
                    // Google Ads, content, leads, Haryana
                    subheadline: "From SEO and social media to Google Ads and content marketing — Ekanostudio delivers digital marketing strategies built specifically for businesses in Hisar and Haryana.",

                    isSmallHeading: true,
                    currency: "INR",
                    serviceSlug: "social-media-strategy",
                    categorySlug: "social-media-marketing",
                    serviceCta: {
                        text: "Get Started",
                    }
                }
            },

            {
                type: "metrics",
                data: {
                    // H2 — keyword variation, outcome-focused
                    heading: "Digital Marketing Results for Hisar Businesses",
                    subheading: "Real numbers from real campaigns run for clients in Hisar and across Haryana.",
                    items: [
                        { icon: "/icons/trending-up.svg", value: "15,000+", label: "Leads Generated" },
                        { icon: "/icons/rocket.svg", value: "4x", label: "Average Conversion Growth" },
                        { icon: "/icons/map.svg", value: "25+", label: "Hisar Brands Scaled" },
                        { icon: "/icons/clock.svg", value: "ROI-First", label: "Every Campaign" }
                    ]
                }
            },

            {
                type: "whoItsFor",
                data: {
                    // H2 — question format for featured snippet eligibility
                    heading: "Which Hisar Businesses Need Digital Marketing?",
                    items: [
                        // Specific industries — signals topical depth to Google
                        "Retail shops, showrooms, and local stores in Hisar wanting more footfall and online orders.",
                        "Restaurants, hotels, and hospitality businesses in Hisar looking to attract more customers on Google and Instagram.",
                        "Builders, real estate agents, and property developers in Hisar targeting buyers on Meta and Google.",
                        "Clinics, hospitals, and healthcare providers in Hisar building a trustworthy online reputation.",
                        "Startups and small businesses in Haryana needing brand awareness without a large advertising budget.",
                        "E-commerce businesses selling products online who want consistent, scalable lead generation."
                    ]
                }
            },

            {
                type: "whyMatters",
                data: {
                    // H2 — natural keyword: "digital marketing Hisar 2025"
                    heading: "Why Hisar Businesses Can No Longer Ignore Digital Marketing",
                    items: [
                        // Body copy — ~140 words, LSI keywords: online presence, social media,
                        // Google search, Instagram, Facebook, paid ads, brand awareness,
                        // leads, competitors, Haryana market
                        "The way customers in Hisar discover and choose businesses has fundamentally changed. Today, before visiting a shop or calling a service provider, most people in Hisar search on Google, browse Instagram, or check Facebook. Businesses that are visible on these platforms are capturing customers that businesses without a digital presence are permanently losing. Digital marketing is no longer just for large companies — it is now the primary growth channel for small and medium businesses across Haryana. Whether you need more phone enquiries, more footfall, more online orders, or stronger brand recognition in Hisar, a consistent digital marketing strategy delivers all of this at a fraction of the cost of traditional advertising. Ekanostudio builds and manages these strategies end-to-end so you can focus on running your business."
                    ]
                }
            },

            {
                type: "deliverables",
                data: {
                    // H2 — specific, service-focused
                    heading: "Our Digital Marketing Services in Hisar",
                    items: [
                        // Each item: natural phrase, covers a real service keyword
                        "Search Engine Optimisation (SEO) — rank your Hisar business on Google organically",
                        "Social media marketing on Instagram, Facebook, and LinkedIn for Hisar audiences",
                        "Google Ads (PPC) campaigns targeting high-intent customers in Hisar and Haryana",
                        "Meta Ads (Facebook & Instagram) — reach the right Hisar customers with targeted paid campaigns",
                        "Content marketing — blog posts, reels, and graphics that build authority for your Hisar brand",
                        "Google Business Profile management — dominate the Hisar local 3-pack",
                        "Conversion rate optimisation — turning your Hisar website visitors into paying customers",
                        "Monthly performance reports — transparent ROI tracking for every campaign"
                    ]
                }
            },

            {
                type: "process",
                data: {
                    // Section title — specific, local
                    title: "How We Grow Hisar Businesses Through Digital Marketing",
                    description: "A repeatable, data-driven process that consistently delivers results for businesses in Hisar and across Haryana.",
                    steps: [
                        {
                            number: "01",
                            title: "Market Analysis",
                            // Step descriptions — specific and informative
                            description: "We research your industry, competitors, and target customers in Hisar to identify the highest-ROI digital marketing channels for your business.",
                            icon: "/icons/search.svg"
                        },
                        {
                            number: "02",
                            title: "Strategy & Launch",
                            description: "We build a customised multi-channel marketing plan for your Hisar business and launch campaigns across SEO, social media, and paid ads simultaneously.",
                            icon: "/icons/rocket.svg"
                        },
                        {
                            number: "03",
                            title: "Track & Optimise",
                            description: "We monitor every campaign metric — clicks, leads, calls, and conversions — and optimise continuously to improve performance and reduce cost per lead.",
                            icon: "/icons/settings.svg"
                        },
                        {
                            number: "04",
                            title: "Scale What Works",
                            description: "We identify the channels and creatives driving the most growth for your Hisar business and scale budgets and effort there for compounding results.",
                            icon: "/icons/shield-check.svg"
                        }
                    ]
                }
            },

            {
                type: "faq",
                data: {
                    // H2 — FAQ for featured snippet eligibility
                    heading: "Digital Marketing in Hisar — Frequently Asked Questions",
                    items: [
                        {
                            // Q mirrors real Google searches by Hisar business owners
                            q: "How much does digital marketing cost for a business in Hisar?",
                            a: "Digital marketing costs in Hisar vary based on which services you need and your business goals. A basic social media management package starts from ₹8,000 per month. Full-service digital marketing including SEO, Google Ads, and social media typically ranges from ₹20,000 to ₹80,000 per month. Contact Ekanostudio for a custom quote tailored to your Hisar business and budget."
                        },
                        {
                            q: "Which digital marketing channels work best for Hisar businesses?",
                            a: "For most businesses in Hisar, the most effective channels are Google SEO and local search (for long-term organic visibility), Meta Ads on Facebook and Instagram (for targeted reach and lead generation), and Google Business Profile optimisation (for appearing in local map searches). The right mix depends on your industry, target audience, and budget."
                        },
                        {
                            q: "How long does it take to see results from digital marketing in Hisar?",
                            a: "Paid campaigns like Google Ads and Meta Ads can generate leads within the first week of going live. SEO typically takes 3 to 6 months to show significant organic ranking improvements. Social media brand building is gradual but compounds over 2 to 3 months of consistent posting and engagement."
                        },
                        {
                            q: "Do you manage both organic and paid marketing for Hisar businesses?",
                            a: "Yes. Ekanostudio offers both organic marketing (SEO, content, social media) and paid marketing (Google Ads, Meta Ads) for businesses in Hisar. We recommend an integrated approach for maximum impact — organic builds long-term visibility while paid ads deliver immediate results."
                        },
                        {
                            q: "Can a small business in Hisar afford digital marketing?",
                            a: "Absolutely. Digital marketing is significantly more cost-effective than traditional advertising like newspaper ads or hoardings — and far more measurable. Ekanostudio works with businesses of all sizes in Hisar, from small local shops to established companies, with flexible packages designed to deliver ROI at every budget level."
                        }
                    ]
                }
            },

            {
                type: "pricing",
                data: {
                    heading: "Digital Marketing Pricing for Hisar Businesses",
                    category: "social-media-marketing",
                    serviceSlug: "social-media-strategy",
                    currency: "INR",
                    plans: [
                        {
                            name: "Starter",
                            price: "$249 – $449",
                            description: "Single-platform strategy & content framework.",
                            features: ["Channel Performance Audit", "Single Platform Strategy", "Content Pillar Definitions", "Basic Hashtag Research"]
                        },
                        {
                            name: "Standard",
                            price: "$699 – $1,199",
                            description: "Multi-platform strategy with content pillars & calendar.",
                            features: ["Multi-Platform Strategy", "Audience Persona Mapping", "Full Monthly Calendar", "Competitor Benchmarking"]
                        },
                        {
                            name: "Premium",
                            price: "$1,500 – $2,900",
                            description: "Full funnel-based content & engagement strategy.",
                            features: ["Conversion Funnel Design", "Engagement Automations", "Advanced Paid Alignment", "Influencer Roadmap"]
                        },
                        {
                            name: "Enterprise",
                            price: "$4,000+",
                            description: "Brand-scale multi-platform strategy with influencer & paid social.",
                            features: ["Global Brand Strategy", "Multi-Channel Integration", "Dedicated Strategy Lead", "ROI Modeling & Forecasts"]
                        },
                    ]
                }
            },

            {
                type: "cta",
                data: {
                    // CTA — specific offer, local, action-driven, no vague "Get Started"
                    heading: "Get a Free Digital Marketing Strategy for Your Hisar Business",
                    subheading: "Find out exactly which digital marketing channels will grow your business in Hisar fastest — completely free, no obligation.",
                    ctaText: "Book Free Strategy Call",
                    ctaLink: "/book-consultation",
                    currency: "INR",
                    serviceSlug: "social-media-strategy",
                    categorySlug: "social-media-marketing"
                }
            }
        ]
    };

    return <ServicePageClient serviceData={serviceData} categorySlug="social-media-marketing" />;
}

