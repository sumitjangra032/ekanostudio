// GLOBAL BRAND CONSTANTS
export const BRAND = {
  name: "ekanostudio",
  // logo: "https://framerusercontent.com/images/KBXmurAlNWp1ASYIJBZflcRzcyQ.svg",
  favicon: "/favicon.ico",
};

export const BRAND_LOGO = {
  src: "/websitelogo.png",
  navbar: {
    width: 200,
    height: 60,
    // FIX:
    // 'h-14' (56px) keeps the navbar slim.
    // 'scale-[2.8]' zooms the logo in to make it look big (compensating for whitespace).
    // 'origin-left' keeps it aligned to the left side.
    className: "object-contain w-auto h-14 scale-[2.8] origin-left ml-4"
  },
  footer: {
    width: 200,
    height: 60,
    // Matching the scale strategy from Navbar to ensure consistent visual size.
    className: "object-contain brightness-0 invert w-auto h-14 scale-[2.8] origin-left"
  },
  centered: {
    width: 200,
    height: 60,
    // For centered usage (CTAs), we scale from the center and remove margin to keep it perfectly aligned.
    className: "object-contain brightness-0 invert w-auto h-14 scale-[2.8] origin-center mr-4"
  }
};

// COMMON CTAs USED ACROSS SECTIONS
export const GLOBAL_CTA_CONTENT = {
  // primary: "Get Clover",
  getStarted: {
    title: "Get Started",
    href: "/book-consultation"
  },
  bookConsultation: {
    title: "Book a Free Consultation",
    href: "/book-consultation"
  },
  serviceForm: {
    title: "Service Form",
    href: "/service-form"
  },
  scheduleCall: "Schedule A Call",
};

// SOCIAL LINKS (optional)
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
  linkedin: "https://linkedin.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/",
};

