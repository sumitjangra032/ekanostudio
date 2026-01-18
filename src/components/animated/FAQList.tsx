"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function FAQList({ faqData, theme }: { faqData: any[], theme: any }) {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <ScrollArea className="h-[600px]">
            <div className="divide-y divide-white/10">
                {faqData.map((item, index) => {
                    const isOpen = openItems.includes(index);
                    return (
                        <FAQItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={isOpen}
                            toggleItem={toggleItem}
                            theme={theme}
                        />
                    );
                })}
            </div>
        </ScrollArea>
    );
}

function FAQItem({
    item,
    index,
    isOpen,
    toggleItem,
    theme,
}: {
    item: any;
    index: number;
    isOpen: boolean;
    toggleItem: (i: number) => void;
    theme: any;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const showAnswer = isOpen || isHovered;

    return (
        <m.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-8 py-6 transition-all"
            whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
            <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-start gap-6 text-left"
                aria-expanded={showAnswer}
            >
                <span
                    className="text-[17px] font-medium leading-relaxed"
                    style={{ color: "var(--theme-text)" }}
                >
                    {item.q}
                </span>

                <m.div
                    animate={{ rotate: showAnswer ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mt-1 flex-shrink-0"
                >
                    {showAnswer ? (
                        <X size={18} style={{ color: "var(--theme-accent-a)" }} />
                    ) : (
                        <Plus size={18} style={{ color: "var(--theme-accent-a)" }} />
                    )}
                </m.div>
            </button>

            <AnimatePresence initial={false}>
                {showAnswer && (
                    <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <p
                            className="mt-4 pr-4 text-[15px] leading-relaxed"
                            style={{ color: "var(--theme-subtext)" }}
                        >
                            {item.a}
                        </p>
                    </m.div>
                )}
            </AnimatePresence>
        </m.div>
    );
}
