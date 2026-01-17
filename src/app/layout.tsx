import "./globals.css";
import { ReactNode } from "react";
import { cabinet, generalSans, inter, satoshi, telma } from "./fonts";
import SmoothScroll from "@/components/commons/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import Script from "next/script";
import { Metadata } from "next";

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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "ekanostudio",
    title: "ekanostudio - Digital Transformation Services & Consulting",
    description:
      "ekanostudio helps businesses grow with SEO, web development, branding, and digital marketing services across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ekanostudioDigital Transformation Services & Consulting",
    description:
      "ekanostudio helps businesses grow with SEO, web development, branding, and digital marketing services across India.",
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

      <body
        className={`${generalSans.variable} ${satoshi.variable} ${inter.variable} ${telma.variable} ${cabinet.variable}`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md shadow-lg"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        <ThemeProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
