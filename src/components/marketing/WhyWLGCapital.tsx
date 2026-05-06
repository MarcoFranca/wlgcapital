"use client";

import { motion, type Variants } from "framer-motion";
import { Section } from "./Section";
import {
    CheckCircle2,
    ShieldCheck,
    LineChart,
    MessagesSquare,
    ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const points = [
    {
        icon: MessagesSquare,
        title: "Consultoria personalizada",
        text: "Não vendemos tabela. Entendemos seu objetivo, perfil e momento financeiro para definir uma estratégia coerente.",
    },
    {
        icon: LineChart,
        title: "Previsão responsável",
        text: "Analisamos cenários, histórico e sazonalidade para orientar sua decisão sem prometer contemplação garantida.",
    },
    {
        icon: ClipboardCheck,
        title: "Acompanhamento estratégico",
        text: "Você recebe orientação sobre assembleias, janelas de lance, revisão de plano e uso da carta contemplada.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança e transparência",
        text: "Trabalhamos com administradoras autorizadas e comunicação responsável, com clareza em todas as etapas.",
    },
];

const steps = [
    "Diagnóstico consultivo: objetivo, prazo, perfil e capacidade de aporte.",
    "Estratégia: tipo de lance, janelas de assembleia e simulação de cenários.",
    "Acompanhamento: alertas, revisão e orientação no uso da carta.",
];

const container: Variants = {
    hidden: { opacity: 0, y: 16 },
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
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
};

export function WhyWLGCapital() {
    return (
        <Section
            aria-labelledby="why-title"
            className="relative isolate overflow-hidden border-y border-[rgba(212,175,55,0.12)] bg-[#0B1420] py-24 md:py-28"
        >
            {/* Transição superior com profundidade */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-24 z-[1] h-32"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 45%, #0B1420 100%)",
                }}
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(212,175,55,0.08),transparent_68%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.032] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute -left-28 top-1/4 z-0 h-96 w-96 rounded-full bg-[#D4AF37]/[0.035] blur-3xl"
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 mx-auto max-w-3xl text-center"
            >
                <motion.p
                    variants={item}
                    className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]/86"
                >
                    Por que WLG Capital
                </motion.p>

                <motion.h2
                    id="why-title"
                    variants={item}
                    className={cn(
                        "mt-4 text-balance font-heading font-medium tracking-[-0.035em] text-[#F5EFE3]",
                        "text-3xl leading-tight md:text-4xl"
                    )}
                >
                    Mais que consórcio,
                    <br className="hidden sm:block" /> uma estratégia de vida.
                </motion.h2>

                <motion.div
                    variants={item}
                    aria-hidden
                    className="premium-divider mx-auto mt-5 w-28"
                />

                <motion.p
                    variants={item}
                    className="mx-auto mt-5 max-w-xl text-balance text-base leading-7 text-[#E7E0D1]/68 md:text-[1.03rem]"
                >
                    Alavancagem patrimonial com método, previsibilidade e acompanhamento
                    humano em cada decisão.
                </motion.p>
            </motion.div>

            <motion.ul
                className="relative z-10 mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                role="list"
            >
                {points.map((p) => (
                    <motion.li
                        key={p.title}
                        variants={item}
                        role="listitem"
                        className={cn(
                            "group rounded-2xl border border-[rgba(212,175,55,0.15)] p-5",
                            "bg-[linear-gradient(180deg,rgba(17,28,42,0.76),rgba(11,20,32,0.92))]",
                            "shadow-[0_22px_70px_rgba(0,0,0,0.18)]",
                            "transition-all duration-300",
                            "hover:-translate-y-1 hover:border-[rgba(212,175,55,0.34)] hover:shadow-[0_26px_80px_rgba(212,175,55,0.08)]"
                        )}
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className={cn(
                                    "mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                                    "border border-[rgba(212,175,55,0.24)] bg-[#D4AF37]/[0.08]",
                                    "text-[#D4AF37]"
                                )}
                            >
                                <p.icon className="h-5 w-5" aria-hidden />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-[#F5EFE3]">
                                    {p.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-[#E7E0D1]/62">
                                    {p.text}
                                </p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.ol
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className={cn(
                    "relative z-10 mx-auto mt-12 grid max-w-5xl list-none gap-3",
                    "text-sm text-[#E7E0D1]/74 md:grid-cols-3"
                )}
                aria-label="Como funciona"
            >
                {steps.map((step, index) => (
                    <motion.li
                        key={step}
                        variants={item}
                        className="rounded-2xl border border-[rgba(212,175,55,0.13)] bg-[#0B1420]/44 p-4"
                    >
                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                                aria-hidden
                            />
                            <span>
                <strong className="text-[#F5EFE3]">{index + 1}) </strong>
                                {step}
              </span>
                        </div>
                    </motion.li>
                ))}
            </motion.ol>

            <motion.p
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-[11px] leading-relaxed text-[#E7E0D1]/36"
            >
                Estimativas de contemplação são projeções baseadas em histórico e
                sazonalidade. Não há garantia de contemplação.
            </motion.p>

            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-24 z-[1] h-32"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.52) 45%, #0B1420 100%)",
                }}
            />
        </Section>
    );
}