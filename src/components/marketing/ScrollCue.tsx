"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollCue({
                              targetId = "como-funciona",
                              className,
                          }: {
    targetId?: string;
    className?: string;
}) {
    const reduce = useReducedMotion();

    function go() {
        const el = document.getElementById(targetId);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <button
            type="button"
            onClick={go}
            aria-label="Rolar para ver mais"
            className={cn(
                "group absolute bottom-4 left-1/2 z-20 -translate-x-1/2",
                "inline-flex h-20 w-16 flex-col items-center justify-center",
                "select-none rounded-2xl px-2 py-2 touch-manipulation cursor-pointer",
                "border border-[rgba(212,175,55,0.18)] bg-[#0B1420]/42 text-[#E7E0D1]/70 backdrop-blur-md",
                "shadow-[0_18px_60px_rgba(0,0,0,0.22)]",
                "transition-all duration-300",
                "hover:border-[rgba(212,175,55,0.42)] hover:bg-[#D4AF37]/[0.06] hover:text-[#F5EFE3]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/70",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1420]",
                className
            )}
        >
            <motion.span
                aria-hidden
                className={cn(
                    "pointer-events-none mb-1 block h-6 w-4 rounded-full border",
                    "border-[#E7E0D1]/24 transition-colors",
                    "group-hover:border-[#D4AF37]/70"
                )}
                animate={reduce ? {} : { opacity: [0.65, 1, 0.65] }}
                transition={reduce ? {} : { duration: 2.4, repeat: Infinity }}
            >
                <motion.span
                    className={cn(
                        "pointer-events-none mx-auto mt-1 block h-1.5 w-1.5 rounded-full",
                        "bg-[#E7E0D1]/62 transition-colors",
                        "group-hover:bg-[#D4AF37]"
                    )}
                    animate={reduce ? {} : { y: [0, 6, 0], opacity: [1, 0.55, 1] }}
                    transition={
                        reduce
                            ? {}
                            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                    }
                />
            </motion.span>

            <motion.div
                aria-hidden
                className="pointer-events-none flex items-center justify-center"
                animate={reduce ? {} : { y: [0, 4, 0] }}
                transition={
                    reduce
                        ? {}
                        : {
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2,
                        }
                }
            >
                <ChevronDown className="h-5 w-5 opacity-80 transition-all group-hover:text-[#D4AF37] group-hover:opacity-100" />
            </motion.div>
        </button>
    );
}