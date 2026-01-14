"use client";

import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedLine from "@/components/animated/AnimatedLine";
import { SERVICES_CONTENT } from "@/constants/services";
import { SEO_SERVICES, SEO_LOCATIONS } from "@/lib/seo/constants";

// Static Sections
interface SectionLink {
    label: string;
    href: string;
}

interface SitemapSection {
    category: string;
    links: SectionLink[];
}

const STATIC_SECTIONS: SitemapSection[] = [
    {
        category: "Main Pages",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Book Consultation", href: "/book-consultation" },
            { label: "Contact", href: "/contact" },
            { label: "Careers", href: "/careers" },
        ],
    },
    {
        category: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
            { label: "Refund Policy", href: "/refund-policy" },
            { label: "Cancellation Policy", href: "/cancellation-policy" },
        ],
    },
    {
        category: "Resources & Guides",
        links: [
            { label: "Social Media Advertising Works", href: "/how-a-social-media-advertising-works" },
            { label: "API Integrations Work", href: "/how-api-integrations-work" },
            { label: "Build Brand Identity", href: "/how-to-build-a-brand-identity" },
            { label: "Create Online Marketplace", href: "/how-to-create-online-marketplace" },
            { label: "Competitor Analysis", href: "/how-to-do-a-competitor-analysis" },
            { label: "SEO Guide", href: "/how-to-do-search-engine-optimization" },
            { label: "Script Writing", href: "/how-to-learn-script-writing" },
            { label: "Setup CRM", href: "/how-to-setup-a-crm" },
            { label: "Email Marketing", href: "/how-to-start-email-marketing" },
        ],
    },
];

export default function SitemapPageClient() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    // Merge Static Main, Legal, then Services, then Resources
    const renderData = [
        STATIC_SECTIONS[0], // Main
        ...SERVICES_CONTENT.categories.map((cat) => ({
            category: cat.name,
            links: cat.items.map((item) => ({
                label: item.title,
                href: `/services/${cat.slug}/${item.slug}`,
            })),
        })),
        STATIC_SECTIONS[1], // Legal
        STATIC_SECTIONS[2], // Resources
        // New SEO Pages Grouped
        {
            category: "Local & Global Services",
            links: SEO_SERVICES.flatMap(service =>
                SEO_LOCATIONS.map(location => ({
                    label: `${service.name} in ${location.name}`,
                    href: `/${service.slug}-${location.slug}`
                }))
            )
        }
    ];

    return (
        <main
            className="min-h-screen w-full pt-32 pb-20 px-6"
            style={{ backgroundColor: theme.background }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: `${theme.accents.a}08`,
                            border: `1px solid ${theme.accents.a}20`,
                            backdropFilter: "blur(4px)",
                        }}
                    >
                        <div className="pulse red" />
                        <span
                            className="text-xs font-medium tracking-wide"
                            style={{ color: theme.accents.a }}
                        >
                            LOCATE PAGES
                        </span>
                    </div>

                    <h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        style={{ color: theme.text, fontFamily: "var(--font-general-sans)" }}
                    >
                        <AnimatedLine
                            text="Website Turn Map"
                            isHeading
                            gradient={{
                                from: "#fac175",
                                via: "#ff006a",
                                to: "#8b5cf6",
                            }}
                        />
                    </h1>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: theme.subtext }}
                    >
                        Complete overview of our digital services, resources, and company pages.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderData.map((section, idx) => (
                        <div
                            key={idx}
                            /* Cleaned up className to prevent hydration mismatch */
                            className="relative p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            {/* Left Accent Line */}
                            <div
                                className="absolute left-0 top-0 h-full w-[2px]"
                            />

                            <h2
                                className="text-xl font-bold mb-6 flex items-center gap-3"
                                style={{ color: theme.text }}
                            >
                                {section.category}
                            </h2>

                            <ul className="space-y-3">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-start gap-2 text-sm transition-all duration-300 hover:translate-x-2 underline decoration-blue-400/30 underline-offset-4 decoration-1 hover:decoration-blue-400"
                                            style={{ color: theme.subtext }}
                                        >
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                                            <span className="leading-relaxed group-hover:text-blue-400">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
