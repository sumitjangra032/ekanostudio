export type ThemeName = keyof typeof THEMES;

export const THEMES = {
  fusionDark: {
    primary: "#ffffff",
    background: "#000000",
    
    gradient1: `
      radial-gradient(circle at 05% 50%, rgba(255, 60, 40, 0.85) 0%, rgba(0,0,0,0) 20%),
      radial-gradient(circle at 100% 50%, rgba(30, 120, 255, 0.85) 0%, rgba(0,0,0,0) 30%)
    `,
    gradient2: `
      radial-gradient(circle at 05% 50%, rgba(255, 60, 40, 0.85) 0%, rgba(0,0,0,0) 20%),
      radial-gradient(circle at 100% 50%, rgba(30, 120, 255, 0.85) 0%, rgba(0,0,0,0) 25%)
    `,
    gradient3: `
      radial-gradient(circle at 05% 50%, rgba(255, 60, 40, 0.85) 0%, rgba(0,0,0,0) 15%),
      radial-gradient(circle at 100% 50%, rgba(30, 120, 255, 0.85) 0%, rgba(0,0,0,0) 15%)
    `,
    gradient4: `
  radial-gradient(circle at 0% 40%, rgba(120, 200, 255, 0.3) 0%, rgba(0, 0, 0, 0) 30%),
  radial-gradient(circle at 100% 60%, rgba(255, 120, 120, 0.3) 0%, rgba(0, 0, 0, 0) 30%),
  linear-gradient(180deg, #000000, #000000)
`,


    cardBg: "rgba(255, 255, 255, 0.05)",
    text: "#FFFFFF",
    specialtext: "#FF7A45",
    subtext: "#A7A7A7",

    buttonBg: "#000000",
    new_custom_button_bg: "bg-primary-gradient",
    buttonBg2: "#0f3e6e",
    accents: {
      a: "#FF3C28",
      b: "#1E78FF",
    },
    animatedLine: {
      headingText: "#D6D1CB",
      targetWords: {
        a: "#FF3C28",
        b: "#E6C9A8",
      },
    }
  },
};


export const currentTheme = "fusionDark";
