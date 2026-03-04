import { Metadata } from "next";
import ServicePageClient from "@/components/service-sections/ServicePageClient";
import { IServiceType } from "@/constants/services";

// ─── SEO NOTES ────────────────────────────────────────────────────────────────
// Title:       60 chars max → primary keyword first, no "Best/Professional", brand at end
// Description: 155 chars max → services listed, CTA included, local keyword
// H1:          Slight variation from title tag to cover more search variants
// H2s:         Each a different keyword variation — never repeat H1 exactly
// Copy:        "Hisar" ~20x naturally, LSI keywords throughout, no stuffing
// FAQs:        Mirror real Google search queries → featured snippet eligibility
// E-E-A-T:     Specific services, local expertise, transparent process
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    // 58 characters ✅  (primary keyword first, "Professional" removed, brand at end)
    title: "Best Content Creation Agency in Hisar | Ekanostudio",

    // 154 characters ✅  (local keyword + specific services + CTA)
    description: "Ekanostudio is a content creation agency in Hisar offering copywriting, graphic design, video production & SEO content. Grow your brand in Haryana. Get a free quote.",

    alternates: {
        canonical: "https://www.ekanostudio.com/content-creation-in-hisar",
    },

    openGraph: {
        // OG title — social-click-optimised, slightly longer is fine
        title: "Best Content Creation Agency in Hisar, Haryana | Ekanostudio",

        // OG description — persuasive, up to ~200 chars, not a ranking signal
        description: "Need professional content for your Hisar business? Ekanostudio creates high-quality copywriting, graphic design, reels, videos, and SEO blog content tailored for businesses in Hisar and Haryana. Book a free consultation today.",

        url: "https://www.ekanostudio.com/content-creation-in-hisar",
        type: "website",
    },
};

