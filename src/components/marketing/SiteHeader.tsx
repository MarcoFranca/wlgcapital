"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
    "https://wa.me/5521969639576?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20WLG%20Capital%20e%20gostaria%20de%20entender%20melhor%20sobre%20cons%C3%B3rcio.";

export function SiteHeader() {
    return (
        <header
            className={cn(
                "fixed left-0 top-0 z-50 w-full backdrop-blur-xl",
                "border-b border-[rgba(212,175,55,0.18)]",
                "bg-[#0B1420]/86"
            )}
        >
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4"
            >
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/incone_WLG.png"
                        alt="WLG Capital"
                        width={40}
                        height={40}
                        className="h-9 w-9 object-contain"
                        priority
                    />

                    <div className="hidden leading-none sm:block">
                        <p className="font-heading text-[1.15rem] uppercase tracking-[0.28em] text-[#E7E0D1]">
                            WLG Capital
                        </p>
                        <p className="mt-1 text-[0.62rem] uppercase tracking-[0.34em] text-[#D4AF37]">
                            Consórcios inteligentes
                        </p>
                    </div>
                </Link>

                <div className="hidden items-center gap-7 text-sm text-[#E7E0D1]/72 md:flex">
                    <Link
                        href="#como-funciona"
                        className="transition hover:text-[#D4AF37]"
                    >
                        Como funciona
                    </Link>
                    <Link href="#beneficios" className="transition hover:text-[#D4AF37]">
                        Benefícios
                    </Link>
                    <Link href="#guia" className="transition hover:text-[#D4AF37]">
                        Guia
                    </Link>
                    <Link href="#diagnostico" className="transition hover:text-[#D4AF37]">
                        Diagnóstico
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        className={cn(
                            "rounded-full bg-[#D4AF37] px-5 text-[#0B1420]",
                            "hover:bg-[#C69A2F]",
                            "shadow-[0_14px_40px_rgba(212,175,55,0.16)]"
                        )}
                    >
                        <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </Link>
                    </Button>
                </div>
            </motion.nav>
        </header>
    );
}