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
  Globe,
  Users,
  Sparkles,
  Award,
  Clock,
  MapPin,
  CheckCircle,
  Loader2
} from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const COUNTRY_CODES = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
];

const BENEFITS = [
  {
    icon: Globe,
    title: "Work From Anywhere",
    description: "Full remote flexibility across all timezones"
  },
  {
    icon: Users,
    title: "Team First Culture",
    description: "Collaborate with passionate professionals"
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description: "Clear progression and learning budgets"
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Async-first with focus on deliverables"
  },
  {
    icon: Sparkles,
    title: "Cutting Edge Tech",
    description: "Modern stacks and innovative tools"
  },
  {
    icon: MapPin,
    title: "Global Network",
    description: "Connect with teams worldwide"
  }
];

export default function CareersPageClient() {
  const { themeName } = useTheme();
  const theme = THEMES[themeName];
  const formRef = useRef<HTMLFormElement>(null);

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [formError, setFormError] = useState<string | null>(null);

  // Track autofill state
  const [hasAutofill, setHasAutofill] = useState(false);

  // Check for autofill on mount
  useEffect(() => {
    const checkAutofill = () => {
      const inputs = formRef.current?.querySelectorAll('input');
      if (inputs) {
        const anyAutofilled = Array.from(inputs).some(input =>
          input.matches(':-webkit-autofill') ||
          input.matches(':autofill')
        );
        setHasAutofill(anyAutofilled);
      }
    };

    // Check after a delay to allow autofill to complete
    const timer = setTimeout(checkAutofill, 100);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault();
    setFormError(null);

    if (!resume) {
      setFormError("Please upload your resume (PDF only)");
      return;
    }

    if (!resume.type.includes("pdf")) {
      setFormError("Only PDF files are accepted");
      return;
    }

    if (loading) return;

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

      if (!res.ok) {
        throw new Error("Failed to submit application. Please try again.");
      }

      setSuccess(true);
      setResume(null);
      formElement.reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setFormError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 overflow-hidden bg-[var(--theme-background)] text-[var(--theme-text)]"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[var(--theme-accent-a)]/10 border border-[var(--theme-accent-a)]/30"
          >
            <div className="w-2 h-2 rounded-full pulse red bg-[var(--theme-accent-a)]" />
            <span
              className="text-xs font-bold uppercase tracking-wider font-satoshi text-[var(--theme-accent-a)]"
            >
              CAREERS • REMOTE ONLY
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-cabinet leading-[1.05] tracking-tighter mb-6 lg:mb-8">
              <span className="text-[var(--theme-text)]">Build The Future</span>
              <br />
              <span className="text-[var(--theme-accent-a)]">With Us</span>
            </h1>

            <p
              className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto px-4 leading-relaxed font-light text-[var(--theme-subtext)]"
            >
              Join a global team of innovators building digital experiences that matter.
              Remote-first, results-driven.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column: Benefits & Info */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32 lg:h-fit">
            {/* Benefits Grid */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold font-satoshi tracking-tight">Why Join Our Team?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <m.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="p-5 rounded-2xl border hover:border-primary/50 transition-all duration-300 bg-black/10 group border-[var(--theme-text)]/15"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 bg-[var(--theme-accent-a)]/15">
                        <benefit.icon size={20} className="text-[var(--theme-accent-a)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base mb-2">{benefit.title}</h4>
                        <p className="text-sm opacity-80 leading-relaxed text-[var(--theme-subtext)]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </m.div>
                ))}
              </div>
            </m.div>

            {/* Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 p-6 rounded-3xl border border-[var(--theme-accent-a)]/30 bg-gradient-to-br from-[var(--theme-accent-a)]/5 to-transparent"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-cabinet mb-2 text-[var(--theme-accent-a)]">50+</div>
                <div className="text-sm opacity-80 font-medium text-[var(--theme-subtext)]">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-cabinet mb-2 text-[var(--theme-accent-a)]">25+</div>
                <div className="text-sm opacity-80 font-medium text-[var(--theme-subtext)]">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-cabinet mb-2 text-[var(--theme-accent-a)]">100+</div>
                <div className="text-sm opacity-80 font-medium text-[var(--theme-subtext)]">Projects</div>
              </div>
            </m.div>

            {/* Process Steps */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest opacity-60 font-satoshi">Hiring Process</h4>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Application Review", desc: "We review within 48 hours" },
                  { step: "02", title: "Initial Interview", desc: "30-min culture alignment" },
                  { step: "03", title: "Technical Assessment", desc: "Role-relevant practical task" },
                  { step: "04", title: "Final Interview", desc: "Meet the team & discuss" },
                  { step: "05", title: "Offer", desc: "Welcome to the team!" }
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-4 items-start group">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 group-hover:scale-110 bg-[var(--theme-accent-a)]/15 text-[var(--theme-accent-a)] border border-[var(--theme-accent-a)]/30"
                    >
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <h5 className="text-base font-semibold mb-1.5">{item.title}</h5>
                      <p className="text-sm opacity-80 leading-relaxed text-[var(--theme-subtext)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </m.div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div
                className="relative rounded-3xl p-6 sm:p-8 lg:p-10 border bg-[var(--theme-card-bg)] border-[var(--theme-text)]/15 shadow-[0_20px_60px_rgba(var(--theme-text-rgb),0.08)]"
              >
                {success ? (
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 sm:py-20"
                  >
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-[var(--theme-accent-a)]/15"
                    >
                      <CheckCircle size={40} className="text-[var(--theme-accent-a)]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-satoshi mb-4">Application Submitted!</h3>
                    <p className="text-base sm:text-lg opacity-80 max-w-md mx-auto px-4 mb-8 text-[var(--theme-subtext)]">
                      Thank you for your interest. Our team will review your application and get back to you within 2 business days.
                    </p>
                    <div className="mt-8">
                      <AnimatedRotateButton
                        text="Apply for Another Role"
                        onClick={() => setSuccess(false)}
                        color={theme.buttonBg}
                        accent={theme.accents}
                      />
                    </div>
                  </m.div>
                ) : (
                  <>
                    <div className="mb-8 lg:mb-10">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-satoshi tracking-tight mb-3">Apply Now</h2>
                      <p className="text-base sm:text-lg opacity-80 text-[var(--theme-subtext)]">
                        Fill out the form below and upload your resume to start your journey with us.
                      </p>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6 lg:space-y-8"
                      autoComplete="on"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-3 font-satoshi">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="name"
                            placeholder="Enter your full name"
                            required
                            autoComplete="name"
                            className="form-input w-full h-14 text-base px-4 border-[var(--theme-text)]/20 bg-[var(--theme-background)]/80 text-[var(--theme-text)]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-3 font-satoshi">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                            autoComplete="email"
                            className="form-input w-full h-14 text-base px-4 border-[var(--theme-text)]/20 bg-[var(--theme-background)]/80 text-[var(--theme-text)]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-3 font-satoshi">
                          Phone Number
                        </label>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <CountryCodeSelect
                            value={countryCode}
                            onChange={setCountryCode}
                            theme={theme}
                          />
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Mobile number"
                            autoComplete="tel"
                            className="form-input flex-1 h-14 text-base px-4 border-[var(--theme-text)]/20 bg-[var(--theme-background)]/80 text-[var(--theme-text)]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-3 font-satoshi">
                          Role Applying For <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="position"
                          placeholder="e.g. Senior Frontend Engineer"
                          required
                          autoComplete="organization-title"
                          className="form-input w-full h-14 text-base px-4 border-[var(--theme-text)]/20 bg-[var(--theme-background)]/80 text-[var(--theme-text)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-3 font-satoshi">
                          Cover Letter / Message
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell us about your experience and why you're interested..."
                          rows={5}
                          autoComplete="off"
                          className="form-input w-full text-base px-4 py-4 resize-none border-[var(--theme-text)]/20 bg-[var(--theme-background)]/80 text-[var(--theme-text)] min-h-[120px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-4 font-satoshi">
                          Resume / CV (PDF only, max 5MB)
                        </label>

                        {!resume ? (
                          <label
                            className="flex flex-col items-center justify-center rounded-2xl p-8 sm:p-10 cursor-pointer border-2 border-dashed transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] group border-[var(--theme-text)]/30 bg-[var(--theme-background)]/40"
                          >
                            <div className="p-4 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 bg-[var(--theme-accent-a)]/15">
                              <UploadCloud size={24} className="text-[var(--theme-accent-a)]" />
                            </div>
                            <span className="text-base font-medium text-center mb-2 text-[var(--theme-text)]">
                              Click to upload resume
                            </span>
                            <span className="text-sm opacity-60 text-center text-[var(--theme-subtext)]">
                              PDF format • Max 5MB
                            </span>
                            <input
                              type="file"
                              accept=".pdf"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  if (file.type === "application/pdf" && file.size <= 5 * 1024 * 1024) {
                                    setResume(file);
                                    setFormError(null);
                                  } else if (file.size > 5 * 1024 * 1024) {
                                    setFormError("File size must be less than 5MB");
                                  } else {
                                    setFormError("Only PDF files are accepted");
                                  }
                                }
                              }}
                            />
                          </label>
                        ) : (
                          <m.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-between p-5 rounded-2xl border group hover:border-primary/50 transition-colors bg-[var(--theme-background)]/40 border-[var(--theme-text)]/20"
                          >
                            <div className="flex items-center gap-4 min-w-0">
                              <div className="p-3 rounded-xl bg-[var(--theme-accent-a)]/15">
                                <FileText size={20} className="text-[var(--theme-accent-a)]" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-base font-medium truncate text-[var(--theme-text)]">
                                  {resume.name}
                                </p>
                                <p className="text-sm text-[var(--theme-subtext)]">
                                  {(resume.size / 1024 / 1024).toFixed(2)} MB • PDF
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setResume(null)}
                              className="p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0 text-[var(--theme-subtext)]"
                            >
                              <X size={20} />
                            </button>
                          </m.div>
                        )}
                      </div>

                      {formError && (
                        <m.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-lg border text-sm font-medium text-center text-red-500 bg-red-500/10 border-red-500/30"
                        >
                          {formError}
                        </m.div>
                      )}

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={loading || !resume}
                          className="w-full h-14 rounded-xl font-bold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 bg-[var(--theme-accent-a)] text-[var(--theme-primary)]"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="animate-spin" size={20} />
                              Submitting...
                            </>
                          ) : (
                            'Submit Application'
                          )}
                        </button>
                        <p className="text-xs text-center mt-6 opacity-60 text-[var(--theme-subtext)]">
                          By submitting, you agree to our privacy policy and consent to contact.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </m.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          padding: 0 16px;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.2s ease;
          outline: none;
          font-family: inherit;
          height: 56px;
          border: 1px solid;
        }

        .form-input::placeholder {
          opacity: 0.5;
          font-size: 15px;
        }

        .form-input:focus {
          border-color: var(--theme-accent-a) !important;
          box-shadow: 0 0 0 3px var(--theme-accent-a-rgb) !important;
        }

        textarea.form-input {
          padding-top: 16px;
          padding-bottom: 16px;
          min-height: 120px;
          line-height: 1.6;
          height: auto;
        }

        :root {
          --focus-color: var(--theme-accent-a);
          --focus-shadow: var(--theme-accent-a-rgb);
        }
      `}</style>
    </section>
  );
}

function CountryCodeSelect({
  value,
  onChange,
  theme,
}: {
  value: string;
  onChange: (v: string) => void;
  theme: any;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedCountry = COUNTRY_CODES.find(c => c.code === value);
  const filtered = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.code.includes(query)
  );

  return (
    <div className="relative w-full sm:w-[150px] shrink-0" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="form-input flex items-center justify-between gap-3 px-4 hover:border-primary/50 transition-colors h-14 text-base border-[var(--theme-text)]/20 bg-[var(--theme-background)]/80 text-[var(--theme-text)]"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-lg">{selectedCountry?.flag || "🇮🇳"}</span>
          <span className="font-medium text-base truncate">{value}</span>
        </div>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''} opacity-50 shrink-0 text-[var(--theme-text)]`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-[calc(100%+8px)] z-50 w-full sm:w-[300px] rounded-xl border border-[var(--theme-text)]/20 bg-[var(--theme-background)] shadow-[0_20px_60px_rgba(var(--theme-text-rgb),0.15)] overflow-hidden"
          >
            <div className="p-4 border-b border-[var(--theme-text)]/15">
              <div className="flex items-center gap-3 px-3">
                <Search size={18} className="text-[var(--theme-subtext)]" />
                <input
                  autoFocus
                  placeholder="Search country..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent py-1 text-base outline-none placeholder:opacity-50 text-[var(--theme-text)]"
                />
              </div>
            </div>
            <div className="max-h-[280px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--theme-text-20)_transparent]">
              {filtered.length > 0 ? (
                filtered.map((c) => (
                  <button
                    key={`${c.code}-${c.name}`}
                    type="button"
                    onClick={() => {
                      onChange(c.code);
                      setOpen(false);
                      setQuery("");
                    }}
                    className="w-full px-5 py-4 flex items-center gap-4 text-base text-left hover:bg-white/5 transition-colors border-b last:border-b-0 text-[var(--theme-text)] border-[var(--theme-text)]/10"
                  >
                    <span className="text-xl">{c.flag}</span>
                    <span className="flex-1 truncate">{c.name}</span>
                    <span className="font-mono text-sm opacity-60">{c.code}</span>
                  </button>
                ))
              ) : (
                <div className="px-5 py-8 text-center">
                  <Search size={24} className="mx-auto mb-3 opacity-40 text-[var(--theme-subtext)]" />
                  <p className="text-sm opacity-60 text-[var(--theme-subtext)]">No countries found</p>
                </div>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
