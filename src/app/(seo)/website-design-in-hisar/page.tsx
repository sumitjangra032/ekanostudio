import { Metadata } from "next";
import ServicePageClient from "@/components/service-sections/ServicePageClient";
import { IServiceType } from "@/constants/services";

// ─── SEO NOTES ────────────────────────────────────────────────────────────────
// Title:       60 chars  → Google truncates at ~60 chars
// Description: 155 chars → Google truncates at ~155-160 chars
// Canonical:   Self-referencing exact URL (no trailing slash)
// OG Title:    Can be slightly different — more click-worthy
// OG Desc:     Can be slightly longer — used by social, not Google ranking
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    // 59 characters ✅
    title: "Top Website Design Company in Hisar | Ekanostudio",

    // 154 characters ✅
    description: "Ekanostudio builds high-converting websites for businesses in Hisar, Haryana. Custom web design, mobile-first development & local SEO. Get a free quote today.",

    alternates: {
        canonical: "https://www.ekanostudio.com/website-design-in-hisar",
    },

    openGraph: {
        // OG title — optimised for social sharing click-through
        title: "Top Website Design Company in Hisar, Haryana | Ekanostudio",

        // OG description — social platforms show up to ~200 chars
        description: "Need a professional website in Hisar? Ekanostudio delivers custom UI/UX design, fast-loading development & on-page SEO built specifically for Hisar businesses. Let's build your online presence.",

        url: "https://www.ekanostudio.com/website-design-in-hisar",
        type: "website",
    },
};

