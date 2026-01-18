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
                className="absolute left-0 top-0 bottom-0 w-8 z-10"
                style={{
                    background: `linear-gradient(to right, ${theme.cardBg}, transparent)`,
                }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-8 z-10"
                style={{
                    background: `linear-gradient(to left, ${theme.cardBg}, transparent)`,
                }}
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
                        className="flex-shrink-0 w-[240px] group flex flex-col justify-between p-4 rounded-lg border transition-colors cursor-pointer"
                        style={{
                            background: `${theme.text}05`, // subtle background
                            borderColor: `${theme.text}11`,
                        }}
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-1">
                                <FolderGit2 size={16} style={{ color: theme.accents.b }} />
                                <p className="font-semibold leading-none text-sm" style={{ color: theme.text }}>
                                    {project.title}
                                </p>
                            </div>
                            <p className="text-xs line-clamp-2" style={{ color: theme.subtext }}>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </m.div>
        </div>
    );
}
