import "./globals.css";
import { ReactNode } from "react";
// Fonts are now loaded via global.css and preloaded manually below

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import Script from "next/script";
import { Metadata } from "next";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";

import SmoothScroll from "@/components/commons/SmoothScroll";

const SITE_URL = "https://www.ekanostudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ekanostudio - Digital Transformation Services & Consulting",
    template: "ekanostudio - %s",
  },
  description:
    "Accelerate your digital growth with ekanostudio. We provide expert SEO, web development, branding, and digital marketing services across India.",
  keywords: [
    "digital transformation",
    "SEO agency",
    "web development",
    "digital marketing",
    "branding",
    "UI UX design",
    "India",
    "Hisar",
  ],
  authors: [{ name: "ekanostudio" }],
  creator: "ekanostudio",
  publisher: "ekanostudio",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "ekanostudio",
    title: "ekanostudio - Digital Transformation Services & Consulting",
    description:
      "ekanostudio helps businesses grow with SEO, web development, branding, and digital marketing services across India.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "ekanostudio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ekanostudioDigital Transformation Services & Consulting",
    description:
      "ekanostudio helps businesses grow with SEO, web development, branding, and digital marketing services across India.",
    images: ["/logo.png"],
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Manual Font Preloading for Performance */}
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

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0T7Z4PX35H"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0T7Z4PX35H');
          `}
        </Script>

        {/* Schema.org - LocalBusiness */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.ekanostudio.com/#business",
            "name": "ekanostudio",
            "url": "https://www.ekanostudio.com",
            "logo": "https://www.ekanostudio.com/logo.png",
            "description": "ekanostudio is an SEO and web development agency based in Hisar, Haryana serving businesses across India.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hisar",
              "addressRegion": "Haryana",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "sameAs": [
              "https://www.instagram.com/ekanostudio",
              "https://www.linkedin.com/company/ekanostudio"
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
            <main id="main-content">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LazyMotionProvider>
      </body>

    </html>
  );
}
