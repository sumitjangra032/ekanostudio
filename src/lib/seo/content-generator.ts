import { SEO_SERVICES, SEO_LOCATIONS } from "./constants";
import { Service, Location, SeoPageData } from "./types";
export type { Service, Location, SeoPageData };
import { getSpecificPageContent } from "./pages";

export function parseSeoSlug(slug: string): { service: Service; location: Location } | null {
    // Find valid location suffix
    // We sort by length desc to ensure longer location names match first if overlap exists (unlikely here but good practice)
    const sortedLocations = [...SEO_LOCATIONS].sort((a, b) => b.slug.length - a.slug.length);

    const matchedLocation = sortedLocations.find(loc => slug.endsWith(`-${loc.slug}`));

    if (!matchedLocation) return null;

    // Extract service part
    // slug = "website-design-bangalore"
    // location = "bangalore" (length 9)
    // service part = slug.slice(0, - (length + 1)) -> +1 for the dash
    const serviceSlug = slug.slice(0, -(matchedLocation.slug.length + 1));

    const matchedService = SEO_SERVICES.find(s => s.slug === serviceSlug);

    if (!matchedService) return null;

    return { service: matchedService, location: matchedLocation };
}

export function generateSeoContent(service: Service, location: Location): SeoPageData {
    // 1. Check for specific manually written content first
    const specificContent = getSpecificPageContent(service.slug, location.slug);
    if (specificContent) {
        return specificContent;
    }

    // 2. Fallback to generated content
    const isCity = location.type === "city";
    const regionName = location.name;

    // Metadata Generation
    const metaTitle = `${service.name} in ${regionName} | ${location.metaTitleSuffix}`;
    const metaDesc = `Looking for ${service.name} in ${regionName}? ekanostudio provides top-tier ${service.keywords[0]} and ${service.keywords[1]} services tailored for businesses ${location.context}.`;

    // Generate Related Services (Link to Core Services of OTHER services)
    const relatedLinks = SEO_SERVICES.filter(s => s.slug !== service.slug)
        .slice(0, 3)
        .map(s => ({
            title: s.name,
            link: `/services/${s.categorySlug}/${s.targetServiceSlug}`
        }));

    // Content Generation
    return {
        service,
        location,
        meta: {
            title: metaTitle,
            description: metaDesc,
            canonical: `/${service.slug}-${location.slug}`,
        },
        content: {
            hero: {
                title: `${service.name} in ${regionName}`,
                subtitle: `Empowering ${location.traits[0]} and ${location.traits[1]} with world-class ${service.keywords[0].toLowerCase()} solutions. We are your trusted partner ${location.context}.`,
            },
            overview: {
                title: `Comprehensive ${service.name} for ${regionName} Businesses`, // H2
                text: `In the competitive landscape of ${regionName}, having a robust ${service.name.toLowerCase()} strategy is crucial. At ekanostudio, we specialize in delivering ${service.description} Our team understands the unique dynamics of the ${location.adjective} market, ensuring your brand stands out amongst ${location.traits[2]}.`,
            },
            whyChoose: {
                title: `Why Choose ekanostudio for ${service.name} in ${regionName}?`, // H2
                points: [
                    {
                        title: "Local Market Understanding",
                        desc: `We don't just offer generic solutions. We analyze the ${regionName} market trends to create strategies that resonate with your local audience.`
                    },
                    {
                        title: "Proven Expertise",
                        desc: `Our team brings years of experience in ${service.keywords[0]} and ${service.keywords[1]}, ensuring industry-standard deliverables.`
                    },
                    {
                        title: "Results-Driven Approach",
                        desc: `Whether you are a startup in ${regionName} or an established enterprise, our focus is always on ROI and measurable growth.`
                    }
                ]
            },
            deliverables: getDeliverablesForService(service),
            process: {
                title: `Our ${service.name} Process`,
                steps: [
                    { title: "Discovery", desc: `We start by understanding your business goals and the specific challenges you face in the ${location.country} market.` },
                    { title: "Strategy", desc: `Developing a roadmap tailored to ${service.keywords[2]} and your specific needs.` },
                    { title: "Execution", desc: `Implementing high-quality ${service.slug} solutions with precision and creativity.` },
                    { title: "Optimization", desc: `Continuous monitoring and improvement to ensure sustained success.` }
                ]
            },
            cta: {
                title: `Ready to Elevate Your Business in ${regionName}?`,
                text: `Partner with ekanostudio for premium ${service.name} services today.`
            },
            relatedServices: relatedLinks
        }
    };
}

function getDeliverablesForService(service: Service): string[] {
    const s = service.slug.toLowerCase();

    // Website / Design / Dev
    if (s.includes("web") || s.includes("design") || s.includes("app") || s.includes("commerce")) {
        return [
            "Responsive Source Code",
            "Figma/Design Assets",
            "SEO-Ready Structure",
            "Speed Optimization Report",
            "Admin Dashboard Setup",
            "Analytics Integration"
        ];
    }

    // SEO / Marketing
    if (s.includes("seo") || s.includes("marketing") || s.includes("ads") || s.includes("social")) {
        return [
            "Comprehensive Audit Report",
            "Custom Strategy Roadmap",
            "Monthly Performance Dashboard",
            "Keyword Ranking Report",
            "Competitor Analysis Doc",
            "Conversion Tracking Setup"
        ];
    }

    // Graphics / Content
    if (s.includes("content") || s.includes("graphic") || s.includes("video") || s.includes("brand")) {
        return [
            "High-Resolution Source Files",
            "Editable Vector/Project Files",
            "Brand Guidelines Document",
            "Multiple Format Exports",
            "Commercial Usage Rights",
            "Concept Variations"
        ];
    }

    // Default / Tech / Consulting
    return [
        "Dedicated Project Manager",
        "Weekly Progress Reports",
        "Strategic Roadmap Document",
        "Full Intellectual Property Rights",
        "Post-Launch Support Plan",
        "Training & Documentation"
    ];
}
