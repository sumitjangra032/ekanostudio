import { IServiceType } from "../../services";

const GOOGLE_ADS: IServiceType = {
  slug: "google-ads",
  title: "Google Ads (Search & Display)",
  sections: [
    {
      type: "hero",
      data: {
        title: "Google Ads (Search & Display)",
        headline:
          "Google Ads puts your business directly in front of customers who are actively searching for your products or services.",
        subheadline:
          "We provide Google Ads management services as a certified Google Ads agency, running high-converting search ads, Google display ads, and remarketing campaigns to deliver immediate traffic, qualified leads, and measurable {ROI}.",
        serviceCta: { text: "Launch My Google Ads", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our Google Ads performance workflows",
        items: [
          { value: "290+", label: "Google Ads Accounts Managed", icon: "/icons/rocket.svg" },
          { value: "2–4 Days", label: "Avg. Campaign Launch Time", icon: "/icons/zap.svg" },
          { value: "96%", label: "Client Profitability Rate", icon: "/icons/shield-check.svg" },
          { value: "4.1x", label: "Avg. Return on Ad Spend (ROAS)", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Google Ads (Search & Display)",
        content:
          "Google Ads is one of the fastest and most reliable ways to generate high-intent traffic through Google Search Ads, Google Display Ads, Google Shopping Ads, and remarketing. As a dedicated Google Ads expert and Google PPC specialist, we manage targeted campaigns using Google Ads Keyword Planner research, audience insights, bid optimization, and conversion-focused ad creation. Our Google advertising services deliver scalable growth, predictable lead generation, and high return on ad spend through well-structured Google PPC campaigns engineered for minimal {PPC} waste and maximum profitability.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Clear hero explaining intent-driven paid {traffic}",
          "Search ad examples with keyword-to-ad alignment",
          "Google Display Network & remarketing banner {previews}",
          "Shopping ad product feed demonstrations",
          "Conversion tracking & funnel attribution snapshots",
          "CPC, CPA, ROAS & Google Ads performance {examples}",
          "“Projects Completed” & profitability metrics",
          "Step-by-step Google Ads campaign execution workflow",
          "Deliverables checklist",
          "FAQs about budget, Google Ads pricing & bidding",
          "Contact form with “Run My Google Ads” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Google Ads account setup, structure creation or performance {audit}",
          "Keyword research via Google Ads Keyword Planner & competitive intent analysis",
          "Campaign architecture for Search, Display, Shopping & Remarketing",
          "High-converting ad copy for Google Adwords, Search Ads & Display Ads",
          "Audience segmentation, targeting & demographic refinement",
          "Conversion tracking setup with GA4 & Google Tag Manager",
          "Landing page alignment with Google Ads best practices",
          "Smart bidding strategy, quality score optimization & budget control",
          "Negative keyword filtering & waste-spend reduction",
          "Geo-targeting, device optimization & custom bid adjustments",
          "Weekly performance monitoring & {optimization}",
          "Monthly reports showing Google PPC performance, ROAS & CPA improvements",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Delivers instant, high-intent search {traffic}",
          "Provides predictable leads & measurable revenue",
          "Allows full control over budget, targeting & placements",
          "Shows clear, trackable {ROI} through detailed analytics",
          "Scales rapidly once profitable Google Ads campaigns stabilize",
          "Supports both local and global visibility through paid search",
          "Works as the fastest alternative to SEO for immediate exposure",
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
            title: "Business & Market [Discovery]",
            description:
              "We {understand} your offers, margins, audience, competitors, and Google advertising potential.",
            icon: "/icons/search.svg",
          },
          {
            title: "Keyword & Intent [Research]",
            description:
              "Search terms, buying-intent keywords, Google PPC opportunities, and audiences are {identified}.",
            icon: "/icons/target.svg",
          },
          {
            title: "Campaign Architecture & Ad [Creation]",
            description:
              "Google Ads campaigns, ad groups, responsive search ads, display ads & extensions are {structured} for maximum relevance.",
            icon: "/icons/megaphone.svg",
          },
          {
            title: "Conversion Tracking & Funnel [Setup]",
            description:
              "GA4, GTM, and event-based conversion goals are {implemented} for full-funnel ROI tracking.",
            icon: "/icons/settings.svg",
          },
          {
            title: "Launch & Smart Bidding [Optimization]",
            description:
              "Campaigns go live with data-driven bid {adjustments}, monitoring & performance tuning.",
            icon: "/icons/rocket.svg",
          },
          {
            title: "Scaling & Profit [Optimization]",
            description:
              "Profitable ads are scaled while cost inefficiencies are eliminated to maximize ROAS.",
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
          { label: "Account Setup & Launch", duration: "2–4 days" },
          { label: "Learning & Optimization Phase", duration: "2–3 weeks" },
          { label: "Profit Scaling Phase", duration: "30–90 days" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Businesses needing immediate leads & {sales}",
          "E-commerce brands scaling through Google Shopping Ads",
          "Local businesses using Google Ads for business visibility",
          "SaaS companies driving demos & signups through paid search",
          "Brands running {time-sensitive} promotions with Google PPC",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Google Ads Manager & Google Ads Manager Accounts",
          "Google Keyword Planner & Google Ads Auction Insights",
          "Google Analytics 4 & Google Tag Manager",
          "Conversion tracking tools & Google Campaign Manager",
          "Landing page CRO platforms",
          "Automated bidding & optimization systems",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content:
          "A home services company launched geo-targeted Google Search Ads with our optimization framework. Within 45 days, cost per lead dropped by {38%}, monthly booked jobs increased by {64%}, and overall ROAS stabilized at {4.6x}.",
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
            description:
              "Basic Google Ads campaign setup, keyword research & tracking integration.",
          },
          {
            name: "Standard",
            price: "$799 – $1,399",
            description:
              "Full Google Ads management with weekly optimizations, negative keywords & reporting.",
          },
          {
            name: "Premium",
            price: "$1,600 – $3,200",
            description:
              "Advanced scaling, CRO alignment, multiset campaign management & PPC growth systems.",
          },
          {
            name: "Enterprise",
            price: "$4,500+",
            description:
              "Large budgets, national targeting, automation scripts & enterprise-level Google Ads management.",
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
            q: "How much budget do I need to start Google Ads?",
            a: "Campaigns can start from $300–$500/month depending on industry CPC and competition.",
          },
          {
            q: "How quickly will I see results?",
            a: "You get traffic immediately; stable conversions typically appear within 2–4 weeks.",
          },
          {
            q: "Do you build landing pages for Google Ads?",
            a: "Yes, landing page optimization & CRO support are available as add-on services.",
          },
          {
            q: "Will I have full access to my Google Ads account?",
            a: "Yes, your Google Ads account always remains 100% owned and accessible by you.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn search intent into real revenue.",
        subheading:
          "Launch your Google Ads campaigns today and start generating high-quality leads and sales {immediately}.",
      },
    },
  ],
};

export default GOOGLE_ADS;
