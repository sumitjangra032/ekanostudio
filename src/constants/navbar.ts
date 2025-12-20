export const NAV_LINKS = [
  { label: "Home", href: "/", megaMenu: false },
  { label: "Services", href: "/services", megaMenu: true },
  { label: "Blogs", href: "#blogs", megaMenu: true },
  { label: "Legal", href: "/privacy-policy", megaMenu: true },
  { label: "Portfolio", href: "/portfolio", megaMenu: false },
  // { label: "Pricing", href: "#pricing", megaMenu: false },
  { label: "Careers", href: "/careers", megaMenu: false },
  { label: "About Us", href: "/about", megaMenu: false },


];



import {
  FaPaintBrush,
  FaLaptopCode,
  FaShoppingCart,
  FaBolt,
  FaBullhorn,
  FaSearch,
  FaVideo,
  FaPenFancy,
  FaMobileAlt,
  FaChartLine,
  FaEnvelope,
  FaCogs,
  FaStore,
  FaShieldAlt,
  FaFileContract,
  FaBan,
  FaMoneyBillWave,
} from "react-icons/fa";

import {
  Code2,
  Palette,
  Megaphone,
  PenTool,
  Mail,
  Database,
  BarChart3,
  Search,
  Store,
} from "lucide-react";
export const NAVBAR_SERVICES = [
  {
    category: "Branding",
    items: [
      {
        name: "Brand Identity Design",
        description: "Logo, palette, typography, guidelines",
        slug: "brand-identity-design",
        icon: FaPaintBrush,
      },
      {
        name: "Brand Strategy",
        description: "Positioning, messaging & competitive analysis",
        slug: "brand-strategy",
        icon: FaBolt,
      },
      {
        name: "Rebranding",
        description: "Full brand refresh & redesign",
        slug: "rebranding",
        icon: FaPaintBrush,
      },
    ],
  },

  {
    category: "Web Design & Development",
    items: [
      {
        name: "Website Design (UI/UX)",
        description: "Modern, responsive UI & visual design",
        slug: "website-design",
        icon: FaLaptopCode,
      },
      {
        name: "Website Development",
        description: "Next.js, React, WordPress, custom CMS",
        slug: "website-development",
        icon: FaLaptopCode,
      },
      {
        name: "Landing Page Development",
        description: "High-converting landing pages",
        slug: "landing-page-design",
        icon: FaMobileAlt,
      },
      {
        name: "E-Commerce Development",
        description: "Shopify, WooCommerce, custom commerce",
        slug: "ecommerce-development",
        icon: FaShoppingCart,
      },
      {
        name: "Website Maintenance",
        description: "Updates, backups & security",
        slug: "website-maintenance",
        icon: FaCogs,
      },
      {
        name: "Website Speed Optimization",
        description: "Performance tuning for SEO & UX",
        slug: "speed-optimization",
        icon: FaBolt,
      },
    ],
  },

  {
    category: "SEO",
    items: [
      {
        name: "On-Page SEO",
        description: "Content, structure, metadata",
        slug: "on-page-seo",
        icon: FaSearch,
      },
      {
        name: "Off-Page SEO",
        description: "Backlinks & digital PR",
        slug: "off-page-seo",
        icon: FaSearch,
      },
      {
        name: "Technical SEO",
        description: "Crawl, indexing & schema",
        slug: "technical-seo",
        icon: FaSearch,
      },
      {
        name: "Local SEO",
        description: "Google Business Profile optimization",
        slug: "local-seo",
        icon: FaSearch,
      },
      {
        name: "Keyword Research",
        description: "Industry & competitor keyword planning",
        slug: "keyword-research",
        icon: FaSearch,
      },
    ],
  },

  {
    category: "Social Media Marketing",
    items: [
      {
        name: "Social Media Management",
        description: "Posts, creatives & engagement",
        slug: "social-media-management",
        icon: FaBullhorn,
      },
      {
        name: "Social Media Strategy",
        description: "Growth planning & branding",
        slug: "social-media-strategy",
        icon: FaBullhorn,
      },
      {
        name: "Paid Social Ads",
        description: "Meta, Instagram, LinkedIn ads",
        slug: "paid-social-ads",
        icon: FaBullhorn,
      },
      {
        name: "Influencer Marketing",
        description: "Campaign planning & management",
        slug: "influencer-marketing",
        icon: FaBullhorn,
      },
    ],
  },

  {
    category: "Performance Marketing",
    items: [
      {
        name: "Google Ads",
        description: "Search & display PPC",
        slug: "google-ads",
        icon: FaChartLine,
      },
      {
        name: "Meta Ads",
        description: "Facebook & Instagram ads",
        slug: "meta-ads",
        icon: FaChartLine,
      },
      {
        name: "YouTube Ads",
        description: "Video-based campaigns",
        slug: "youtube-ads",
        icon: FaVideo,
      },
      {
        name: "Conversion Optimization",
        description: "Improve conversion rates",
        slug: "conversion-optimization",
        icon: FaChartLine,
      },
    ],
  },

  {
    category: "Content Creation",
    items: [
      {
        name: "Content Writing",
        description: "Copywriting, blogs & articles",
        slug: "content-writing",
        icon: FaPenFancy,
      },
      {
        name: "Script Writing",
        description: "Videos, ads & brand scripts",
        slug: "script-writing",
        icon: FaPenFancy,
      },
      {
        name: "Graphic Design",
        description: "Posts, banners & social graphics",
        slug: "graphic-design",
        icon: FaPaintBrush,
      },
      {
        name: "Video Editing",
        description: "Reels, ads & brand videos",
        slug: "video-editing",
        icon: FaVideo,
      },
      {
        name: "Motion Graphics",
        description: "Animated visuals & explainer videos",
        slug: "motion-graphics",
        icon: FaVideo,
      },
    ],
  },

  {
    category: "Email & Automation",
    items: [
      {
        name: "Email Marketing",
        description: "Newsletters & campaigns",
        slug: "email-marketing",
        icon: FaEnvelope,
      },
      {
        name: "Marketing Automation",
        description: "Flows, triggers & journeys",
        slug: "marketing-automation",
        icon: FaEnvelope,
      },
      {
        name: "CRM Setup",
        description: "HubSpot, Zoho, Salesforce",
        slug: "crm-setup",
        icon: FaEnvelope,
      },
    ],
  },

  {
    category: "E-Commerce Services",
    items: [
      {
        name: "Marketplace Setup",
        description: "Amazon, Flipkart, Shopify stores",
        slug: "marketplace-setup",
        icon: FaStore,
      },
      {
        name: "Product Listing Optimization",
        description: "SEO-friendly product listings",
        slug: "product-listing-optimization",
        icon: FaStore,
      },
      {
        name: "Store Management",
        description: "Inventory & operations",
        slug: "store-management",
        icon: FaStore,
      },
    ],
  },
];

