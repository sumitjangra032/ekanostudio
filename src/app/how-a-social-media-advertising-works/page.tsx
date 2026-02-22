import SocialMediaAdvertisingBlog from "@/components/blogs/how-a-social-media-advertising-works";
import { Metadata } from "next";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  title: "How Social Media Advertising Works Guide",
  description:
    "Discover how social media advertising works. Learn proven methods to boost reach, target audiences, and maximize campaign ROI.",
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
    title: "How Social Media Advertising Works Guide",
    description: "Discover how social media advertising works. Learn proven methods to boost reach, target audiences, and maximize campaign ROI.",
    url: `${SITE_URL}/how-a-social-media-advertising-works`,
    siteName: "Ekanostudio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Social Media Advertising Works Guide",
    description: "Discover how social media advertising works. Learn proven methods to boost reach, target audiences, and maximize campaign ROI.",
  },
  alternates: {
    canonical: `${SITE_URL}/how-a-social-media-advertising-works`,
  },
};



export default function SocialMediaAdvertisingPage() {
  return <SocialMediaAdvertisingBlog />;
}