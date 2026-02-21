
import { MetadataRoute } from "next";
import { SEO_SERVICES, SEO_LOCATIONS } from "@/lib/seo/constants";
import { SERVICES_CONTENT } from "@/constants/services";

const SITE_URL = "https://www.ekanostudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Static Routes
    const routes = [
        "",
        "/about",
        "/services",
        "/portfolio",
        "/book-consultation",
        "/privacy-policy",
        "/terms-and-conditions",
        "/refund-policy",
        "/cancellation-policy",
        // Resource guides
        "/how-a-social-media-advertising-works",
        "/how-api-integrations-work",
        "/how-to-build-a-brand-identity",
        "/how-to-create-online-marketplace",
        "/how-to-do-a-competitor-analysis",
        "/how-to-do-search-engine-optimization",
        "/how-to-learn-script-writing",
        "/how-to-setup-a-crm",
        "/how-to-start-email-marketing",
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1.0 : 0.8,
    }));

    // 2. Core Service Pages
    const serviceRoutes = SERVICES_CONTENT.categories.flatMap((cat) =>
        cat.items.map((item) => ({
            url: `${SITE_URL}/services/${cat.slug}/${item.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        }))
    );

    // 3. Programmatic SEO Pages (Service + Location)
    const seoRoutes = [];
    for (const service of SEO_SERVICES) {
        for (const location of SEO_LOCATIONS) {
            seoRoutes.push({
                url: `${SITE_URL}/${service.slug}-${location.slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.8, // Slightly lower than core services
            });
        }
    }

    return [...routes, ...serviceRoutes, ...seoRoutes];
}
