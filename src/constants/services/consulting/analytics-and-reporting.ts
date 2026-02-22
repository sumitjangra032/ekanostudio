import { IServiceType } from "../../services";

const ANALYTICS_AND_REPORTING: IServiceType = {
  slug: "analytics-and-reporting",
  title: "Analytics & Reporting",
  meta: { title: "Custom Analytics and Reporting Services" , description: "Make data-driven decisions with custom analytics and reporting. We track performance metrics to optimize your digital campaigns." },
  sections: [
    {
      type: "hero",
      data: {
        title: "Analytics & Reporting",
        headline: "Analytics & Reporting transforms raw data into powerful business intelligence.",
        subheadline: "We provide analytics & reporting services to track, measure, and {visualize} your true performance across marketing, sales, and user behavior—so every decision you make is backed by real {numbers}, not guesswork.",
        serviceCta: { text: "Get Your Analytics Setup", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our data & performance workflows",
        items: [
          { value: "185+", label: "Analytics Systems Deployed", icon: "/icons/rocket.svg" },
          { value: "2–4 Days", label: "Avg. Setup Time", icon: "/icons/zap.svg" },
          { value: "99%", label: "Tracking Accuracy Rate", icon: "/icons/shield-check.svg" },
          { value: "420+", label: "Custom Dashboards Delivered", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Analytics & Reporting",
        content: "Analytics & Reporting is the backbone of data-driven growth. We implement precise conversion tracking services, configure google analytics setup and ga4 tracking, build custom {dashboards}, and deliver easy-to-understand reports that reveal what’s working, what’s not, and where to scale. Our goal is to give you total {visibility} into traffic sources, user behavior, campaign performance, and revenue impact—so you can {optimize} with confidence.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Clear hero section explaining the power of data-driven {decision} making",
          "Live preview of real-time GA4 dashboards",
          "Sample performance reports (traffic, conversions, revenue, funnels)",
          "Event tracking and conversion setup {examples}",
          "Data visualization charts (line, bar, funnel, heatmaps)",
          "Industry-specific KPI examples",
          "“Projects Completed” and accuracy metrics",
          "Step-by-step reporting workflow",
          "Deliverables checklist",
          "FAQs for tracking, privacy, and integrations",
          "Contact form with “Get Your Custom Dashboard” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Complete Google Analytics 4 (GA4) setup & configuration",
          "Google Tag Manager implementation",
          "Conversion tracking services & event, goal {configuration}",
          "Ecommerce analytics (revenue, checkout, cart, product views)",
          "Traffic source & attribution tracking",
          "Funnel and user journey tracking",
          "Custom marketing analytics dashboard / data studio dashboards",
          "Weekly & monthly automated performance reporting",
          "Campaign reporting for Ads, SEO, Social Media",
          "UTM tracking framework",
          "Data accuracy validation & testing report",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Shows exactly where your leads, sales, and {revenue} are coming from",
          "Eliminates wasted ad spend through precise performance tracking",
          "Identifies your highest-performing channels and pages",
          "Helps forecast future growth using historical data",
          "Improves decision-making with factual {insights}",
          "Builds investor and stakeholder confidence with clear reporting",
          "Turns marketing into a predictable, scalable engine",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "",
        steps: [
          {
            title: "Discovery & Tracking [Audit]",
            description: "We {analyze} your current tools, funnels, tracking gaps, and business objectives.",
            icon: "/icons/search.svg",
          },
          {
            title: "Tracking Strategy & KPI [Mapping]",
            description: "We {define} what should be measured—leads, purchases, engagement, ROAS, CAC, LTV.",
            icon: "/icons/map.svg",
          },
          {
            title: "Implementation & [Integration]",
            description: "GA4, GTM, conversion events, pixels, and CRM integrations are {implemented}.",
            icon: "/icons/settings.svg",
          },
          {
            title: "Dashboard & Report [Creation]",
            description: "Custom dashboards are {built} for real-time and scheduled reporting.",
            icon: "/icons/layout-dashboard.svg",
          },
          {
            title: "Data Validation & [Testing]",
            description: "We {test} every event, goal, and revenue signal to ensure accuracy.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Ongoing Monitoring & [Optimization]",
            description: "We continuously {refine} reporting based on your evolving growth strategy.",
            icon: "/icons/trending-up.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Basic Analytics Setup", duration: "2–4 days" },
          { label: "Advanced E-commerce & Funnel Tracking", duration: "1–2 weeks" },
          { label: "Enterprise-Level Reporting Systems", duration: "2–4 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Businesses running Google Ads, Meta Ads, or SEO {campaigns}",
          "E-commerce stores tracking revenue and conversion funnels",
          "SaaS and subscription-based platforms",
          "Startups needing investor-ready growth {metrics}",
          "Agencies requiring white-label analytics reporting",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Google Analytics 4 (GA4)",
          "Google Tag Manager (GTM)",
          "Looker Studio / Data Studio",
          "HubSpot, Zoho, Salesforce (for CRM analytics)",
          "Meta Pixel, Google Ads Conversion Tracking",
          "Hotjar, Microsoft Clarity (behavior tracking)",
          "Custom API-based data pipelines (if required)",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A D2C brand using our Analytics & Reporting system identified its most profitable traffic source within 14 days, reduced wasted ad spend by {31%}, and increased overall ROAS by {47%} within three months.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$349 – $599",
            description: "GA4 setup, basic event tracking, standard dashboard.",
          },
          {
            name: "Standard",
            price: "$799 – $1,299",
            description: "Full GA4 + GTM setup, conversion funnels, ad platform integrations, custom dashboards.",
          },
          {
            name: "Premium",
            price: "$1,600 – $3,200",
            description: "Advanced e-commerce tracking, attribution modeling, multi-channel dashboards, automated weekly reporting.",
          },
          {
            name: "Enterprise",
            price: "$4,500+",
            description: "Custom data pipelines, API integrations, multi-brand dashboards, investor-level analytics.",
          },
        ],
      },
    },
    {
      type: "faq",
      data: {
        heading: "Frequently Asked [Questions]",
        items: [
          {
            q: "Can you fix broken Google Analytics tracking?",
            a: "Yes, we perform complete audits and rebuild inaccurate tracking systems.",
          },
          {
            q: "Do you track Ads, SEO, and social media together?",
            a: "Yes, we unify all channels into a single performance dashboard.",
          },
          {
            q: "Will I be able to view reports anytime?",
            a: "Yes, you get 24/7 access to live dashboards.",
          },
          {
            q: "Is my data secure?",
            a: "Absolutely. All tracking follows privacy, GDPR, and data security standards.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn your business into a fully data-driven machine.",
        subheading: "Get your custom Analytics & Reporting system built today and start making smarter, more profitable {decisions}.",
      },
    },
  ],
};

export default ANALYTICS_AND_REPORTING;
