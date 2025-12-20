import { IServiceType } from "@/constants/services";

const SERVICES_DYNAMIC_CONTENT: IServiceType = {
    slug: "website-design-uiux",
    title: "Website Design (UI/UX)",
    sections: [
      /* ----------------------------------------------------
       * 1. HERO 2. METRICS 3. OVERVIEW 4. WHAT YOU SEE 5. DELIVERABLES 6. WHY THIS MATTERS 7. PROCESS 8. TIMELINE 9. WHO IT'S FOR 10. TOOLS 11. CASE STUDY 12. PRICING   13. FAQ 14. CTA
       * ---------------------------------------------------- */
      {
        type: "hero",
        data: {
          title:"Website Design (UI/UX)",
          headline:
            "Your website is the digital {face} of your business—and first impressions decide everything.",
          subheadline:
            "We provide professional website design services to create modern, intuitive, and conversion focused web design solutions that turn visitors into loyal customers.",
          serviceCta: { text: "Design My Website UI/UX", href: "#contact" },
        },
      },
      {
        type: "metrics",
        data: {
          heading: "Built to Deliver [Results]",
          subheading: "{Results} from our UI/UX design workflows",
          items: [
            {value: "460+",label: "Websites Designed",icon: "/icons/rocket.svg",},
            {value: "6-14 Days",label: "Avg. Design Delivery Time",icon: "/icons/zap.svg",},
            {value: "98%",label: "Client Design Approval Rate",icon: "/icons/shield-check.svg",},
            {value: "2.8x",label: "Avg. Conversion Rate Improvement",icon: "/icons/trending-up.svg",},
          ],
        },
      },
      {
        type: "overview",
        data: {
            heading: "Website Design (UI/UX)",
            content: "Our website ui ux design services shape how users perceive, navigate, and interact with your brand online. A beautiful website means nothing if website user experience design is neglected. We combine {strategic} UX research with premium UI design to create websites that are not only visually stunning but also intuitive, fast, accessible, and engineered for business growth. Every layout, color, interaction, and micro-detail is crafted to guide users toward meaningful action."
        }
      },
      {
        type: "whatYouSee",
        data: {
            heading: "What you [see] on this page (User-Facing Elements)",
            items: [
                "Hero with value-driven messaging & primary CTA",
                "Desktop, tablet & mobile UI mockups",
                "Design system {preview} (colors, typography, spacing)",
                "UX wireframes & user flow diagrams",
                "Interactive clickable prototype preview",
                "Before/after website transformation examples",
                "Case study section with measurable UX {results}",
                "“Projects Completed” & performance impact metrics",
                "Step-by-step UI/UX design process timeline",
                "Full UI/UX deliverables checklist",
                "FAQ section for buyer {clarity}",
                "Contact form + free consultation booking CTA"
            ]
        }
      },
      {
        type: "deliverables",
        data: {
            heading: "Start-to-Finish [Deliverables]",
            items: [
                "UX research & user journey mapping",
                "Low-fidelity & high-fidelity wireframes",
                "{Custom} homepage & inner page UI designs",
                "Mobile-first & responsive layouts",
                "Full design system (colors, fonts, spacing, components)",
                "UI component library (buttons, forms, cards, modals)",
                "Interactive Figma prototype",
                "Accessibility & usability {optimization}",
                "UX flow diagrams & information architecture",
                "Developer-ready design assets (Figma, SVG, PNG)",
                "Design annotations & handoff documentation"
            ]
        }
      },
      {
        type: "whyMatters",
        data: {
            heading: "Why This Matters to [you]",
            items: [
                "Improves user {trust} within the first 3 seconds",
                "Reduces bounce rate through better usability",
                "Increases lead generation & sales conversions",
                "Strengthens brand perception & credibility",
                "Ensures responsive website ui design for a {seamless} experience across all devices",
                "Improves SEO by boosting engagement metrics",
                "Creates long-term brand consistency across platforms"
            ]
        }
      },
      {
        type: "process",
        data: {
          heading: "Process (Step-by-[Step])",
          subheading: "",
          steps: [
            {
              title: "Brand, Business & Audience [Discovery]",
              description:
                "We {study} your business goals, customer behavior, competitors & brand tone.",
              icon: "/icons/search.svg",
            },
            {
              title: "UX Research & Structure [Planning]",
              description:
                "User journeys, site architecture, navigation flow & wireframes are {built}.",
              icon: "/icons/map.svg",
            },
            {
              title: "Visual Direction & UI System [Design]",
              description:
                "Color themes, typography, components & layout systems are {created}.",
              icon: "/icons/brush.svg",
            },
            {
              title: "Page-by-Page UI [Design]",
              description:
                "Homepage and all inner pages are {designed} across screen sizes.",
              icon: "/icons/code-xml.svg",
            },
            {
              title: "Interactive [Prototyping]",
              description:
                "Clickable Figma prototype simulates live website {experience}.",
              icon: "/icons/settings.svg",
            },
            {
              title: "Review, [Refinement] & Handoff",
              description:
                "Revisions, polishing & developer-ready {design} documentation.",
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
            { label: "Basic UI/UX Design", duration: "6–10 days" },
            { label: "Full Business Website UI", duration: "10–18 days" },
            { label: "Large Platform / SaaS UI", duration: "3–5 weeks" },
          ],
        },
      },
      {
        type: "whoItsFor",
        data: {
          heading: "Target [Audience]",
          items: [
            "Startups {building} their first premium website",
            "Businesses redesigning outdated websites",
            "SaaS platforms & dashboards",
            "E-commerce brands {improving} conversions",
            "Agencies requiring white-label UI/UX design",
          ],
        },
      },
      {
        type: "tools",
        data: {
          heading: "[Tools] We Use",
          items: [
            "Figma (Primary Design Tool)",
            "Adobe Illustrator & Photoshop",
            "UX research & testing tools",
            "Accessibility & usability checkers",
            "Notion & collaborative design documentation systems",
          ],
        },
      },
      {
        type: "caseStudy",
        data: {
          heading: "Measured Product [Outcomes]",
          content: "A B2B SaaS brand {redesigned} its website UI with us to simplify user onboarding. Within 60 days of launch, user engagement increased by 64%, demo bookings rose by 41%, and bounce rate dropped by 38%."
        },
      },
      {
        type: "pricing",
        data: {
          heading: "Pricing & [Packages]",
          plans: [
            {name: "Starter",price: "$299 – $499",description: "1–2 core pages (Homepage + 1 inner page).",},
            {name: "Standard",price: "$799 – $1,399",description: "Full website UI/UX up to 7 pages.",},
            {name: "Premium",price: "$1,800 – $3,500",description: "Large websites, dashboards & advanced UX research.",},
            {name: "Enterprise",price: "$4,500+",description:"SaaS platforms, portals & large-scale design systems.",},
          ],
        },
      },
      {
        type: "faq",
        data: {
          heading: "Frequently Asked [Questions]",
          items: [
            {q: "Will the design be mobile responsive?",a: "Yes, all designs are built with a mobile-first responsive approach.",},
            {q: "Will I receive editable Figma files?",a: "Yes, full editable source files are always provided.",},
            {q: "Can you also develop the website?",a: "Yes, as a specialized ui ux design agency, we offer Next.js, React, WordPress & custom CMS development.",},
            {q: "How many revisions are included?",a: "Starter includes 2 rounds, Standard 3 rounds, Premium 5 rounds.",},
          ],
        },
      },
      {
        type: "cta",
        data: {
          heading: "Transform your website into a high-converting digital [experience].",
          subheading:
            "Start your Website UI/UX Design project today and build a {platform} users love to use and trust.",
        },
      },
    ],
  };
  
export default SERVICES_DYNAMIC_CONTENT;
