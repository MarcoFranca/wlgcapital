"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ScrollCue } from "@/components/marketing/ScrollCue";
import { cn } from "@/lib/utils";

const container: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.08,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
};

export function Hero() {
    const router = useRouter();
    const reduce = useReducedMotion();

    return (
        <div className="relative isolate overflow-hidden bg-[#0B1420]">
            {/* Imagem arquitetônica */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/hero-house.png"
                    alt="croque de imóveis"
                    aria-hidden="true"
                    className={cn(
                        "absolute left-0 top-1/2 h-[92%] w-auto -translate-y-1/2",
                        "object-contain opacity-[0.65]",
                        "md:h-[105%] lg:h-[112%]"
                    )}
                />

                {/*<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,20,32,0.18),rgba(11,20,32,0.48)_38%,rgba(11,20,32,0.94)_74%)]" />*/}

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,20,32,0.30),rgba(11,20,32,0.82))]" />
            </div>
             {/*Fade de transição da sessão anterior*/}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 z-[1] h-32"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 45%, #0B1420 100%)",
                }}
            />
            {/* Glow dourado */}
            <motion.div
                aria-hidden
                className={cn(
                    "absolute inset-0 z-[1]",
                    "bg-[radial-gradient(70%_50%_at_50%_0%,rgba(212,175,55,0.25),rgba(212,175,55,0.035)_36%,transparent_72%)]"
                )}
                animate={
                    reduce ? {} : { opacity: [0.62, 0.9, 0.62], scale: [1, 1.018, 1] }
                }
                transition={
                    reduce
                        ? {}
                        : { duration: 16, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }
                }
            />

            {/* Textura/pontos */}
            <div
                aria-hidden
                className={cn(
                    "pointer-events-none absolute inset-0 z-[2] opacity-[0.028]",
                    "[background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)]",
                    "[background-size:14px_14px]"
                )}
            />

            <Section
                className={cn(
                    "relative z-10 flex min-h-[100svh] flex-col items-center justify-center pt-28",
                    "pb-[9.5rem]",
                    "max-[820px]:justify-start max-[820px]:pt-28 max-[820px]:pb-[8.5rem]"
                )}
            >
                <motion.div
                    className="mx-auto w-full max-w-3xl text-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div
                        variants={item}
                        className={cn(
                            "inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.28em] backdrop-blur",
                            "border border-[rgba(212,175,55,0.22)] bg-[#D4AF37]/[0.06] text-[#D4AF37]/90",
                            "shadow-[0_14px_40px_rgba(212,175,55,0.06)]"
                        )}
                    >
                        <span className="font-medium">WLG Capital</span>
                        <span aria-hidden>•</span>
                        <span>Consórcios inteligentes</span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className={cn(
                            "mt-10 text-balance font-heading font-medium tracking-[-0.045em] text-[#F5EFE3]",
                            "text-4xl leading-[0.98] md:text-5xl lg:text-6xl",
                            "max-[820px]:mt-8 max-[820px]:text-[2.35rem]"
                        )}
                    >
                        Planeje hoje.
                        <br />
                        <span className="text-[#D4AF37]">
              Conquiste com estratégia.
            </span>
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="premium-divider mx-auto mt-6 w-32"
                    />

                    <motion.p
                        variants={item}
                        className={cn(
                            "mx-auto mt-5 max-w-xl text-balance text-base leading-7 text-[#E7E0D1]/74 md:text-[1.05rem]",
                            "max-[820px]:text-[0.98rem] max-[820px]:leading-7"
                        )}
                    >
                        Consórcios inteligentes para comprar, investir ou construir
                        patrimônio com segurança, previsibilidade e orientação consultiva.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row max-[820px]:mt-7"
                    >
                        <motion.div
                            whileHover={reduce ? {} : { y: -2 }}
                            whileTap={reduce ? {} : { scale: 0.98 }}
                            className="inline-flex"
                        >
                            <Button
                                size="default"
                                onClick={() => router.push("#diagnostico")}
                                className={cn(
                                    "h-11 rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#0B1420]",
                                    "hover:bg-[#C69A2F]",
                                    "shadow-[0_14px_40px_rgba(212,175,55,0.16)]"
                                )}
                            >
                                Falar com um consultor
                            </Button>
                        </motion.div>

                        <motion.div
                            whileTap={reduce ? {} : { scale: 0.98 }}
                            className="inline-flex"
                        >
                            <Button
                                size="default"
                                variant="outline"
                                onClick={() => router.push("#como-funciona")}
                                className={cn(
                                    "h-11 rounded-full border-[rgba(212,175,55,0.26)] bg-white/[0.03] px-6 text-sm font-semibold text-[#E7E0D1]/88",
                                    "hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 hover:text-[#F5EFE3]"
                                )}
                            >
                                Entender como funciona
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        variants={item}
                        className={cn(
                            "mx-auto mt-5 inline-flex max-w-full items-center justify-center rounded-full px-4 py-1.5 text-center text-[9.5px] uppercase tracking-[0.22em]",
                            "border border-[rgba(212,175,55,0.16)] bg-[#0B1420]/35 text-[#D4AF37]/76 backdrop-blur"
                        )}
                    >
                        Atendimento consultivo pelo WhatsApp.
                    </motion.p>

                </motion.div>

                <ScrollCue
                    targetId="como-funciona"
                    className={cn("bottom-6 text-[#D4AF37]", "max-[820px]:bottom-4")}
                />
            </Section>
        </div>
    );
}