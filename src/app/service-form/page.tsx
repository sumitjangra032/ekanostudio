import ServiceFormClient from "./ServiceFormClient";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: " Get a Quote",
    description: "Request a custom quote for your projects. Detailed estimation for web development, design, and marketing services.",
    openGraph: {
        title: " Get a Quote",
        description: "Request a custom quote for your projects.",
        url: `${SITE_URL}/service-form`,
        siteName: "Ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: " Get a Quote",
        description: "Request a custom quote for your projects.",
    },
    alternates: {
        canonical: `${SITE_URL}/service-form`,
    },
};

export default function ServiceFormPage() {
    return <ServiceFormClient />;
}
