"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import SectionRenderer from "@/components/service-sections/SectionRenderer";
import { IServiceSection, IServiceType } from "@/constants/services";
import { CTA } from "../LazySections";

interface ServicePageClientProps {
    serviceData: IServiceType | null;
    categorySlug: string;
}

export default function ServicePageClient({ serviceData, categorySlug }: ServicePageClientProps) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    if (!serviceData) {
        return (
            <div className="py-32 text-center min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: theme.background }}>
                <h1 className="text-2xl" style={{ color: theme.text }}>
                    Service Not Found
                </h1>
                <p style={{ color: theme.subtext }}>
                    The requested service could not be found.
                </p>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden" style={{ backgroundColor: theme.background }}>

            {/* ALL SECTIONS ON TOP */}
            <div className="relative z-10">
                {serviceData.sections.map((section: IServiceSection, i: number) => {
                    const heroSection = serviceData.sections.find((s) => s.type === "hero");
                    const heroCta = heroSection?.data?.serviceCta;

                    return <SectionRenderer
                        key={i}
                        section={section}
                        theme={theme}
                        heroCta={heroCta}
                        category={categorySlug}
                        service={serviceData.slug}
                    />;
                })}
                <CTA category={categorySlug} service={serviceData.slug} />
            </div>
        </div>
    );
}
