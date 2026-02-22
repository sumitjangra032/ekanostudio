import { IServiceType } from "@/constants/services";

const SERVICES_DYNAMIC_CONTENT: IServiceType = {
  slug: "landing-page-development",
  title: "Landing Page Development",
  meta: { title: "Custom Landing Page Development Services" , description: "Increase conversions with custom landing page development. We design responsive, high-converting pages tailored to your ads." },
  sections: [
    {
      type: "hero",
      data: {
        title: "Landing Page Development",
        headline:
          "Landing Page Development turns your traffic into leads and sales with precision-built, high-conversion {pages}.",
        subheadline:
          "We offer landing page development services to design and develop focused, psychology-driven landing pages that eliminate distractions and guide users to take action fast.",
        serviceCta: { text: "Build My Landing Page", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our landing page performance workflows",
        items: [
          {
            value: "340+",
            label: "Landing Pages Launched",
            icon: "/icons/rocket.svg",
          },
          {
            value: "3–7 Days",
            label: "Avg. Delivery Time",
            icon: "/icons/zap.svg",
          },
          {
            value: "97%",
            label: "Client Satisfaction Rate",
            icon: "/icons/shield-check.svg",
          },
          {
            value: "2.9x",
            label: "Avg. Conversion Rate Uplift",
            icon: "/icons/trending-up.svg",
          },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Landing Page Development",
        content:
          "Creating high converting landing pages is all about one goal—{conversion}. Unlike regular websites, lead generation landing pages are built for a single focused action: lead generation, sign-ups, app installs, bookings, or sales. We combine user psychology, persuasive copy, strategic layouts, speed optimization, and CRO principles to engineer pages that turn clicks into customers. Every element is purpose-built to remove friction and maximize results.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Clear hero with strong value proposition & CTA",
          "Industry-specific landing page design {previews}",
          "Above-the-fold conversion layout breakdown",
          "Lead form, booking & checkout UI samples",
          "Trust signals (reviews, logos, testimonials) placement examples",
          "Speed, mobile optimization & Core Web Vitals indicators",
          "“Projects Completed” & conversion uplift {metrics}",
          "Step-by-step landing page build workflow",
          "Deliverables checklist",
          "FAQs on testing, integrations & ad compatibility",
          "Contact form with “Launch My Landing Page” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Landing page design services focused on conversion",
          "Sales funnel landing pages copy & headlines",
          "Conversion focused landing pages, forms & CRM {integrations}",
          "Payment or booking system integration (if required)",
          "Thank-you pages & post-conversion flows",
          "Mobile-first & responsive optimization",
          "Page speed {optimization} (Core Web Vitals)",
          "Tracking & analytics setup (GA4, GTM, Pixels)",
          "A/B testing-ready page variants (optional)",
          "SEO & ad platform compatibility",
          "Final export-ready files or live deployment",
          "Admin access, documentation & handover",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [you]",
        items: [
          "{Converts} more visitors with the same ad spend",
          "Increases lead quality & sales velocity",
          "Reduces bounce rate through focused messaging",
          "Improves return on ad spend (ROAS)",
          "Enables precise {A/B testing} & scaling",
          "Works seamlessly with Google Ads & Social Ads",
          "Creates predictable, repeatable conversion funnels",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "From concept to conversion",
        steps: [
          {
            title: "Goal & Audience [Discovery]",
            description:
              "We define your offer, target {audience}, objections, and desired action.",
            icon: "/icons/search.svg",
          },
          {
            title: "Funnel & Copy [Strategy]",
            description:
              "Headline, subheading, content flow, and CTA {strategy} are crafted.",
            icon: "/icons/funnel.svg",
          },
          {
            title: "UI/UX Design & [Wireframing]",
            description: "Page {structure} is designed for clarity, trust & speed.",
            icon: "/icons/brush.svg",
          },
          {
            title: "Development & [Integrations]",
            description:
              "Forms, CRM, payments, tracking & {automations} are implemented.",
            icon: "/icons/code-xml.svg",
          },
          {
            title: "Testing & [Optimization]",
            description:
              "Speed, mobile responsiveness, cross-browser & form {testing}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Launch, Tracking & [Scaling]",
            description:
              "Page goes {live} with analytics, A/B testing & performance monitoring.",
            icon: "/icons/rocket.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Basic Landing Page", duration: "3–5 days" },
          {
            label: "Advanced Landing Page with Integrations",
            duration: "5–10 days",
          },
          { label: "Multi-Page Funnel Systems", duration: "2–3 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Businesses running Google Ads & Meta Ads",
          "Startups validating offers & products",
          "Coaches, consultants & service providers",
          "E-commerce promotions & seasonal campaigns",
          "SaaS companies driving demo bookings & trials",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Figma for design & prototyping",
          "Webflow, WordPress, Next.js, Custom Builders",
          "GA4, Google Tag Manager & Pixels",
          "CRM & Email Automation Integrations",
          "Page speed optimization tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content:
          "A real estate {lead generation} campaign used our custom landing page with Google Ads traffic. Within 30 days, cost per lead dropped by 44%, conversion rate increased from 6.2% to 18.9%, and qualified inquiries doubled.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages] (USD)",
        plans: [
          {
            name: "Starter",
            price: "$249 – $499",
            description: "Single static landing page with lead form.",
          },
          {
            name: "Standard",
            price: "$699 – $1,199",
            description:
              "Fully dynamic landing page with CRM, tracking & mobile optimization.",
          },
          {
            name: "Premium",
            price: "$1,500 – $2,800",
            description:
              "Multi-section funnel page with copywriting, integrations & CRO setup.",
          },
          {
            name: "Enterprise",
            price: "$4,000+",
            description:
              "High-volume landing funnels, A/B testing systems & ad-scale optimization.",
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
            q: "Can this landing page work with my Google Ads and Meta Ads?",
            a: "Yes, all landing pages are built specifically for ad traffic and tracking.",
          },
          {
            q: "Will my landing page be mobile optimized?",
            a: "Yes, every page is built mobile-first and fully responsive.",
          },
          {
            q: "Can you write the content and copy for the landing page?",
            a: "Yes, conversion copywriting is included in Standard and above.",
          },
          {
            q: "Do you provide A/B testing support?",
            a: "Yes, A/B testing-ready variants are available in Premium and Enterprise.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn every click into a real business opportunity.",
        subheading:
          "Launch your high-conversion Landing Page today and multiply your results with precision-built performance {design}.",
      },
    },
  ],
};

export default SERVICES_DYNAMIC_CONTENT;
