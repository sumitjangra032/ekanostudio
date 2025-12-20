import {
  PiCalendarCheckFill,
} from "react-icons/pi";

export const PROJECT_TIMELINE_CONTENT = {
  tag: {
    icon: PiCalendarCheckFill,
    label: "PROJECT TIMELINE",
  },
  title: "From Concept to [Launch]",
  description:
    "Transparency at every stage. We keep you informed and involved as we {transform} your vision into reality, ensuring a smooth journey from start to finish.",
  phases: [
    {
      step: "01",
      title: "Discovery & Requirement Gathering",
      duration: "Day 1",
      icon: "/icons/search.svg",
      description:
        "We begin by understanding your goals, audience, challenges, and expectations. Through detailed discussions and research, we collect all necessary requirements to shape a clear vision and roadmap for the project.",
      features: ["Stakeholder interviews", "Market analysis", "Goal definition"],
    },
    {
      step: "02",
      title: "Strategy & Planning",
      duration: "Day 2",
      icon: "/icons/map.svg",
      description:
        "We create a structured action plan, finalize deliverables, estimate timelines, and define the technical and creative direction. This ensures the entire project follows a predictable, efficient, and goal-oriented development path.",
      features: ["Project roadmap", "Tech stack selection", "Deliverable breakdown"],
    },
    {
      step: "03",
      title: "Design & Creative Development",
      duration: "Day 3-4",
      icon: "/icons/brush.svg",
      description:
        "Our team develops user-focused designs, content structures, and brand-aligned visuals. We explore creative options, refine concepts, and craft intuitive layouts that ensure your digital presence stands out with clarity and impact.",
      features: ["Visual identity", "UI/UX design", "Interactive prototypes"],
    },
    {
      step: "04",
      title: "Development & Production",
      duration: "Day 5-8",
      icon: "/icons/code-xml.svg",
      description:
        "We transform approved concepts into functional solutions—whether websites, ads, videos, or content systems. Every element is systematically built, optimized, and aligned with industry standards for seamless performance across all platforms.",
      features: ["Frontend development", "Backend integration", "Content creation"],
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      duration: "Day 9",
      icon: "/icons/shield-check.svg",
      description:
        "We perform detailed testing for performance, responsiveness, compatibility, and overall reliability. Every feature, visual element, and functionality is reviewed to ensure the final result meets the highest professional quality standards.",
      features: ["Cross-browser testing", "Performance optimization", "Functional review"],
    },
    {
      step: "06",
      title: "Launch & Ongoing Support",
      duration: "Day 10+",
      icon: "/icons/rocket.svg",
      description:
        "After final approval, we execute a smooth launch, set up performance monitoring, and provide continuous support. We handle updates, improvements, and optimizations to keep your digital presence strong and effective.",
      features: ["Deployment strategy", "Performance monitoring", "Maintenance & updates"],
    },
  ],
};
