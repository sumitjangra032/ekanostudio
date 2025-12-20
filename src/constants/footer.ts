import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";

export const FOOTER_CONTENT = {
  year: "2024",
  brand: "Clover Template",

  navLinks: [
    { label: "Product", href: "#product" },
    { label: "Benefits", href: "#benefits" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
  ],

  socials: [
    { icon: FaInstagram, href: "#" },
    { icon: FaTiktok, href: "#" },
    { icon: FiLinkedin, href: "#" },
    { icon: IoLogoYoutube, href: "#" },
    { icon: FaTwitter, href: "#" },
  ],
};
