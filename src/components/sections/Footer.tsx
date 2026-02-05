import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants/footer";
import { BRAND, BRAND_LOGO } from "@/constants/global";
import { MapPin } from "lucide-react";
import { THEMES, currentTheme } from "../../constants/theme";

export default function Footer() {
  const theme = THEMES[currentTheme as keyof typeof THEMES];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: "var(--theme-background)" }}
    >
      {/* TOP DIVIDER (ALWAYS VISIBLE) */}
      <div className="absolute top-0 left-0 w-full h-[1px] z-20">
        <div
          className="mx-auto h-full max-w-7xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          }}
        />
      </div>

      {/* AMBIENT GLOW */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(
            1100px circle at bottom center,
            rgba(255, 60, 40, 0.07),
            transparent 65%
          )`,
        }}
      />

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

              <p
                className="text-sm leading-relaxed max-w-md"
                style={{ color: "var(--theme-subtext)" }}
              >
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

                  <a
                    href="https://share.google/cP5T8K6ymH0d2APK3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-[220px] h-[110px]"
                  >
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        borderRadius: "22px",
                        maskImage:
                          "radial-gradient(circle at 50% 50%, black 60%, transparent 100%)",
                        WebkitMaskImage:
                          "radial-gradient(circle at 50% 50%, black 60%, transparent 100%)",
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps?q=Red+Square+Market,+Mehta+Nagar,+Hisar&output=embed"
                        width="200%"
                        height="200%"
                        style={{
                          border: 0,
                          transform: "scale(1.2)",
                          filter: "brightness(0.35) contrast(1.1)",
                          pointerEvents: "none",   // ← VERY IMPORTANT
                        }}
                        loading="lazy"
                      ></iframe>
                    </div>
                  </a>
                </div>
              )}



              {/* SOCIALS */}
              <div className="flex gap-4 pt-2">
                {FOOTER_CONTENT.socials.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--theme-subtext)",
                    }}
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
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--theme-text)" }}
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
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--theme-text)" }}
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
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--theme-text)" }}
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
              border-t
              flex flex-col md:flex-row
              items-center justify-between gap-4
              text-xs
            "
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              color: "var(--theme-subtext)",
            }}
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
      className="group relative inline-flex items-center gap-2 text-sm font-light"
      style={{ color: "var(--theme-subtext)" }}
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
          "
          style={{
            clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 60%)",
          }}
        />
      </span>

      {link.badge && (
        <span
          className="text-[10px] px-2 py-0.5 rounded-md font-semibold uppercase"
          style={{
            background: "rgba(255, 60, 40, 0.13)",
            color: "var(--theme-accent-a)",
          }}
        >
          {link.badge}
        </span>
      )}
    </Link>
  );
}

