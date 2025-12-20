import "./globals.css";
import { ReactNode } from "react";
import { cabinet, generalSans, inter, satoshi, telma } from "./fonts";
import SmoothScroll from "@/components/commons/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable}  ${satoshi.variable} ${inter.variable} ${telma.variable} ${cabinet.variable}`}>
        <SmoothScroll />
        <ThemeProvider>
          <Navbar />
          {children}      {/* Page Content */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
