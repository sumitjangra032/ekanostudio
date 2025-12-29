import { IoCallOutline } from "react-icons/io5";

export const BOOK_CONSULTATION_CONTENT = {
  tag: {
    icon: IoCallOutline,
    label: "Book a consultation",
  },

  title: "Book a consultation",

  description: "Thanks for {choosing} us. Fill out this short form and we'll get back to you soon.",

  whyChooseUs: {
    title: "Why Choose [Us] ?",
    description: "We make technology simple. By {blending} smart tools with real human expertise, we help your business work better, move faster, and achieve meaningful results without the stress.",
    list: ["Smart Solutions – Zero Hassle", "Real-Time Insights – Better Decisions", "Flexible Plans – Built Around You"],
  },

  projects: {
    title: "Our [Projects]",
    description: "Check out some of our recent {work}.",
    list: [
      { title: "E-Commerce Platform", description: "Full-stack solution for a major retailer." },
      { title: "Healthcare App", description: "Patient management and scheduling system." },
      { title: "Finance Dashboard", description: "Real-time analytics and reporting tool." },
      { title: "SaaS Analytics", description: "Cloud monitoring dashboard." },
    ]
  },

  confirmationPage: {
    icon: "/icons/calendar-check.svg",
    title: "Thank [You!]",
    description: "Your consultation request has been {submitted} successfully.",
  },

  contact: {
    emails: ["info@ekanostudio.com", "support@ekanostudio.com"],
    phones: ["+919034817987", "+918168815165"]
  }

};
