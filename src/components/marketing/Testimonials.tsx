"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const depoimentos = [
    {
        name: "Thiago R.",
        text: "Consegui estruturar minha compra com uma estratégia clara. Tudo foi explicado com base no histórico do grupo, sem promessa, apenas método.",
    },
    {
        name: "Larissa M.",
        text: "Sempre tive receio de consórcio, mas o atendimento consultivo me mostrou como usar essa modalidade para construir patrimônio com mais previsibilidade.",
    },
    {
        name: "Eduardo V.",
        text: "Entendi cada etapa, cada assembleia e cada decisão de lance. Hoje recomendo a WLG Capital para quem quer investir com segurança.",
    },
];

const container: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.1,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
};

export function Testimonials() {
    return (
        <Section
            id="depoimentos"
            aria-labelledby="testimonials-title"
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
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(72%_62%_at_50%_0%,rgba(212,175,55,0.08),transparent_70%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.032] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 mx-auto mb-12 max-w-2xl text-center"
            >
                <motion.p
                    variants={item}
                    className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]/86"
                >
                    Clientes WLG Capital
                </motion.p>

                <motion.h2
                    variants={item}
                    id="testimonials-title"
                    className={cn(
                        "mt-4 text-balance font-heading font-medium tracking-[-0.035em] text-[#F5EFE3]",
                        "text-3xl leading-tight md:text-4xl"
                    )}
                >
                    Histórias de quem decidiu
                    <br className="hidden sm:block" /> com estratégia.
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
                    Relatos de clientes que transformaram planejamento em decisão, com
                    clareza, método e acompanhamento consultivo.
                </motion.p>
            </motion.div>

            <motion.div
                className="relative z-10 mx-auto grid max-w-6xl gap-4 md:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                role="list"
            >
                {depoimentos.map((d) => (
                    <motion.div
                        key={d.name}
                        variants={item}
                        role="listitem"
                        className="group relative"
                    >
                        <div
                            aria-hidden
                            className="absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                            style={{
                                background:
                                    "radial-gradient(70% 70% at 50% 0%, rgba(212,175,55,0.12), transparent 80%)",
                            }}
                        />

                        <Card
                            className={cn(
                                "relative h-full overflow-hidden rounded-2xl",
                                "border border-[rgba(212,175,55,0.15)]",
                                "bg-[linear-gradient(180deg,rgba(17,28,42,0.78),rgba(11,20,32,0.94))]",
                                "shadow-[0_22px_70px_rgba(0,0,0,0.18)]",
                                "transition-all duration-300",
                                "hover:-translate-y-1 hover:border-[rgba(212,175,55,0.34)] hover:shadow-[0_26px_80px_rgba(212,175,55,0.08)]"
                            )}
                        >
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />

                            <CardContent className="relative px-6 pb-6 pt-8">
                                <Quote
                                    className="absolute left-5 top-5 h-5 w-5 text-[#D4AF37]/58"
                                    aria-hidden
                                />

                                <p className="mt-6 text-base leading-relaxed text-[#E7E0D1]/82">
                                    “{d.text}”
                                </p>

                                <p className="mt-5 text-sm font-medium text-[#D4AF37]/86">
                                    {d.name}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <motion.p
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="relative z-10 mx-auto mt-10 max-w-3xl text-center text-[11px] leading-relaxed text-[#E7E0D1]/36"
            >
                Depoimentos refletem experiências individuais. Resultados podem variar
                conforme grupo, assembleia, estratégia e disponibilidade financeira. Não
                há promessa de contemplação.
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