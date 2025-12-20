"use client"

import BookConsultationForm from "@/components/book-consultation-sections/BookConsultationForm";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { Suspense } from "react";


export default function BookConsultationClient() {
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
            <BookConsultationForm />
        </Suspense >
    );
}
