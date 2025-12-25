"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import AnimatedRotateButton from "@/components/animated/AnimatedRotateButton";
import {
  UploadCloud,
  FileText,
  X,
  ChevronDown,
  Search,
} from "lucide-react";

const COUNTRY_CODES = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "Netherlands", code: "+31" },
  { name: "UAE", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Singapore", code: "+65" },
  { name: "Japan", code: "+81" },
  { name: "South Korea", code: "+82" },
  { name: "Brazil", code: "+55" },
  { name: "Mexico", code: "+52" },
  { name: "South Africa", code: "+27" },
];

export default function CareersPage() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];
  const formRef = useRef<HTMLFormElement>(null);

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault();
    if (!resume || loading) return;

    setLoading(true);
    const formElement = formRef.current;
    if (!formElement) return;

    const formData = new FormData(formElement);
    formData.set("resume", resume);
    formData.set("countryCode", countryCode);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="relative min-h-screen px-4 sm:px-6 py-20 lg:py-32"
      style={{ backgroundColor: theme.background }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(800px circle at 15% 20%, ${theme.accents.a}14, transparent 60%),
            radial-gradient(700px circle at 85% 80%, ${theme.accents.b}12, transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="flex flex-col justify-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit"
            style={{
              background: `${theme.accents.a}15`,
              border: `1px solid ${theme.accents.a}40`,
            }}
          >
            <div className="pulse red" />
            <span
              className="text-xs font-medium tracking-wider"
              style={{ color: theme.accents.a }}
            >
              CAREERS · REMOTE ONLY
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: theme.text }}
          >
            Join our <br /> remote-first team
          </h1>

          <p
            className="mt-6 max-w-md text-base sm:text-lg opacity-80"
            style={{ color: theme.subtext }}
          >
            We work globally with a small, focused team building modern digital
            products. Ownership and clarity matter here.
          </p>

          <div className="mt-8 space-y-4 text-sm sm:text-base opacity-70" style={{ color: theme.subtext }}>
            <p>• Remote roles across all regions</p>
            <p>• Clear expectations and long-term growth</p>
            <p>• High-quality work, not hustle culture</p>
          </div>
        </div>

        <div
          className="relative rounded-3xl p-5 sm:p-8 lg:p-10 border backdrop-blur-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          {success ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <div className="text-green-400 text-2xl">✓</div>
              </div>
              <p className="text-xl font-semibold text-white">
                Application received
              </p>
              <p className="mt-3 text-sm opacity-60" style={{ color: theme.subtext }}>
                Our team will review your profile and reach out shortly.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <Input label="Full Name" name="name" placeholder="Enter your full name" required />
              <Input label="Email Address" name="email" type="email" placeholder="email@example.com" required />

              <div>
                <label className="block text-sm font-medium mb-2 text-white/70">
                  Phone Number
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CountryCodeSelect
                    value={countryCode}
                    onChange={setCountryCode}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Mobile number"
                    className="field-input flex-1"
                  />
                </div>
              </div>

              <Input label="Role Applying For" name="position" placeholder="e.g. Senior Frontend Engineer" required />
              <Textarea label="Why should we hire you?" name="message" placeholder="Tell us about your experience..." />

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2 text-white/70">
                  Resume (PDF only)
                </label>

                {!resume ? (
                  <label
                    className="flex flex-col items-center justify-center rounded-xl p-8 cursor-pointer border-2 border-dashed transition-all hover:bg-white/[0.05]"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      background: "rgba(255, 255, 255, 0.02)",
                    }}
                  >
                    <UploadCloud size={32} style={{ color: theme.accents.a }} className="mb-3 opacity-80" />
                    <span className="text-sm font-medium text-white/60">
                      Click to upload resume
                    </span>
                    <input
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file?.type === "application/pdf") setResume(file);
                      }}
                    />
                  </label>
                ) : (
                  <div
                    className="flex items-center justify-between p-4 rounded-xl border"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={20} style={{ color: theme.accents.a }} />
                      <div className="overflow-hidden">
                        <p className="text-sm font-medium text-white truncate max-w-[150px] sm:max-w-[250px]">
                          {resume.name}
                        </p>
                        <p className="text-xs text-white/40">
                          {(resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => setResume(null)}
                      className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X size={16} className="text-white/60" />
                    </button>
                  </div>
                )}
              </div>

              <AnimatedRotateButton
                text={loading ? "Submitting..." : "Apply Now"}
                type="submit"
                onClick={() => handleSubmit()}
                color={theme.buttonBg}
                accent={theme.accents}
                fullWidth
              />
            </form>
          )}
        </div>
      </div>

      <style jsx global>{`
        .field-input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 15px;
          transition: all 0.2s ease;
        }
        
        .field-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .field-input:hover {
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.06);
        }

        .field-input:focus {
          outline: none;
          border-color: ${theme.accents.a};
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 4px ${theme.accents.a}15;
        }

        input:-webkit-autofill {
          -webkit-text-fill-color: white !important;
          -webkit-box-shadow: 0 0 0px 1000px #111 inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </section>
  );
}

function CountryCodeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.code.includes(query)
  );

  return (
    <div className="relative w-full sm:w-[120px] shrink-0" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="field-input flex items-center justify-between h-full"
      >
        <span className="text-white font-medium">{value}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''} opacity-50`} />
      </button>

      {open && (
        <div 
          className="absolute left-0 top-[calc(100%+8px)] z-[100] w-full sm:w-[280px] rounded-xl border border-white/20 bg-[#0a0a0a] shadow-2xl overflow-hidden"
        >
          <div className="p-2 border-b border-white/10 flex items-center gap-2 bg-white/5">
            <Search size={14} className="text-white/40 ml-1" />
            <input
              autoFocus
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent py-1 text-sm text-white outline-none placeholder-white/20"
            />
          </div>
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar">
            {filtered.length > 0 ? (
              filtered.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => {
                    onChange(c.code);
                    setOpen(false);
                    setQuery("");
                  }}
                  className="w-full px-4 py-3 flex justify-between items-center text-sm text-left text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="truncate pr-2">{c.name}</span>
                  <span className="text-white/30 font-mono text-xs">{c.code}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-xs text-white/30">Not found</div>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-white/70">{label}</label>
      <input {...props} className="field-input" />
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-white/70">{label}</label>
      <textarea {...props} rows={4} className="field-input resize-none" />
    </div>
  );
}