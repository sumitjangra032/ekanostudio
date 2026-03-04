import { Metadata } from "next";
import ServicePageClient from "@/components/service-sections/ServicePageClient";
import { IServiceType } from "@/constants/services";

// ─── SEO NOTES ────────────────────────────────────────────────────────────────
// Title:       60 chars max → Google truncates at ~60 chars
// Description: 155 chars max → Google truncates at ~155-160 chars
// Canonical:   Self-referencing exact URL (no trailing slash)
// OG Title:    Click-optimised for social sharing — can differ from title tag
// OG Desc:     Social platforms allow ~200 chars — not a ranking factor
// Avoid:       "Best" in title tag — Google ignores superlatives & may flag as spam
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    // 55 characters ✅  (primary keyword first, brand at end)
    title: "Best SEO Agency in Hisar, Haryana | Ekanostudio",

    // 154 characters ✅  (includes CTA + local keyword + value prop)
    description: "Ekanostudio is a trusted SEO agency in Hisar helping businesses rank on Google. Local SEO, technical SEO & content strategy. Get a free SEO audit today.",

    alternates: {
        canonical: "https://www.ekanostudio.com/seo-services-in-hisar",
    },

    openGraph: {
        // OG title — slightly longer, more social-click-friendly
        title: "Best SEO Agency in Hisar, Haryana — Rank #1 on Google | Ekanostudio",

        // OG description — persuasive, social-optimised, up to ~200 chars
        description: "Struggling to rank on Google in Hisar? Ekanostudio provides expert local SEO, technical SEO, and content marketing for businesses in Hisar and across Haryana. Book your free audit today.",

        url: "https://www.ekanostudio.com/seo-services-in-hisar",
        type: "website",
    },
};

