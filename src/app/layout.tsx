import "./globals.css";
import { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: true });
import Script from "next/script";
import { Metadata } from "next";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
import SmoothScroll from "@/components/commons/SmoothScroll";

const SITE_URL = "https://www.ekanostudio.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does your service ensure quality work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow a structured workflow and double-check every task before delivery. Regular reviews and quality checks help us maintain accuracy and consistency.",
      },
    },
    {
      "@type": "Question",
      name: "Can your service integrate with other tools or platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer flexible integrations with most popular tools, apps, and platforms. If you need something specific, we can customize it for you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients get started within 24 to 48 hours. Our onboarding is simple and quick, so you can begin using the service almost immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of support do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide quick-response support through chat, email, and calls. Whether you have a question or need help with something, our team is always ready to assist.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We follow strict security practices, use encrypted systems, and ensure your data stays private and protected at all times.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer customized plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every business is different. We create custom plans based on your needs, goals, and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What if I need changes during the project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem! We allow revisions and adjustments throughout the project to ensure you get the exact results you want.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade or downgrade my plan later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you have the flexibility to change your plan anytime as your business grows or your needs change.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with businesses of all sizes, from startups to established companies, across tech, retail, e-commerce, creative agencies, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide a free consultation to understand your needs and recommend the best solution for your business.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not satisfied with the results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your satisfaction matters. If something isn't right, we revise the work until it meets your expectations.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any hidden fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All pricing is transparent, and you'll always know the full cost before we begin. No surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How do payments work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible payment methods, including one-time payments, monthly billing, and milestone-based payments for larger projects.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer ongoing maintenance and support plans to ensure your systems or projects run smoothly over time.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track the progress of my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We provide regular updates and, if required, give you access to a dedicated dashboard or progress board.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your service different from others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine modern tools, a personalized approach, and transparent communication to deliver high-quality results efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle urgent or fast-track projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer priority and express delivery options depending on your requirements and project scope.",
      },
    },
    {
      "@type": "Question",
      name: "Is training included after setup or delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide simple, step-by-step training so you and your team can use the service confidently.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ekanostudio - Marketing Services & Consulting",
    template: "%s",
  },
  description:
    "Accelerate your digital growth with Ekanostudio. We provide expert SEO, web development, branding, and digital marketing services across India.",
  keywords: [
    "Marketing",
    "Ekanostudio",
    "SEO agency",
    "web development",
    "digital marketing",
    "branding",
    "UI UX design",
    "India",
    "Hisar",
  ],
  authors: [{ name: "Ekanostudio" }],
  creator: "Ekanostudio",
  publisher: "Ekanostudio",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Ekanostudio",
    title: "Ekanostudio - Marketing Services & Consulting",
    description:
      "Ekanostudio helps businesses grow with SEO, web development, branding, and digital marketing services across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ekanostudio - Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekanostudio - Marketing Services & Consulting",
    description:
      "Ekanostudio helps businesses grow with SEO, web development, branding, and digital marketing services across India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  applicationName: "Ekanostudio",
  appleWebApp: {
    capable: true,
    title: "Ekanostudio",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link
          rel="preload"
          href="/fonts/satoshi/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/satoshi/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cabinet/CabinetGrotesk-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cabinet/CabinetGrotesk-Extrabold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/satoshi/Satoshi-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/general-sans/GeneralSans-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta name="p:domain_verify" content="015c1ca0b99c509411057086ec985440" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0T7Z4PX35H" />

        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if ('requestIdleCallback' in window) {
              requestIdleCallback(function() {
                gtag('js', new Date());
                gtag('config', 'G-0T7Z4PX35H');
              });
            } else {
              setTimeout(function() {
                gtag('js', new Date());
                gtag('config', 'G-0T7Z4PX35H');
              }, 2000);
            }
          `}
        </Script>

        <Script id="schema-website" type="application/ld+json" strategy="beforeInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ekanostudio",
            "url": "https://www.ekanostudio.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.ekanostudio.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </Script>

        <Script id="schema-organization" type="application/ld+json" strategy="beforeInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.ekanostudio.com/#organization",
                "name": "Ekanostudio",
                "url": "https://www.ekanostudio.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.ekanostudio.com/logo.png",
                  "width": 1000,
                  "height": 1000
                },
                "sameAs": [
                  "https://www.instagram.com/connectekanostudio/",
                  "https://www.linkedin.com/in/ekano-studio-50670b3aa/",
                  "https://x.com/connectekano",
                  "https://www.facebook.com/profile.php?id=61587941123742",
                  "https://www.youtube.com/@EkanoStudio"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                }
              },
              {
                "@type": "LocalBusiness",
                "name": "Ekanostudio",
                "image": "https://www.ekanostudio.com/logo.png",
                "url": "https://www.ekanostudio.com",
                "telephone": "+91 9034817987",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Red Square Market, Mehta Nagar",
                  "addressLocality": "Hisar",
                  "addressRegion": "Haryana",
                  "addressCountry": "IN",
                  "postalCode": "125001"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "29.157610077674295",
                  "longitude": "75.72107762523662"
                },
                "hasMap": "https://www.google.com/maps/search/?api=1&query=Ekanostudio+Hisar",
                "sameAs": [
                  "https://www.instagram.com/connectekanostudio/",
                  "https://www.linkedin.com/in/ekano-studio-50670b3aa/",
                  "https://x.com/connectekano",
                  "https://www.facebook.com/profile.php?id=61587941123742",
                  "https://www.youtube.com/@EkanoStudio"
                ],
                "priceRange": "₹1000-₹10000"
              }
            ]
          }
          `}
        </Script>

        <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
      </head>

      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md shadow-lg"
        >
          Skip to main content
        </a>

        <SmoothScroll />

        <LazyMotionProvider>
          <ThemeProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </ThemeProvider>
        </LazyMotionProvider>
      </body>
    </html>
  );
}
