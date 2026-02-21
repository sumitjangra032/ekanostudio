import CancellationPolicyContent from "@/components/legal/CancellationPolicyContent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Ekanostudio | Cancellation Policy",
    description: "Read our Cancellation Policy to understand terms and conditions for service cancellation at Ekanostudio.",
    openGraph: {
        title: "Ekanostudio | Cancellation Policy",
        description: "Read our Cancellation Policy to understand terms and conditions for service cancellation at Ekanostudio.",
        url: `${SITE_URL}/cancellation-policy`,
        siteName: "Ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Ekanostudio | Cancellation Policy",
        description: "Read our Cancellation Policy to understand terms and conditions for service cancellation.",
    },
    alternates: {
        canonical: `${SITE_URL}/cancellation-policy`,
    },
};

export default function CancellationPolicyPage() {
    return <CancellationPolicyContent />;
}
