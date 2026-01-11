import TermsAndConditionsContent from "@/components/legal/TermsAndConditionsContent";
import { Metadata } from "next";

const SITE_URL = "https://ekanostudio.com";

export const metadata: Metadata = {
    title: "Terms and Conditions | Ekanostudio",
    description: "Read our Terms and Conditions to understand the rules and guidelines for using Ekanostudio's services.",
    robots: {
        index: false,
        follow: true,
    },
    openGraph: {
        title: "Terms and Conditions | Ekanostudio",
        description: "Read our Terms and Conditions to understand the rules and guidelines for using Ekanostudio's services.",
        url: `${SITE_URL}/terms-and-conditions`,
        siteName: "Ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Terms and Conditions | Ekanostudio",
        description: "Read our Terms and Conditions to understand the rules and guidelines for using Ekanostudio's services.",
    },
    alternates: {
        canonical: `${SITE_URL}/terms-and-conditions`,
    },
};

export default function TermsAndConditionsPage() {
    return <TermsAndConditionsContent />;
}
