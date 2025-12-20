"use client";

import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants/footer";
import { BRAND } from "@/constants/global";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "../../constants/theme";
import Link from "next/link";

export default function Footer() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  return (
    <footer
      className="w-full py-20 px-6 border-t"
      style={{
        background: theme.cardBg,
        backgroundColor: theme.background,
        borderColor: theme.text + "20", // light border tint
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        {/* LEFT SIDE */}
        <div>
          {/* Logo */}
          {/* <div className="flex items-center gap-3">
            <Image
              src={BRAND.logo}
              alt="Footer Logo"
              width={100}
              height={30}
              className="object-contain"
            />
          </div> */}
        <Link href="/" className="flex items-center font-medium text-xl" style={{ color: theme.text }}>
          {BRAND.name}
        </Link>

          {/* Nav Links */}
          <nav
            className="mt-6 flex gap-8 font-light"
            style={{ color: theme.subtext }}
          >
            {FOOTER_CONTENT.navLinks.map((link, i) => (
              <a key={i} href={link.href} className="hover:opacity-80 transition">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-sm mt-10"
            style={{ color: theme.subtext }}
          >
            © {FOOTER_CONTENT.year} {FOOTER_CONTENT.brand}
          </p>
        </div>

        {/* RIGHT SIDE SOCIALS */}
        <div className="flex flex-col items-center lg:items-end gap-6">
          <div
            className="flex gap-6 text-xl"
            style={{ color: theme.subtext }}
          >
            {FOOTER_CONTENT.socials.map((item, i) => (
              <item.icon key={i} className="hover:opacity-80 transition" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
