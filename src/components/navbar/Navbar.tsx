"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND, GLOBAL_CTA_CONTENT } from "@/constants/global";
import { NAV_LINKS } from "@/constants/navbar";
import NavbarServices from "./NavbarServices";
import NavbarLegal from "./NavbarLegal";
import NavbarBlogs from "./NavbarBlogs";

import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { useState, useEffect } from "react";
import AnimatedRotateButton from "../animated/AnimatedRotateButton";
import ButtonVibrator from "../animated/ButtonVibrator";

import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineChevronDown, HiOutlineX, HiOutlineMenu } from "react-icons/hi";

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
        className="mx-auto w-full rounded-[40px] backdrop-blur-md flex items-center justify-between px-4 py-2 relative bg-[#111111]
          backdrop-blur-xl
          border border-white/15
          shadow-[inset_0px_1px_20px_rgba(255,255,255,0.25)]"
        style={
          {
            "--text": theme.text,
            "--subtext": theme.subtext,
            "--card": theme.cardBg,
            background: theme.cardBg,
          } as React.CSSProperties
        }
      >
        
        <Link
          href="/"
          className="flex items-center font-medium text-lg md:text-xl"
          style={{ color: theme.text }}
        >
          {BRAND.name}
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
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <HiOutlineChevronDown size={15} color={theme.text} />
                  </motion.div>
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
            color= {theme.buttonBg}
            accent={theme.accents}
          />
          </ ButtonVibrator>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full"
          style={{ color: theme.text }}
        >
          <HiOutlineMenu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 100, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[60] "
          >
            <div
              className="absolute inset-0  "
              onClick={() => setMobileOpen(false)}
            />
            <div
              className="relative mx-auto mt-20 w-[92%] rounded-3xl p-6"
              style={{ background: "black" }}
            >

              <div className="flex flex-col gap-4  ">
              
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
          </motion.div>
        )}
      </AnimatePresence>

      <NavbarServices menuKey={openMenu} setMenuKey={setOpenMenu} />
      <NavbarLegal menuKey={openMenu} setMenuKey={setOpenMenu} />
      <NavbarBlogs menuKey={openMenu} setMenuKey={setOpenMenu} />
    </header>
  );
}
