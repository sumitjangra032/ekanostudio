import { IServiceType } from "../../services";

const GRAPHIC_DESIGN: IServiceType = {
  slug: "graphic-design",
  title: "Graphic Design",
  sections: [
    {
      type: "hero",
      data: {
        title: "Graphic Design",
        headline: "Graphic Design transforms your ideas into powerful visual communication that captures attention, builds trust, and drives action.",
        subheadline: "We provide graphic design services to design high-impact {visuals} that strengthen your brand presence across digital, print, and marketing {platforms}.",
        serviceCta: { text: "Start My Design Project", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our graphic design workflows",
        items: [
          { value: "780+", label: "Design Projects Delivered", icon: "/icons/rocket.svg" },
          { value: "1–4 Days", label: "Avg. Design Turnaround", icon: "/icons/zap.svg" },
          { value: "99%", label: "Client Approval Rate", icon: "/icons/shield-check.svg" },
          { value: "3,200+", label: "Creative Assets Produced", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Graphic Design",
        content: "Graphic Design is where branding, creativity, and marketing meet. As professional graphic designers, we create social media design services, ad banners, brochure design services, posters, packaging, and brand collaterals. We deliver marketing creatives design that not only look great but also communicate your {message} clearly and persuasively. Every design is {aligned} with your brand identity, marketing goals, and audience behavior to ensure maximum visual {impact} and conversion performance.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Strong hero showcasing brand-aligned visual {storytelling}",
          "Portfolio previews of social, web & print designs",
          "Campaign-based design sample collections",
          "Before/after visual transformation examples",
          "Color systems, typography & layout styling {examples}",
          "“Projects Completed” & creative consistency metrics",
          "Step-by-step design workflow visualization",
          "Deliverables checklist by design category",
          "FAQs about revisions, formats & printing",
          "Contact form with “Request Design” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Social media design services (posts, reels covers, stories)",
          "Advertising banners & banner design",
          "Website graphics & UI visual assets",
          "Branding collateral (brochure design services, flyers, posters)",
          "Brand collateral design & stationery",
          "Presentation decks & pitch designs",
          "Packaging & label {designs}",
          "Infographic & visual data designs",
          "Large-format print designs (hoardings, standees)",
          "Editable source files & export-ready formats (AI, PSD, PNG, JPG, PDF)",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Creates instant visual {impact} & audience recall",
          "Strengthens brand consistency across all platforms",
          "Improves ad performance & click-through rates",
          "Enhances professionalism & brand {trust}",
          "Boosts content engagement across digital channels",
          "Supports marketing, sales & communication goals",
          "Turns ordinary content into attention-grabbing {assets}",
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
            title: "Creative Brief & Brand [Understanding]",
            description: "We {understand} your brand identity, target audience, goals, and visual preferences.",
            icon: "/icons/search.svg",
          },
          {
            title: "Concept Development & [Moodboarding]",
            description: "Visual direction, layout ideas, and design references are {created}.",
            icon: "/icons/video.svg",
          },
          {
            title: "Design [Production]",
            description: "High-quality graphics are {designed} based on the approved direction.",
            icon: "/icons/pen-tool.svg",
          },
          {
            title: "Review & [Revisions]",
            description: "Feedback-based {refinements} and enhancements.",
            icon: "/icons/refresh-cw.svg",
          },
          {
            title: "Final Delivery & File [Export]",
            description: "Optimized files {delivered} for print and digital use.",
            icon: "/icons/rocket.svg",
          },
          {
            title: "Ongoing Design [Support]",
            description: "Long-term creative {support} for campaigns and branding needs.",
            icon: "/icons/headset.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Single Creative Asset", duration: "24–48 hours" },
          { label: "Campaign Design Set", duration: "3–5 days" },
          { label: "Full Brand Collateral Suite", duration: "1–2 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Startups building brand {visibility}",
          "Influencers, creators & personal brands",
          "E-commerce & D2C brands",
          "Agencies needing white-label design {support}",
          "Corporates running large marketing campaigns",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Figma & Canva Pro",
          "Print production & export optimization tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A D2C skincare brand revamped its ad creatives using our design system. Within 30 days, ad click-through rate increased by {47%}, social engagement doubled, and brand consistency improved across all platforms.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$99 – $249",
            description: "Single creative or quick social design.",
          },
          {
            name: "Standard",
            price: "$399 – $899",
            description: "Monthly creative set for ads, posts & banners.",
          },
          {
            name: "Premium",
            price: "$1,200 – $2,800",
            description: "Full brand collateral design & campaign creatives.",
          },
          {
            name: "Enterprise",
            price: "$3,500+",
            description: "High-volume creative production with dedicated design team.",
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
            q: "Do I get editable source files?",
            a: "Yes, source files are included for all premium and enterprise packages.",
          },
          {
            q: "How many revisions are included?",
            a: "Starter includes 1 revision, Standard includes 3, Premium includes 5.",
          },
          {
            q: "Do you handle printing as well?",
            a: "We provide print-ready files and can coordinate with your printer if needed.",
          },
          {
            q: "Can you match my brand guidelines?",
            a: "Yes, all designs strictly follow your brand identity.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn your brand into a visual powerhouse.",
        subheading: "Start your Graphic Design project today and elevate your brand presence across every {platform}.",
      },
    },
  ],
};

export default GRAPHIC_DESIGN;
