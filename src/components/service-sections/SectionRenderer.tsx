import ServiceHero from "./ServiceHero";
import ServicePricing from "./ServicePricing";
import ServiceFaq from "./ServiceFaq";
import ServiceMetrics from "./ServiceMetrics";
import ServiceProcess from "./ServiceProcess";
import ServiceTimeline from "./ServiceTimeline";
import ServiceTools from "./ServiceTools";
import ServiceCta from "./ServiceCta";

import ServiceWhoItsFor from "./ServiceWhoItsFor";
import ServiceCaseStudy from "./ServiceCaseStudy";
import ServiceDeliverables from "./ServiceDeliverables";
import ServiceWhyMatters from "./ServiceWhyMatters";

import { ISectionType, IServiceSection } from "@/constants/services";

export const SECTION_COMPONENTS: Partial<Record<ISectionType, any>> = {
  hero: ServiceHero,
  metrics: ServiceMetrics,
  deliverables: ServiceDeliverables,
  whyMatters: ServiceWhyMatters,
  process: ServiceProcess,
  timeline: ServiceTimeline,
  whoItsFor: ServiceWhoItsFor,
  tools: ServiceTools,
  caseStudy: ServiceCaseStudy,
  pricing: ServicePricing,
  faq: ServiceFaq,
  cta: ServiceCta,
};

export default function SectionRenderer({
  section,
  theme,
  heroCta,
  category,
  service
}: {
  section: IServiceSection,
  theme: any,
  heroCta?: any,
  category?: string,
  service?: string
}) {
  const Component = SECTION_COMPONENTS[section.type];
  if (!Component) return null;
  return <Component data={section.data} theme={theme} heroCta={heroCta} category={category} service={service} />;
}
