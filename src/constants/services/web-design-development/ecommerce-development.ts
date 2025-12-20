import { IServiceType } from "@/constants/services";

const SERVICES_DYNAMIC_CONTENT: IServiceType = {
  slug: "ecommerce-development",
  title: "E-Commerce Development",
  sections: [
    {
      type: "hero",
      data: {
        title: "E-Commerce Development",
        headline:
          "E-Commerce Development transforms your products into a high-performance online store engineered for {sales}, speed, and scale.",
        subheadline:
          "We build conversion-focused shopping experiences that turn visitors into loyal customers and maximize your revenue potential.",
        serviceCta: { text: "Build My Online Store", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our e-commerce development workflows",
        items: [
          {
            value: "220+",
            label: "Online Stores Launched",
            icon: "/icons/rocket.svg",
          },
          {
            value: "7–18 Days",
            label: "Avg. Store Development Time",
            icon: "/icons/zap.svg",
          },
          {
            value: "97%",
            label: "Client Satisfaction Rate",
            icon: "/icons/shield-check.svg",
          },
          {
            value: "1.8M+",
            label: "Orders Processed Through Our Builds",
            icon: "/icons/trending-up.svg",
          },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "E-Commerce Development",
        content:
          "Ecommerce development services are the backbone of your digital {sales engine}. We design and develop secure, scalable, and conversion-optimized online stores specializing in Shopify development, WooCommerce development, and online store development. From product presentation to checkout experience, payment gateways, inventory systems, and order automation—we engineer every element to drive higher sales, better user experience, and long-term scalability for your business.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero section featuring high-conversion store previews",
          "{Store} UI mockups for desktop, tablet & mobile",
          "Product page design & layout demonstrations",
          "Checkout & payment {workflow} previews",
          "Cart, wishlist & upsell flow examples",
          "Speed & performance optimization indicators",
          "“Projects Completed” sales & reliability metrics",
          "Step-by-step store development workflow",
          "Deliverables checklist",
          "FAQs about payments, security & scalability",
          "Contact form with “Launch My Store” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Ecommerce website design & UI/UX",
          "Custom ecommerce solutions (Shopify, WooCommerce, Custom)",
          "Product category & product page creation",
          "Secure {checkout} & cart system",
          "Payment gateway integrations (Stripe, Razorpay, PayPal, etc.)",
          "Inventory & stock {management} system",
          "Shipping, tax & order automation setup",
          "Coupon, discount & promotional systems",
          "Upsell, cross-sell & recommendation logic",
          "Mobile-optimized shopping experience",
          "Admin dashboard & order management system",
          "Security hardening & data protection setup",
          "Analytics, conversion & revenue tracking",
          "Full handover documentation & training",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [you]",
        items: [
          "Turns your website into a 24/7 {revenue} machine",
          "Improves customer {trust} with secure checkout",
          "Increases average order value using smart upsells",
          "Reduces cart abandonment through optimized UX",
          "Enables automated order & inventory management",
          "Supports business {scaling} without operational chaos",
          "Builds long-term online sales sustainability",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "From concept to commerce",
        steps: [
          {
            title: "Discovery & Business [Analysis]",
            description:
              "We understand your products, target audience, competition, and {sales goals}.",
            icon: "/icons/search.svg",
          },
          {
            title: "Platform Selection & [Architecture]",
            description:
              "Shopify, WooCommerce, or custom solution selection based on {scalability} needs.",
            icon: "/icons/wrench.svg",
          },
          {
            title: "UI/UX Design & Store [Structure]",
            description:
              "Product pages, category flow, checkout UX, and navigation {planning}.",
            icon: "/icons/brush.svg",
          },
          {
            title: "Development & [Integrations]",
            description:
              "Payment gateways, inventory systems, shipping {tools} & automation.",
            icon: "/icons/code-xml.svg",
          },
          {
            title: "Testing & [Optimization]",
            description:
              "Speed, security, mobile experience, checkout flow & bug {testing}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Launch & Post-Launch [Support]",
            description:
              "Store goes live with monitoring, training, and performance {optimization}.",
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
          { label: "Basic Online Store", duration: "7–10 days" },
          { label: "Advanced Store with Integrations", duration: "2–3 weeks" },
          { label: "Enterprise E-Commerce Platforms", duration: "4–6 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "New brands launching online sales",
          "DTC & consumer product businesses",
          "Manufacturers & wholesalers going digital",
          "Subscription-based commerce models",
          "High-volume & multi-vendor marketplace owners",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Shopify, WooCommerce, Custom Commerce Frameworks",
          "Stripe, Razorpay, PayPal",
          "Inventory & ERP Integrations",
          "GA4 & E-Commerce Conversion Tracking",
          "CDN, Security & Performance Tools",
          "API-based logistics & courier systems",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content:
          "A lifestyle product brand migrated from offline sales to a full Shopify store built by us. Within 90 days of launch, monthly online {revenue} crossed $180,000, cart abandonment dropped by 42%, and repeat purchases increased by 36%.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages] (USD)",
        plans: [
          {
            name: "Starter",
            price: "$699 – $1,199",
            description:
              "Basic Shopify or WooCommerce store with up to 15 products.",
          },
          {
            name: "Standard",
            price: "$1,499 – $2,800",
            description:
              "Fully customized store with payment, shipping & automation.",
          },
          {
            name: "Premium",
            price: "$3,200 – $6,000",
            description:
              "Advanced e-commerce system with upsells, analytics & performance optimization.",
          },
          {
            name: "Enterprise",
            price: "$8,000+",
            description:
              "Ecommerce platform development, marketplaces & large-scale integrations.",
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
            q: "Can I manage products and orders myself after launch?",
            a: "Yes, you get a full admin panel with training and documentation.",
          },
          {
            q: "Are payments and customer data secure?",
            a: "Yes, we implement SSL, encrypted transactions, and secure gateways.",
          },
          {
            q: "Do you integrate shipping and courier services?",
            a: "Yes, we integrate real-time shipping, tracking & logistics systems.",
          },
          {
            q: "Can my store scale for high traffic and large orders?",
            a: "Yes, all stores are built with scalability and performance in mind.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn your products into a powerful online sales engine.",
        subheading:
          "Start your E-Commerce Development project today and scale your business with {confidence}.",
      },
    },
  ],
};

export default SERVICES_DYNAMIC_CONTENT;
