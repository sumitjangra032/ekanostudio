import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const generalSans = localFont({
  src: [
    { path: "./fonts/general-sans/GeneralSans-Regular.woff2", weight: "400" },
    { path: "./fonts/general-sans/GeneralSans-Medium.woff2", weight: "500" },
    { path: "./fonts/general-sans/GeneralSans-Semibold.woff2", weight: "600" },
    { path: "./fonts/general-sans/GeneralSans-Bold.woff2", weight: "700" },
  ],
  variable: "--font-general-sans",
});

export const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi/Satoshi-Regular.woff2", weight: "400" },
    { path: "./fonts/satoshi/Satoshi-Medium.woff2", weight: "500" },
    { path: "./fonts/satoshi/Satoshi-Bold.woff2", weight: "700" },
    { path: "./fonts/satoshi/Satoshi-Black.woff2", weight: "900" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
export const telma = localFont({
  src: [
    { path: "./fonts/telma/Telma-Light.woff2", weight: "300" },
    { path: "./fonts/telma/Telma-Regular.woff2", weight: "400" },
    { path: "./fonts/telma/Telma-Medium.woff2", weight: "500" },
    { path: "./fonts/telma/Telma-Bold.woff2", weight: "700" },
  ],
  variable: "--font-telma",
  display: "swap",
});
export const cabinet = localFont({
  src: [
    { path: "./fonts/cabinet/CabinetGrotesk-Regular.woff2", weight: "400" },
    { path: "./fonts/cabinet/CabinetGrotesk-Medium.woff2", weight: "500" },
    { path: "./fonts/cabinet/CabinetGrotesk-Bold.woff2", weight: "700" },
    { path: "./fonts/cabinet/CabinetGrotesk-Extrabold.woff2", weight: "800" },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});


