import {
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  YouTubeIcon,
  FacebookIcon,
} from "@/components/icons/LocalIcons";

export const FOOTER_CONTENT = {
  year: "2024",
  brand: "Ekanostudio",
  tagline: "Empowering businesses with cutting-edge digital solutions. We transform your vision into scalable, high-performance reality through design, development, and strategic innovation.",
  address: {
    label: "Address:",
    lines: [
      "Red Square Market, Mehta Nagar",
      "Hisar, Haryana 125001",
      "India",
    ],
  },

  columns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Why Choose Us", href: "/#why-us" },
        { label: "Process", href: "/#process" },
        { label: "Book Consultation", href: "/book-consultation" },
        { label: "Careers", href: "/careers", badge: "We are Hiring" },
        { label: "Sitemap", href: "/site-map" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Services Offered", href: "/services" },
        { label: "Service Enquiry Form", href: "/service-form" },
        { label: "Get a Quote", href: "/book-consultation" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Cancellation", href: "/cancellation-policy" },
      ],
    },
  ],

  socials: [
    { icon: InstagramIcon, href: "https://www.instagram.com/connectekanostudio/" },
    { icon: TwitterIcon, href: "https://x.com/connectekano" },
    { icon: LinkedInIcon, href: "https://www.linkedin.com/in/ekano-studio-50670b3aa/" },
    { icon: YouTubeIcon, href: "https://www.youtube.com/@EkanoStudio" },
    { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61587941123742" },
  ],
};
