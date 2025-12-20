import { IServiceType } from "../../services";

const HOSTING_AND_DEPLOYMENT: IServiceType = {
  slug: "hosting-and-deployment",
  title: "Hosting & Deployment",
  sections: [
    {
      type: "hero",
      data: {
        title: "Hosting & Deployment",
        headline: "Hosting & Deployment ensures your website, app, and digital systems run fast, secure, and always online.",
        subheadline: "We provide hosting and deployment services including high-performance cloud hosting setup, optimized server setup services, and seamless deployment pipelines built for {speed}, {stability}, and scale.",
        serviceCta: { text: "Deploy My Project", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our hosting & deployment workflows",
        items: [
          { value: "260+", label: "Servers & Applications Deployed", icon: "/icons/rocket.svg" },
          { value: "1–3 Days", label: "Avg. Deployment Time", icon: "/icons/zap.svg" },
          { value: "99.99%", label: "Uptime Reliability", icon: "/icons/shield-check.svg" },
          { value: "1.5B+", label: "Requests Served Through Our Infrastructure", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Hosting & Deployment",
        content: "Hosting & Deployment is the backbone of digital performance. A fast, secure, and properly configured hosting environment directly impacts SEO rankings, user experience, conversion rates, and system stability. We provide website deployment services and devops deployment services for websites, web apps, APIs, and cloud systems on high-performance infrastructure using modern ci cd pipeline setup, automated pipelines, security hardening, and real-time cloud infrastructure management—so your business stays {online}, {fast}, and {protected} 24/7.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Clear hero explaining performance-first hosting & {deployment}",
          "Comparison of shared vs VPS vs cloud hosting",
          "Real-time uptime & server monitoring previews",
          "Speed & Core Web Vitals optimization indicators",
          "SSL, firewall & security compliance {badges}",
          "CI/CD deployment pipeline visual flow",
          "“Projects Completed” & uptime performance metrics",
          "Step-by-step deployment workflow",
          "Deliverables checklist",
          "FAQs on security, backups & scalability",
          "Contact form with “Deploy My Infrastructure” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Hosting provider selection & architecture {planning}",
          "Server setup services & provisioning (VPS, Cloud, Dedicated)",
          "Domain, DNS & SSL configuration",
          "Environment setup (Production, Staging, Testing)",
          "Website deployment services & application deployment",
          "Ci cd pipeline setup & configuration (auto-deploy on updates)",
          "Load balancing & traffic routing",
          "CDN setup for global speed {delivery}",
          "Security hardening & firewall configuration",
          "Malware protection & intrusion detection",
          "Automated backups & disaster recovery setup",
          "Real-time uptime, performance & cloud infrastructure management",
          "Deployment documentation & access handover",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Improves website speed & Core Web Vitals",
          "Boosts SEO rankings with fast, stable infrastructure",
          "Prevents downtime & revenue {loss}",
          "Protects your system from cyber threats",
          "Enables smooth scaling during traffic spikes",
          "Ensures reliable updates without breaking your live system",
          "Reduces long-term infrastructure maintenance {costs}",
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
            title: "Requirement & Traffic [Analysis]",
            description: "We {study} your application type, traffic load, performance needs, and security requirements.",
            icon: "/icons/search.svg",
          },
          {
            title: "Server Architecture & Provider [Selection]",
            description: "Best-fit cloud, VPS, or dedicated hosting architecture is {designed}.",
            icon: "/icons/server.svg",
          },
          {
            title: "Server Provisioning & Base [Setup]",
            description: "OS, environment, runtime, security layers, and firewalls are {configured}.",
            icon: "/icons/settings.svg",
          },
          {
            title: "Deployment & CI/CD [Setup]",
            description: "Website, app & APIs are {deployed} with auto-deployment pipelines.",
            icon: "/icons/rocket.svg",
          },
          {
            title: "Performance [Optimization]",
            description: "Caching layers, CDN, image optimization & database {tuning}.",
            icon: "/icons/zap.svg",
          },
          {
            title: "Monitoring, Backup & Go-Live [Support]",
            description: "Real-time monitoring, auto-backups, and post-launch stability {checks}.",
            icon: "/icons/gauge.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Basic Hosting & Website Deployment", duration: "1–2 days" },
          { label: "Cloud Infrastructure & App Deployment", duration: "3–7 days" },
          { label: "High-Availability Enterprise Systems", duration: "2–4 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Startups launching websites or SaaS {platforms}",
          "E-commerce brands handling high traffic & {transactions}",
          "Agencies deploying multiple client projects",
          "Enterprises migrating from shared hosting to cloud",
          "Businesses requiring secure & scalable infrastructure",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "AWS, Google Cloud, DigitalOcean, Azure",
          "Nginx, Apache, Docker",
          "GitHub, GitLab, Bitbucket CI/CD",
          "Cloudflare CDN & Security",
          "Linux Server Administration",
          "Uptime & performance monitoring tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A SaaS platform suffering from frequent downtime migrated to our cloud infrastructure with auto-scaling and load balancing. Within 30 days, uptime improved to {99.99%}, page load times dropped by {61%}, and system crashes were fully eliminated.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$249 – $499",
            description: "Basic website hosting, DNS, SSL & deployment.",
          },
          {
            name: "Standard",
            price: "$699 – $1,399",
            description: "Cloud VPS setup, backups, monitoring & CI/CD pipeline.",
          },
          {
            name: "Premium",
            price: "$1,800 – $3,500",
            description: "High-performance cloud infrastructure with security, caching & scaling.",
          },
          {
            name: "Enterprise",
            price: "$5,500+",
            description: "Multi-server architecture, load balancing, disaster recovery & 24/7 monitoring.",
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
            q: "Can you migrate my website from my old hosting?",
            a: "Yes, we provide zero-downtime migration with full data integrity.",
          },
          {
            q: "Do you provide ongoing server maintenance?",
            a: "Yes, we offer monthly infrastructure monitoring & management plans.",
          },
          {
            q: "Is my hosting secure from hacking & malware?",
            a: "Yes, we implement firewalls, malware protection, and continuous security monitoring.",
          },
          {
            q: "Can my hosting scale if traffic suddenly increases?",
            a: "Yes, all infrastructures are built with auto-scaling capability.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Launch your digital systems on fast, secure, and scalable infrastructure.",
        subheading: "Start your Hosting & Deployment setup today and power your business with enterprise-grade {performance}.",
      },
    },
  ],
};

export default HOSTING_AND_DEPLOYMENT;
