import TermsAndConditionsContent from "@/components/legal/TermsAndConditionsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | Ekanostudio",
    description: "Read our Terms and Conditions to understand the rules and guidelines for using Ekanostudio's services.",
};

export default function TermsAndConditionsPage() {
    return <TermsAndConditionsContent />;
}