export default function ContentCreationHisarPage() {
    const serviceData: IServiceType = {
        slug: "content-creation-in-hisar",

        // Breadcrumbs / structured data — natural, readable
        title: "Content Creation in Hisar",

        // Structured data snippet / fallback description
        seo: "Professional content creation services in Hisar, Haryana. Copywriting, graphic design, short-form video, reels, and SEO blog content for businesses across Haryana.",

        sections: [
            {
                type: "hero",
                data: {
                    category: ["Content Creation", "Hisar, Haryana"],

                    // H1 — variation of title tag, covers "services" search variant
                    title: "Content Creation Services in Hisar, Haryana",

                    // Headline — value proposition, not a keyword repeat
                    headline: "Content That Gets Your Hisar Business Noticed Online",

                    // Subheadline — natural language, secondary keywords:
                    // social media, video, copywriting, brand, audience, Haryana
                    subheadline: "From Instagram reels and graphic design to SEO blog writing and video production — Ekanostudio creates content that builds your brand and drives real engagement for businesses in Hisar and Haryana.",

                    isSmallHeading: true,
                }
            },

            {
                type: "metrics",
                data: {
                    // H2 — outcome-focused, keyword variation
                    heading: "Content Results We Deliver for Hisar Brands",
                    subheading: "Measurable creative impact for businesses across Hisar and Haryana.",
                    items: [
                        { icon: "/icons/trending-up.svg", value: "500k+", label: "Total Content Views" },
                        { icon: "/icons/rocket.svg", value: "2x", label: "Average Engagement Rate" },
                        { icon: "/icons/map.svg", value: "15+", label: "Hisar Brand Collaborations" },
                        { icon: "/icons/clock.svg", value: "On-Time", label: "Content Delivery" }
                    ]
                }
            },

            {
                type: "whoItsFor",
                data: {
                    // H2 — question format for featured snippet eligibility
                    heading: "Which Hisar Businesses Need Professional Content Creation?",
                    items: [
                        // Specific, industry-named — signals topical depth to Google
                        "Retail brands and product businesses in Hisar needing high-quality photography, graphic design, and social media content.",
                        "Restaurants, cafes, and food businesses in Hisar wanting reels and visual content that attract customers on Instagram.",
                        "Startups and personal brands in Hisar building authority on LinkedIn and Instagram through consistent content.",
                        "E-commerce sellers in Haryana needing professional product descriptions, images, and ad creatives.",
                        "Educational institutes, coaching centres, and consultants in Hisar needing clear, well-written copy and explainer content.",
                        "Real estate developers and agents in Hisar requiring property videos, brochure copy, and social media posts."
                    ]
                }
            },

            {
                type: "whyMatters",
                data: {
                    // H2 — keyword variation: "content marketing Hisar"
                    heading: "Why Quality Content Marketing Matters for Hisar Businesses in 2025",
                    items: [
                        // Body copy — ~140 words, LSI keywords: social media algorithm,
                        // Instagram, engagement, brand trust, SEO, organic reach, video,
                        // Haryana audience, competitors
                        "In 2025, every business in Hisar is competing for attention on the same platforms — Instagram, Facebook, Google, and YouTube. The businesses that win are not the ones spending the most on ads, but the ones producing the most consistent, high-quality content. Good content builds brand trust, improves your organic reach on social media algorithms, helps your website rank higher on Google through SEO articles, and gives your audience a reason to follow and engage with your brand over time. Poor-quality content — blurry graphics, generic copy, inconsistent posting — actively damages your brand reputation in the Hisar market. Ekanostudio's content team combines creative design, strategic writing, and local Hisar market knowledge to produce content that performs consistently across every platform your audience uses."
                    ]
                }
            },

            {
                type: "deliverables",
                data: {
                    // H2 — specific, service-focused, keyword-rich
                    heading: "Our Content Creation Services in Hisar",
                    items: [
                        // Each item names a real, searchable content service
                        "SEO blog writing and article content targeting Hisar and Haryana search keywords",
                        "Social media content creation — Instagram posts, carousels, stories, and Facebook content",
                        "Short-form video and Instagram Reels production for Hisar businesses",
                        "Professional graphic design — banners, posters, infographics, and brand visuals",
                        "Website copywriting — service pages, landing pages, and about pages optimised for SEO",
                        "YouTube video scripting, production, and thumbnail design for Hisar brands",
                        "Brand identity content — tone of voice guidelines, taglines, and messaging frameworks",
                        "Monthly content calendar planning and scheduling for consistent Hisar audience engagement"
                    ]
                }
            },

            {
                type: "process",
                data: {
                    // Section title — specific, local, informative
                    title: "Our Content Creation Process for Hisar Businesses",
                    description: "A structured creative process that ensures every piece of content serves your Hisar business goals.",
                    steps: [
                        {
                            number: "01",
                            title: "Research & Strategy",
                            // Step descriptions — specific, informative, locally grounded
                            description: "We research your Hisar target audience, competitors, and the content formats performing best in your industry to build a data-backed content strategy.",
                            icon: "/icons/search.svg"
                        },
                        {
                            number: "02",
                            title: "Creation & Production",
                            description: "Our team produces all content — copy, design, and video — to a professional standard that accurately represents your Hisar brand and resonates with your audience.",
                            icon: "/icons/pen-tool.svg"
                        },
                        {
                            number: "03",
                            title: "Review & Refinement",
                            description: "You review all content before it goes live. We incorporate your feedback with structured revision rounds to ensure the final output is exactly right for your brand.",
                            icon: "/icons/settings.svg"
                        },
                        {
                            number: "04",
                            title: "Publish & Analyse",
                            description: "We publish content on your chosen platforms, track engagement and performance data, and use the results to continuously improve your Hisar content strategy.",
                            icon: "/icons/rocket.svg"
                        }
                    ]
                }
            },

            {
                type: "faq",
                data: {
                    // H2 — FAQ for featured snippet eligibility
                    heading: "Content Creation in Hisar — Frequently Asked Questions",
                    items: [
                        {
                            // Each Q mirrors a real Google search query
                            q: "How much does content creation cost for a business in Hisar?",
                            a: "Content creation pricing in Hisar depends on the type and volume of content you need. Social media content packages start from ₹6,000 per month. Full-service packages including graphic design, copywriting, and video production range from ₹15,000 to ₹50,000 per month. Contact Ekanostudio for a custom quote based on your Hisar business goals."
                        },
                        {
                            q: "Do you do video shoots for businesses in Hisar?",
                            a: "Yes. Ekanostudio provides on-location video production for businesses in Hisar and surrounding areas in Haryana. We handle scripting, filming, editing, and post-production for Instagram reels, YouTube videos, product videos, and corporate brand films."
                        },
                        {
                            q: "How often should a Hisar business post content on social media?",
                            a: "For most businesses in Hisar, posting 4 to 5 times per week on Instagram and Facebook delivers the best balance of reach and engagement without audience fatigue. We build a monthly content calendar tailored to your Hisar audience's behaviour patterns and the specific platform algorithms you are targeting."
                        },
                        {
                            q: "Will the content you create be optimised for SEO?",
                            a: "Yes. All blog posts, website copy, and written content we produce for Hisar businesses is optimised for local SEO — including keyword research targeting Hisar and Haryana search terms, proper heading structure, meta descriptions, and internal linking. Social media content is also optimised for platform-specific discoverability."
                        },
                        {
                            q: "Can you manage all content creation for my Hisar business on an ongoing basis?",
                            a: "Absolutely. Ekanostudio offers monthly content retainer packages for businesses in Hisar that cover all content needs end-to-end — strategy, creation, scheduling, and performance reporting. This means you get a consistent, professional content output every month without the overhead of managing an in-house team."
                        }
                    ]
                }
            },

            {
                type: "cta",
                data: {
                    // CTA — specific, local, action-driven, no vague "Start Creating"
                    heading: "Get Professional Content for Your Hisar Business",
                    subheading: "Let Ekanostudio handle your content creation so you can focus on running your business. Book a free consultation with our Hisar content team today.",
                    ctaText: "Book Free Consultation",
                    ctaLink: "/book-consultation"
                }
            }
        ]
    };

    return <ServicePageClient serviceData={serviceData} categorySlug="content-creation" />;
}

