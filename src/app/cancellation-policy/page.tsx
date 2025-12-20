import CancellationPolicyContent from "@/components/legal/CancellationPolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cancellation Policy | Ekanostudio",
    description: "Read our Cancellation Policy to understand terms and conditions for service cancellation at Ekanostudio.",
};

export default function CancellationPolicyPage() {
    return <CancellationPolicyContent />;
}
