import CreateOnlineMarketplaceBlog from "@/components/blogs/how-to-create-online-marketplace";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create an Online Marketplace: Strategy, Monetization, Trust & Growth",
  description:
    "A complete in-depth guide on how to create an online marketplace. Learn marketplace strategy, cold start solutions, network effects, monetization models, trust systems, payments, liquidity metrics, and defensive moats.",
  keywords: [
    "create online marketplace",
    "marketplace business model",
    "two sided marketplace",
    "marketplace monetization",
    "network effects",
    "cold start problem",
    "liquidity metrics",
    "escrow payments marketplace",
    "managed marketplace",
  ],
  alternates: {
    canonical: "/create-online-marketplace",
  },
};

export default function CreateOnlineMarketplaceBlogPage() {
    return <CreateOnlineMarketplaceBlog />;
}
