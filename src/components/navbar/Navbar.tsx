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
      {/* Under Development Notice */}
      {/* <div
  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase"
  style={{
    background:
      "linear-gradient(90deg, #ff3d3d 0%, #ff9f43 50%, #ffd36e 100%)",
    color: "#0b0b0b",
    boxShadow:
      "0 6px 24px rgba(255, 120, 60, 0.55), inset 0 1px 0 rgba(255,255,255,0.4)",
    border: "1px solid rgba(0,0,0,0.25)",
  }}
>
  🚧 Website Under Active Development — Features Are Being Updated
</div> */}

      <nav
        className="mx-auto w-full rounded-[40px] flex items-center justify-between px-4 py-2 relative transition-all duration-300"
        style={
          {
            "--text": theme.text,
            "--subtext": theme.subtext,
            background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px -2px rgba(0,0,0,0.1)",
          } as React.CSSProperties
        }
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
            className={BRAND_LOGO.navbar.className}
          />
        </Link>

        <div className="hidden md:flex items-center gap-1 ">
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
                      : ""
                    }
                  `}
                  style={!isHighlighted ? { color: theme.text + "cc" } : undefined}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[4px] overflow-hidden pointer-events-none">
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
                      style={{
                        clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 60%)",
                      }}
                    />
                  </span>
                </Link>

                {link.megaMenu && (
                  <div
                    className={`flex items-center transition-transform duration-250 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                    style={{ color: theme.text }}
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
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full"
          style={{ color: theme.text }}
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
            relative mx-auto mt-20 w-[92%] rounded-3xl p-6 transition-transform duration-300 ease-out
            ${mobileOpen ? "translate-y-0" : "-translate-y-5"}
          `}
          style={{ background: "black" }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-1"
                style={{ color: theme.text }}
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
