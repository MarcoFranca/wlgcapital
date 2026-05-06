"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function GuideCTA() {
    const router = useRouter();
    const reduce = useReducedMotion();

    const box: Variants = {
        hidden: { opacity: 0, y: 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduce ? 0 : 0.55,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: reduce ? 0 : 0.08,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: reduce ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const waHref = useMemo(() => {
        const phone = process.env.NEXT_PUBLIC_WA_PHONE ?? "5521969639576";
        const wa = new URL(`https://wa.me/${phone}`);
        wa.searchParams.set(
            "text",
            "Olá! Quero receber o Guia Estratégico do Consórcio da WLG Capital e tirar dúvidas sobre meu plano."
        );
        wa.searchParams.set("utm_source", "lp_home");
        wa.searchParams.set("utm_medium", "cta_guide");
        return wa.toString();
    }, []);

    return (
        <Section
            id="guia"
            aria-labelledby="guide-title"
            className="relative isolate overflow-hidden border-y border-[rgba(212,175,55,0.12)] bg-[#0B1420] py-24 md:py-28"
        >


            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(70%_68%_at_50%_18%,rgba(212,175,55,0.08),transparent_70%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.032] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        name: "Guia Estratégico do Consórcio",
                        about: [
                            "Consórcio Imobiliário",
                            "Estratégias de lance",
                            "Planejamento patrimonial",
                        ],
                        inLanguage: "pt-BR",
                        isAccessibleForFree: true,
                        publisher: { "@type": "Organization", name: "WLG Capital" },
                    }),
                }}
            />

            <motion.div
                className="relative z-10 mx-auto max-w-4xl"
                variants={box}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div
                    className={cn(
                        "relative overflow-hidden rounded-[2rem] p-7 text-center backdrop-blur-md md:p-10",
                        "border border-[rgba(212,175,55,0.18)]",
                        "bg-[linear-gradient(135deg,rgba(17,28,42,0.84),rgba(11,20,32,0.96))]",
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

                    <motion.div
                        variants={item}
                        className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(212,175,55,0.24)] bg-[#D4AF37]/[0.08] text-[#D4AF37]"
                    >
                        <BookOpen className="h-6 w-6" />
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="mt-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]/86"
                    >
                        Material educativo
                    </motion.p>

                    <motion.h3
                        id="guide-title"
                        variants={item}
                        className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.035em] text-[#F5EFE3] md:text-4xl"
                    >
                        Guia Estratégico do Consórcio
                    </motion.h3>

                    <motion.p
                        variants={item}
                        className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E7E0D1]/68 md:text-[1.03rem]"
                    >
                        Entenda como usar o consórcio como ferramenta de planejamento,
                        aquisição e construção de patrimônio com método, segurança e
                        previsibilidade.
                    </motion.p>

                    <motion.ul
                        variants={item}
                        className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-3 text-left text-sm text-[#E7E0D1]/72 sm:grid-cols-2"
                    >
                        {[
                            "Diferença entre consórcio e financiamento",
                            "Estratégias de lance por perfil",
                            "Simulações e cenários práticos",
                            "Checklist de segurança e compliance",
                        ].map((text) => (
                            <li key={text} className="inline-flex items-start gap-3">
                                <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-[#D4AF37]" />
                                {text}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        variants={item}
                        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            onClick={() => router.push("/guia-consorcio?lp=wlg-capital")}
                            className={cn(
                                "h-11 rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#0B1420]",
                                "hover:bg-[#C69A2F]",
                                "shadow-[0_14px_40px_rgba(212,175,55,0.16)]"
                            )}
                        >
                            <BookOpen className="mr-2 h-5 w-5" />
                            Baixar guia gratuito
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className={cn(
                                "h-11 rounded-full border-[rgba(212,175,55,0.26)] bg-white/[0.03] px-6 text-sm font-semibold text-[#E7E0D1]/88",
                                "hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 hover:text-[#F5EFE3]"
                            )}
                        >
                            <Link href={waHref} target="_blank" rel="noopener noreferrer">
                                <ShieldCheck className="mr-2 h-5 w-5 text-[#D4AF37]" />
                                Falar com consultor
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="mx-auto mt-5 max-w-md text-[11px] leading-relaxed text-[#E7E0D1]/38"
                    >
                        Material gratuito e educativo. Não contém promessa de contemplação,
                        apenas orientação, métodos e exemplos práticos.
                    </motion.p>
                </div>
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