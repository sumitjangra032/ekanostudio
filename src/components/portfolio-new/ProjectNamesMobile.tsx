"use client";

export default function ProjectNamesMobile() {
  const names = [
    'Web Development',
    'Content Creation',
    'SEO Optimization',
    'Branding',
    'Digital Marketing',
    'E-mail Automation',
    'Consulting',
    'Technology & Cloud',
    'SMM',
    'App Development',
    'AI Automation'
  ];

  return (
    <div
      className="project-names-mobile fixed left-3 top-[78%] -translate-y-1/2 z-[150] flex flex-col gap-3 max-w-[150px] pointer-events-none"
    >
      {names.map((name, i) => (
        <div
          key={i}
          className="name-mobile relative flex items-center gap-2 transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] pointer-events-auto"
          data-index={i}
        >
          <div
            className="dot-mobile w-1.5 h-1.5 bg-white/30 rounded-full shrink-0 transition-all duration-400 opacity-100"
          ></div>
          <p
            className="project-name-text text-[10px] uppercase tracking-[0.05em] m-0 transition-all duration-400 font-medium leading-[1.3] whitespace-nowrap text-[var(--theme-text)] opacity-60"
          >
            {name}
          </p>
        </div>
      ))}
    </div>
  );
}
