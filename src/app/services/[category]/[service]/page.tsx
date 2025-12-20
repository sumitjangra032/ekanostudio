
import { findServiceByCategoryAndSlug } from "@/constants/services";
import { loadServiceBySlug } from "@/constants/services/loader";
import ServicePageClient from "@/components/service-sections/ServicePageClient";

import { Metadata } from "next";

interface PageProps {
  params: Promise<{ category: string; service: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, service } = await params;
  const meta = findServiceByCategoryAndSlug(category, service);
  const serviceData = meta ? await loadServiceBySlug(category, service) : null;

  if (!serviceData || !meta) {
    return {
      title: "Service Not Found | Ekanostudio",
      description: "The requested service could not be found.",
    };
  }

  // Find hero section for description
  const heroSection = serviceData.sections.find(s => s.type === "hero");
  const heroDescription = heroSection?.data?.subheadline || heroSection?.data?.headline;

  return {
    title: `${serviceData.title} | Ekanostudio`,
    description: heroDescription || `Professional ${meta.title} services by Ekanostudio.`,
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
