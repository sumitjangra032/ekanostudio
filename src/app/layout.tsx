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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ekanostudio - Marketing Services & Consulting",
    template: "Ekanostudio - %s",
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