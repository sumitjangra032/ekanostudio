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
import ServiceOverview from "./ServiceOverview";
import ServiceWhatYouSee from "./ServiceWhatYouSee";
import ServiceDeliverables from "./ServiceDeliverables";
import ServiceWhyMatters from "./ServiceWhyMatters";

import { ISectionType, IServiceSection } from "@/constants/services";

export const SECTION_COMPONENTS: Record<ISectionType, any> = {
  hero: ServiceHero,
  metrics: ServiceMetrics,
  overview: ServiceOverview,
  whatYouSee: ServiceWhatYouSee,
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

export default function SectionRenderer({ section, theme }: { section: IServiceSection, theme: any }) {
  const Component = SECTION_COMPONENTS[section.type];
  if (!Component) return null;

  return <Component data={section.data} theme={theme} />;
}
