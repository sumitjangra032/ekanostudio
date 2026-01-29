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

const SITE_URL = "https://www.ekanostudio.com";

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { category, service } = await params;

  const meta = findServiceByCategoryAndSlug(category, service);
  const serviceData = meta ? await loadServiceBySlug(category, service) : null;

  // ❌ Hard stop for invalid routes (SEO-safe)
  if (!serviceData || !meta) {
    return {
      title: "Service Not Found | Ekanostudio",
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${SITE_URL}/services/${category}/${service}`;

  /**
   * 🔒 SEO-SAFE TITLE STRATEGY
   * Prevents Google rewriting
   * Optimized for CTR + intent
   */
  const seoTitle = `${serviceData.title} Services | ${meta.title} Experts | Ekanostudio`;

  /**
   * 🔒 SEO-SAFE DESCRIPTION STRATEGY
   * Avoid animated / UI copy
   * Prefer explicit business intent
   */
  const seoDescription =
    serviceData.meta?.description ||
    serviceData.description ||
    `Professional ${meta.title} services by Ekanostudio. We deliver scalable, performance-driven solutions designed to grow your business with measurable results.`;

  return {
    title: seoTitle,
    description: seoDescription,

    /**
     * Meta keywords still help:
     * - Bing
     * - Internal relevance signals
     * - OpenGraph context
     */
    keywords: [
      meta.title,
      `${meta.title} services`,
      `${meta.title} company`,
      `${meta.title} agency`,
      `${meta.title} solutions`,
      "Ekanostudio",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: "Ekanostudio",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
    },

    /**
     * ✅ Google Search Essentials compliant
     * Explicit crawling + preview control
     */
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
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
