import { IServiceType } from "../../services";

const KEYWORD_RESEARCH: IServiceType = {
  slug: "keyword-research",
  title: "Keyword Research",
  meta: { title: "SEO Keyword Research Services" },
  sections: [
    {
      type: "hero",
      data: {
        title: "Keyword Research",
        headline: "Keyword Research uncovers exactly what your customers are searching for—and how to rank for it profitably.",
        subheadline: "We provide professional keyword research services to identify high-intent, high-conversion keywords that drive targeted traffic, qualified leads, and {sustainable} organic growth.",
        serviceCta: { text: "Start My Keyword Research", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our keyword intelligence workflows",
        items: [
          { value: "360+", label: "Keyword Research Projects Completed", icon: "/icons/rocket.svg" },
          { value: "2–5 Days", label: "Avg. Research Turnaround", icon: "/icons/zap.svg" },
          { value: "98%", label: "Ranking Accuracy Rate", icon: "/icons/target.svg" },
          { value: "1.7M+", label: "Keywords Analyzed Across Industries", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Keyword Research",
        content: "SEO keyword research is the foundation of SEO, paid ads, and content marketing success. We go beyond basic keyword lists to uncover real search {intent}, buyer-stage queries, competitive gaps, and revenue-driving opportunities. Our keyword strategy services include competitor analysis, SERP behavior study, topical clustering, and traffic potential modeling—ensuring every keyword chosen has a clear business {purpose}, not just search volume.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero section explaining intent-driven keyword {discovery}",
          "Keyword opportunity maps by funnel stage (TOFU, MOFU, BOFU)",
          "Search volume, difficulty & traffic potential snapshots",
          "Competitor keyword gap {analysis} visuals",
          "SERP feature & intent-type breakdowns",
          "Topical cluster & content silo mapping examples",
          "“Projects Completed” & ranking success metrics",
          "Step-by-step keyword research workflow",
          "Deliverables preview & sample keyword sheets",
          "FAQs about SEO timelines & keyword difficulty",
          "Contact form with “Get My Keyword List” CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "Business & niche google keyword research",
          "Buyer-intent keyword identification (commercial & transactional)",
          "Informational & blog topic keyword clusters",
          "Long tail keyword research for quick ranking {wins}",
          "Competitor keyword analysis & gap report",
          "Ecommerce keyword research (if applicable)",
          "Search volume, CPC & difficulty scoring",
          "Topical authority clusters & content silo {plan}",
          "Prioritized keyword roadmap for SEO & ads",
          "Final keyword master sheet (Excel/Google Sheets)",
          "Implementation guide for SEO, content & PPC teams",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [You]",
        items: [
          "Attracts highly {targeted}, conversion-ready traffic",
          "Prevents wasting time on low-value keywords",
          "Improves SEO rankings with strategic intent targeting",
          "Lowers ad costs by focusing on high-ROI queries",
          "Builds long-term topical {authority} in your niche",
          "Aligns content, SEO & ads under one growth strategy",
          "Turns search demand into predictable {revenue}",
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
            title: "Business & Audience [Discovery]",
            description: "We {analyze} your products, services, buyers, and revenue goals.",
            icon: "/icons/search.svg",
          },
          {
            title: "Market & Competitor [Research]",
            description: "We {reverse-engineer} competitor keywords, traffic sources, and rankings.",
            icon: "/icons/badge-dollar-sign.svg",
          },
          {
            title: "Keyword Expansion & Data [Mining]",
            description: "Thousands of keywords are {extracted} using multiple intelligence tools.",
            icon: "/icons/database.svg",
          },
          {
            title: "Intent Classification & [Filtering]",
            description: "Keywords are {sorted} by informational, commercial, and transactional intent.",
            icon: "/icons/funnel.svg",
          },
          {
            title: "Difficulty, CPC & Opportunity [Scoring]",
            description: "We {evaluate} ranking feasibility and profit potential.",
            icon: "/icons/book-check.svg",
          },
          {
            title: "Final Keyword Roadmap & Strategy [Delivery]",
            description: "Clean, prioritized keyword sheets with SEO & content usage {guidance}.",
            icon: "/icons/keyboard.svg",
          },
        ],
      },
    },
    {
      type: "timeline",
      data: {
        heading: "Estimated [Timeline]",
        items: [
          { label: "Basic Keyword Research", duration: "2–3 days" },
          { label: "Full SEO Keyword Strategy", duration: "5–7 days" },
          { label: "Enterprise Multi-Market Keyword Mapping", duration: "2–3 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "New websites starting SEO from {scratch}",
          "Businesses launching new services or products",
          "E-commerce stores optimizing product & category pages",
          "Content teams building traffic-focused {blogs}",
          "Agencies needing white-label SEO research",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "SEMrush, Ahrefs, Ubersuggest",
          "Google Keyword Planner & Search Console",
          "SERP analysis & intent classification tools",
          "Trend analysis & CPC forecasting platforms",
          "Custom spreadsheet & clustering tools",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A SaaS startup used our keyword research to build a content cluster around buyer-intent queries. Within 4 months, 18 keywords ranked on page one, organic leads increased by {62%}, and cost-per-lead dropped by {41%} across paid channels.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "Starter",
            price: "$199 – $399",
            description: "Core keyword list for one service or niche.",
          },
          {
            name: "Standard",
            price: "$499 – $899",
            description: "Full SEO keyword strategy with competitor analysis.",
          },
          {
            name: "Premium",
            price: "$1,100 – $2,400",
            description: "Topical cluster mapping for blogs, services & ads.",
          },
          {
            name: "Enterprise",
            price: "$3,500+",
            description: "Multi-country, multi-language & enterprise-level keyword architecture.",
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
            q: "How long does it take for keywords to rank?",
            a: "SEO rankings depend on competition, site strength & content quality—typically 1–4 months.",
          },
          {
            q: "Can these keywords be used for Google Ads too?",
            a: "Yes, we include CPC and buyer-intent scoring for ad usage.",
          },
          {
            q: "Will you include local keywords for my city?",
            a: "Yes, geo-targeted keyword sets are included when required.",
          },
          {
            q: "Do you help implement keywords into my website and content?",
            a: "Yes, we provide an implementation guide and offer SEO execution as a separate service.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Stop guessing what your customers are searching for.",
        subheading: "Get your data-backed Keyword Research today and build {traffic}, rankings, and revenue with precision.",
      },
    },
  ],
};

export default KEYWORD_RESEARCH;
