import CancellationPolicyContent from "@/components/legal/CancellationPolicyContent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Cancellation Policy | ekanostudio",
    description: "Read our Cancellation Policy to understand terms and conditions for service cancellation at ekanostudio.",
    robots: {
        index: false,
        follow: true,
    },
    openGraph: {
        title: "Cancellation Policy | ekanostudio",
        description: "Read our Cancellation Policy to understand terms and conditions for service cancellation at ekanostudio.",
        url: `${SITE_URL}/cancellation-policy`,
        siteName: "ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Cancellation Policy | ekanostudio",
        description: "Read our Cancellation Policy to understand terms and conditions for service cancellation.",
    },
    alternates: {
        canonical: `${SITE_URL}/cancellation-policy`,
    },
};

export default function CancellationPolicyPage() {
    return <CancellationPolicyContent />;
}
