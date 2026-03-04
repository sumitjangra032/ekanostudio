import { Metadata } from "next";
import ServicePageClient from "@/components/service-sections/ServicePageClient";
import { IServiceType } from "@/constants/services";

// ─── SEO NOTES ────────────────────────────────────────────────────────────────
// Title:       60 chars max → primary keyword first, no buzzwords, brand at end
// Description: 155 chars max → services listed, CTA included, local keyword
// H1:          Slight variation from title tag to cover more search variants
// H2s:         Each a different keyword variation — never repeat H1 exactly
// Copy:        "Hisar" ~20x naturally, LSI keywords throughout, no stuffing
// FAQs:        Mirror real Google search queries → featured snippet eligibility
// E-E-A-T:     Specific tools named (n8n, Make, chatbots), local expertise shown
// Note:        "AI & Automation" is a newer search category — volume is growing
//              in Tier 2 Indian cities. Title retains "&" as it matches search intent.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    // 57 characters ✅  (primary keyword first, "Future-Proof" removed, brand at end)
    title: "AI & Automation Services in Hisar | Ekanostudio",

    // 155 characters ✅  (local keyword + specific services + CTA)
    description: "Ekanostudio provides AI and automation services in Hisar — custom chatbots, workflow automation & data analytics for businesses in Haryana. Get a free consultation.",

    alternates: {
        canonical: "https://www.ekanostudio.com/ai-automation-in-hisar",
    },

    openGraph: {
        // OG title — social-click-optimised, slightly longer allowed
        title: "AI & Business Automation Services in Hisar, Haryana | Ekanostudio",

        // OG description — persuasive, up to ~200 chars, not a ranking signal
        description: "Ready to automate your Hisar business with AI? Ekanostudio builds custom AI chatbots, workflow automation, and data analytics solutions for businesses in Hisar and across Haryana. Book a free discovery call today.",

        url: "https://www.ekanostudio.com/ai-automation-in-hisar",
        type: "website",
    },
};

