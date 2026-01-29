import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Privacy Policy | Ekanostudio",
    description: "Read our Privacy Policy to understand how Ekanostudio collects, uses, and protects your personal data.",
    robots: {
        index: false,
        follow: true,
    },
    openGraph: {
        title: "Privacy Policy | Ekanostudio",
        description: "Read our Privacy Policy to understand how Ekanostudio collects, uses, and protects your personal data.",
        url: `${SITE_URL}/privacy-policy`,
        siteName: "Ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Privacy Policy | Ekanostudio",
        description: "Read our Privacy Policy to understand how Ekanostudio collects, uses, and protects your personal data.",
    },
    alternates: {
        canonical: `${SITE_URL}/privacy-policy`,
    },
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyContent />;
}
