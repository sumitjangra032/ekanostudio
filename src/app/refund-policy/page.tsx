import RefundPolicyContent from "@/components/legal/RefundPolicyContent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Refund Policy | ekanostudio",
    description: "Read our Refund Policy to understand provisions for refunds, disputes, and non-refundable services at ekanostudio.",
    robots: {
        index: false,
        follow: true,
    },
    openGraph: {
        title: "Refund Policy | ekanostudio",
        description: "Read our Refund Policy to understand provisions for refunds, disputes, and non-refundable services at ekanostudio.",
        url: `${SITE_URL}/refund-policy`,
        siteName: "ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Refund Policy | ekanostudio",
        description: "Read our Refund Policy to understand provisions for refunds, disputes, and non-refundable services.",
    },
    alternates: {
        canonical: `${SITE_URL}/refund-policy`,
    },
};

export default function RefundPolicyPage() {
    return <RefundPolicyContent />;
}
