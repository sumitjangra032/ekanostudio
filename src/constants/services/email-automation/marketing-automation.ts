import { IServiceType } from "../../services";

const MARKETING_AUTOMATION: IServiceType = {
  slug: "marketing-automation",
  title: "Marketing Automation",
  meta: { title: "Expert Marketing Automation Services" , description: "Drive consistent sales with advanced marketing automation. We design optimized workflows that nurture leads and engage customers." },
  sections: [
    {
      type: "hero",
      data: {
        title: "Marketing Automation",
        headline: "Marketing Automation turns your marketing, sales, and customer engagement into a fully automated revenue engine.",
        subheadline: "We provide marketing automation services to build intelligent workflows that capture leads, nurture prospects, personalize communication, and convert customers {automatically}—24/7.",
        serviceCta: { text: "Automate My Marketing", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our marketing automation workflows",
        items: [
          { value: "285+", label: "Automation Systems Deployed", icon: "/icons/rocket.svg" },
          { value: "5–12 Days", label: "Avg. Automation Setup Time", icon: "/icons/zap.svg" },
          { value: "98%", label: "Workflow Success Rate", icon: "/icons/shield-check.svg" },
          { value: "2.6x", label: "Avg. Lead-to-Customer Conversion Lift", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Marketing Automation",
        content: "Marketing Automation connects your website, ads, email, CRM, WhatsApp, and customer data into one seamless, intelligent system. We specialize in automation workflow setup to replace manual follow-ups, disorganized leads, and missed opportunities. Our crm automation services ensure that every user receives the right message at the right time—based on real behavior. We design smart customer journey automation that increase {conversions}, improve {retention}, and reduce workload across marketing and sales teams.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero showing fully automated lead-to-sale {journey}",
          "Visual customer journey & trigger-based workflow diagrams",
          "Email, WhatsApp & SMS automation previews",
          "Lead scoring & segmentation dashboard samples",
          "Funnel-based automation mapping examples",
          "CRM & ad platform integration previews",
          "“Projects Completed” & automation performance metrics",
          "Step-by-step automation build workflow",
          "Deliverables checklist",
          "FAQs on triggers, integration & scalability",
          "Contact form with “Build My Automation System” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Full automation strategy & funnel {mapping}",
          "Lead automation services & form automation setup",
          "Business process automation & pipeline triggers",
          "Email marketing automation workflows (welcome, nurture, sales, retention)",
          "WhatsApp & SMS automation setup",
          "Lead scoring & behavioral segmentation",
          "Abandoned cart & checkout recovery {workflows}",
          "Re-engagement & win-back automation",
          "Customer onboarding & post-purchase automation",
          "API & Zapier-based system integrations",
          "Real-time automation tracking dashboards",
          "Documentation, testing & team training",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Eliminates manual follow-ups & human {error}",
          "Increases conversions with real-time personalization",
          "Improves response time & customer experience",
          "Boosts retention & repeat purchases",
          "Creates predictable & scalable revenue {systems}",
          "Saves time, resources & operational cost",
          "Aligns marketing, sales & support under one automated system",
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
            title: "Business & Funnel [Discovery]",
            description: "We {analyze} your traffic sources, offers, sales flow, and conversion bottlenecks.",
            icon: "/icons/search.svg",
          },
          {
            title: "Automation Architecture [Design]",
            description: "We {map} stages, triggers, segmentation logic & communication paths.",
            icon: "/icons/layout-dashboard.svg",
          },
          {
            title: "Platform Setup & [Integrations]",
            description: "CRM, email, WhatsApp, payment & ad platforms are {connected}.",
            icon: "/icons/link.svg",
          },
          {
            title: "Workflow & Trigger [Development]",
            description: "Automation flows for leads, customers, and retention are {built}.",
            icon: "/icons/users-round.svg",
          },
          {
            title: "Testing & [Optimization]",
            description: "Failover testing, message timing, trigger accuracy & performance {tuning}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Launch, Monitoring & [Scaling]",
            description: "Automation goes live with real-time monitoring and continuous {optimization}.",
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
          { label: "Basic Automation Setup", duration: "5–7 days" },
          { label: "Full Funnel Automation System", duration: "2–3 weeks" },
          { label: "Enterprise Automation Ecosystems", duration: "1–2 months" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "E-commerce brands automating sales & {retention}",
          "SaaS companies managing trials → paid conversions",
          "Service businesses handling high lead volumes",
          "Agencies automating multi-client lead systems",
          "Enterprises requiring advanced multichannel {automation}",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "HubSpot, Zoho, ActiveCampaign",
          "Mailchimp, Brevo, Klaviyo",
          "WhatsApp Business API & SMS Gateways",
          "Zapier, Make (Integromat)",
          "CRM & payment gateway integrations",
          "GA4 & automation analytics platforms",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A coaching brand automated its entire lead-to-sale system using our marketing automation framework. Within 60 days, lead response time dropped by {82%}, conversions increased by {49%}, and monthly revenue grew by {2.3x} with zero additional ad spend.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$399 – $699",
            description: "Basic lead capture + email automation.",
          },
          {
            name: "Standard",
            price: "$899 – $1,599",
            description: "Full funnel automation with CRM & messaging integration.",
          },
          {
            name: "Premium",
            price: "$1,900 – $3,800",
            description: "Advanced multi-channel automation with segmentation & CRO.",
          },
          {
            name: "Enterprise",
            price: "$5,500+",
            description: "Custom automation ecosystems across sales, marketing & support teams.",
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
            q: "Will automation replace my marketing team?",
            a: "No—automation supports your team by removing repetitive manual tasks.",
          },
          {
            q: "Can automation work with WhatsApp & SMS?",
            a: "Yes, we integrate WhatsApp Business API & SMS gateways.",
          },
          {
            q: "Is automation only for large businesses?",
            a: "No, even small businesses see massive efficiency gains with automation.",
          },
          {
            q: "Will I be able to edit the automations later?",
            a: "Yes, we provide full access, documentation & training.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn your marketing into a fully automated growth machine.",
        subheading: "Start your Marketing Automation system today and scale faster with precision-driven {workflows}.",
      },
    },
  ],
};

export default MARKETING_AUTOMATION;
