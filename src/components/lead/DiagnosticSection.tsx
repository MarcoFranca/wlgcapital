"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { cn } from "@/lib/utils";

type Props = {
    title?: string;
    subtitle?: string;
    waPhone?: string;
    showAside?: boolean;
};

const asideItems = [
    "Simulação comparativa e estratégia de lance",
    "Janelas de assembleia e previsão responsável",
    "Diagnóstico consultivo por WhatsApp",
];

export function DiagnosticSection({
                                      title = "Quer saber qual estratégia combina com você?",
                                      subtitle = "Receba uma análise consultiva pelo WhatsApp e entenda como usar o consórcio com planejamento, segurança e previsibilidade.",
                                      waPhone = process.env.NEXT_PUBLIC_WA_PHONE ?? "5521969639576",
                                      showAside = true,
                                  }: Props) {
    const [ok, setOk] = useState(false);

    const container: Variants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 16 },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.06,
                },
            },
        }),
        []
    );

    const item: Variants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 10 },
            show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            },
        }),
        []
    );

    const waHref = useMemo(() => {
        const wa = new URL(`https://wa.me/${waPhone}`);
        wa.searchParams.set(
            "text",
            "Olá! Preenchi o diagnóstico no site da WLG Capital e quero avançar com meu plano de consórcio."
        );
        wa.searchParams.set("utm_source", "lp_home");
        wa.searchParams.set("utm_medium", "cta_diagnostic_success");
        return wa.toString();
    }, [waPhone]);

    return (
        <Section
            id="diagnostico"
            aria-labelledby="diagnostico-title"
            className="relative isolate overflow-hidden border-y border-[rgba(212,175,55,0.12)] bg-[#0B1420] py-24 md:py-28"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-24 z-[1] h-32"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.52) 45%, #0B1420 100%)",
                }}
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(72%_64%_at_50%_14%,rgba(212,175,55,0.08),transparent_70%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.032] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <motion.div
                className="relative z-10 mx-auto mb-10 max-w-2xl text-center"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
            >
                <motion.p
                    variants={item}
                    className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]/86"
                >
                    Diagnóstico consultivo
                </motion.p>

                <motion.h2
                    id="diagnostico-title"
                    variants={item}
                    className={cn(
                        "mt-4 text-balance font-heading font-medium tracking-[-0.035em] text-[#F5EFE3]",
                        "text-3xl leading-tight md:text-4xl"
                    )}
                >
                    {title}
                </motion.h2>

                <motion.p
                    variants={item}
                    className="mx-auto mt-5 max-w-xl text-balance text-base leading-7 text-[#E7E0D1]/68 md:text-[1.03rem]"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    variants={item}
                    aria-hidden
                    className="premium-divider mx-auto mt-5 w-28"
                />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={cn(
                    "relative z-10 mx-auto grid max-w-5xl gap-6",
                    showAside ? "md:grid-cols-[1fr_0.88fr]" : "md:grid-cols-1"
                )}
            >
                {!ok ? (
                    <motion.div
                        variants={item}
                        className={cn(
                            "rounded-[2rem] p-6 backdrop-blur-md md:p-8",
                            "border border-[rgba(212,175,55,0.18)]",
                            "bg-[linear-gradient(135deg,rgba(17,28,42,0.84),rgba(11,20,32,0.96))]",
                            "shadow-[0_28px_90px_rgba(0,0,0,0.24)]"
                        )}
                    >
                        <LeadForm hash="wlg-capital" onSuccess={() => setOk(true)} />
                    </motion.div>
                ) : (
                    <motion.div
                        variants={item}
                        className={cn(
                            "flex flex-col items-center justify-center gap-4 rounded-[2rem] p-8 text-center backdrop-blur-md",
                            "border border-[rgba(212,175,55,0.18)]",
                            "bg-[linear-gradient(135deg,rgba(17,28,42,0.84),rgba(11,20,32,0.96))]",
                            "shadow-[0_28px_90px_rgba(0,0,0,0.24)]"
                        )}
                    >
                        <CheckCircle2 className="h-10 w-10 text-[#D4AF37]" aria-hidden />

                        <h3 className="font-heading text-2xl font-medium text-[#F5EFE3]">
                            Diagnóstico recebido
                        </h3>

                        <p className="max-w-md text-sm leading-6 text-[#E7E0D1]/68">
                            Em instantes um especialista entrará em contato. Se preferir,
                            você pode adiantar a conversa pelo WhatsApp.
                        </p>

                        <Button
                            asChild
                            size="lg"
                            className={cn(
                                "h-11 rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#0B1420]",
                                "hover:bg-[#C69A2F]",
                                "shadow-[0_14px_40px_rgba(212,175,55,0.16)]"
                            )}
                        >
                            <Link href={waHref} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Falar agora no WhatsApp
                            </Link>
                        </Button>

                        <p className="text-[11px] text-[#E7E0D1]/38">
                            LGPD e transparência em todas as etapas.
                        </p>
                    </motion.div>
                )}

                {showAside && (
                    <motion.aside
                        variants={item}
                        className={cn(
                            "rounded-[2rem] p-6 backdrop-blur-sm",
                            "border border-[rgba(212,175,55,0.16)]",
                            "bg-[#0B1420]/46",
                            "shadow-[0_22px_70px_rgba(0,0,0,0.18)]"
                        )}
                    >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]/82">
                            O que você recebe
                        </p>

                        <h4 className="mt-4 font-heading text-2xl font-medium tracking-[-0.03em] text-[#F5EFE3]">
                            Uma análise para decidir com clareza.
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-[#E7E0D1]/60">
                            O objetivo é transformar suas informações em um plano inicial:
                            carta, prazo, aporte mensal e possibilidades de estratégia.
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-[#E7E0D1]/72">
                            {asideItems.map((text) => (
                                <li key={text} className="flex items-start gap-3">
                                    <CheckCircle2
                                        className="mt-[2px] h-4 w-4 shrink-0 text-[#D4AF37]"
                                        aria-hidden
                                    />
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <div
                            aria-hidden
                            className="premium-divider mt-6 w-full opacity-60"
                        />

                        <p className="mt-5 text-[11px] leading-relaxed text-[#E7E0D1]/38">
                            Administradoras autorizadas pelo Banco Central. Sem promessa de
                            contemplação garantida.
                        </p>
                    </motion.aside>
                )}
            </motion.div>

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