import SocialMediaAdvertisingBlog from "@/components/blogs/how-a-social-media-advertising-works";
import { Metadata } from "next";

const SITE_URL = "https://ekanostudio.com";

export const metadata: Metadata = {
  title: "The Paid Social Master Class: Creative, Data, and Scaling",
  description:
    "A deep dive into modern social media advertising, focusing on algorithm mechanics, server-side tracking (CAPI), and high-volume creative testing for Meta and TikTok.",
  keywords: [
    "Paid Social",
    "Meta Ads",
    "TikTok Ads",
    "Conversions API",
    "CAPI",
    "Creative Testing",
    "ROAS",
    "UGC",
    "iOS14"
  ],
  openGraph: {
    title: "The Paid Social Master Class: Creative, Data, and Scaling",
    description: "A deep dive into modern social media advertising, focusing on algorithm mechanics, server-side tracking (CAPI), and high-volume creative testing for Meta and TikTok.",
    url: `${SITE_URL}/how-a-social-media-advertising-works`,
    siteName: "Ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Paid Social Master Class: Creative, Data, and Scaling",
    description: "A deep dive into modern social media advertising, focusing on algorithm mechanics, server-side tracking (CAPI), and high-volume creative testing.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-a-social-media-advertising-works`,
  },
};



export default function SocialMediaAdvertisingPage() {
    return <SocialMediaAdvertisingBlog />;
}