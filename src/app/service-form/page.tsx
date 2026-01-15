import ServiceFormClient from "./ServiceFormClient";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Get a Quote | ekanostudio",
    description: "Request a custom quote for your digital project. Detailed estimation for web development, design, and marketing services.",
    openGraph: {
        title: "Get a Quote | ekanostudio",
        description: "Request a custom quote for your digital project.",
        url: `${SITE_URL}/service-form`,
        siteName: "ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Get a Quote | ekanostudio",
        description: "Request a custom quote for your digital project.",
    },
    alternates: {
        canonical: `${SITE_URL}/service-form`,
    },
};

export default function ServiceFormPage() {
    return <ServiceFormClient />;
}
