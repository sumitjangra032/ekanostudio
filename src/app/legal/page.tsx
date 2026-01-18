import LegalComponent from "@/components/LegalComponent";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
    title: "Legal Information | ekanostudio",
    description: "View our legal documents including Privacy Policy, Terms & Conditions, and Refund Policies.",
    robots: {
        index: false,
        follow: true
    },
    openGraph: {
        title: "Legal Information | ekanostudio",
        description: "View our legal documents including Privacy Policy, Terms & Conditions, and Refund Policies.",
        url: `${SITE_URL}/legal`,
        siteName: "ekanostudio",
        type: "website",
    },
    alternates: {
        canonical: `${SITE_URL}/legal`,
    },
};

export default function LegalPage() {
    return (
        <LegalComponent />
    );
}