export const NAV_LEGAL = [
  {
    name: "Privacy Policy",
    description: "How we handle your data",
    href: "/privacy-policy",
    icon: FaShieldAlt,
  },
  {
    name: "Terms & Conditions",
    description: "Rules for using our services",
    href: "/terms-and-conditions",
    icon: FaFileContract,
  },
  {
    name: "Cancellation Policy",
    description: "Our policy on cancellations",
    href: "/cancellation-policy",
    icon: FaBan,
  },
  {
    name: "Refund Policy",
    description: "Details about refunds",
    href: "/refund-policy",
    icon: FaMoneyBillWave,
  },
];

  export const NAV_BLOGS = [
  {
    name: "API Integrations",
    description: "How API integrations work and scale applications",
    href: "/how-api-integrations-work",
    icon: Code2,
  },
  {
    name: "Brand Identity",
    description: "How to build a strong and consistent brand identity",
    href: "/how-to-build-a-brand-identity",
    icon: Palette,
  },
  {
    name: "Social Media Advertising",
    description: "How social media advertising works end to end",
    href: "/how-a-social-media-advertising-works",
    icon: Megaphone,
  },
  {
    name: "Script Writing",
    description: "How to learn script writing for ads, videos, and content",
    href: "/how-to-learn-script-writing",
    icon: PenTool,
  },
  {
    name: "Email Marketing",
    description: "How to start and scale email marketing campaigns",
    href: "/how-to-start-email-marketing",
    icon: Mail,
  },
  {
    name: "CRM Setup",
    description: "How to set up and use a CRM for business growth",
    href: "/how-to-setup-a-crm",
    icon: Database,
  },
  {
    name: "Competitor Analysis",
    description: "How to do a complete competitor analysis",
    href: "/how-to-do-a-competitor-analysis",
    icon: BarChart3,
  },
  {
    name: "Search Engine Optimization",
    description: "How SEO works and how to rank on search engines",
    href: "/how-to-do-search-engine-optimization",
    icon: Search,
  },
  {
    name: "Online Marketplace",
    description: "How to create and scale an online marketplace",
    href: "/how-to-create-online-marketplace",
    icon: Store,
  },
];

