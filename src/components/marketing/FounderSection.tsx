"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import {
    BadgeCheck,
    ShieldCheck,
    LineChart,
    MessageCircle,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion, type Variants, useReducedMotion } from "framer-motion";
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
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

type Props = {
    name?: string;
    waPhone: string;
    years?: number;
    cnpj?: string;
    susep?: string;
    linkedinUrl?: string;
    instagramUrl?: string;
};

export function FounderSection({
                                   name = "Wagner Lisboa Gorgulho",
                                   waPhone,
                                   years = 10,
                                   cnpj,
                                   susep,
                                   linkedinUrl,
                                   instagramUrl,
                               }: Props) {
    const reduce = useReducedMotion();

    const wa = new URL(`https://wa.me/${waPhone}`);
    wa.searchParams.set(
        "text",
        "Olá, Wagner! Vim pelo site da WLG Capital e quero entender a melhor estratégia de consórcio para meu objetivo."
    );
    wa.searchParams.set("utm_source", "lp_home");
    wa.searchParams.set("utm_medium", "cta_founder_section");

    return (
        <Section
            className="relative isolate overflow-hidden border-y border-[rgba(212,175,55,0.12)] bg-[#0B1420] py-24 md:py-28"
            aria-labelledby="founder-title"
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
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(76%_64%_at_42%_28%,rgba(212,175,55,0.08),transparent_70%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute -left-28 top-1/4 z-0 h-96 w-96 rounded-full bg-[#D4AF37]/[0.035] blur-3xl"
            />

            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name,
                        jobTitle: "Consultor e Fundador",
                        worksFor: { "@type": "Organization", name: "WLG Capital" },
                        sameAs: linkedinUrl
                            ? [linkedinUrl, instagramUrl].filter(Boolean)
                            : instagramUrl
                                ? [instagramUrl]
                                : [],
                    }),
                }}
            />

            <motion.div
                className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.92fr_1.08fr]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div
                    variants={item}
                    animate={reduce ? {} : { y: [0, -5, 0] }}
                    transition={
                        reduce
                            ? {}
                            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                    }
                    className="relative mx-auto w-full max-w-md"
                >
                    <div
                        aria-hidden
                        className="absolute -inset-x-10 top-10 -z-10 h-[62%] rounded-[36px] bg-[radial-gradient(60%_70%_at_58%_30%,rgba(212,175,55,0.14),transparent_70%)] blur-2xl"
                    />

                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[rgba(212,175,55,0.18)] bg-[linear-gradient(180deg,rgba(17,28,42,0.78),rgba(11,20,32,0.96))] shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-sm">
                        <div
                            aria-hidden
                            className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/55 to-transparent"
                        />

                        <Image
                            src="/images/wagner-consorcio.png"
                            alt={`${name}, consultor e fundador da WLG Capital`}
                            fill
                            className="object-contain drop-shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
                            priority
                        />
                    </div>
                </motion.div>

                <div>
                    <motion.p
                        variants={item}
                        className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]/86"
                    >
                        Quem vai te orientar
                    </motion.p>

                    <motion.h3
                        id="founder-title"
                        variants={item}
                        className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.035em] text-[#F5EFE3] md:text-4xl"
                    >
                        {name}
                        <span className="mt-2 block text-[#D4AF37]">
              Consultor & Fundador
            </span>
                    </motion.h3>

                    <motion.p
                        variants={item}
                        className="mt-5 max-w-2xl text-base leading-8 text-[#E7E0D1]/72 md:text-[1.05rem]"
                    >
                        “Consórcio não é promessa: é método, disciplina e transparência.
                        Meu papel é transformar o seu objetivo em um plano claro do
                        primeiro aporte até o uso estratégico da carta.”
                    </motion.p>

                    <motion.ul
                        variants={item}
                        className="mt-7 grid gap-3 text-sm text-[#E7E0D1]/78 md:grid-cols-2"
                    >
                        <li className="inline-flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4 text-[#D4AF37]" />
                            {`+${years} anos`} de atuação
                        </li>

                        {cnpj && (
                            <li className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                                CNPJ {cnpj}
                            </li>
                        )}

                        {susep && (
                            <li className="inline-flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                                SUSEP {susep}
                            </li>
                        )}

                        <li className="inline-flex items-center gap-2">
                            <LineChart className="h-4 w-4 text-[#D4AF37]" />
                            Estratégias com base histórica
                        </li>
                    </motion.ul>

                    <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                        <Button
                            asChild
                            size="lg"
                            className={cn(
                                "h-11 rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#0B1420]",
                                "hover:bg-[#C69A2F]",
                                "shadow-[0_14px_40px_rgba(212,175,55,0.16)]"
                            )}
                        >
                            <Link href={wa.toString()} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Falar com o Wagner
                            </Link>
                        </Button>

                        {instagramUrl && (
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className={cn(
                                    "h-11 rounded-full border-[rgba(212,175,55,0.26)] bg-white/[0.03] px-6 text-sm font-semibold text-[#E7E0D1]/88",
                                    "hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 hover:text-[#F5EFE3]"
                                )}
                            >
                                <Link
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                >
                                    <FaInstagram className="mr-2 h-4 w-4" />
                                    Ver Instagram
                                </Link>
                            </Button>
                        )}
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="mt-4 max-w-xl text-xs leading-5 text-[#E7E0D1]/42"
                    >
                        Atendimento consultivo, LGPD e transparência em todas as etapas.
                        Nunca prometemos contemplação garantida.
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