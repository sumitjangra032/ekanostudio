"use client";

import { m } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { FolderGit2 } from "lucide-react";

interface ProjectScrollerProps {
    projects: { title: string; description: string }[];
}

export default function ProjectScroller({ projects }: ProjectScrollerProps) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];

    // duplicate list for infinite scroll
    const list = [...projects, ...projects, ...projects];

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[var(--theme-card-bg)] to-transparent"
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[var(--theme-card-bg)] to-transparent"
            />
            <m.div
                className="flex gap-3 w-max"
                animate={{ x: [0, "-33.3333%"] }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >

                {list.map((project, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[240px] group flex flex-col justify-between p-4 rounded-lg border transition-colors cursor-pointer bg-[var(--theme-text)]/5 border-[var(--theme-text)]/[0.07]"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-1">
                                <FolderGit2 size={16} className="text-[var(--theme-accent-b)]" />
                                <p className="font-semibold leading-none text-sm text-[var(--theme-text)]">
                                    {project.title}
                                </p>
                            </div>
                            <p className="text-xs line-clamp-2 text-[var(--theme-subtext)]">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </m.div>
        </div>
    );
}
