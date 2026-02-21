import TermsAndConditionsContent from "@/components/legal/TermsAndConditionsContent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Ekanostudio | Terms and Conditions",
    description: "Read our Terms and Conditions to understand the rules and guidelines for using Ekanostudio's services.",
    openGraph: {
        title: "Ekanostudio | Terms and Conditions",
        description: "Read our Terms and Conditions to understand the rules and guidelines for using Ekanostudio's services.",
        url: `${SITE_URL}/terms-and-conditions`,
        siteName: "Ekanostudio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Ekanostudio | Terms and Conditions",
        description: "Read our Terms and Conditions to understand the rules and guidelines for using Ekanostudio's services.",
    },
    alternates: {
        canonical: `${SITE_URL}/terms-and-conditions`,
    },
};

export default function TermsAndConditionsPage() {
    return <TermsAndConditionsContent />;
}
