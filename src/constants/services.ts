import {
  BrushIcon,
  GlobeIcon,
  SearchIcon,
  BullhornIcon,
  PenNibIcon,
  MailIcon,
  StoreIcon,
  CloudIcon,
  CogIcon,
  LaptopCodeIcon,
  LayerGroupIcon,
  MobileAltIcon,
  ShoppingCartIcon,
  PaletteIcon,
  IdCardIcon,
  FileAltIcon,
  EyeIcon,
  CubeIcon,
  FilmIcon,
  RobotIcon,
  FileIcon,
  UserTieIcon,
  RocketIcon,
  PlayCircleIcon,
  HashtagIcon,
  CubesIcon,
  UserFriendsIcon,
  BrainIcon,
} from "@/components/icons/LocalIcons";

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
      icon: GlobeIcon,
      items: [
        { title: "Website Design (UI/UX)", desc: "Modern, responsive layouts with visual design", slug: "website-design-uiux", icon: LaptopCodeIcon, },
        { title: "Website Development", desc: "Next.js, React, WordPress, custom CMS", slug: "website-development", icon: LaptopCodeIcon, },
        { title: "Landing Page Development", desc: "High-converting landing pages", slug: "landing-page-development", icon: LayerGroupIcon, },
        { title: "E-Commerce Development", desc: "Shopify, WooCommerce, custom commerce", slug: "ecommerce-development", icon: ShoppingCartIcon, },
        { title: "Website Maintenance", desc: "Regular updates, security, backups", slug: "website-maintenance", icon: CogIcon, },
        { title: "Website Speed Optimization", desc: "Performance tuning for SEO & UX", slug: "website-speed-optimization", icon: RocketIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * APP DEVELOPMENT
     * ------------------------------------------------------------------- */
    {
      name: "App Development",
      slug: "app-development",
      icon: MobileAltIcon,
      items: [
        { title: "Mobile App Development", desc: "iOS, Android, React Native, Flutter", slug: "mobile-app-development", icon: MobileAltIcon, },
        { title: "Web App Development", desc: "Progressive Web Apps, cross-platform solutions", slug: "web-app-development", icon: LaptopCodeIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * AI AUTOMATION / N8N
     * ------------------------------------------------------------------- */
    {
      name: "AI Automation / n8n",
      slug: "ai-automation",
      icon: RobotIcon,
      items: [
        { title: "AI Automation & n8n Workflows", desc: "n8n automation, AI-powered workflows, intelligent automation", slug: "ai-automation-n8n", icon: RobotIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * SEO
     * ------------------------------------------------------------------- */
    {
      name: "SEO (Search Engine Optimization)",
      slug: "seo",
      icon: SearchIcon,
      items: [
        { title: "On-Page SEO", desc: "Content, structure, metadata", slug: "on-page-seo", icon: SearchIcon, },
        { title: "Off-Page SEO", desc: "Backlinks, digital PR", slug: "off-page-seo", icon: BullhornIcon, },
        { title: "Technical SEO", desc: "Crawl issues, indexing, schema", slug: "technical-seo", icon: CogIcon, },
        { title: "Local SEO", desc: "Google Business Profile optimization", slug: "local-seo", icon: GlobeIcon, },
        { title: "Keyword Research", desc: "Competitor & industry keyword planning", slug: "keyword-research", icon: SearchIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * SOCIAL MEDIA MARKETING
     * ------------------------------------------------------------------- */
    {
      name: "Social Media Marketing",
      slug: "social-media-marketing",
      icon: BullhornIcon,
      items: [
        { title: "Social Media Management", desc: "Posting, content creation, engagement", slug: "social-media-management", icon: HashtagIcon, },
        { title: "Social Media Strategy", desc: "Growth planning and branding", slug: "social-media-strategy", icon: BullhornIcon, },
        { title: "Paid Social Ads", desc: "Meta Ads, Instagram Ads, LinkedIn Ads", slug: "paid-social-ads", icon: BullhornIcon, },
        { title: "Influencer Marketing", desc: "Campaign planning & management", slug: "influencer-marketing", icon: UserFriendsIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * PERFORMANCE MARKETING
     * ------------------------------------------------------------------- */
    {
      name: "Performance Marketing",
      slug: "performance-marketing",
      icon: BullhornIcon,
      items: [
        { title: "Google Ads (Search & Display)", desc: "PPC management", slug: "google-ads", icon: SearchIcon, },
        { title: "Meta Ads", desc: "Facebook & Instagram ads", slug: "meta-ads", icon: BullhornIcon, },
        { title: "YouTube Ads", desc: "Video-based ad campaigns", slug: "youtube-ads", icon: PlayCircleIcon, },
        { title: "Conversion Optimization (CRO)", desc: "Improving website conversion rates", slug: "conversion-rate-optimization", icon: RocketIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * CONSULTING
     * ------------------------------------------------------------------- */
    {
      name: "Consulting",
      slug: "consulting",
      icon: CogIcon,
      items: [
        { title: "Digital Strategy Consulting", desc: "Full digital growth plan", slug: "digital-strategy-consulting", icon: GlobeIcon, },
        { title: "Competitor Analysis", desc: "Market intelligence", slug: "competitor-analysis", icon: SearchIcon, },
        { title: "Analytics & Reporting", desc: "GA4 dashboards, marketing metrics", slug: "analytics-and-reporting", icon: FileIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * CONTENT CREATION
     * ------------------------------------------------------------------- */
    {
      name: "Content Creation",
      slug: "content-creation",
      icon: PenNibIcon,
      items: [
        { title: "Content Writing", desc: "Website copy, blogs, articles", slug: "content-writing", icon: PenNibIcon, },
        { title: "Script Writing", desc: "Video & ad scripts", slug: "script-writing", icon: FileAltIcon, },
        { title: "Graphic Design", desc: "Posters, banners, social posts", slug: "graphic-design", icon: BrushIcon, },
        { title: "Video Editing", desc: "Reels, ads, brand videos", slug: "video-editing", icon: FilmIcon, },
        { title: "Motion Graphics", desc: "Animated graphics", slug: "motion-graphics", icon: PlayCircleIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * E-COMMERCE SERVICES
     * ------------------------------------------------------------------- */
    {
      name: "E-Commerce Services",
      slug: "ecommerce-services",
      icon: StoreIcon,
      items: [
        { title: "Marketplace Setup", desc: "Amazon, Flipkart, Shopify", slug: "marketplace-setup", icon: StoreIcon, },
        { title: "Product Listing Optimization", desc: "SEO-friendly listings", slug: "product-listing-optimization", icon: FileAltIcon, },
        { title: "Store Management", desc: "Inventory & order handling", slug: "store-management", icon: ShoppingCartIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * EMAIL & AUTOMATION
     * ------------------------------------------------------------------- */
    {
      name: "Email & Automation",
      slug: "email-automation",
      icon: MailIcon,
      items: [
        { title: "Email Marketing", desc: "Campaign creation, newsletters", slug: "email-marketing", icon: MailIcon, },
        { title: "Marketing Automation", desc: "Flows, triggers, customer journeys", slug: "marketing-automation", icon: RobotIcon, },
        { title: "CRM Setup", desc: "HubSpot, Zoho, Salesforce", slug: "crm-setup", icon: IdCardIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * TECHNOLOGY & CLOUD
     * ------------------------------------------------------------------- */
    {
      name: "Technology & Cloud",
      slug: "technology-cloud",
      icon: CloudIcon,
      items: [
        { title: "Hosting & Deployment", desc: "Cloud, DNS, servers", slug: "hosting-and-deployment", icon: CloudIcon, },
        { title: "API Integrations", desc: "Payment gateway, CRM, ERP", slug: "api-integrations", icon: CogIcon, },
      ],
    },

    /* -------------------------------------------------------------------
     * BRANDING
     * ------------------------------------------------------------------- */
    {
      name: "Branding",
      slug: "branding",
      icon: BrushIcon,
      items: [
        { title: "Brand Identity Design", desc: "Logo, color palette, typography, brand guidelines", slug: "brand-identity-design", icon: PaletteIcon, },
        { title: "Brand Strategy", desc: "Positioning, messaging, competitive analysis", slug: "brand-strategy", icon: BrainIcon, },
        { title: "Rebranding", desc: "Full brand refresh and redesign", slug: "rebranding", icon: RocketIcon, },
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
  description?: string;
  meta?: {
    title?: string;
    description?: string;
  };
  sections: IServiceSection[];
}

