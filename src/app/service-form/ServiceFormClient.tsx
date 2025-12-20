"use client"

import { useTheme } from "@/components/providers/ThemeProvider";
import ServiceForm from "@/components/service-form-sections/ServiceForm";
import { THEMES } from "@/constants/theme";
import { Suspense } from "react";

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
            <ServiceForm />
        </Suspense>
    )
}
