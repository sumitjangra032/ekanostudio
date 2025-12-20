import { IServiceType } from "@/constants/services";

const SERVICES_DYNAMIC_CONTENT: IServiceType = {
  slug: "website-speed-optimization",
  title: "Website Speed Optimization",
  sections: [
    {
      type: "hero",
      data: {
        title: "Website Speed Optimization",
        headline:
          "Website Speed Optimization transforms slow, underperforming websites into lightning-fast digital {experiences}.",
        subheadline:
          "We provide top-tier website speed optimization services to eliminate technical bottlenecks, optimize assets, and fine-tune performance so your site loads instantly, ranks higher, and converts better.",
        serviceCta: { text: "Speed Up My Website", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our website speed optimization workflows",
        items: [
          {
            value: "470+",
            label: "Websites Accelerated",
            icon: "/icons/rocket.svg",
          },
          {
            value: "2–6 Days",
            label: "Avg. Speed Optimization Time",
            icon: "/icons/zap.svg",
          },
          {
            value: "99%",
            label: "Performance Stability Rate",
            icon: "/icons/shield-check.svg",
          },
          {
            value: "68%",
            label: "Avg. Page Load Time Reduction",
            icon: "/icons/trending-up.svg",
          },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Website Speed Optimization",
        content:
          "Page speed optimization directly impacts user experience, SEO rankings, ad performance, and conversion rates. A delay of even one second can cause massive drop-offs in traffic and {revenue}. We deliver website performance optimization and a slow website speed fix by optimizing every layer—server, code, media, scripts, caching, CDN, databases, and Core Web Vitals—ensuring your site loads fast across mobile and desktop, even under heavy traffic.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero section highlighting instant speed & performance gains",
          "Before/after PageSpeed & Lighthouse score improvements",
          "Core Web Vitals (LCP, CLS, INP) performance {visuals}",
          "Mobile vs desktop speed comparison charts",
          "Server response time & CDN performance samples",
          "Render-blocking resource {diagnostics}",
          "“Projects Completed” & speed improvement metrics",
          "Step-by-step optimization workflow timeline",
          "Full optimization deliverables checklist",
          "FAQ section for technical clarity",
          "Contact form + urgent speed-fix CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Full website speed & performance {audit}",
          "Core web vitals optimization services (LCP, CLS, INP)",
          "Image compression & next-gen format conversion (WebP/AVIF)",
          "{Lazy loading} for images & videos",
          "Minification of CSS, JS & HTML",
          "Removal of render-blocking resources",
          "Database optimization & query cleanup",
          "Advanced browser caching & server-side caching",
          "CDN integration & configuration",
          "Font loading & third-party script optimization",
          "{Server response time} (TTFB) optimization",
          "Google page speed optimization reports (PageSpeed, GTmetrix) before/after",
          "Ecommerce speed optimization & performance summary",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [you]",
        items: [
          "Improves Google {rankings} due to Core Web Vitals",
          "Reduces {bounce rate} and increases engagement",
          "Boosts conversion rate and ad ROI",
          "Enhances mobile user experience dramatically",
          "Handles high traffic without slowdowns",
          "Improves crawl {budget} for search engines",
          "Creates a premium, frictionless browsing experience",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "From lag to lightning fast",
        steps: [
          {
            title: "Performance Audit & Bottleneck [Analysis]",
            description:
              "We scan your site for speed issues, heavy scripts, server delays & layout {shifts}.",
            icon: "/icons/gauge.svg",
          },
          {
            title: "Asset & Media [Optimization]",
            description:
              "Images, videos, fonts & third-party {assets} are compressed & optimized.",
            icon: "/icons/chevrons-up.svg",
          },
          {
            title: "Code & Script [Optimization]",
            description:
              "Minification, deferring, async loading & unused {resource} cleanup.",
            icon: "/icons/code-xml.svg",
          },
          {
            title: "Caching & CDN [Implementation]",
            description:
              "Browser caching, server caching & edge {delivery} activated.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Server & Database [Optimization]",
            description:
              "TTFB reduction, PHP/Node {tuning} & database cleanup.",
            icon: "/icons/rocket.svg",
          },
          {
            title: "Testing, Validation & [Monitoring]",
            description:
              "Cross-device testing, score validation & ongoing performance {tracking}.",
            icon: "/icons/ticket-check.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Small Websites", duration: "2–3 days" },
          { label: "Business & E-commerce Sites", duration: "4–7 days" },
          { label: "Large Platforms & Custom Apps", duration: "1–2 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Businesses with slow-loading websites",
          "E-commerce stores losing sales due to speed",
          "Websites failing Core Web Vitals",
          "High-traffic media & content platforms",
          "SaaS platforms with performance bottlenecks",
          "Brands running paid ads needing faster landing pages",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Google PageSpeed Insights & Lighthouse",
          "GTmetrix & WebPageTest",
          "Cloudflare, BunnyCDN & Fastly",
          "Redis, Varnish & server cache systems",
          "Image optimization & script minification tools",
          "GA4 & real-user monitoring platforms",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content:
          "A Shopify store struggling with slow mobile load times implemented our Website Speed Optimization system. Mobile page speed {improved} by 72%, bounce rate dropped by 46%, and conversion rate increased by 38% within 21 {days}.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages] (USD)",
        plans: [
          {
            name: "Starter",
            price: "$149 – $299",
            description: "Core Web Vitals fixes & basic optimization.",
          },
          {
            name: "Standard",
            price: "$499 – $899",
            description: "Full asset, caching & script optimization.",
          },
          {
            name: "Premium",
            price: "$1,200 – $2,500",
            description: "Advanced server, CDN & database optimization.",
          },
          {
            name: "Enterprise",
            price: "$3,500+",
            description:
              "High-traffic platforms, load balancing & enterprise performance tuning.",
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
            q: "Will speed optimization improve my SEO rankings?",
            a: "Yes, speed and Core Web Vitals are direct Google ranking factors.",
          },
          {
            q: "Will my website design break after optimization?",
            a: "No, all changes are tested in staging before going live.",
          },
          {
            q: "Do you optimize both mobile and desktop performance?",
            a: "Yes, mobile-first performance is a core focus of our process.",
          },
          {
            q: "Can you optimize websites built on WordPress, Shopify & custom code?",
            a: "Yes, we optimize all major platforms and custom-built systems.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn your slow website into a high-speed digital powerhouse.",
        subheading:
          "Start your Website Speed Optimization today and unlock faster rankings, higher conversions, and a superior user {experience}.",
      },
    },
  ],
};

export default SERVICES_DYNAMIC_CONTENT;