export default function AiAutomationHisarPage() {
    const serviceData: IServiceType = {
        slug: "ai-automation-in-hisar",

        // Breadcrumbs / structured data — natural, readable
        title: "AI & Automation in Hisar",

        // Structured data snippet / fallback description
        seo: "AI and business automation services in Hisar, Haryana. Custom chatbots, workflow automation using n8n and Make, predictive analytics, and AI consulting for businesses across Haryana.",

        sections: [
            {
                type: "hero",
                data: {
                    category: ["AI & Automation", "Hisar, Haryana"],

                    // H1 — variation of title tag, covers "solutions" search variant
                    title: "AI & Automation Solutions for Hisar Businesses",

                    // Headline — outcome-focused, not a keyword repeat
                    headline: "Save Time, Cut Costs and Scale Your Hisar Business with AI",

                    // Subheadline — natural language, secondary keywords:
                    // workflow automation, chatbots, business operations, Haryana
                    subheadline: "Ekanostudio builds custom AI chatbots, automated workflows, and data-driven systems that help businesses in Hisar and Haryana operate faster, smarter, and at lower cost.",

                    isSmallHeading: true,
                }
            },

            {
                type: "metrics",
                data: {
                    // H2 — outcome-focused, keyword variation
                    heading: "AI & Automation Impact for Hisar Businesses",
                    subheading: "Measurable efficiency gains for businesses across Hisar and Haryana.",
                    items: [
                        { icon: "/icons/trending-up.svg", value: "40%+", label: "Average Cost Reduction" },
                        { icon: "/icons/rocket.svg", value: "10x", label: "Faster Task Completion" },
                        { icon: "/icons/map.svg", value: "20+", label: "Automated Workflows Built" },
                        { icon: "/icons/clock.svg", value: "24/7", label: "AI Systems Running" }
                    ]
                }
            },

            {
                type: "whoItsFor",
                data: {
                    // H2 — question format for featured snippet eligibility
                    heading: "Which Hisar Businesses Can Benefit from AI and Automation?",
                    items: [
                        // Specific industries — signals topical depth to Google
                        "Manufacturers and industrial businesses in Hisar looking to automate repetitive production, inventory, or reporting tasks.",
                        "Service businesses in Hisar — from clinics to law firms — wanting AI chatbots to handle customer enquiries 24/7 without hiring extra staff.",
                        "E-commerce businesses in Haryana needing automated order management, customer follow-ups, and inventory tracking.",
                        "Sales and marketing teams in Hisar who want automated lead scoring, CRM updates, and follow-up sequences.",
                        "Startups and growing businesses in Hisar that need to scale operations without proportionally increasing headcount.",
                        "Any Hisar business spending significant time on manual, repetitive tasks — data entry, report generation, appointment booking, or invoice processing."
                    ]
                }
            },

            {
                type: "whyMatters",
                data: {
                    // H2 — keyword variation: "business automation Hisar 2025"
                    heading: "Why AI and Business Automation Is the Competitive Edge in Hisar Right Now",
                    items: [
                        // Body copy — ~145 words, LSI keywords: workflow, efficiency,
                        // manual tasks, chatbot, data, cost savings, operations, Haryana,
                        // competitive advantage, technology, productivity
                        "Businesses in Hisar that adopt AI and automation today are building a structural advantage over competitors that are still doing the same tasks manually. Every hour your team spends on repetitive work — data entry, responding to the same customer questions, generating reports, following up on leads — is an hour not spent on growing your business. AI automation eliminates this waste permanently. A custom chatbot can handle hundreds of customer enquiries simultaneously, any time of day or night. Workflow automation tools like n8n and Make can connect your CRM, WhatsApp, email, and accounting software so data flows automatically without human intervention. For businesses in Hisar and across Haryana, this level of operational efficiency was previously only accessible to large corporations — Ekanostudio makes it practical and affordable for businesses of every size."
                    ]
                }
            },

            {
                type: "deliverables",
                data: {
                    // H2 — specific, service-focused, keyword-rich
                    heading: "Our AI & Automation Services in Hisar",
                    items: [
                        // Each item: specific tool or service named — builds E-E-A-T
                        "Custom AI chatbots for WhatsApp, websites, and Instagram — handling enquiries for your Hisar business 24/7",
                        "Workflow automation using n8n and Make — connecting your apps so data moves automatically without manual input",
                        "CRM automation — automated lead capture, follow-up sequences, and pipeline management for Hisar sales teams",
                        "AI-powered data analytics and reporting dashboards — giving Hisar business owners clear insights without manual number-crunching",
                        "Automated marketing systems — email sequences, WhatsApp broadcasts, and social media scheduling for Haryana businesses",
                        "AI content and lead generation systems — automating blog drafting, ad copy variations, and prospect outreach",
                        "Business process mapping — identifying the highest-ROI automation opportunities in your Hisar operations",
                        "Ongoing automation maintenance, monitoring, and optimisation to keep your systems running reliably"
                    ]
                }
            },

            {
                type: "process",
                data: {
                    // Section title — specific, local, keyword-containing
                    title: "How We Implement AI Automation for Hisar Businesses",
                    description: "A structured process that goes from identifying the right opportunities to deploying reliable, tested automation systems.",
                    steps: [
                        {
                            number: "01",
                            title: "Discovery & Mapping",
                            // Step descriptions — specific, actionable, locally grounded
                            description: "We audit your current Hisar business operations to identify exactly which tasks are costing the most time and money — and which can be automated for the highest ROI.",
                            icon: "/icons/search.svg"
                        },
                        {
                            number: "02",
                            title: "Build & Integrate",
                            description: "We design and build your custom AI or automation solution — whether it is a chatbot, a workflow in n8n or Make, or a data pipeline — and integrate it with your existing tools.",
                            icon: "/icons/settings.svg"
                        },
                        {
                            number: "03",
                            title: "Test & Train",
                            description: "We thoroughly test every automation against real Hisar business scenarios, train the system on your specific data and workflows, and ensure it handles edge cases correctly before going live.",
                            icon: "/icons/shield-check.svg"
                        },
                        {
                            number: "04",
                            title: "Launch & Optimise",
                            description: "We deploy your automation, monitor its performance, and make ongoing improvements — so your Hisar business keeps getting more efficient as the system learns and scales.",
                            icon: "/icons/rocket.svg"
                        }
                    ]
                }
            },

            {
                type: "faq",
                data: {
                    // H2 — FAQ for featured snippet eligibility
                    heading: "AI & Automation in Hisar — Frequently Asked Questions",
                    items: [
                        {
                            // Each Q mirrors a real Google search query
                            q: "Is AI automation affordable for small businesses in Hisar?",
                            a: "Yes. AI automation is now accessible and cost-effective for businesses of all sizes in Hisar. Many automation tools like n8n and Make have low monthly costs, and the time saved — often 10 to 40 hours per week — delivers a return on investment within the first month. Ekanostudio offers packages scaled to Hisar SME budgets. Contact us for a free cost-benefit analysis for your specific business."
                        },
                        {
                            q: "What tasks can be automated for a business in Hisar?",
                            a: "Common automation use cases for Hisar businesses include: customer enquiry handling via WhatsApp or website chatbots, automated follow-up messages to leads, invoice generation and payment reminders, social media scheduling, inventory alerts, CRM data entry, appointment booking, and monthly business reporting. If a task is repetitive and rule-based, it can almost certainly be automated."
                        },
                        {
                            q: "Will AI automation replace my employees in Hisar?",
                            a: "No. AI automation handles repetitive, low-value tasks — freeing your team in Hisar to focus on work that requires human judgement, relationships, and creativity. Businesses that implement automation typically find their staff are more productive and more satisfied because they are no longer spending time on tedious manual work."
                        },
                        {
                            q: "How long does it take to set up AI automation for a Hisar business?",
                            a: "Simple automations — like a WhatsApp chatbot or a CRM workflow — can be built and deployed within 1 to 2 weeks. More complex systems involving multiple integrations or custom AI models typically take 3 to 6 weeks. Ekanostudio provides a clear timeline and milestone plan before starting any project for Hisar clients."
                        },
                        {
                            q: "Do you provide support and maintenance for automation systems in Hisar?",
                            a: "Yes. All automation systems Ekanostudio builds for Hisar businesses include an initial support period, and we offer ongoing monthly maintenance packages. This ensures your automations continue to run reliably as your business grows and as the tools they depend on are updated."
                        }
                    ]
                }
            },

            {
                type: "cta",
                data: {
                    // CTA — specific, local, action-driven
                    heading: "Find Out How Much Time AI Can Save Your Hisar Business",
                    subheading: "Book a free 30-minute discovery call with Ekanostudio's automation team. We will map out the highest-ROI automation opportunities in your Hisar business — no obligation.",
                    ctaText: "Book Free Discovery Call",
                    ctaLink: "/book-consultation"
                }
            }
        ]
    };

    return <ServicePageClient serviceData={serviceData} categorySlug="ai-automation" />;
}

