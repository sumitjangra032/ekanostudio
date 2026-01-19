import { IServiceType } from "../../services";

const AI_AUTOMATION_N8N: IServiceType = {
  slug: "ai-automation-n8n",
  title: "AI Automation & n8n Workflows",
  sections: [
    {
      type: "hero",
      data: {
        title: "AI Automation & n8n Workflows",
        headline: "AI Automation & n8n Workflows transform your business processes into intelligent, self-running {systems} that work 24/7.",
        subheadline: "We provide AI automation services and n8n workflow automation to build custom automation solutions that eliminate manual tasks, integrate AI capabilities, and create seamless workflows between your {tools} and systems.",
        serviceCta: { text: "Automate My Business", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our AI automation & n8n workflows",
        items: [
          { value: "320+", label: "Automation Workflows Deployed", icon: "/icons/rocket.svg" },
          { value: "1–5 Days", label: "Avg. Workflow Setup Time", icon: "/icons/zap.svg" },
          { value: "99.5%", label: "Automation Reliability Rate", icon: "/icons/shield-check.svg" },
          { value: "85%", label: "Avg. Time Saved Per Process", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "AI Automation & n8n Workflows",
        content: "AI Automation & n8n Workflows combine the power of workflow automation with artificial intelligence to create intelligent business processes. We provide n8n automation services, AI workflow automation, and custom automation solutions using n8n, Zapier, Make (Integromat), and custom AI integrations. From lead management and customer support to data processing and content generation—we build automation workflows that reduce manual work, improve {efficiency}, and enable your team to focus on high-value {tasks}.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero explaining AI automation {benefits}",
          "Workflow visualization and flow diagrams",
          "Before/after automation use case examples",
          "n8n interface and workflow builder previews",
          "AI integration and intelligence features",
          "Automation reliability and performance metrics",
          "“Workflows Deployed” & time saved metrics",
          "Step-by-step automation setup process",
          "Full automation deliverables {checklist}",
          "FAQ section for technical clarity",
          "Contact form with “Request Automation Audit” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "n8n workflow automation setup and configuration",
          "Custom n8n workflows for your business processes",
          "AI integration (OpenAI, Claude, custom AI models)",
          "Multi-platform integrations (CRM, email, social media, databases)",
          "Data transformation and processing workflows",
          "Trigger-based automations and scheduled tasks",
          "Error handling, retry logic, and monitoring systems",
          "Webhook automation and API integrations",
          "Custom node development for specific needs",
          "Workflow documentation and training",
          "Post-launch monitoring and optimization",
          "Ongoing maintenance and workflow updates",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Eliminates repetitive manual {tasks} completely",
          "Saves hours of work daily through intelligent automation",
          "Reduces human errors and improves data {accuracy}",
          "Enables 24/7 business process execution",
          "Scales operations without proportional cost {increase}",
          "Integrates AI capabilities into everyday workflows",
          "Frees your team to focus on strategic {work}",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "From manual to automated",
        steps: [
          {
            title: "Process Analysis & Automation [Audit]",
            description: "We {analyze} your current workflows, identify automation opportunities, and define automation goals.",
            icon: "/icons/search.svg",
          },
          {
            title: "Automation Strategy & Workflow [Design]",
            description: "We {design} automation workflows, define triggers, actions, conditions, and AI integration points.",
            icon: "/icons/layout-dashboard.svg",
          },
          {
            title: "n8n Setup & [Configuration]",
            description: "n8n instance setup, node configuration, API connections, and authentication {configured}.",
            icon: "/icons/database.svg",
          },
          {
            title: "Workflow Development & AI [Integration]",
            description: "Automation workflows {built}, AI capabilities integrated, and testing {completed}.",
            icon: "/icons/code-xml.svg",
          },
          {
            title: "Testing & Error [Handling]",
            description: "Workflow testing, error handling setup, monitoring {configured}, and optimization {completed}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "[Deployment] & Training",
            description: "Workflows go {live}, team training provided, documentation {delivered}, and monitoring {active}.",
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
          { label: "Simple Automation Workflow", duration: "1–2 days" },
          { label: "Medium Complexity Workflow", duration: "3–5 days" },
          { label: "Enterprise Automation System", duration: "1–3 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "E-commerce businesses automating order processing",
          "SaaS companies streamlining customer onboarding",
          "Marketing teams automating lead nurturing",
          "Sales teams automating CRM updates and follow-ups",
          "Enterprises digitizing business processes",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "n8n (open-source workflow automation)",
          "Zapier, Make (Integromat)",
          "OpenAI, Claude, Custom AI APIs",
          "Google Apps Script, Microsoft Power Automate",
          "Webhooks, REST APIs, GraphQL",
          "Custom Node.js automation scripts",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "An e-commerce business automated their order processing, inventory updates, and customer notifications using n8n. Processing time reduced by {87%}, order errors dropped by {94%}, and customer satisfaction increased by {42%} within 30 days.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$499 – $999",
            description: "Simple automation workflow, basic integrations, setup & deployment.",
            features: [
              "Initial n8n Setup",
              "1 Core Workflow",
              "Basic Webhook Setup",
              "Email Integrations",
            ],
          },
          {
            name: "Standard",
            price: "$999 – $1,999",
            description: "Multiple workflows, AI integration, error handling, documentation.",
            features: [
              "Multiple n8n Workflows",
              "OpenAI/LLM Integration",
              "Advanced Error Handling",
              "Full Process Documentation",
            ],
          },
          {
            name: "Premium",
            price: "$1,999 – $4,999",
            description: "Complex automation system, custom nodes, monitoring, training, support.",
            features: [
              "Enterprise Scale Systems",
              "Custom Node Development",
              "Uptime Monitoring Setup",
              "Internal Team Training",
            ],
          },
          {
            name: "Enterprise",
            price: "$5,000+",
            description: "Enterprise automation platform, custom development, dedicated support, SLA.",
            features: [
              "Full Platform Architecture",
              "Dedicated Automation Lead",
              "Priority 24/7 SLA",
              "Annual Strategic Review",
            ],
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
            q: "What is n8n and how does it differ from Zapier?",
            a: "n8n is an open-source workflow automation tool that offers more flexibility and control than Zapier, with self-hosting options and custom node development.",
          },
          {
            q: "Can you integrate AI into automation workflows?",
            a: "Yes, we integrate AI capabilities (OpenAI, Claude, custom models) into workflows for intelligent decision-making, content generation, and data processing.",
          },
          {
            q: "How reliable are automation workflows?",
            a: "Our workflows have 99.5%+ reliability with error handling, retry logic, and monitoring systems in place.",
          },
          {
            q: "Can workflows be modified after deployment?",
            a: "Yes, all workflows are designed to be scalable and easily modified as your business needs evolve.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Automate your business processes with intelligent workflows and AI capabilities.",
        subheading: "Get your custom AI automation and n8n workflows built today.",
      },
    },
  ],
};

export default AI_AUTOMATION_N8N;
