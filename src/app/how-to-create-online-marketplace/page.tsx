import CreateOnlineMarketplaceBlog from "@/components/blogs/how-to-create-online-marketplace";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "Create an Online Marketplace: Strategy & Growth",
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
  openGraph: {
    title: "Create an Online Marketplace: Strategy & Growth",
    description: "A complete in-depth guide on how to create an online marketplace.",
    url: `${SITE_URL}/how-to-create-online-marketplace`,
    siteName: "Ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create an Online Marketplace: Strategy & Growth",
    description: "A complete in-depth guide on how to create an online marketplace.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-to-create-online-marketplace`,
  },
};

export default function CreateOnlineMarketplaceBlogPage() {
  return <CreateOnlineMarketplaceBlog />;
}