export default function SeoServicesHisarPage() {
    const serviceData: IServiceType = {
        slug: "seo-services-in-hisar",

        // Used in breadcrumbs / structured data — keep it natural
        title: "SEO Services in Hisar",

        // Structured data snippet / fallback description
        seo: "Professional SEO services for businesses in Hisar, Haryana. Local SEO, technical audits, on-page optimisation, and content strategy that drives organic growth.",

        sections: [
            {
                type: "hero",
                data: {
                    category: ["SEO Services", "Hisar, Haryana"],

                    // H1 — primary keyword, near exact match to title tag
                    // Never repeat the exact title tag as H1 — small variation is better
                    title: "SEO Services in Hisar, Haryana",

                    // Supporting headline — reinforces value, not a keyword repeat
                    headline: "Get Your Hisar Business to Page 1 of Google",

                    // Subheadline — natural language, secondary keywords woven in
                    subheadline: "Data-driven SEO strategies built for businesses in Hisar and Haryana — combining local SEO, technical fixes, and content to drive real organic growth.",

                    isSmallHeading: true,
                }
            },

            {
                type: "metrics",
                data: {
                    // H2 — keyword variation, not a repeat of H1
                    heading: "SEO Results We Deliver for Hisar Businesses",
                    subheading: "Measurable organic growth for clients across Hisar and Haryana.",
                    items: [
                        { icon: "/icons/trending-up.svg", value: "250%+", label: "Average Traffic Growth" },
                        { icon: "/icons/rocket.svg", value: "Top 3", label: "Average Keyword Rankings" },
                        { icon: "/icons/map.svg", value: "30+", label: "Hisar SEO Success Stories" },
                        { icon: "/icons/clock.svg", value: "Monthly", label: "Transparent Reporting" }
                    ]
                }
            },

            {
                type: "whoItsFor",
                data: {
                    // H2 — question format helps earn featured snippets
                    heading: "Who Should Invest in SEO Services in Hisar?",
                    items: [
                        // Each item: natural sentence, local context, specific industry signals
                        "Local shops, restaurants, and service providers in Hisar who want to appear in Google's local 3-pack.",
                        "Doctors, lawyers, CA firms, and consultants in Hisar looking for more enquiries from Google search.",
                        "Manufacturers and wholesalers in Haryana targeting buyers across India through organic search.",
                        "Startups and new businesses in Hisar building brand visibility without relying on paid ads.",
                        "E-commerce businesses selling products online who want sustainable traffic beyond Meta and Google Ads."
                    ]
                }
            },

            {
                type: "whyMatters",
                data: {
                    // H2 — natural keyword variation: "local SEO Hisar"
                    heading: "Why Local SEO in Hisar Is a Business Priority in 2025",
                    items: [
                        // Body copy — 130–150 words, LSI keywords: organic traffic, Google ranking,
                        // search intent, Haryana, local search, first page, competitors
                        "More than 90% of people in Hisar never scroll past the first page of Google. If your business is not ranking in the top results for searches like 'best [your service] in Hisar', your competitors are taking those customers every single day. Local SEO is the most cost-effective way to reach people in Hisar who are actively searching for what you sell — they have high purchase intent and are ready to contact you. Unlike paid ads that stop the moment your budget runs out, SEO builds long-term visibility that compounds over time. Ekanostudio's SEO team in Hisar combines technical expertise, local market knowledge, and Google-compliant strategies to move your business to the top of search results and keep it there."
                    ]
                }
            },

            {
                type: "deliverables",
                data: {
                    // H2 — action-oriented, service-specific
                    heading: "What Our Hisar SEO Service Includes",
                    items: [
                        // Deliverables — use natural keyword phrases, cover all SEO pillars
                        "Local keyword research targeting high-intent Hisar and Haryana search terms",
                        "Google Business Profile optimisation to rank in the Hisar local 3-pack",
                        "Full technical SEO audit — fixing crawl errors, page speed, Core Web Vitals, and mobile issues",
                        "On-page SEO — optimising title tags, meta descriptions, H1/H2 structure, and internal linking",
                        "Local citation building — consistent NAP across JustDial, IndiaMart, Sulekha, and 20+ directories",
                        "SEO content writing — blog posts and landing pages targeting Hisar search queries",
                        "High-quality backlink building from relevant Indian and local Haryana websites",
                        "Monthly ranking reports with keyword positions, traffic data, and next-step recommendations"
                    ]
                }
            },

            {
                type: "process",
                data: {
                    // Section title — keyword variation: "SEO process Hisar"
                    title: "Our SEO Process for Hisar Businesses",
                    description: "A structured, Google-compliant methodology that delivers consistent ranking improvements.",
                    steps: [
                        {
                            number: "01",
                            title: "SEO Audit",
                            // Step descriptions — specific, informative, natural language
                            description: "We perform a full audit of your website's technical health, current rankings, and competitors in Hisar to identify exactly what is holding you back.",
                            icon: "/icons/search.svg"
                        },
                        {
                            number: "02",
                            title: "On-Page Optimisation",
                            description: "We fix technical issues and optimise every page — titles, meta tags, headings, content, images, and internal links — for your Hisar target keywords.",
                            icon: "/icons/settings.svg"
                        },
                        {
                            number: "03",
                            title: "Authority Building",
                            description: "We create SEO content and earn quality backlinks from local Haryana sources and high-authority Indian websites to grow your domain authority.",
                            icon: "/icons/shield-check.svg"
                        },
                        {
                            number: "04",
                            title: "Track & Improve",
                            description: "Every month you receive a clear ranking report showing keyword movements, traffic growth, and the exact actions we are taking to maintain and improve your Hisar rankings.",
                            icon: "/icons/rocket.svg"
                        }
                    ]
                }
            },

            {
                type: "faq",
                data: {
                    // H2 — FAQ targeting local search queries for featured snippet eligibility
                    heading: "SEO Services in Hisar — Frequently Asked Questions",
                    items: [
                        {
                            // Each Q mirrors a real search query people type in Google
                            q: "How long does SEO take to show results in Hisar?",
                            a: "Most businesses in Hisar begin seeing measurable improvements in rankings and organic traffic within 3 to 6 months of consistent SEO work. Highly competitive keywords may take 6 to 12 months. Local SEO for the Google 3-pack often shows results faster — sometimes within 4 to 8 weeks."
                        },
                        {
                            q: "How much do SEO services cost in Hisar?",
                            a: "SEO pricing in Hisar depends on the competitiveness of your industry, the number of keywords targeted, and the scope of work. Ekanostudio offers flexible monthly SEO packages for Hisar businesses. Contact us for a custom quote based on your goals and budget."
                        },
                        {
                            q: "What is local SEO and why does it matter for Hisar businesses?",
                            a: "Local SEO is the process of optimising your online presence so your business appears in Google search results when people in Hisar search for your services. This includes ranking in the Google Maps 3-pack, local organic results, and 'near me' searches. For any Hisar business serving local customers, local SEO is the highest ROI digital marketing channel available."
                        },
                        {
                            q: "Do you guarantee first page rankings on Google?",
                            a: "No ethical SEO agency can guarantee specific rankings because Google's algorithm is constantly evolving. What Ekanostudio does guarantee is 100% Google-compliant, white-hat SEO strategies, full transparency in reporting, and a consistent track record of ranking Hisar businesses on page one for competitive local keywords."
                        },
                        {
                            q: "Can you do SEO for my Google Business Profile in Hisar?",
                            a: "Yes. Google Business Profile (GBP) optimisation is a core part of our Hisar local SEO service. We optimise your business category, description, photos, posts, reviews, and Q&A section to maximise your chances of appearing in the Google 3-pack when people search for your services in Hisar."
                        }
                    ]
                }
            },

            {
                type: "cta",
                data: {
                    // CTA — specific, local, action-driven
                    heading: "Get a Free SEO Audit for Your Hisar Business",
                    subheading: "Find out exactly why your website is not ranking in Hisar and what it will take to fix it — completely free, no obligation.",
                    ctaText: "Claim Free SEO Audit",
                    ctaLink: "/book-consultation"
                }
            }
        ]
    };

    return <ServicePageClient serviceData={serviceData} categorySlug="seo" />;
}

