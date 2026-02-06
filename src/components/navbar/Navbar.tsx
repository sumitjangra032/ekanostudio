"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND, GLOBAL_CTA_CONTENT, BRAND_LOGO } from "@/constants/global";
import { NAV_LINKS } from "@/constants/navbar";
import NavbarServices from "./NavbarServices";
import NavbarLegal from "./NavbarLegal";
import NavbarBlogs from "./NavbarBlogs";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { useState, useEffect } from "react";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import ButtonVibrator from "../animated/ButtonVibrator";

import { ChevronDownIcon, CloseIcon, MenuIcon } from "../icons/LocalIcons";
import Image from "next/image";

export default function Navbar() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];

  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);



  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl ">


      <nav
        className="mx-auto w-full rounded-[40px] flex items-center justify-between px-4 py-2 relative transition-all duration-300 bg-white/5 border border-white/5 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] [--text:var(--theme-text)] [--subtext:var(--theme-subtext)]"
      >

        <Link
          href="/"
          className="flex items-center font-medium text-lg md:text-xl"
        >
          <Image
            src={BRAND_LOGO.src}
            alt={BRAND.name}
            width={BRAND_LOGO.navbar.width}
            height={BRAND_LOGO.navbar.height}
            priority
            className={`${BRAND_LOGO.navbar.className} w-auto`}
          />
        </Link>

        <div className="hidden md:pl-20 md:flex items-center gap-1 ">
          {NAV_LINKS.map((link) => {
            const isOpen = openMenu === link.label;
            const isHighlighted =
              link.label === "Home" || link.label === "Portfolio";

            return (
              <div
                key={link.label}
                className="group relative flex items-center gap-1 px-4 rounded-full transition-colors duration-300"
                onMouseEnter={() => link.megaMenu && setOpenMenu(link.label)}
                onMouseLeave={() => link.megaMenu && setOpenMenu(null)}
              >


                <Link
                  href={link.href}
                  className={`relative py-2 text-[13px] font-medium transition-all
                    ${isHighlighted
                      ? "text-white font-semibold tracking-wide"
                      : "text-[var(--theme-text)]/80"
                    }
                  `}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[4px] overflow-hidden pointer-events-none">
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 [clip-path:polygon(0_40%,100%_0%,100%_100%,0_60%)]"
                    />
                  </span>
                </Link>

                {link.megaMenu && (
                  <div
                    className={`flex items-center transition-transform duration-250 ease-in-out text-[var(--theme-text)] ${isOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <ChevronDownIcon size={15} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:block ">
          <ButtonVibrator>
            <AnimatedRotateButton
              text="Book a Call"
              href={GLOBAL_CTA_CONTENT.getStarted.href}
              color={theme.buttonBg}
              accent={theme.accents}
            />
          </ ButtonVibrator>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[var(--theme-text)]"
          aria-label="Open menu"
        >
          <MenuIcon size={22} />
        </button>
      </nav>

      {/* Mobile Menu - CSS Transition */}
      <div
        className={`
          md:hidden fixed inset-0 z-[60] transition-all duration-300 ease-in-out
          ${mobileOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div
          className="absolute inset-0"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`
            relative mx-auto mt-20 w-[92%] rounded-3xl p-6 transition-transform duration-300 ease-out bg-black
            ${mobileOpen ? "translate-y-0" : "-translate-y-5"}
          `}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium flex items-center justify-between border-b border-white/10 pb-1 text-[var(--theme-text)]"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <AnimatedRotateButton
              text="Book a Call"
              href={GLOBAL_CTA_CONTENT.getStarted.href}
              color={theme.buttonBg}
              accent={theme.accents}
            />
          </div>
        </div>
      </div>

      <NavbarServices menuKey={openMenu} setMenuKey={setOpenMenu} />
      <NavbarLegal menuKey={openMenu} setMenuKey={setOpenMenu} />
      <NavbarBlogs menuKey={openMenu} setMenuKey={setOpenMenu} />
    </header>
  );
}
