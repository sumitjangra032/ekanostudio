import {
  FaBrush,
  FaGlobe,
  FaSearch,
  FaBullhorn,
  FaPenNib,
  FaEnvelope,
  FaStore,
  FaCloud,
  FaCog,
  FaLaptopCode,
  FaLayerGroup,
  FaMobileAlt,
  FaShoppingCart,
  FaPalette,
  FaRegIdCard,
  FaRegFileAlt,
  FaEye,
  FaCube,
  FaFilm,
  FaRobot,
  FaRegFile,
  FaUserTie,
  FaRocket,
  FaPlayCircle,
  FaHashtag,
  FaCubes,
  FaUserFriends,
  FaBrain,
} from "react-icons/fa";

export const SERVICES_CONTENT = {
  tag: { label: "SERVICES" },

  title: "Our Digital Services",
  description:
    "End-to-end digital solutions built to elevate your brand, drive growth, and increase conversions.",

  categories: [
    /* -------------------------------------------------------------------
     * WEBSITE DESIGN & DEVELOPMENT
     * ------------------------------------------------------------------- */
    {
      name: "Web Design & Development",
      slug: "web-design-development",
      icon: FaGlobe,
      items: [
        {title: "Website Design (UI/UX)",desc: "Modern, responsive layouts with visual design",slug: "website-design-uiux",icon: FaLaptopCode,},
        {title: "Website Development",desc: "Next.js, React, WordPress, custom CMS",slug: "website-development",icon: FaLaptopCode,},
        {title: "Landing Page Development",desc: "High-converting landing pages",slug: "landing-page-development",icon: FaLayerGroup,},
        {title: "E-Commerce Development",desc: "Shopify, WooCommerce, custom commerce",slug: "ecommerce-development",icon: FaShoppingCart,},
        {title: "Website Maintenance",desc: "Regular updates, security, backups",slug: "website-maintenance",icon: FaCog,},
        {title: "Website Speed Optimization",desc: "Performance tuning for SEO & UX",slug: "website-speed-optimization",icon: FaRocket,},
      ],
    },

    /* -------------------------------------------------------------------
     * SEO
     * ------------------------------------------------------------------- */
    {
      name: "SEO (Search Engine Optimization)",
      slug: "seo",
      icon: FaSearch,
      items: [
        {title: "On-Page SEO",desc: "Content, structure, metadata",slug: "on-page-seo",icon: FaSearch,},
        {title: "Off-Page SEO",desc: "Backlinks, digital PR",slug: "off-page-seo",icon: FaBullhorn,},
        {title: "Technical SEO",desc: "Crawl issues, indexing, schema",slug: "technical-seo",icon: FaCog,},
        {title: "Local SEO",desc: "Google Business Profile optimization",slug: "local-seo",icon: FaGlobe,},
        {title: "Keyword Research",desc: "Competitor & industry keyword planning",slug: "keyword-research",icon: FaSearch,},
      ],
    },

    /* -------------------------------------------------------------------
     * SOCIAL MEDIA MARKETING
     * ------------------------------------------------------------------- */
    {
      name: "Social Media Marketing",
      slug: "social-media-marketing",
      icon: FaBullhorn,
      items: [
        {title: "Social Media Management",desc: "Posting, content creation, engagement",slug: "social-media-management",icon: FaHashtag,},
        {title: "Social Media Strategy",desc: "Growth planning and branding",slug: "social-media-strategy",icon: FaBullhorn,},
        {title: "Paid Social Ads",desc: "Meta Ads, Instagram Ads, LinkedIn Ads",slug: "paid-social-ads",icon: FaBullhorn,},
        {title: "Influencer Marketing",desc: "Campaign planning & management",slug: "influencer-marketing",icon: FaUserFriends,},
      ],
    },

    /* -------------------------------------------------------------------
     * PERFORMANCE MARKETING
     * ------------------------------------------------------------------- */
    {
      name: "Performance Marketing",
      slug: "performance-marketing",
      icon: FaBullhorn,
      items: [
        {title: "Google Ads (Search & Display)",desc: "PPC management",slug: "google-ads",icon: FaSearch,},
        {title: "Meta Ads",desc: "Facebook & Instagram ads",slug: "meta-ads",icon: FaBullhorn,},
        {title: "YouTube Ads",desc: "Video-based ad campaigns",slug: "youtube-ads",icon: FaPlayCircle,},
        {title: "Conversion Optimization (CRO)",desc: "Improving website conversion rates",slug: "conversion-rate-optimization",icon: FaRocket,},
      ],
    },

    /* -------------------------------------------------------------------
     * CONSULTING
     * ------------------------------------------------------------------- */
    {
      name: "Consulting",
      slug: "consulting",
      icon: FaCog,
      items: [
        {title: "Digital Strategy Consulting",desc: "Full digital growth plan",slug: "digital-strategy-consulting",icon: FaGlobe,},
        {title: "Competitor Analysis",desc: "Market intelligence",slug: "competitor-analysis",icon: FaSearch,},
        {title: "Analytics & Reporting",desc: "GA4 dashboards, marketing metrics",slug: "analytics-and-reporting",icon: FaRegFile,},
      ],
    },

    /* -------------------------------------------------------------------
     * CONTENT CREATION
     * ------------------------------------------------------------------- */
    {
      name: "Content Creation",
      slug: "content-creation",
      icon: FaPenNib,
      items: [
        {title: "Content Writing",desc: "Website copy, blogs, articles",slug: "content-writing",icon: FaPenNib,},
        {title: "Script Writing",desc: "Video & ad scripts",slug: "script-writing",icon: FaRegFileAlt,},
        {title: "Graphic Design",desc: "Posters, banners, social posts",slug: "graphic-design",icon: FaBrush,},
        {title: "Video Editing",desc: "Reels, ads, brand videos",slug: "video-editing",icon: FaFilm,},
        {title: "Motion Graphics",desc: "Animated graphics",slug: "motion-graphics",icon: FaPlayCircle,},
      ],
    },

    /* -------------------------------------------------------------------
     * E-COMMERCE SERVICES
     * ------------------------------------------------------------------- */
    {
      name: "E-Commerce Services",
      slug: "ecommerce-services",
      icon: FaStore,
      items: [
        {title: "Marketplace Setup",desc: "Amazon, Flipkart, Shopify",slug: "marketplace-setup",icon: FaStore,},
        {title: "Product Listing Optimization",desc: "SEO-friendly listings",slug: "product-listing-optimization",icon: FaRegFileAlt,},
        {title: "Store Management",desc: "Inventory & order handling",slug: "store-management",icon: FaShoppingCart,},
      ],
    },

    /* -------------------------------------------------------------------
     * EMAIL & AUTOMATION
     * ------------------------------------------------------------------- */
    {
      name: "Email & Automation",
      slug: "email-automation",
      icon: FaEnvelope,
      items: [
        {title: "Email Marketing",desc: "Campaign creation, newsletters",slug: "email-marketing",icon: FaEnvelope,},
        {title: "Marketing Automation",desc: "Flows, triggers, customer journeys",slug: "marketing-automation",icon: FaRobot,},
        {title: "CRM Setup",desc: "HubSpot, Zoho, Salesforce",slug: "crm-setup",icon: FaRegIdCard,},
      ],
    },

    /* -------------------------------------------------------------------
     * TECHNOLOGY & CLOUD
     * ------------------------------------------------------------------- */
    {
      name: "Technology & Cloud",
      slug: "technology-cloud",
      icon: FaCloud,
      items: [
        {title: "Hosting & Deployment",desc: "Cloud, DNS, servers",slug: "hosting-and-deployment",icon: FaCloud,},
        {title: "API Integrations",desc: "Payment gateway, CRM, ERP",slug: "api-integrations",icon: FaCog,},
      ],
    },

    /* -------------------------------------------------------------------
     * BRANDING
     * ------------------------------------------------------------------- */
    {
      name: "Branding",
      slug: "branding",
      icon: FaBrush,
      items: [
        {title: "Brand Identity Design",desc: "Logo, color palette, typography, brand guidelines",slug: "brand-identity-design",icon: FaPalette,},
        {title: "Brand Strategy",desc: "Positioning, messaging, competitive analysis",slug: "brand-strategy",icon: FaBrain,},
        {title: "Rebranding",desc: "Full brand refresh and redesign",slug: "rebranding",icon: FaRocket,},
      ],
    },
  ],
};

/* Helper: find service by slug */
export function findServiceBySlug(slug: string) {
  for (const cat of SERVICES_CONTENT.categories) {
    for (const item of cat.items) {
      if (item.slug === slug) return { ...item, category: cat.name };
    }
  }
  return null;
}

export function findServiceByCategoryAndSlug(categorySlug: string, serviceSlug: string) {
  const category = SERVICES_CONTENT.categories.find(c => c.slug === categorySlug);
  if (!category) return null;
  const service = category.items.find(item => item.slug === serviceSlug);
  if (!service) return null;
  return { ...service, category: category.name };
}

export type ISectionType = "hero" | "metrics" | "process" | "timeline" | "tools" | "pricing" | "faq" | "cta" | "whoItsFor" | "caseStudy" | "overview" | "whatYouSee" | "deliverables" | "whyMatters";
export interface IServiceSection {
  type: ISectionType;
  data: any;
}

export interface IServiceType {
  slug: string;
  title: string;
  seo?: string;
  sections: IServiceSection[];
}

