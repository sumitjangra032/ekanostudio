import { IServiceType } from "../../services";

const EMAIL_MARKETING: IServiceType = {
  slug: "email-marketing",
  title: "Email Marketing Automation",
  meta: { title: "Expert Email Marketing Services" },
  sections: [
    {
      type: "hero",
      data: {
        title: "Email Marketing Automation",
        headline: "Email Marketing turns your audience into loyal customers through automated, personalized, and high-converting email campaigns.",
        subheadline: "We provide email marketing services to design data-driven {email} systems that nurture leads, boost retention, and generate consistent revenue on {autopilot}.",
        serviceCta: { text: "Launch My Email Campaigns", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our email marketing workflows",
        items: [
          { value: "310+", label: "Email Campaigns Launched", icon: "/icons/rocket.svg" },
          { value: "1–3 Days", label: "Avg. Campaign Setup Time", icon: "/icons/zap.svg" },
          { value: "99%", label: "Inbox & Delivery Accuracy", icon: "/icons/shield-check.svg" },
          { value: "4.6M+", label: "Emails Successfully Delivered", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Email Marketing Automation",
        content: "Email Marketing remains one of the highest-ROI digital channels when executed correctly. We provide email automation services including welcome sequences, lead nurturing emails, newsletter marketing, abandoned cart email recovery, re-engagement emails, and post-purchase automations. Every {campaign} is carefully crafted using ecommerce email marketing, audience segmentation, behavioral triggers, persuasive copy, and performance analytics to maximize open rates, click-through rates, and {conversions}.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Clear hero explaining revenue-focused email {automation}",
          "Visual previews of email templates & campaign layouts",
          "Funnel-based email journey diagrams (welcome, nurture, sales, retention)",
          "Open rate, CTR & revenue tracking snapshots",
          "A/B testing demo examples for subject lines & CTAs",
          "Deliverability & spam-filter quality indicators",
          "“Projects Completed” & campaign performance metrics",
          "Step-by-step campaign execution workflow",
          "Deliverables checklist",
          "FAQs on compliance, automation & inbox placement",
          "Contact form with “Start My Email Campaign” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Email platform setup & {configuration}",
          "Audience segmentation & tagging strategy",
          "Custom email template design (brand-aligned)",
          "Welcome & onboarding email sequences",
          "Lead nurturing emails & drip campaign services workflows",
          "Promotional & newsletter marketing creation",
          "Abandoned cart email & checkout recovery {emails}",
          "Re-engagement & list-cleaning campaigns",
          "Post-purchase & ecommerce email marketing automation",
          "A/B testing for subject lines, layouts & CTAs",
          "Deliverability optimization & spam compliance",
          "Monthly performance reports & optimization insights",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Generates consistent {revenue} with minimal ad spend",
          "Builds long-term relationships with your audience",
          "Automates lead nurturing & follow-ups",
          "Improves repeat purchase & customer lifetime value",
          "Keeps your brand top-of-mind with targeted communication",
          "Reduces dependency on paid ads for conversions",
          "Delivers one of the highest ROI channels in digital {marketing}",
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
            title: "Audience & Funnel [Discovery]",
            description: "We {analyze} your users, customer journey, and conversion goals.",
            icon: "/icons/search.svg",
          },
          {
            title: "Campaign Strategy & Automation [Design]",
            description: "Email sequences, segmentation logic & trigger points are {mapped}.",
            icon: "/icons/megaphone.svg",
          },
          {
            title: "Template Design & [Copywriting]",
            description: "Brand-aligned visuals and persuasive conversion-focused {content}.",
            icon: "/icons/pen-tool.svg",
          },
          {
            title: "Platform Setup & Workflow [Configuration]",
            description: "Automations, triggers, tagging, and integrations are {implemented}.",
            icon: "/icons/settings.svg",
          },
          {
            title: "Testing & Deliverability [Optimization]",
            description: "Spam checks, inbox placement, link testing & performance {validation}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Launch, Reporting & [Optimization]",
            description: "Campaigns go live with continuous performance analysis and {refinement}.",
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
          { label: "Basic Email Campaign Setup", duration: "2–4 days" },
          { label: "Full Automation System", duration: "1–2 weeks" },
          { label: "Enterprise Multi-Journey Systems", duration: "3–4 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "E-commerce brands boosting repeat {purchases}",
          "SaaS businesses nurturing trials into paid users",
          "Service businesses converting leads via follow-ups",
          "Content creators monetizing audiences",
          "Agencies running white-label email {systems}",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Mailchimp, Klaviyo, Brevo (Sendinblue)",
          "HubSpot Email, ActiveCampaign",
          "Amazon SES & custom SMTP",
          "Zapier & API-based automation",
          "GA4 & CRM integrations",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A fashion e-commerce brand implemented our abandoned cart and post-purchase email system. Within 60 days, email revenue accounted for {34%} of total sales and repeat purchase rate increased by {41%}.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$299 – $549",
            description: "Basic email setup & 1–2 campaign automations.",
          },
          {
            name: "Standard",
            price: "$749 – $1,299",
            description: "Full email system with automations, templates & reports.",
          },
          {
            name: "Premium",
            price: "$1,500 – $3,200",
            description: "Advanced multi-journey email funnels with optimization & CRO integration.",
          },
          {
            name: "Enterprise",
            price: "$4,500+",
            description: "Large-scale automation, custom SMTP, CRM + multichannel integration.",
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
            q: "Will my emails go to the inbox or spam?",
            a: "We follow strict deliverability & compliance practices to maximize inbox placement.",
          },
          {
            q: "Can you integrate email with my CRM & website?",
            a: "Yes, we integrate email with CRMs, websites, and payment systems.",
          },
          {
            q: "Do you create both copy & design?",
            a: "Yes, we handle both conversion copywriting and brand-aligned design.",
          },
          {
            q: "Is email marketing still effective in 2025?",
            a: "Yes, email continues to deliver one of the highest ROIs across all digital channels.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn your email list into a powerful revenue engine.",
        subheading: "Start your Email Marketing system today and automate growth with precision and {performance}.",
      },
    },
  ],
};

export default EMAIL_MARKETING;
