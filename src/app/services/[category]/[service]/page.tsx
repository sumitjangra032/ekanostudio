import { findServiceByCategoryAndSlug, SERVICES_CONTENT } from "@/constants/services";
import { loadServiceBySlug } from "@/constants/services/loader";
import ServicePageClient from "@/components/service-sections/ServicePageClient";

import { Metadata } from "next";

interface PageProps {
  params: Promise<{ category: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];

  SERVICES_CONTENT.categories.forEach((category) => {
    category.items.forEach((item) => {
      params.push({
        category: category.slug,
        service: item.slug,
      });
    });
  });

  return params;
}

const SITE_URL = "https://ekanostudio.com";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, service } = await params;
  const meta = findServiceByCategoryAndSlug(category, service);
  const serviceData = meta ? await loadServiceBySlug(category, service) : null;

  if (!serviceData || !meta) {
    return {
      title: "Service Not Found | Ekanostudio",
      description: "The requested service could not be found.",
      robots: {
        index: false,
      },
    };
  }

  // Find hero section for description
  const heroSection = serviceData.sections.find(s => s.type === "hero");
  const heroDescription = heroSection?.data?.subheadline || heroSection?.data?.headline;
  const url = `${SITE_URL}/services/${category}/${service}`;

  return {
    title: `${serviceData.title} | Ekanostudio`,
    description: heroDescription || `Professional ${meta.title} services by Ekanostudio.`,
    keywords: [meta.title, `${meta.title} services`, "Ekanostudio"],
    openGraph: {
      title: `${serviceData.title} | Ekanostudio`,
      description: heroDescription || `Professional ${meta.title} services by Ekanostudio.`,
      url: url,
      siteName: "Ekanostudio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} | Ekanostudio`,
      description: heroDescription || `Professional ${meta.title} services by Ekanostudio.`,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { category, service } = await params;

  const meta = findServiceByCategoryAndSlug(category, service);

  let serviceData = null;
  if (meta) {
    serviceData = await loadServiceBySlug(category, service);
  }

  return <ServicePageClient serviceData={serviceData} />;
}