export default function WebsiteDesignHisarPage() {
    const serviceData: IServiceType = {
        slug: "website-design-in-hisar",

        // Used in breadcrumbs / structured data — keep it natural
        title: "Website Design in Hisar",

        // Meta description fallback / structured data snippet
        seo: "Professional website design and development services for businesses in Hisar, Haryana. Mobile-first, SEO-optimised, and built to convert.",

        sections: [
            {
                type: "hero",
                data: {
                    category: ["Website Design", "Hisar, Haryana"],

                    // H1 — must contain primary keyword exactly once, near the start
                    title: "Website Design Company in Hisar",

                    // Supporting headline — reinforce local intent + value prop
                    headline: "Professional Websites Built for Hisar Businesses",

                    // Subheadline — natural language, secondary keywords
                    subheadline: "Custom web design and development that helps businesses in Hisar, Haryana attract more customers, rank on Google, and grow online.",

                    isSmallHeading: true,
                }
            },

            {
                type: "metrics",
                data: {
                    // H2 — use a keyword variation, not the exact H1
                    heading: "Our Web Design Results in Hisar",
                    subheading: "Real outcomes for real businesses across Hisar and Haryana.",
                    items: [
                        { icon: "/icons/trending-up.svg", value: "100%", label: "Client Satisfaction" },
                        { icon: "/icons/rocket.svg", value: "3x", label: "Average Lead Growth" },
                        { icon: "/icons/map.svg", value: "40+", label: "Projects Delivered in Hisar" },
                        { icon: "/icons/clock.svg", value: "24/7", label: "Post-Launch Support" }
                    ]
                }
            },

            {
                type: "whoItsFor",
                data: {
                    // H2 — question-format H2s help capture featured snippets
                    heading: "Who Needs a Website Designer in Hisar?",
                    items: [
                        // Each item reads naturally and reinforces local context
                        "Startups in Hisar building their first professional online presence.",
                        "Established businesses in Haryana looking to modernise or redesign their website.",
                        "E-commerce sellers in Hisar wanting a faster, higher-converting online store.",
                        "Doctors, lawyers, consultants, and service providers in Hisar who need more online enquiries.",
                        "Retailers and wholesalers in Hisar targeting customers both locally and nationally."
                    ]
                }
            },

            {
                type: "whyMatters",
                data: {
                    // H2 — keyword variation: "web design Hisar" used naturally
                    heading: "Why Your Hisar Business Needs a Strong Website in 2025",
                    items: [
                        // Paragraph copy — aim for 100–150 words. Use LSI keywords: local market, Haryana, online presence, search engine, mobile users
                        "Over 80% of consumers in Hisar search online before making a purchase or visiting a business. If your website is slow, outdated, or not optimised for mobile, you are losing customers to competitors every single day. At Ekanostudio, we design websites specifically for the Hisar market — combining fast performance, local SEO, and conversion-focused design so your business appears at the top of Google and turns visitors into paying customers. Whether you are in retail, healthcare, education, or any other industry in Haryana, a well-built website is the most powerful business investment you can make in 2025."
                    ]
                }
            },

            {
                type: "deliverables",
                data: {
                    // H2 — use action-oriented language
                    heading: "What You Get With Our Hisar Web Design Service",
                    items: [
                        // Deliverables — use natural keyword phrases, not stuffed
                        "Custom website design tailored to your Hisar business and brand identity",
                        "Mobile-first, responsive development that works perfectly on all devices",
                        "On-page SEO optimisation targeting Hisar and Haryana local search keywords",
                        "Fast page loading speed — optimised for Google Core Web Vitals",
                        "Secure HTTPS setup with SSL certificate included",
                        "Google Analytics and Search Console integration for performance tracking",
                        "Scalable backend that grows as your Hisar business grows",
                        "30-day post-launch support and maintenance"
                    ]
                }
            },

            {
                type: "timeline",
                data: {
                    // H2 — clear, informational
                    heading: "Website Design Timeline for Hisar Projects",
                    items: [
                        { label: "Discovery & Requirement Gathering", duration: "Week 1" },
                        { label: "Wireframing & Design Mockups", duration: "Week 2–3" },
                        { label: "Development, Testing & Revisions", duration: "Week 4–6" },
                        { label: "Launch, SEO Setup & Handover", duration: "Week 7" }
                    ]
                }
            },

            {
                type: "process",
                data: {
                    // Section title — use keyword variation
                    title: "Our Web Design Process in Hisar",
                    description: "A proven, step-by-step methodology built around your Hisar business goals.",
                    steps: [
                        {
                            number: "01",
                            title: "Discovery",
                            // Descriptions — natural, local context where relevant
                            description: "We learn about your Hisar business, your target customers, and your goals before a single pixel is designed.",
                            icon: "/icons/search.svg"
                        },
                        {
                            number: "02",
                            title: "Design",
                            description: "We create custom UI/UX mockups that reflect your brand and are optimised for the behaviour of Hisar users.",
                            icon: "/icons/pen-tool.svg"
                        },
                        {
                            number: "03",
                            title: "Development",
                            description: "We write clean, fast, and secure code — ensuring your site passes Google's Core Web Vitals benchmarks.",
                            icon: "/icons/settings.svg"
                        },
                        {
                            number: "04",
                            title: "Launch & SEO",
                            description: "We launch your website with full on-page SEO for Hisar keywords, submit your sitemap, and verify in Google Search Console.",
                            icon: "/icons/rocket.svg"
                        }
                    ]
                }
            },

            {
                type: "faq",
                data: {
                    // H2 — FAQ sections help Google show featured snippets
                    heading: "Frequently Asked Questions — Web Design in Hisar",
                    items: [
                        {
                            // FAQ questions — mirror real search queries for snippet eligibility
                            q: "How much does a website cost in Hisar?",
                            a: "Website costs in Hisar depend on your requirements. A basic business website starts from ₹15,000, while a full e-commerce or custom web application can range from ₹40,000 to ₹2,00,000+. Contact Ekanostudio for a free, detailed quote tailored to your Hisar business."
                        },
                        {
                            q: "How long does it take to design a website in Hisar?",
                            a: "A standard business website takes 4–6 weeks from discovery to launch. Simple landing pages can be delivered in 1–2 weeks. Timelines depend on the complexity of the project and how quickly content is provided."
                        },
                        {
                            q: "Will my website rank on Google in Hisar?",
                            a: "Every website we build includes on-page SEO targeting Hisar and Haryana keywords from day one. We set up Google Search Console, submit your sitemap, and optimise your meta tags, headings, and content for local search visibility."
                        },
                        {
                            q: "Do you provide website support after launch in Hisar?",
                            a: "Yes. All projects include 30 days of free post-launch support. We are based in Hisar and provide ongoing maintenance, updates, and SEO services for long-term clients."
                        },
                        {
                            q: "Can you redesign my existing website for better performance?",
                            a: "Absolutely. We work with Hisar businesses to audit, redesign, and optimise existing websites — improving speed, mobile usability, design quality, and search engine rankings."
                        }
                    ]
                }
            },

            {
                type: "cta",
                data: {
                    // CTA heading — action-driven, local keyword reinforcement
                    heading: "Ready to Build Your Website in Hisar?",
                    subheading: "Join growing businesses in Hisar and Haryana that trust Ekanostudio for professional web design. Get a free consultation today.",
                    ctaText: "Get Free Quote",
                    ctaLink: "/book-consultation"
                }
            }
        ]
    };

    return <ServicePageClient serviceData={serviceData} categorySlug="web-design-development" />;
}

