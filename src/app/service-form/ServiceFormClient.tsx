"use client"

import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const ServiceForm = dynamic(() => import("@/components/service-form-sections/ServiceForm"), {
    ssr: false,
    loading: () => <div className="py-40 text-center">Loading form...</div>
});

export default function ServiceFormClient() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || undefined;
    const service = searchParams.get("service") || undefined;

    return (
        <Suspense fallback={
            <div className="py-40 text-center" style={{
                backgroundColor: theme.background,
                color: theme.text,
            }}>
                Loading...
            </div>}
        >
            <ServiceForm initialCategory={category} initialService={service} />
        </Suspense>
    )
}
