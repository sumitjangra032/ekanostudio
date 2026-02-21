import RefundPolicyContent from "@/components/legal/RefundPolicyContent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Refund Policy | Ekanostudio",
    description: "Read our Refund Policy to understand provisions for refunds, disputes, and non-refundable services at Ekanostudio.",
    openGraph: {
        title: "Refund Policy | Ekanostudio",
        description: "Read our Refund Policy to understand provisions for refunds, disputes, and non-refundable services at Ekanostudio.",
        url: `${SITE_URL}/refund-policy`,
        siteName: "Ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Refund Policy | Ekanostudio",
        description: "Read our Refund Policy to understand provisions for refunds, disputes, and non-refundable services.",
    },
    alternates: {
        canonical: `${SITE_URL}/refund-policy`,
    },
};

export default function RefundPolicyPage() {
    return <RefundPolicyContent />;
}
