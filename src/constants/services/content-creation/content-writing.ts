import { IServiceType } from "../../services";

const CONTENT_WRITING: IServiceType = {
  slug: "content-writing",
  title: "Content Writing",
  sections: [
    {
      type: "hero",
      data: {
        title: "Content Writing",
        headline: "Content Writing turns your brand message into powerful words that attract, engage, and convert.",
        subheadline: "We provide content writing services to craft SEO-driven, audience-focused content that builds {authority}, drives organic traffic, and turns visitors into loyal {customers}.",
        serviceCta: { text: "Start Your Content Project", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our content production workflows",
        items: [
          { value: "540+", label: "Content Projects Delivered", icon: "/icons/rocket.svg" },
          { value: "1–3 Days", label: "Avg. Turnaround Per Asset", icon: "/icons/zap.svg" },
          { value: "99%", label: "Client Content Approval Rate", icon: "/icons/shield-check.svg" },
          { value: "3.2M+", label: "Words Crafted Across Industries", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Content Writing",
        content: "Content Writing is the foundation of your digital presence. From website copywriting and blogs to product descriptions and long-form articles, we provide seo content writing that balances storytelling, persuasion, and search engine optimization. Our professional content writers ensure every word serves a clear {purpose}—building trust, increasing visibility, and driving real business outcomes. We don’t just write content; we provide copywriting services that {engineer} communication for {growth}.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Clear hero section highlighting conversion-focused {writing}",
          "Samples of website copy, blogs, and landing pages",
          "SEO keyword placement examples",
          "Content tone variants (professional, persuasive, friendly, premium)",
          "Before/after content performance {comparison}",
          "Industry-specific writing samples",
          "“Projects Completed” & word-count metrics",
          "Step-by-step content creation workflow",
          "Deliverables checklist by content type",
          "FAQs about revisions, plagiarism & SEO",
          "Contact form with “Request Writing Sample” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Website copywriting (Home, About, Services, Landing Pages)",
          "SEO blog articles, blog writing services & long-form content",
          "Product descriptions for e-commerce",
          "Sales page & article writing services",
          "Email campaign copy",
          "Ad copy (Google, Meta, display)",
          "Social media captions & content threads",
          "Brand storytelling & about-us {narratives}",
          "SEO optimization (keywords, headings, internal links)",
          "Plagiarism-free, original content with quality assurance",
          "Editable documents (Word, Google Docs, CMS-ready)",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Drives consistent organic {traffic} through search engines",
          "Builds credibility and thought leadership in your niche",
          "Improves website conversions and engagement time",
          "Strengthens brand communication and storytelling",
          "Supports SEO, ads, social media, and email marketing",
          "Reduces bounce rate with high-intent, user-focused writing",
          "Turns casual visitors into paying {customers}",
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
            title: "Discovery & Content [Goals]",
            description: "We {understand} your audience, brand voice, SEO goals, and conversion objectives.",
            icon: "/icons/search.svg",
          },
          {
            title: "Keyword & Market [Research]",
            description: "Search intent, competitor content, and ranking gaps are {analyzed}.",
            icon: "/icons/search.svg",
          },
          {
            title: "Content Structure & [Outline]",
            description: "We {build} headlines, section flow, and conversion architecture.",
            icon: "/icons/video.svg",
          },
          {
            title: "Writing & [Optimization]",
            description: "SEO-first, audience-first content is {written} and optimized.",
            icon: "/icons/gauge.svg",
          },
          {
            title: "Editing & Quality [Control]",
            description: "Proofreading, originality checks, and tone {refinement}.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "Delivery & Performance [Tracking]",
            description: "Final content is {delivered} with indexing & performance guidance.",
            icon: "/icons/locate.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Short-form content (ads, captions)", duration: "24–72 hours" },
          { label: "Blog articles & SEO pages", duration: "3–7 days" },
          { label: "Full website copy", duration: "1–2 weeks" },
          { label: "Large content hubs", duration: "3–4 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Startups launching websites or {products}",
          "Businesses growing through SEO & content marketing",
          "E-commerce brands needing persuasive product descriptions",
          "SaaS companies building authority through blogs",
          "Agencies requiring white-label content services",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "Google Docs & Notion",
          "Grammarly & Hemingway",
          "Surfer SEO, Frase, SEMrush",
          "Copyscape for plagiarism checks",
          "Content performance & ranking tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A fintech blog built with our SEO content strategy generated a {4.3x} increase in organic traffic within 5 months, ranking on page one for over {32} high-intent keywords and boosting inbound leads by {54%}.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$0.08 – $0.12",
            description: "Per word for SEO blogs & articles.",
            features: [
              "Professional Copywriting",
              "SEO Keyword Integration",
              "Plagiarism Checks",
              "1 Round of Revisions",
            ],
          },
          {
            name: "Standard",
            price: "$0.15 – $0.25",
            description: "Per word for website & landing page copy.",
            features: [
              "High-Conversion Copy",
              "Targeted Audience Tone",
              "Competitive Research",
              "2 Rounds of Revisions",
            ],
          },
          {
            name: "Premium",
            price: "$0.30+",
            description: "Per word for specialized technical or sales copy.",
            features: [
              "Expert Technical Writing",
              "Strategic Sales Copy",
              "Multi-Asset Campaigns",
              "Unlimited Revisions",
            ],
          },
          {
            name: "Retainer",
            price: "Custom",
            description: "Monthly content packages for blogs & social.",
            features: [
              "Regular Content Cycles",
              "Dedicated Writer",
              "Content Strategy Planning",
              "Performance Tracking",
            ],
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
            q: "Do you offer revisions?",
            a: "Yes, standard packages include up to 2 rounds of revisions.",
          },
          {
            q: "Is the content plagiarism-free?",
            a: "Absolutely. We check all content with Copyscape before delivery.",
          },
          {
            q: "Do you provide SEO optimization?",
            a: "Yes, all content is optimized for keywords, readability, and search intent.",
          },
          {
            q: "Can you write for technical industries?",
            a: "Yes, we have writers specialized in various niches including tech and finance.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Turn visitors into customers with powerful words.",
        subheading: "Start your Content Writing project today and fuel your brand with high-converting, SEO-driven {communication}.",
      },
    },
  ],
};

export default CONTENT_WRITING;
