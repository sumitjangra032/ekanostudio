"use client";

import { useState } from "react";
import { SERVICES_CONTENT } from "@/constants/services";
import { useTheme } from "../providers/ThemeProvider";
import { THEMES } from "@/constants/theme";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ServiceSelectorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ServiceSelector({ value, onChange }: ServiceSelectorProps) {
    const { themeName } = useTheme();
    const theme = THEMES[themeName];
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    const activeCategory = SERVICES_CONTENT.categories[activeCategoryIndex];

    return (
        <div
            className="flex flex-col md:flex-row h-[450px] w-full rounded-xl border mt-2 overflow-hidden"
            style={{
                background: theme.background,
                borderColor: theme.text + "15",
            }}
        >
            {/* LEFT SIDEBAR: CATEGORIES */}
            <ScrollArea
                className="w-full md:w-[200px] flex-shrink-0 border-r"
                style={{ borderColor: theme.text + "10", background: theme.cardBg + "50" }}
            >
                <div className="flex flex-col gap-1 p-2">
                    {SERVICES_CONTENT.categories.map((cat, i) => {
                        const isActive = i === activeCategoryIndex;
                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveCategoryIndex(i)}
                                onClick={() => setActiveCategoryIndex(i)}
                                className={cn(
                                    "cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-between group",
                                )}
                                style={{
                                    background: isActive ? theme.primary + "15" : "transparent",
                                    color: isActive ? theme.primary : theme.text,
                                }}
                            >
                                <span>{cat.name}</span>
                                {isActive && (
                                    <div
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: theme.primary }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </ScrollArea>

            {/* RIGHT CONTENT: SERVICES */}
            <ScrollArea className="flex-1">
                <div className="p-4">
                    <div
                        className="mb-4 flex items-center gap-2 sticky top-0 z-10 py-2 -mt-2 backdrop-blur-md"
                        style={{ background: theme.background + "99" }}
                    >
                        <activeCategory.icon size={18} style={{ color: theme.primary }} />
                        <h3 className="font-semibold text-sm" style={{ color: theme.text }}>{activeCategory.name}</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {activeCategory.items.map((item, idx) => {
                            const Icon = item.icon;
                            const isSelected = item.slug === value;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => onChange(item.slug)}
                                    className="cursor-pointer group flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 hover:border-primary/30 hover:bg-muted/50"
                                    style={{
                                        borderColor: isSelected ? theme.primary : (theme.text + "15"),
                                        background: isSelected ? theme.primary + "08" : theme.cardBg,
                                    }}
                                >
                                    <div
                                        className="p-2 rounded-md shrink-0 transition-colors"
                                        style={{
                                            background: isSelected ? theme.primary : theme.primary + "10",
                                            color: isSelected ? "#fff" : theme.primary,
                                        }}
                                    >
                                        <Icon size={16} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <h4
                                                className="text-sm font-medium mb-0.5 truncate pr-2"
                                                style={{ color: theme.text }}
                                            >
                                                {item.title}
                                            </h4>
                                            {isSelected && <Check size={14} className="text-primary mt-1" />}
                                        </div>
                                        <p
                                            className="text-xs line-clamp-2 leading-relaxed opacity-70"
                                            style={{ color: theme.subtext }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
