"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import {
    MessageCircle,
    Mail,
    ArrowUpRight,
    ShieldCheck,
    MapPin,
    Building2,
} from "lucide-react";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";

type Props = {
    waPhone?: string;
    email?: string;
    cnpj?: string;
    linkedinUrl?: string;
    instagramUrl?: string;
    siteUrl?: string;
};

export function SiteFooter({
                               waPhone = process.env.NEXT_PUBLIC_WA_PHONE ?? "5521969639576",
                               email = "contato@wlgcapital.com.br",
                               cnpj,
                               linkedinUrl,
                               instagramUrl,
                               siteUrl = "https://wlgcapital.com.br",
                           }: Props) {
    const waHref = useMemo(() => {
        const wa = new URL(`https://wa.me/${waPhone}`);
        wa.searchParams.set(
            "text",
            "Olá! Gostaria de falar com a WLG Capital sobre consórcio."
        );
        wa.searchParams.set("utm_source", "lp_home");
        wa.searchParams.set("utm_medium", "footer_cta");
        return wa.toString();
    }, [waPhone]);

    return (
        <footer className="relative isolate overflow-hidden border-t border-[rgba(212,175,55,0.12)] bg-[#0B1420]">


            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(212,175,55,0.06),transparent_72%)]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.028] [background-image:radial-gradient(rgba(231,224,209,0.72)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            <Section className="relative z-10 py-16">
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "WLG Capital",
                            slogan: "Planeje hoje, conquiste sempre.",
                            url: siteUrl,
                            sameAs: [
                                linkedinUrl,
                                instagramUrl,
                            ].filter(Boolean),
                            contactPoint: [
                                {
                                    "@type": "ContactPoint",
                                    contactType: "customer service",
                                    telephone: `+${waPhone}`,
                                    email,
                                    areaServed: "BR",
                                    availableLanguage: ["pt-BR"],
                                },
                            ],
                        }),
                    }}
                />

                <div className="grid gap-12 border-b border-[rgba(212,175,55,0.10)] pb-12 md:grid-cols-4">
                    {/* Marca */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/incone_WLG.png"
                                alt="WLG Capital"
                                width={36}
                                height={36}
                                className="h-9 w-9"
                            />

                            <Image
                                src="/icone_horizontal.png"
                                alt="WLG Capital"
                                width={120}
                                height={20}
                                className="h-auto w-auto"
                            />
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#E7E0D1]/62">
                            Estratégias inteligentes de consórcio para construção patrimonial,
                            aquisição e planejamento financeiro de longo prazo.
                        </p>

                        {cnpj && (
                            <p className="mt-5 inline-flex items-center gap-2 text-xs text-[#E7E0D1]/42">
                                <Building2
                                    className="h-4 w-4 text-[#D4AF37]"
                                    aria-hidden
                                />
                                CNPJ {cnpj}
                            </p>
                        )}
                    </div>

                    {/* Navegação */}
                    <nav
                        aria-label="Navegação"
                        className="grid content-start gap-3 text-sm"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]/84">
                            Navegação
                        </p>

                        {[
                            ["Como funciona", "#como-funciona"],
                            ["Estratégia", "#simular"],
                            ["Depoimentos", "#depoimentos"],
                            ["Diagnóstico", "#diagnostico"],
                        ].map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                className="inline-flex items-center gap-2 text-[#E7E0D1]/62 transition-colors hover:text-[#F5EFE3]"
                            >
                                {label}
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                            </Link>
                        ))}
                    </nav>

                    {/* Regiões */}
                    <div className="grid content-start gap-3 text-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]/84">
                            Atendimento
                        </p>

                        <p className="inline-flex items-center gap-2 text-[#E7E0D1]/68">
                            <MapPin className="h-4 w-4 text-[#D4AF37]" aria-hidden />
                            São Paulo & Rio de Janeiro
                        </p>

                        <p className="max-w-xs text-xs leading-6 text-[#E7E0D1]/42">
                            Atendimento consultivo para clientes em capitais e cidades
                            estratégicas do Sudeste.
                        </p>
                    </div>

                    {/* Contato */}
                    <div className="grid content-start gap-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]/84">
                            Fale conosco
                        </p>

                        <div className="flex flex-col gap-3">
                            <Button
                                asChild
                                className={cn(
                                    "h-11 rounded-full bg-[#D4AF37] px-5 text-sm font-semibold text-[#0B1420]",
                                    "hover:bg-[#C69A2F]",
                                    "shadow-[0_14px_40px_rgba(212,175,55,0.16)]"
                                )}
                            >
                                <Link
                                    href={waHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    WhatsApp
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className={cn(
                                    "h-11 rounded-full border-[rgba(212,175,55,0.24)] bg-white/[0.03] px-5 text-sm font-semibold text-[#E7E0D1]/88",
                                    "hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 hover:text-[#F5EFE3]"
                                )}
                            >
                                <a href={`mailto:${email}`}>
                                    <Mail className="mr-2 h-4 w-4" />
                                    {email}
                                </a>
                            </Button>
                        </div>

                        <div className="mt-1 flex items-center gap-4">
                            {instagramUrl && (
                                <Link
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#E7E0D1]/52 transition-colors hover:text-[#D4AF37]"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </Link>
                            )}

                            {linkedinUrl && (
                                <Link
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#E7E0D1]/52 transition-colors hover:text-[#D4AF37]"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Compliance */}
                <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
                    <div>
                        <p className="inline-flex items-center gap-2 text-sm text-[#F5EFE3]">
                            <ShieldCheck
                                className="h-4 w-4 text-[#D4AF37]"
                                aria-hidden
                            />
                            Compliance & Transparência
                        </p>

                        <ul className="mt-3 space-y-2 text-xs leading-6 text-[#E7E0D1]/42">
                            <li>
                                <Link
                                    href="/politica-de-privacidade"
                                    className="underline underline-offset-4"
                                >
                                    Política de Privacidade
                                </Link>{" "}
                                e{" "}
                                <Link
                                    href="/exclusao-de-dados"
                                    className="underline underline-offset-4"
                                >
                                    exclusão de dados
                                </Link>
                                .
                            </li>

                            <li>
                                Administradoras autorizadas pelo Banco Central do Brasil.
                            </li>

                            <li>
                                Não realizamos promessa de contemplação garantida. Projeções são
                                estimativas baseadas em histórico e sazonalidade.
                            </li>
                        </ul>
                    </div>

                    <p className="max-w-md text-sm italic leading-7 text-[#E7E0D1]/38 md:ml-auto md:text-right">
                        “Consórcio não é sobre antecipar consumo. É sobre construir
                        patrimônio com método e inteligência financeira.”
                    </p>
                </div>

                {/* Copy */}
                <div className="mt-10 border-t border-[rgba(212,175,55,0.10)] pt-6 text-xs text-[#E7E0D1]/34">
                    ©{" "}
                    <span suppressHydrationWarning>
            {new Date().getFullYear()}
          </span>{" "}
                    Autentika Digital. Todos os direitos reservados.
                </div>
            </Section>
        </footer>
    );
}