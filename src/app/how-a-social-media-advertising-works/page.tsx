import SocialMediaAdvertisingBlog from "@/components/blogs/how-a-social-media-advertising-works";
import { Metadata } from "next";

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
  alternates: {
    canonical: "/how-a-social-media-advertising-works",
  },
};



export default function SocialMediaAdvertisingPage() {
    return <SocialMediaAdvertisingBlog />;
}