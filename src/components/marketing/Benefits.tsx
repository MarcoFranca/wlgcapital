"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "./Section";
import { HandCoins, ShieldCheck, LineChart, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
    {
        icon: Landmark,
        title: "Estratégia patrimonial",
        text: "Planejamos o consórcio como uma ferramenta para aquisição, investimento e construção de patrimônio no longo prazo.",
    },
    {
        icon: HandCoins,
        title: "Compra sem juros bancários",
        text: "Você substitui financiamento tradicional por disciplina, organização financeira e uma estratégia adequada ao seu objetivo.",
    },
    {
        icon: LineChart,
        title: "Clareza para decidir",
        text: "Antes de contratar, analisamos valor de carta, capacidade mensal, prazo, perfil de lance e cenário de contemplação.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança e transparência",
        text: "Trabalhamos com administradoras autorizadas e comunicação responsável, sem promessa de contemplação garantida.",
    },
];

const container: Variants = {
    hidden: { opacity: 0, y: 20 },
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
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

export function Benefits() {
    return (
        <Section
            id="como-funciona"
            aria-labelledby="benefits-title"
            className="relative isolate overflow-hidden border-y border-[rgba(212,175,55,0.12)] bg-[#0B1420]"
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
                className="pointer-events-none absolute inset-x-0 -top-32 z-0 h-56 bg-[linear-gradient(to_bottom,rgba(11,20,32,0),rgba(11,20,32,0.82)_46%,#0B1420_100%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(62%_50%_at_50%_0%,rgba(212,175,55,0.08),transparent_68%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <motion.div
                className="relative z-10 mx-auto mb-12 max-w-2xl text-center"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.35, margin: "-80px"}}
            >
                <motion.p
                    variants={item}
                    className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]/86"
                >
                    Método WLG Capital
                </motion.p>

                <motion.h2
                    id="benefits-title"
                    variants={item}
                    className={cn(
                        "mt-4 text-balance font-heading font-medium tracking-[-0.035em] text-[#F5EFE3]",
                        "text-3xl leading-tight md:text-4xl"
                    )}
                >
                    Consórcio com estratégia,
                    <br className="hidden sm:block"/> não com improviso.
                </motion.h2>

                <motion.div
                    variants={item}
                    className="premium-divider mx-auto mt-5 w-28"
                />

                <motion.p
                    variants={item}
                    className="mx-auto mt-5 max-w-xl text-balance text-base leading-7 text-[#E7E0D1]/68 md:text-[1.03rem]"
                >
                    Uma abordagem consultiva para transformar objetivo, prazo e capacidade
                    financeira em um plano claro de aquisição patrimonial.
                </motion.p>
            </motion.div>

            <motion.div
                className="relative z-10 mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.2, margin: "-60px"}}
                role="list"
            >
                {items.map((it) => (
                    <motion.div
                        key={it.title}
                        variants={item}
                        role="listitem"
                        className="relative"
                    >
                        <Card
                            className={cn(
                                "group relative h-full overflow-hidden rounded-2xl",
                                "border border-[rgba(212,175,55,0.16)]",
                                "bg-[linear-gradient(180deg,rgba(17,28,42,0.78),rgba(11,20,32,0.92))]",
                                "shadow-[0_20px_70px_rgba(0,0,0,0.18)]",
                                "transition-all duration-300",
                                "hover:-translate-y-1 hover:border-[rgba(212,175,55,0.34)] hover:shadow-[0_24px_80px_rgba(212,175,55,0.08)]"
                            )}
                        >
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />

                            <CardHeader className="pb-3">
                                <div
                                    className={cn(
                                        "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl",
                                        "border border-[rgba(212,175,55,0.24)] bg-[#D4AF37]/[0.08]",
                                        "text-[#D4AF37]"
                                    )}
                                >
                                    <it.icon className="h-5 w-5"/>
                                </div>

                                <CardTitle className="text-base font-semibold leading-snug text-[#F5EFE3]">
                                    {it.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm leading-relaxed text-[#E7E0D1]/62">
                                    {it.text}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            {/* Fade de transição da sessão anterior */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-16 z-[1] h-32"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 45%, #0B1420 100%)",
                }}
            />
        </Section>
    );
}