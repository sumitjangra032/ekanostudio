import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants/footer";
import { BRAND, BRAND_LOGO } from "@/constants/global";
import { MapPin, Mail, Phone, Landmark } from "lucide-react";
import { THEMES, currentTheme } from "../../constants/theme";

export default function Footer() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  return (
    <footer
      className="relative w-full bg-[var(--theme-background)]"
    >
      {/* TOP DIVIDER (ALWAYS VISIBLE) */}
      {/* TOP DIVIDER (ALWAYS VISIBLE) */}
      <div className="absolute top-0 left-0 w-full h-[1px] z-20 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0 footer-ambient-glow" />

      {/* CENTERED CONTENT WRAPPER */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-14">
            {/* BRAND — 5 COLS */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <Link
                href="/"
                className="text-2xl font-semibold tracking-tight block relative"
              >
                <Image
                  src={BRAND_LOGO.src}
                  alt={BRAND.name}
                  width={BRAND_LOGO.footer.width}
                  height={BRAND_LOGO.footer.height}
                  className={BRAND_LOGO.footer.className}
                />
              </Link>

              <p className="text-sm leading-relaxed max-w-md text-[var(--theme-subtext)]">
                {FOOTER_CONTENT.tagline}
              </p>

              {FOOTER_CONTENT.address && (
                <div
                  className="mt-4 text-sm space-y-3 relative"
                  style={{ color: "var(--theme-subtext)" }}
                >
                  <div className="leading-relaxed">
                    {FOOTER_CONTENT.address.lines.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>

                  {/* GOOGLE BUSINESS PROFILE */}
                  <div className="flex items-start gap-3">
                    <Landmark className="w-5 h-5 mt-1 text-[var(--theme-accent)]" />
                    <a
                      href="https://share.google/CBbRBuR5WFk27Nb3w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Google Business
                    </a>
                  </div>
                </div>


              )}

              {/* SOCIALS */}
              <div className="flex gap-1 pt-2">
                {FOOTER_CONTENT.socials.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="p-1 rounded-full transition-all duration-300 hover:-translate-y-1 footer-social-link text-[var(--theme-subtext)]"
                    aria-label={`Visit our ${item.href.split('.').slice(-2, -1)}`}
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* COMPANY — 2 COLS */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4
                className="text-xs font-semibold uppercase tracking-widest text-[var(--theme-text)]"
              >
                Company
              </h4>

              <ul className="space-y-1">
                {FOOTER_CONTENT.columns[0].links.map((link, i) => (
                  <li key={i}>
                    <FooterLink theme={theme} link={link} />
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES — 2 COLS */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4
                className="text-xs font-semibold uppercase tracking-widest text-[var(--theme-text)]"
              >
                Services
              </h4>

              <ul className="space-y-1">
                {FOOTER_CONTENT.columns[1].links.map((link, i) => (
                  <li key={i}>
                    <FooterLink theme={theme} link={link} />
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL — 3 COLS */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h4
                className="text-xs font-semibold uppercase tracking-widest text-[var(--theme-text)]"
              >
                Legal
              </h4>

              <ul className="space-y-1">
                {FOOTER_CONTENT.columns[2].links.map((link, i) => (
                  <li key={i}>
                    <FooterLink theme={theme} link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className="
              mt-20 pt-8
              border-t border-white/10
              flex flex-col md:flex-row
              items-center justify-between gap-4
              text-xs text-[var(--theme-subtext)]
            "
          >
            <p>
              © {new Date().getFullYear()} {FOOTER_CONTENT.brand}. All rights reserved.
            </p>
            <span className="opacity-80">Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ link, theme }: any) {
  return (
    <Link
      href={link.href}
      className="group relative inline-flex items-center gap-2 text-sm font-light text-[var(--theme-subtext)]"
    >
      <span className="relative z-10">{link.label}</span>

      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-full h-[4px] overflow-hidden pointer-events-none">
        <span
          className="
            absolute inset-0
            bg-gradient-to-r from-red-500 to-blue-500
            scale-x-0 origin-left
            transition-transform duration-500 ease-out
            group-hover:scale-x-100
             [clip-path:polygon(0_40%,100%_0%,100%_100%,0_60%)]
          "
        />
      </span>

      {link.badge && (
        <span
          className="text-[10px] px-2 py-0.5 rounded-md font-semibold uppercase bg-red-500/10 text-[var(--theme-accent-a)]"
        >
          {link.badge}
        </span>
      )}
    </Link>
  );
}

