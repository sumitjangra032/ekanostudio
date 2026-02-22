import { IServiceType } from "@/constants/services";

const SERVICES_DYNAMIC_CONTENT: IServiceType = {
  slug: "website-development",
  title: "Website Development",
  meta: { title: "Custom Website Development Services" , description: "Grow your brand with custom website development. We build fast, secure, and SEO-friendly sites that drive business results." },
  sections: [
    {
      type: "hero",
      data: {
        title: "Website Development",
        headline:
          "Website Development turns your design into a powerful, fast, secure, and scalable digital {platform}.",
        subheadline:
          "We specialize in custom website development that includes responsive website development, SEO-optimized code, and modern frameworks. Our website development services ensure your site loads instantly, ranks better, and converts visitors into customers.",
        serviceCta: { text: "Develop My Website", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our website development workflows",
        items: [
          {
            value: "520+",
            label: "Websites Developed & Launched",
            icon: "/icons/rocket.svg",
          },
          {
            value: "7–21 Days",
            label: "Avg. Development Timeline (Static, Dynamic & CMS Websites)",
            icon: "/icons/zap.svg",
          },
          {
            value: "99%",
            label: "Deployment Success Rate Across All Web Development Services",
            icon: "/icons/shield-check.svg",
          },
          {
            value: "3.1x",
            label: "Avg. Website Performance Speed Improvement",
            icon: "/icons/trending-up.svg",
          },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Website Development",
        content:
          "Website Development is the engine behind your online presence. A great design needs a powerful backend to perform at scale. Our website development company delivers professional web development services, including custom website development, full-stack development, front end web development, back end web development, and dynamic website development. We build secure, SEO-friendly, fast websites using Next.js, React, WordPress development services, custom cms development, and modern cloud infrastructure. From static business sites to complex dashboards, SaaS platforms, and e-commerce systems—we engineer websites that are stable, scalable, and built for long-term growth.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero with performance-focused messaging & CTA",
          "Live website performance demo previews to show real website development results",
          "Tech stack & framework comparison visual for choosing the best website development approach",
          "Dashboard, CMS & admin panel previews built through custom cms development",
          "Speed, security & Core Web Vitals {indicators}",
          "Database & API integration architecture samples",
          "“Projects Completed” & uptime performance metrics",
          "Step-by-step development process timeline",
          "Full development deliverables {checklist}",
          "FAQ section covering website development cost, timelines & platforms",
          "Contact form + free consultation booking CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Frontend via Next js website development, React website development, or WordPress website development services",
          "Backend development & database setup for scalable web applications",
          "Custom cms development or WordPress admin solutions",
          "API integrations (payments, CRM, ERP, shipping)",
          "Authentication, roles & permission systems",
          "E-commerce development (cart, checkout, payments)",
          "{SEO-friendly} URL & metadata structure",
          "Core Web Vitals & speed optimization",
          "Security hardening & firewall configuration",
          "Responsive website development across all devices",
          "Staging, testing & production deployment",
          "Full source code & Git repository access",
          "Technical documentation & handover support",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [you]",
        items: [
          "Delivers {fast-loading}, high-performing websites",
          "Improves SEO rankings through clean code & speed",
          "Ensures security against hacks & data leaks",
          "Enables seamless {scalability} as your business grows",
          "Reduces downtime & long-term maintenance cost",
          "Integrates smoothly with marketing & web development digital marketing tools",
          "Creates a solid foundation for ads, SEO & CRO",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "From concept to code",
        steps: [
          {
            title: "Requirement Analysis & Tech [Planning]",
            description:
              "We {understand} functionality, scale, integrations & business logic to decide whether you need static website development, dynamic website development, ecommerce website development, or custom website development.",
            icon: "/icons/search.svg",
          },
          {
            title: "Development Architecture & [Setup]",
            description:
              "Project structure, frameworks, databases & environments {configured} based on your website development needs.",
            icon: "/icons/database.svg",
          },
          {
            title: "Frontend & Backend [Development]",
            description:
              "UI integration, APIs, server logic & data handling {implemented} using industry-best web development practices.",
            icon: "/icons/code-xml.svg",
          },
          {
            title: "Testing, QA & Performance [Optimization]",
            description:
              "Speed, SEO audits, security checks, load testing & bug {fixing}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "[Deployment] & Server Optimization",
            description:
              "{Hosting}, CDN, DNS, caching & production launch with near-zero downtime.",
            icon: "/icons/rocket.svg",
          },
          {
            title: "Training, Documentation & [Support]",
            description:
              "CMS/admin training, documentation & post-launch {support} for long-term website success.",
            icon: "/icons/users-round.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Static & Business Websites", duration: "7–12 days" },
          {
            label: "Dynamic Websites & Custom CMS",
            duration: "12–25 days",
          },
          { label: "SaaS Platforms & Dashboards", duration: "4–8 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Startups launching scalable digital products",
          "Businesses upgrading from outdated websites",
          "SaaS platforms & internal dashboards",
          "High-traffic content & media websites",
          "E-commerce & subscription-based platforms",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Next.js, React, Node.js",
          "WordPress & Headless CMS",
          "MySQL, PostgreSQL, MongoDB",
          "REST & GraphQL APIs",
          "GitHub, Docker & CI/CD pipelines",
          "AWS, Vercel, DigitalOcean",
          "Security & performance monitoring tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content:
          "A logistics startup {migrated} from a slow WordPress site to our custom Next.js {platform}. Page load time dropped from 4.8s to 1.1s, organic traffic grew by 82%, and conversion rate improved by 46% within 60 days. This reflects how professional website development improves SEO, speed, and user experience.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages] (USD)",
        plans: [
          {
            name: "Starter",
            price: "$399 – $699",
            description:
              "Static website or basic WordPress development with essential web development services.",
          },
          {
            name: "Standard",
            price: "$999 – $1,899",
            description:
              "Dynamic business website with CMS, integrations & responsive website development.",
          },
          {
            name: "Premium",
            price: "$2,500 – $5,500",
            description:
              "Advanced web apps, dashboards, custom cms development & e-commerce systems.",
          },
          {
            name: "Enterprise",
            price: "$7,000+",
            description:
              "SaaS platforms, large portals & high-traffic infrastructure.",
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
            q: "Will my website be SEO-friendly by default?",
            a: "Yes, we build clean, structured, SEO-optimized code from day one with fast-loading website development architecture.",
          },
          {
            q: "Can you migrate my old website to a new platform?",
            a: "Yes, we handle full migrations with zero data loss and improved performance.",
          },
          {
            q: "Will I get full code ownership?",
            a: "Yes, 100% source code ownership is always provided.",
          },
          {
            q: "Do you provide post-launch maintenance?",
            a: "Yes, we offer dedicated maintenance & support plans for long-term web development success.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading:
          "Build a future-ready digital platform with powerful [performance] and security.",
        subheading:
          "Start your Website Development project today and launch a website that scales with your {business}.",
      },
    },
  ],
};

export default SERVICES_DYNAMIC_CONTENT;
