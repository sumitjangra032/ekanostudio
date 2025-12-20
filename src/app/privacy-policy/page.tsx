import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Ekanostudio",
    description: "Read our Privacy Policy to understand how Ekanostudio collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyContent />;
}
