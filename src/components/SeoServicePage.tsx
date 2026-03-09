"use client";

import { SeoPageData } from "@/lib/seo/content-generator";
import ServicePageClient from "@/components/service-sections/ServicePageClient";
import { IServiceType } from "@/constants/services";
import { SERVICE_PRICING } from "@/constants/servicePricing";
import { isIndianLocation, INR_CURRENCY, USD_CURRENCY, type Currency } from "@/lib/pricing";

import { ChartLineIcon, RocketIcon, GlobeIcon, ClockIcon } from "@/components/icons/LocalIcons";

export default function SeoServicePage({ data }: { data: SeoPageData }) {

    // Determine currency based on location — Indian locations use INR
    const currency: Currency = isIndianLocation(data.location) ? INR_CURRENCY : USD_CURRENCY;

    // Convert SeoPageData to IServiceType format expected by ServicePageClient
    const serviceData: IServiceType = {
        slug: data.service.slug,
        title: data.service.name,
        seo: data.meta.description,
        sections: [
            // 1. HERO SECTION (Single CTA)
            {
                type: "hero",
                data: {
                    category: [data.location.type === "city" ? "Local Services" : "Global Services", data.location.name],
                    title: data.content.hero.title,
                    headline: data.content.hero.subtitle,
                    subheadline: `Professional ${data.service.name} services tailored for the ${data.location.adjective} market.`,
                    isSmallHeading: true,
                    currency,
                    serviceSlug: data.service.slug,
                    categorySlug: data.service.categorySlug,
                    serviceCta: {
                        text: "Get Started",
                    }
                }
            },
            // 2. METRICS
            {
                type: "metrics",
                data: {
                    heading: `${data.service.name} Impact`,
                    subheading: `Delivering measurable results for businesses in ${data.location.name}.`,
                    items: [
                        { icon: ChartLineIcon, value: "100%+", label: "Client Satisfaction" },
                        { icon: RocketIcon, value: "2.5x", label: "Average ROI" },
                        { icon: GlobeIcon, value: "50+", label: `Projects in ${data.location.name}` },
                        { icon: ClockIcon, value: "24/7", label: "Support & Maintenance" }
                    ]
                }
            },
            // 3. WHO IT'S FOR
            {
                type: "whoItsFor",
                data: {
                    heading: `Who Needs ${data.service.name}?`,
                    items: [
                        `Startups in ${data.location.name} looking to scale efficiently.`,
                        `Enterprises needing robust ${data.service.name} solutions.`,
                        `E-commerce brands targeting the ${data.location.adjective} market.`,
                        `Service-based businesses seeking digital transformation.`
                    ]
                }
            },
            // 4. OVERVIEW -> Mapped to 'whyMatters'
            {
                type: "whyMatters",
                data: {
                    heading: data.content.overview.title,
                    items: [data.content.overview.text]
                }
            },
            // 5. DELIVERABLES
            {
                type: "deliverables",
                data: {
                    heading: "What You Get",
                    items: data.content.deliverables
                }
            },
            // 6. TIMELINE
            {
                type: "timeline",
                data: {
                    heading: "Project Timeline",
                    items: [
                        { label: "Discovery & Strategy", duration: "Week 1-2" },
                        { label: "Design & Development", duration: "Week 3-6" },
                        { label: "Testing & QA", duration: "Week 7" },
                        { label: "Launch & Optimization", duration: "Week 8" }
                    ]
                }
            },
            // 7. PROCESS
            {
                type: "process",
                data: {
                    title: data.content.process.title,
                    description: "Our proven methodology for success.",
                    steps: data.content.process.steps.map((step, i) => {
                        let icon = "/icons/settings.svg";
                        if (i === 0) icon = "/icons/search.svg"; // Discovery
                        if (i === 1) icon = "/icons/pen-tool.svg"; // Design
                        if (i === 2) icon = "/icons/shield-check.svg"; // Testing
                        if (i === 3) icon = "/icons/rocket.svg"; // Launch

                        return {
                            number: `0${i + 1}`,
                            title: step.title,
                            description: step.desc,
                            icon: icon
                        };
                    })
                }
            },
            // 8. FAQ
            {
                type: "faq",
                data: {
                    heading: "Frequently Asked Questions",
                    items: [
                        {
                            q: `How much does ${data.service.name} cost in ${data.location.name}?`,
                            a: `Costs vary based on scope and complexity. We offer competitive pricing tailored to ${data.location.adjective} market standards. Contact us for a custom quote.`
                        },
                        {
                            q: `How long does a typical project take?`,
                            a: `Most projects range from 4-8 weeks, depending on requirements. We prioritize quality and timely delivery for all our clients in ${data.location.name}.`
                        },
                        {
                            q: `Do you provide support after launch?`,
                            a: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your continued success."
                        }
                    ]
                }
            },
            // 9. PRICING
            {
                type: "pricing",
                data: {
                    heading: "Flexible Pricing Plans",
                    category: data.service.categorySlug,
                    serviceSlug: data.service.targetServiceSlug,
                    currency,
                    plans: SERVICE_PRICING[data.service.targetServiceSlug] || []
                }
            },
            // 10. CTA
            {
                type: "cta",
                data: {
                    heading: data.content.cta.title,
                    subheading: data.content.cta.text,
                    ctaText: "Start Your Project",
                    ctaLink: "/book-consultation",
                    currency,
                    serviceSlug: data.service.slug,
                    categorySlug: data.service.categorySlug,
                }
            }
        ]
    };

    return <ServicePageClient serviceData={serviceData} categorySlug={data.service.categorySlug} />;
}
