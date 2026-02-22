import { IServiceType } from "../../services";

const BRAND_IDENTITY_DESIGN: IServiceType = {
  slug: "brand-identity-design",
  title: "Brand Identity Design",
  meta: { title: "Custom Brand Identity Design Services" , description: "Elevate your business with expert brand identity design. We create memorable logos, guidelines, and visual assets for you." },
  sections: [
    {
      type: "hero",
      data: {
        title: "Brand Identity Design",
        headline: "Brand Identity Design builds the visual soul of your business.",
        subheadline: "We provide brand identity design to craft powerful, memorable brand systems that communicate trust, professionalism, and emotional connection—so your audience {recognizes}, {remembers}, and {chooses} your brand instantly.",
        serviceCta: { text: "Start Your Brand Identity", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our brand identity workflows",
        items: [
          { value: "260+", label: "Brand Identities Created", icon: "/icons/rocket.svg" },
          { value: "3–6 Days", label: "Avg. First Concept Delivery", icon: "/icons/zap.svg" },
          { value: "98%", label: "Client Satisfaction Rate", icon: "/icons/shield-check.svg" },
          { value: "1,150+", label: "Brand Assets Designed", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Brand Identity Design",
        content: "Brand Identity Design is more than just a logo—it is the complete visual language of your business. We offer logo design services, visual branding, and brand guidelines design to create cohesive identity systems. From corporate branding services to startup branding and personal brand identity, we ensure absolute consistency, clarity, and recognizability. Our goal is to make your brand instantly {identifiable} and emotions {engaging} in every customer interaction.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Strong hero section with brand transformation {messaging}",
          "Logo concept previews and evolution process",
          "Color palette systems with HEX/RGB usage samples",
          "Typography hierarchy and font pairing demonstrations",
          "Brand pattern, iconography, and visual motif {samples}",
          "Mockups of business cards, packaging, social posts, and websites",
          "Downloadable brand guideline preview",
          "Case study results with before/after comparison",
          "“Projects Completed” metrics & trusted client logos",
          "Step-by-step identity creation process",
          "Detailed deliverables checklist",
          "FAQs for revision, ownership, and file formats",
          "Contact form with “Start My Brand” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "3–5 initial logo design services concepts",
          "Finalized logo in SVG, PNG, JPG, PDF formats",
          "Complete visual branding color palette",
          "Typography system with headline, body & web-safe fonts",
          "Brand iconography and visual elements",
          "Brand patterns & background systems",
          "Social media startup branding kit",
          "Business card and stationery {designs}",
          "Complete Brand Guidelines Design document (PDF)",
          "All editable source files (AI, PSD, FIGMA)",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Builds instant {trust} and credibility with your audience",
          "Creates strong visual recognition and recall",
          "Makes your brand look premium and {professional}",
          "Ensures consistency across marketing, ads, and digital platforms",
          "Increases perceived value of your products or services",
          "Helps customers emotionally connect with your business",
          "Strengthens long-term brand equity and {loyalty}",
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
            title: "Discovery & Brand [Diagnosis]",
            description: "We {understand} your business vision, target market, competitors, and brand personality.",
            icon: "/icons/search.svg",
          },
          {
            title: "Research & Visual [Direction]",
            description: "Moodboards, industry benchmarking, and creative positioning.",
            icon: "/icons/image.svg",
          },
          {
            title: "Concept [Development]",
            description: "Logo concepts, typography ideas, and initial color {exploration}.",
            icon: "/icons/pen-tool.svg",
          },
          {
            title: "Refinement & [Feedback]",
            description: "Iterative improvements based on your feedback and brand {goals}.",
            icon: "/icons/refresh-cw.svg",
          },
          {
            title: "Asset [Production]",
            description: "Final identity system, templates, and brand elements {creation}.",
            icon: "/icons/brush.svg",
          },
          {
            title: "Guidelines & [Handover]",
            description: "Professional brand guidelines and complete file {delivery}.",
            icon: "/icons/file-text.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Startup Identity Kits", duration: "5–7 days" },
          { label: "Full Brand Identity Systems", duration: "2–4 weeks" },
          { label: "Enterprise Multi-brand Systems", duration: "4–6 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Startups launching their first {brand}",
          "Businesses re-positioning in competitive {markets}",
          "Personal brands, creators, and influencers",
          "Agencies needing white-label branding services",
          "Companies entering premium or global markets",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Figma",
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Adobe InDesign",
          "Brand asset management systems",
          "Cloud-based collaboration & preview tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A fintech startup rebranded with our identity system and achieved a {41%} increase in brand recall, {36%} higher engagement on digital ads, and improved trust perception within 60 days of launch.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$299 – $599",
            description: "Logo + basic color palette + mini brand guide.",
          },
          {
            name: "Standard",
            price: "$799 – $1,399",
            description: "Complete identity system with typography, social kit & stationery.",
          },
          {
            name: "Premium",
            price: "$1,800 – $3,500",
            description: "Full brand identity, advanced guidelines, templates & brand rollout support.",
          },
          {
            name: "Enterprise",
            price: "$4,500+",
            description: "Multi-brand systems, international rollout, and extended visual ecosystems.",
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
            q: "Do I get full ownership of my brand identity?",
            a: "Yes, once the project is completed, all rights and source files belong to you.",
          },
          {
            q: "How many revisions are included?",
            a: "Starter includes 2 rounds, Standard includes 3, Premium includes 5.",
          },
          {
            q: "Can you redesign my old logo instead of creating a new one?",
            a: "Yes, we offer full logo refresh and modern redesign services.",
          },
          {
            q: "Will this identity work across website, social media, and print?",
            a: "Yes, all identities are designed for multi-platform use.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Build a brand that people instantly recognize, trust, and remember.",
        subheading: "Start your Brand Identity Design journey today.",
      },
    },
  ],
};

export default BRAND_IDENTITY_DESIGN;
