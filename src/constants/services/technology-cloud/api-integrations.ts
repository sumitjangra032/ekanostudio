import { IServiceType } from "../../services";

const API_INTEGRATIONS: IServiceType = {
  slug: "api-integrations",
  title: "API Integrations & Custom Solutions",
  sections: [
    {
      type: "hero",
      data: {
        title: "API Integrations & Custom Solutions",
        headline: "API Integrations connect your entire digital ecosystem into one powerful, automated workflow.",
        subheadline: "We provide api integration services to seamlessly integrate payment gateway integration, crm integration services, erp integration, apps, and third-party tools so your systems {communicate} flawlessly, reducing manual work and increasing operational {efficiency}.",
        serviceCta: { text: "Integrate Your Systems", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our integration & automation workflows",
        items: [
          { value: "210+", label: "API Integrations Completed", icon: "/icons/rocket.svg" },
          { value: "2–7 Days", label: "Avg. Integration Time", icon: "/icons/zap.svg" },
          { value: "99.8%", label: "System Reliability Rate", icon: "/icons/shield-check.svg" },
          { value: "680+", label: "Automated Workflows Deployed", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "API Integrations & Custom Solutions",
        content: "API Integrations enable different software systems to talk to each other in real time. We provide third party api integration and saas api integration. We design, build, and maintain secure webhook automation, ecommerce api automation and scalable integrations between your website, apps, payment systems, CRMs, ERPs, logistics platforms, marketing tools, and analytics systems. Our goal is to eliminate data silos, automate operations, and create a fully {connected} digital {infrastructure} that runs smoothly without human {dependency}.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "A clear hero explaining cross-platform automation {benefits}",
          "Real-time data sync demonstrations",
          "Payment, CRM, and ERP integration flow diagrams",
          "Before/after automation use cases",
          "Security and compliance visual {indicators}",
          "“Projects Completed” & reliability metrics",
          "Step-by-step integration workflow",
          "Full deliverables checklist",
          "FAQs on security, scalability, and performance",
          "Contact form with “Request Integration Audit” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "API requirement analysis & system compatibility {audit}",
          "Secure API authentication setup (OAuth, Tokens, Keys)",
          "Payment gateway integration (Stripe, Razorpay, PayPal, etc.)",
          "Crm integration services (Zoho, HubSpot, Salesforce)",
          "Erp integration & inventory system integrations",
          "Marketing automation tool integrations",
          "Shipping, logistics, and ecommerce api automation",
          "Webhook automation and real-time data synchronization",
          "Error handling, retry logic, and logging systems",
          "Technical documentation & handover guide",
          "Post-launch monitoring and performance testing",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Eliminates repetitive manual tasks through {automation}",
          "Prevents data mismatches between platforms",
          "Improves order processing speed and accuracy",
          "Enhances customer experience with real-time updates",
          "Makes your tech stack scalable and future-ready",
          "Reduces operational costs through workflow {automation}",
          "Improves reporting accuracy across departments",
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
            title: "Discovery & System [Audit]",
            description: "We {analyze} your existing tools, workflows, data structure, and automation goals.",
            icon: "/icons/search.svg",
          },
          {
            title: "Integration Strategy & [Architecture]",
            description: "We {design} secure data flow between platforms and define triggers, actions, and sync rules.",
            icon: "/icons/layout-dashboard.svg",
          },
          {
            title: "Development & [Configuration]",
            description: "APIs, webhooks, and middleware are {implemented} with secure authentication.",
            icon: "/icons/code-cml.svg",
          },
          {
            title: "Testing & Error [Handling]",
            description: "We {test} data transfer, sync accuracy, failover handling, and performance under load.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Deployment & Live [Monitoring]",
            description: "Integrations go {live} with real-time monitoring and alert systems.",
            icon: "/icons/rocket.svg",
          },
          {
            title: "Optimization & [Scaling]",
            description: "Performance enhancements, additional automations, and expansion {planning}.",
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
          { label: "Basic API Integrations", duration: "2–5 days" },
          { label: "Multiple System Integrations", duration: "1–2 weeks" },
          { label: "Enterprise Automation & ERP Sync", duration: "3–6 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "E-commerce businesses automating orders & {inventory}",
          "SaaS platforms syncing users, billing, and subscriptions",
          "Companies using multiple CRMs & marketing tools",
          "Logistics and delivery management platforms",
          "Enterprises requiring cross-department {automation}",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "REST & GraphQL APIs",
          "Webhooks & Middleware Systems",
          "Zapier, Make (Integromat), n8n",
          "Stripe, Razorpay, PayPal APIs",
          "Zoho, HubSpot, Salesforce APIs",
          "AWS, Firebase, Custom Server Integrations",
          "Custom Node.js, Python & PHP API services",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A multi-vendor e-commerce platform integrated payment, inventory, courier, CRM, and marketing automation through our API system. Order processing time was reduced by {62%}, manual errors dropped by {81%}, and revenue reporting became fully automated within 30 days.",
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
            description: "Single API connection, basic data sync, testing & deployment.",
          },
          {
            name: "Standard",
            price: "$899 – $1,499",
            description: "Multiple API integrations, real-time sync, automation logic.",
          },
          {
            name: "Premium",
            price: "$1,800 – $3,800",
            description: "Advanced workflows, ERP & multi-system integrations, detailed documentation.",
          },
          {
            name: "Enterprise",
            price: "$5,000+",
            description: "Large-scale automation architecture, custom middleware, enterprise-grade security.",
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
            q: "Can you integrate any third-party tool or software?",
            a: "Yes, as long as the platform provides API access or webhook support.",
          },
          {
            q: "Are API integrations secure?",
            a: "Yes, we follow strict authentication, encryption, and access-control standards.",
          },
          {
            q: "Will integrations slow down my website or app?",
            a: "No. We use background processing and optimized data syncing for performance.",
          },
          {
            q: "Can integrations be modified later?",
            a: "Yes, all systems are built scalable for future updates and extensions.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Automate your business operations and unlock true system-level efficiency.",
        subheading: "Get your custom API Integration solution built today.",
      },
    },
  ],
};

export default API_INTEGRATIONS;
