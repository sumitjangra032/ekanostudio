import { SeoPageData } from "../types";

// Import all available pages
import { data as websiteDesignBangalore } from "./website-design/bangalore";
import { data as seoServicesBangalore } from "./seo-services/bangalore";

import { data as websiteDesignDelhi } from "./website-design/delhi";
import { data as seoServicesDelhi } from "./seo-services/delhi";
import { data as contentCreationDelhi } from "./content-creation/delhi";
import { data as digitalMarketingDelhi } from "./digital-marketing/delhi";
import { data as aiAutomationDelhi } from "./ai-automation/delhi";

import { data as websiteDesignUsa } from "./website-design/usa";
import { data as seoServicesUsa } from "./seo-services/usa";
import { data as contentCreationUsa } from "./content-creation/usa";
import { data as digitalMarketingUsa } from "./digital-marketing/usa";
import { data as aiAutomationUsa } from "./ai-automation/usa";

import { data as websiteDesignUk } from "./website-design/uk";
import { data as seoServicesUk } from "./seo-services/uk";
import { data as contentCreationUk } from "./content-creation/uk";
import { data as digitalMarketingUk } from "./digital-marketing/uk";
import { data as aiAutomationUk } from "./ai-automation/uk";

import { data as websiteDesignUae } from "./website-design/uae";
import { data as seoServicesUae } from "./seo-services/uae";
import { data as contentCreationUae } from "./content-creation/uae";
import { data as digitalMarketingUae } from "./digital-marketing/uae";
import { data as aiAutomationUae } from "./ai-automation/uae";

import { data as websiteDesignCanada } from "./website-design/canada";
import { data as seoServicesCanada } from "./seo-services/canada";
import { data as contentCreationCanada } from "./content-creation/canada";
import { data as digitalMarketingCanada } from "./digital-marketing/canada";
import { data as aiAutomationCanada } from "./ai-automation/canada";

import { data as websiteDesignFrance } from "./website-design/france";
import { data as seoServicesFrance } from "./seo-services/france";
import { data as contentCreationFrance } from "./content-creation/france";
import { data as digitalMarketingFrance } from "./digital-marketing/france";
import { data as aiAutomationFrance } from "./ai-automation/france";

import { data as websiteDesignItaly } from "./website-design/italy";
import { data as seoServicesItaly } from "./seo-services/italy";
import { data as contentCreationItaly } from "./content-creation/italy";
import { data as digitalMarketingItaly } from "./digital-marketing/italy";
import { data as aiAutomationItaly } from "./ai-automation/italy";

import { data as websiteDesignAustria } from "./website-design/austria";
import { data as seoServicesAustria } from "./seo-services/austria";
import { data as contentCreationAustria } from "./content-creation/austria";
import { data as digitalMarketingAustria } from "./digital-marketing/austria";
import { data as aiAutomationAustria } from "./ai-automation/austria";

import { data as websiteDesignLuxembourg } from "./website-design/luxembourg";
import { data as seoServicesLuxembourg } from "./seo-services/luxembourg";
import { data as contentCreationLuxembourg } from "./content-creation/luxembourg";
import { data as digitalMarketingLuxembourg } from "./digital-marketing/luxembourg";
import { data as aiAutomationLuxembourg } from "./ai-automation/luxembourg";

import { data as websiteDesignPune } from "./website-design/pune";
import { data as seoServicesPune } from "./seo-services/pune";
import { data as contentCreationPune } from "./content-creation/pune";
import { data as digitalMarketingPune } from "./digital-marketing/pune";
import { data as aiAutomationPune } from "./ai-automation/pune";

import { data as websiteDesignGurgaon } from "./website-design/gurgaon";
import { data as seoServicesGurgaon } from "./seo-services/gurgaon";
import { data as contentCreationGurgaon } from "./content-creation/gurgaon";
import { data as digitalMarketingGurgaon } from "./digital-marketing/gurgaon";
import { data as aiAutomationGurgaon } from "./ai-automation/gurgaon";

import { data as websiteDesignIndia } from "./website-design/india";
import { data as seoServicesIndia } from "./seo-services/india";
import { data as contentCreationIndia } from "./content-creation/india";
import { data as digitalMarketingIndia } from "./digital-marketing/india";
import { data as aiAutomationIndia } from "./ai-automation/india";

