import { IServiceType } from "@/constants/services";

const SERVICES_DYNAMIC_CONTENT: IServiceType = {
  slug: "website-maintenance",
  title: "Website Maintenance",
  sections: [
    {
      type: "hero",
      data: {
        title: "Website Maintenance",
        headline:
          "Website Maintenance keeps your website fast, secure, updated, and running flawlessly—{24/7}.",
        subheadline:
          "We proactively manage updates, security, backups, performance, and uptime so your business never faces downtime, data loss, or technical breakdowns.",
        serviceCta: { text: "Maintain My Website", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our website maintenance workflows",
        items: [
          {
            value: "610+",
            label: "Websites Under Active Maintenance",
            icon: "/icons/rocket.svg",
          },
          {
            value: "24/7",
            label: "Real-Time Website Monitoring",
            icon: "/icons/zap.svg",
          },
          {
            value: "99.9%",
            label: "Avg. Uptime Maintained",
            icon: "/icons/shield-check.svg",
          },
          {
            value: "3.5M+",
            label: "Threats & Errors Prevented",
            icon: "/icons/trending-up.svg",
          },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Website Maintenance",
        content:
          "Website maintenance services are not optional—it’s {mission-critical} for business continuity, security, and performance. Every website, whether built on WordPress, custom frameworks, or SaaS platforms, requires continuous updates, vulnerability patching, backup systems, and performance monitoring. We offer website support and maintenance, including ecommerce website maintenance, to safeguard your website from hacks, crashes, broken updates, slowdowns, and compatibility issues—ensuring your users always get a smooth, secure experience.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero section highlighting 24/7 reliability & peace of mind",
          "Real-time uptime & error {monitoring} dashboard previews",
          "Security firewall & malware protection visuals",
          "Backup system & disaster {recovery} flow",
          "Speed & performance health indicator samples",
          "Update management & version control previews",
          "“Projects Completed” & uptime protection metrics",
          "Step-by-step maintenance workflow timeline",
          "Full maintenance deliverables checklist",
          "FAQ section for support clarity",
          "Contact form + emergency support CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Website uptime monitoring & performance tracking",
          "WordPress maintenance services, core, theme & plugin updates",
          "Website security and maintenance, patching & firewall configuration",
          "Malware scans, cleanup & intrusion prevention",
          "Reliable website backup services (daily & weekly)",
          "One-click website restore & disaster recovery",
          "Speed & Core Web Vitals performance optimization",
          "Broken link detection & error resolution",
          "Database optimization & cleanup",
          "Compatibility checks after all updates",
          "Monthly website health & security reports",
          "Priority technical {support} & issue resolution",
          "Staging environment testing before live updates",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [you]",
        items: [
          "Prevents website {downtime} & revenue loss",
          "Protects customer data & business reputation",
          "Keeps your website compatible with new browsers & devices",
          "Maintains fast loading {speed} & SEO performance",
          "Ensures seamless user experience at all times",
          "Eliminates risks from outdated plugins & vulnerabilities",
          "Saves internal team time & IT operational costs",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "Proactive care & support",
        steps: [
          {
            title: "Website Audit & Risk [Assessment]",
            description:
              "We analyze your current website {health}, vulnerabilities, stack & performance.",
            icon: "/icons/search.svg",
          },
          {
            title: "Backup & Security [Setup]",
            description:
              "Automated backups, firewalls, malware scanners & access {controls} configured.",
            icon: "/icons/cloud-sync.svg",
          },
          {
            title: "Update & Compatibility [Management]",
            description:
              "Core system, plugins, libraries & frameworks {updated} safely.",
            icon: "/icons/brush.svg",
          },
          {
            title: "Performance & Speed [Optimization]",
            description:
              "Caching, database optimization & {Core Web Vitals} improvements.",
            icon: "/icons/gauge.svg",
          },
          {
            title: "Monitoring, Alerts & Incident [Response]",
            description:
              "Real-time uptime, error logs & immediate issue {resolution}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Reporting, Optimization & [Scaling]",
            description:
              "Monthly health reports, recommendations & long-term stability {planning}.",
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
          { label: "Initial Maintenance Setup", duration: "1–2 days" },
          { label: "Ongoing Monitoring & Updates", duration: "Continuous" },
          {
            label: "Major Maintenance Cycles",
            duration: "Monthly & Quarterly",
          },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Business & corporate websites",
          "E-commerce stores & marketplaces",
          "SaaS platforms & web applications",
          "High-traffic blogs & media portals",
          "Agencies managing multiple client websites",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "UptimeRobot, Pingdom",
          "WordPress & custom CMS monitoring tools",
          "Malware scanners & WAF firewalls",
          "Backup & server snapshot systems",
          "GA4 & PageSpeed monitoring tools",
          "Server logs & error tracking platforms",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content:
          "An e-commerce store repeatedly crashed during sale events due to outdated plugins and overload. After moving to our Website Maintenance service, uptime {stabilized} at 99.98%, checkout failures dropped by 92%, and monthly revenue grew by 41% with zero downtime {incidents}.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages] (USD)",
        plans: [
          {
            name: "Starter",
            price: "$49 – $99 / month",
            description: "Core updates, backups & basic monitoring.",
          },
          {
            name: "Standard",
            price: "$149 – $299 / month",
            description:
              "Full updates, security, speed checks & priority support.",
          },
          {
            name: "Premium",
            price: "$399 – $799 / month",
            description:
              "Advanced security, performance optimization & emergency support.",
          },
          {
            name: "Enterprise",
            price: "$1,200+ / month",
            description:
              "High-traffic platforms, SLA-backed uptime & 24/7 dedicated support.",
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
            q: "What happens if my website goes down?",
            a: "Our real-time monitoring triggers instant alerts and immediate recovery action.",
          },
          {
            q: "Do you take backups before updates?",
            a: "Yes, every update is backed up with full restore capability.",
          },
          {
            q: "Will this affect my website SEO?",
            a: "Maintenance improves SEO by keeping your site fast, clean & error-free.",
          },
          {
            q: "Can you maintain custom-built websites too?",
            a: "Yes, we support WordPress, custom CMS, SaaS & enterprise-grade platforms.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading:
          "Protect your website from downtime, hacks, and performance failures.",
        subheading:
          "Start your Website Maintenance today and keep your digital platform running flawlessly—day and {night}.",
      },
    },
  ],
};

export default SERVICES_DYNAMIC_CONTENT;
