import { Metadata } from "next";
import SeoServicePage from "@/components/SeoServicePage";
import { data } from "@/lib/seo/pages/digital-marketing/bangalore";

export const metadata: Metadata = {
    title: data.meta.title,
    description: data.meta.description,
    alternates: {
        canonical: data.meta.canonical,
    },
    openGraph: {
        title: data.meta.title,
        description: data.meta.description,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: data.meta.title,
        description: data.meta.description,
    }
};

export default function Page() {
    return <SeoServicePage data={data} />;
}