import { data as contentCreationBangalore } from "./content-creation/bangalore";
import { data as digitalMarketingBangalore } from "./digital-marketing/bangalore";
import { data as aiAutomationBangalore } from "./ai-automation/bangalore";

// Registry Map
// Key format: `{serviceSlug}_{locationSlug}`
const PAGE_REGISTRY: Record<string, SeoPageData> = {
    // Bangalore
    "website-design_bangalore": websiteDesignBangalore,
    "seo-services_bangalore": seoServicesBangalore,
    "content-creation_bangalore": contentCreationBangalore,
    "digital-marketing_bangalore": digitalMarketingBangalore,
    "ai-automation_bangalore": aiAutomationBangalore,

    // Delhi
    "website-design_delhi": websiteDesignDelhi,
    "seo-services_delhi": seoServicesDelhi,
    "content-creation_delhi": contentCreationDelhi,
    "digital-marketing_delhi": digitalMarketingDelhi,
    "ai-automation_delhi": aiAutomationDelhi,

    // USA
    "website-design_usa": websiteDesignUsa,
    "seo-services_usa": seoServicesUsa,
    "content-creation_usa": contentCreationUsa,
    "digital-marketing_usa": digitalMarketingUsa,
    "ai-automation_usa": aiAutomationUsa,

    // UK
    "website-design_uk": websiteDesignUk,
    "seo-services_uk": seoServicesUk,
    "content-creation_uk": contentCreationUk,
    "digital-marketing_uk": digitalMarketingUk,
    "ai-automation_uk": aiAutomationUk,

    // UAE
    "website-design_uae": websiteDesignUae,
    "seo-services_uae": seoServicesUae,
    "content-creation_uae": contentCreationUae,
    "digital-marketing_uae": digitalMarketingUae,
    "ai-automation_uae": aiAutomationUae,

    // Canada
    "website-design_canada": websiteDesignCanada,
    "seo-services_canada": seoServicesCanada,
    "content-creation_canada": contentCreationCanada,
    "digital-marketing_canada": digitalMarketingCanada,
    "ai-automation_canada": aiAutomationCanada,

    // France
    "website-design_france": websiteDesignFrance,
    "seo-services_france": seoServicesFrance,
    "content-creation_france": contentCreationFrance,
    "digital-marketing_france": digitalMarketingFrance,
    "ai-automation_france": aiAutomationFrance,

    // Italy
    "website-design_italy": websiteDesignItaly,
    "seo-services_italy": seoServicesItaly,
    "content-creation_italy": contentCreationItaly,
    "digital-marketing_italy": digitalMarketingItaly,
    "ai-automation_italy": aiAutomationItaly,

    // Austria
    "website-design_austria": websiteDesignAustria,
    "seo-services_austria": seoServicesAustria,
    "content-creation_austria": contentCreationAustria,
    "digital-marketing_austria": digitalMarketingAustria,
    "ai-automation_austria": aiAutomationAustria,

    // Luxembourg
    "website-design_luxembourg": websiteDesignLuxembourg,
    "seo-services_luxembourg": seoServicesLuxembourg,
    "content-creation_luxembourg": contentCreationLuxembourg,
    "digital-marketing_luxembourg": digitalMarketingLuxembourg,
    "ai-automation_luxembourg": aiAutomationLuxembourg,

    // Pune
    "website-design_pune": websiteDesignPune,
    "seo-services_pune": seoServicesPune,
    "content-creation_pune": contentCreationPune,
    "digital-marketing_pune": digitalMarketingPune,
    "ai-automation_pune": aiAutomationPune,

    // Gurgaon
    "website-design_gurgaon": websiteDesignGurgaon,
    "seo-services_gurgaon": seoServicesGurgaon,
    "content-creation_gurgaon": contentCreationGurgaon,
    "digital-marketing_gurgaon": digitalMarketingGurgaon,
    "ai-automation_gurgaon": aiAutomationGurgaon,

    // India
    "website-design_india": websiteDesignIndia,
    "seo-services_india": seoServicesIndia,
    "content-creation_india": contentCreationIndia,
    "digital-marketing_india": digitalMarketingIndia,
    "ai-automation_india": aiAutomationIndia,
};

export function getSpecificPageContent(serviceSlug: string, locationSlug: string): SeoPageData | null {
    const key = `${serviceSlug}_${locationSlug}`;
    return PAGE_REGISTRY[key] || null;
}
