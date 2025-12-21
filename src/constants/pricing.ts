import { FaTag } from "react-icons/fa";

export const PRICING_CONTENT = {
  tag: {
    icon: FaTag,
    label: "PRICING",
  },

  title: "[Choose the Perfect Plan]",

  description:
    "Flexible, {transparent} pricing designed for every stage of your business growth — from startup to enterprise.",

  plans: [
    {
      name: "Starter Plan",
      price: "$199/month",
      desc:
        "For startups and small businesses establishing their online presence.",
      features: [
        "Website maintenance & updates",
        "Basic SEO (on-page + monthly audits)",
        "Social media posting (8–10 posts/month)",
        "Basic ad management (optional add-on)",
        "Monthly performance report",
        "Email + chat support",
      ],
    },

    {
      name: "Growth Plan",
      price: "$499/month",
      popular: true,
      desc:
        "Ideal for brands ready to scale aggressively across multiple digital channels.",
      features: [
        "Everything in Starter",
        "Full SEO (on-page + off-page + technical)",
        "Social media management (15–20 posts/month)",
        "Google + Meta ads management",
        "Conversion rate optimization",
        "Content creation (blogs, reels, graphics)",
        "Priority support",
        "CRM + automation setup",
        "Monthly strategy call",
      ],
    },

    {
      name: "Enterprise Plan",
      price: "$1,199/month",
      desc:
        "For large organizations requiring custom solutions, dedicated teams, and complete digital ecosystem management.",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Full website redesigns & landing pages",
        "App maintenance + feature updates",
        "Complete e-commerce management",
        "Custom analytics dashboards",
        "Advanced automation workflows",
        "24/7 priority support",
        "Quarterly strategy workshops",
        "Custom monthly deliverables",
      ],
    },
  ],

  call: {
    headline: "Not sure if we're a fit?",
    description: "Let’s setup a 15-minute call to figure out if we can help you.",
    icon: "/icons/phone.svg",
    buttonText: "Schedule A Call"
  }
};
