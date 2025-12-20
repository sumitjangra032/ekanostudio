import RefundPolicyContent from "@/components/legal/RefundPolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | Ekanostudio",
    description: "Read our Refund Policy to understand provisions for refunds, disputes, and non-refundable services at Ekanostudio.",
};

export default function RefundPolicyPage() {
    return <RefundPolicyContent />;
}
