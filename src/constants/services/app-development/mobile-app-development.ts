import { IServiceType } from "../../services";

const MOBILE_APP_DEVELOPMENT: IServiceType = {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  sections: [
    {
      type: "hero",
      data: {
        title: "Mobile App Development",
        headline: "Mobile App Development turns your business idea into a powerful, native mobile {experience} that your customers will love.",
        subheadline: "We provide mobile app development services to build high-performance iOS and Android applications using React Native, Flutter, and native technologies that deliver seamless user experiences and drive business {growth}.",
        serviceCta: { text: "Develop My Mobile App", href: "#contact" },
      },
    },
    {
      type: "metrics",
      data: {
        heading: "Built to Deliver [Results]",
        subheading: "{Results} from our mobile app development workflows",
        items: [
          { value: "180+", label: "Mobile Apps Developed & Launched", icon: "/icons/rocket.svg" },
          { value: "4–12 Weeks", label: "Avg. Development Timeline", icon: "/icons/zap.svg" },
          { value: "98%", label: "App Store Approval Rate", icon: "/icons/shield-check.svg" },
          { value: "4.5+", label: "Avg. App Store Rating", icon: "/icons/trending-up.svg" },
        ],
      },
    },
    {
      type: "overview",
      data: {
        heading: "Mobile App Development",
        content: "Mobile App Development is the gateway to reaching customers on their most personal device—their smartphone. We provide ios app development, android app development, react native app development, and flutter app development services. From native iOS and Android apps to cross-platform solutions, we build mobile applications that are fast, secure, scalable, and designed for long-term {success}. Whether you need an e-commerce app, SaaS mobile app, on-demand service app, or enterprise mobile solution—we engineer apps that users love and businesses {scale}.",
      },
    },
    {
      type: "whatYouSee",
      data: {
        heading: "What you [see] on this page (User-Facing Elements)",
        items: [
          "Hero with mobile-first messaging & CTA",
          "Live app previews and UI/UX showcases",
          "Tech stack & platform comparison visual",
          "App features and functionality demonstrations",
          "Performance, security & app store metrics",
          "User experience and navigation flow samples",
          "“Apps Published” & user satisfaction metrics",
          "Step-by-step development process timeline",
          "Full development deliverables {checklist}",
          "FAQ section for technical clarity",
          "Contact form + free consultation booking CTA",
        ],
      },
    },
    {
      type: "deliverables",
      data: {
        heading: "Start-to-Finish [Deliverables]",
        items: [
          "iOS app development (Swift, Objective-C) or Android app development (Kotlin, Java)",
          "Cross-platform app development (React Native, Flutter)",
          "UI/UX design integration and native animations",
          "Backend API integration and database setup",
          "Authentication, push notifications, and in-app purchases",
          "App store optimization (ASO) and submission",
          "Beta testing and quality assurance",
          "App store listing creation (screenshots, descriptions)",
          "App analytics and crash reporting integration",
          "Post-launch maintenance and updates",
          "Full source code & repository access",
          "Technical documentation & handover support",
        ],
      },
    },
    {
      type: "whyMatters",
      data: {
        heading: "Why This Matters to [you]",
        items: [
          "Reaches customers on their most {personal} device",
          "Improves user engagement and retention rates",
          "Enables offline functionality and push notifications",
          "Provides native performance and smooth animations",
          "Opens new revenue streams through app stores",
          "Builds brand loyalty through direct mobile {engagement}",
          "Scales business with mobile-first experiences",
        ],
      },
    },
    {
      type: "process",
      data: {
        heading: "Process (Step-by-[Step])",
        subheading: "From concept to app store",
        steps: [
          {
            title: "Requirement Analysis & Platform [Planning]",
            description: "We {understand} app goals, target audience, platform strategy (iOS/Android/Cross-platform), and feature requirements.",
            icon: "/icons/search.svg",
          },
          {
            title: "UI/UX Design & Wireframing",
            description: "App interface design, user flows, navigation structure, and design {system} creation.",
            icon: "/icons/layout-dashboard.svg",
          },
          {
            title: "Development Architecture & [Setup]",
            description: "Project structure, frameworks, backend APIs, database, and development {environments} configured.",
            icon: "/icons/database.svg",
          },
          {
            title: "Frontend & Backend [Development]",
            description: "Native or cross-platform code, API integration, features, and core {functionality} implemented.",
            icon: "/icons/code-xml.svg",
          },
          {
            title: "Testing, QA & Performance [Optimization]",
            description: "Device testing, bug fixes, performance optimization, security {audit}, and user acceptance testing.",
            icon: "/icons/shield-check.svg",
          },
          {
            title: "[Deployment] & App Store Submission",
            description: "App store optimization, submission, approval, and {launch} coordination.",
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
          { label: "Simple Mobile App (MVP)", duration: "4–8 weeks" },
          { label: "Medium Complexity App", duration: "8–16 weeks" },
          { label: "Enterprise Mobile App", duration: "16–24 weeks" },
        ],
      },
    },
    {
      type: "whoItsFor",
      data: {
        heading: "Target [Audience]",
        items: [
          "Startups launching their first mobile {product}",
          "E-commerce businesses expanding to mobile",
          "SaaS companies building mobile experiences",
          "On-demand service providers (delivery, rideshare, etc.)",
          "Enterprises digitizing internal processes",
        ],
      },
    },
    {
      type: "tools",
      data: {
        heading: "[Tools] We Use",
        items: [
          "React Native, Flutter, Swift, Kotlin",
          "Firebase, AWS Amplify, MongoDB",
          "Stripe, Razorpay for in-app payments",
          "Google Play Console, Apple App Store Connect",
          "Figma, Sketch for UI/UX design",
          "TestFlight, Firebase App Distribution for testing",
          "Fastlane for CI/CD automation",
        ],
      },
    },
    {
      type: "caseStudy",
      data: {
        heading: "Measured Product [Outcomes]",
        content: "A food delivery startup launched their iOS and Android apps using React Native. User retention increased by {45%}, average order value grew by {28%}, and the app reached 10,000+ downloads within 3 months of launch.",
      },
    },
    {
      type: "pricing",
      data: {
        heading: "Pricing & [Packages]",
        plans: [
          {
            name: "MVP",
            price: "$2,999 – $5,999",
            description: "Basic mobile app, core features, single platform (iOS or Android), app store submission.",
          },
          {
            name: "Standard",
            price: "$6,999 – $12,999",
            description: "Full-featured app, cross-platform (iOS & Android), backend integration, app store optimization.",
          },
          {
            name: "Premium",
            price: "$13,999 – $24,999",
            description: "Advanced features, custom backend, analytics, push notifications, in-app purchases, ongoing support.",
          },
          {
            name: "Enterprise",
            price: "$25,000+",
            description: "Complex enterprise app, custom integrations, white-label solutions, dedicated team, extended support.",
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
            q: "Should I build a native app or cross-platform app?",
            a: "Native apps offer best performance, while cross-platform (React Native/Flutter) is faster to develop and maintain. We recommend based on your needs.",
          },
          {
            q: "How long does app development take?",
            a: "Simple apps take 4–8 weeks, medium complexity apps take 8–16 weeks, and enterprise apps can take 16–24+ weeks.",
          },
          {
            q: "Do you handle app store submission?",
            a: "Yes, we handle complete app store optimization, submission, and approval process for both iOS and Android.",
          },
          {
            q: "What about app maintenance and updates?",
            a: "We provide post-launch maintenance, bug fixes, feature updates, and ongoing support packages.",
          },
        ],
      },
    },
    {
      type: "cta",
      data: {
        heading: "Transform your business idea into a powerful mobile app experience.",
        subheading: "Get your custom mobile app developed and launched today.",
      },
    },
  ],
};

export default MOBILE_APP_DEVELOPMENT;
