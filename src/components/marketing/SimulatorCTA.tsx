"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Car, Home, MessageCircle, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function SimulatorCTA() {
    const reduce = useReducedMotion();
    const router = useRouter();

    const box: Variants = {
        hidden: { opacity: 0, y: 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduce ? 0 : 0.55,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: reduce ? 0 : 0.06,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduce ? 0 : 0.45,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const waHref = useMemo(() => {
        const phone = process.env.NEXT_PUBLIC_WA_PHONE ?? "5521969639576";
        const wa = new URL(`https://wa.me/${phone}`);
        wa.searchParams.set(
            "text",
            "Olá! Vim pelo site da WLG Capital e gostaria de simular uma estratégia de consórcio."
        );
        wa.searchParams.set("utm_source", "lp_home");
        wa.searchParams.set("utm_medium", "cta_simulador");
        return wa.toString();
    }, []);

    return (
        <Section
            id="simular"
            aria-labelledby="simulador-title"
            className="relative isolate overflow-hidden border-y border-[rgba(212,175,55,0.12)] bg-[#0B1420] py-24 md:py-28"
        >

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(70%_70%_at_50%_20%,rgba(212,175,55,0.08),transparent_68%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.032] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute -left-24 top-10 z-0 h-80 w-80 rounded-full bg-[#D4AF37]/[0.035] blur-3xl"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 bottom-10 z-0 h-80 w-80 rounded-full bg-[#E7E0D1]/[0.035] blur-3xl"
            />

            <motion.div
                variants={box}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px", amount: 0.35 }}
                className="relative z-10 mx-auto max-w-5xl"
            >
                <div
                    className={cn(
                        "relative overflow-hidden rounded-[2rem] p-7 backdrop-blur-md md:p-10",
                        "border border-[rgba(212,175,55,0.18)]",
                        "bg-[linear-gradient(135deg,rgba(17,28,42,0.88),rgba(11,20,32,0.96))]",
                        "shadow-[0_28px_90px_rgba(0,0,0,0.24)]"
                    )}
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/55 to-transparent"
                    />

                    <div
                        aria-hidden
                        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_58%)]"
                    />

                    <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                        <motion.div variants={item} className="text-center md:text-left">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.22)] bg-[#D4AF37]/[0.06] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#D4AF37]/88">
                                <Sparkles className="h-3.5 w-3.5" />
                                Simulação consultiva
                            </div>

                            <h3
                                id="simulador-title"
                                className="font-heading text-3xl font-medium leading-tight tracking-[-0.035em] text-[#F5EFE3] md:text-4xl"
                            >
                                Transforme intenção em plano.
                            </h3>

                            <p className="mt-4 max-w-xl text-base leading-7 text-[#E7E0D1]/68 md:text-[1.03rem]">
                                Entenda qual estratégia faz sentido para seu momento: imóvel,
                                automóvel, investimento ou planejamento patrimonial.
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-[#E7E0D1]/48">
                                A análise considera objetivo, capacidade mensal, prazo desejado
                                e perfil de contemplação, sem prometer resultado garantido.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="rounded-3xl border border-[rgba(212,175,55,0.14)] bg-[#0B1420]/46 p-4"
                        >
                            <div className="grid gap-3">
                                <Button
                                    size="lg"
                                    onClick={() => router.push("#diagnostico")}
                                    className={cn(
                                        "h-12 justify-start rounded-2xl bg-[#D4AF37] px-5 text-sm font-semibold text-[#0B1420]",
                                        "hover:bg-[#C69A2F]",
                                        "shadow-[0_14px_40px_rgba(212,175,55,0.14)]"
                                    )}
                                >
                                    <Home className="mr-3 h-5 w-5" />
                                    Simular consórcio imobiliário
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => router.push("#diagnostico")}
                                    className={cn(
                                        "h-12 justify-start rounded-2xl border-[rgba(212,175,55,0.24)] bg-white/[0.03] px-5 text-sm font-semibold text-[#E7E0D1]/88",
                                        "hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 hover:text-[#F5EFE3]"
                                    )}
                                >
                                    <Car className="mr-3 h-5 w-5" />
                                    Simular consórcio automotivo
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className={cn(
                                        "h-12 justify-start rounded-2xl border border-[rgba(231,224,209,0.12)] bg-[#E7E0D1]/[0.08] px-5 text-sm font-semibold text-[#F5EFE3]",
                                        "hover:bg-[#E7E0D1]/[0.12]"
                                    )}
                                >
                                    <Link href={waHref} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="mr-3 h-5 w-5" />
                                        Falar direto pelo WhatsApp
                                    </Link>
                                </Button>
                            </div>

                            <p className="mt-4 text-xs leading-5 text-[#E7E0D1]/42">
                                Atendimento consultivo. Administradoras autorizadas. LGPD e
                                transparência em todas as etapas.
                            </p>
                        </motion.div>
                    </div>
                </div>
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