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

function ServiceFormContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || undefined;
    const service = searchParams.get("service") || undefined;

    return <ServiceForm initialCategory={category} initialService={service} />;
}

export default function ServiceFormClient() {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    return (
        <Suspense fallback={
            <div className="py-40 text-center" style={{
                backgroundColor: theme.background,
                color: theme.text,
            }}>
                Loading...
            </div>}
        >
            <ServiceFormContent />
        </Suspense>
    )
}
