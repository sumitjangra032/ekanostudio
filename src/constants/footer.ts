import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";

export const FOOTER_CONTENT = {
  year: "2024",
  brand: "EkanoStudio",
  tagline: "Empowering businesses with cutting-edge digital solutions. We transform your vision into scalable, high-performance reality through design, development, and strategic innovation.",

  columns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Why Choose Us", href: "/#why-us" },
        { label: "Process", href: "/#process" },
        { label: "Book Consultation", href: "/book-consultation" },
        { label: "Careers", href: "/careers", badge: "We are Hiring" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Services Offered", href: "/services" },
        { label: "Get a Quote", href: "/book-consultation" },
        { label: "Service Form", href: "/service-form" },
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
    { icon: FaInstagram, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FiLinkedin, href: "#" },
    { icon: IoLogoYoutube, href: "#" },
    { icon: FaTiktok, href: "#" },
  ],
};
