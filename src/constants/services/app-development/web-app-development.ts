import { IServiceType } from "../../services";

const WEB_APP_DEVELOPMENT: IServiceType = {
  slug: "web-app-development",
  title: "Web App Development",
  sections: [
    {
      type: "hero",
      data: {
        title: "Web App Development",
        headline: "Web App Development creates powerful, responsive, and scalable web applications that work seamlessly across all {devices}.",
        subheadline: "We provide web app development services to build progressive web apps (PWAs), single-page applications (SPAs), and cross-platform web solutions that deliver native-like experiences and drive user {engagement}.",
        serviceCta: { text: "Develop My Web App", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our web app development workflows",
        items: [
          { value: "240+", label: "Web Apps Developed & Deployed", icon: "/icons/rocket.svg" },
          { value: "3–10 Weeks", label: "Avg. Development Timeline", icon: "/icons/zap.svg" },
          { value: "99%", label: "Deployment Success Rate", icon: "/icons/shield-check.svg" },
          { value: "2.8x", label: "Avg. Performance Improvement", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Web App Development",
        content: "Web App Development enables your business to reach users across desktop, tablet, and mobile with a single, responsive application. We provide progressive web app development, single-page application (SPA) development, and modern web app solutions using React, Next.js, Vue.js, and Angular. From SaaS platforms and dashboards to e-commerce web apps and enterprise solutions—we build web applications that are fast, secure, SEO-friendly, and designed for {growth}.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero with web-first messaging & CTA",
          "Responsive design demonstrations",
          "Progressive Web App (PWA) features showcase",
          "Cross-platform compatibility visualizations",
          "Performance, security & SEO metrics",
          "User interface and user experience previews",
          "“Web Apps Deployed” & performance metrics",
          "Step-by-step development process timeline",
          "Full development deliverables {checklist}",
          "FAQ section for technical clarity",
          "Contact form + free consultation booking CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Frontend development (React, Next.js, Vue.js, Angular)",
          "Progressive Web App (PWA) implementation",
          "Responsive design and mobile optimization",
          "Backend API development and database setup",
          "Authentication and authorization systems",
          "Real-time features and WebSocket integration",
          "SEO optimization and meta tag configuration",
          "Performance optimization and Core Web Vitals",
          "Cross-browser compatibility and testing",
          "Deployment and hosting configuration",
          "Full source code & repository access",
          "Technical documentation & handover support",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [you]",
        items: [
          "Works across all {devices} and platforms",
          "No app store approval required—faster deployment",
          "Easier to maintain and update than native apps",
          "Better SEO visibility and discoverability",
          "Lower development and maintenance {costs}",
          "Instant updates without user downloads",
          "Shareable links for easy user {access}",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "From concept to deployment",
        steps: [
          {
            title: "Requirement Analysis & Tech [Planning]",
            description: "We {understand} app goals, user requirements, tech stack selection, and architecture planning.",
            icon: "/icons/search.svg",
          },
          {
            title: "UI/UX Design & Wireframing",
            description: "Web app interface design, user flows, responsive layouts, and design {system} creation.",
            icon: "/icons/layout-dashboard.svg",
          },
          {
            title: "Development Architecture & [Setup]",
            description: "Project structure, frameworks, APIs, database, and development {environments} configured.",
            icon: "/icons/database.svg",
          },
          {
            title: "Frontend & Backend [Development]",
            description: "Web app code, API integration, features, PWA capabilities, and core {functionality} implemented.",
            icon: "/icons/code-xml.svg",
          },
          {
            title: "Testing, QA & Performance [Optimization]",
            description: "Cross-browser testing, performance optimization, SEO {audit}, security testing, and bug fixes.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "[Deployment] & Launch",
            description: "Hosting setup, domain configuration, SSL, CDN, and production {launch}.",
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
          { label: "Simple Web App (MVP)", duration: "3–6 weeks" },
          { label: "Medium Complexity Web App", duration: "6–12 weeks" },
          { label: "Enterprise Web App", duration: "12–20 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "SaaS companies building web-based platforms",
          "E-commerce businesses creating web storefronts",
          "Startups launching web-first products",
          "Enterprises digitizing business processes",
          "Service providers building client portals",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "React, Next.js, Vue.js, Angular",
          "Node.js, Express, Python, PHP",
          "MongoDB, PostgreSQL, Firebase",
          "Vercel, Netlify, AWS, Cloudflare",
          "Stripe, Razorpay for payments",
          "Figma, Adobe XD for design",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A SaaS startup launched their progressive web app using Next.js. Page load time improved by {65%}, user engagement increased by {52%}, and mobile conversions grew by {38%} within 2 months.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "MVP",
            price: "$1,999 – $4,999",
            description: "Basic web app, core features, responsive design, deployment.",
          },
          {
            name: "Standard",
            price: "$4,999 – $9,999",
            description: "Full-featured web app, PWA capabilities, backend integration, SEO optimization.",
          },
          {
            name: "Premium",
            price: "$9,999 – $19,999",
            description: "Advanced features, custom backend, real-time capabilities, analytics, ongoing support.",
          },
          {
            name: "Enterprise",
            price: "$20,000+",
            description: "Complex enterprise web app, custom integrations, scalable architecture, dedicated team.",
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
            q: "What's the difference between a website and a web app?",
            a: "Websites are informational, while web apps are interactive applications with functionality, user accounts, and dynamic content.",
          },
          {
            q: "Can web apps work offline?",
            a: "Yes, Progressive Web Apps (PWAs) can work offline using service workers and caching strategies.",
          },
          {
            q: "How long does web app development take?",
            a: "Simple web apps take 3–6 weeks, medium complexity apps take 6–12 weeks, and enterprise apps can take 12–20+ weeks.",
          },
          {
            q: "Do you provide hosting and maintenance?",
            a: "Yes, we provide hosting setup, deployment, and ongoing maintenance and support packages.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Build a powerful web app that works seamlessly across all devices.",
        subheading: "Get your custom web application developed and deployed today.",
      },
    },
  ],
};

export default WEB_APP_DEVELOPMENT;
