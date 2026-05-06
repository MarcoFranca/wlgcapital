"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { BrazilPhoneInput } from "@/features/leads/inputs";
import {
    PERFIS,
    objetivosByProduto,
    type ProdutoTipo,
} from "@/features/leads/catalogs";
import { PerfilCombobox } from "@/features/leads/PerfilCombobox";
import { formatMoneyBR, parseMoneyBR } from "@/lib/formatters";
import { onlyDigits } from "@/lib/masks";
import { cn } from "@/lib/utils";

type LeadFormProps = {
    hash?: string;
    onSuccess?: () => void;
};

type LeadPost = {
    nome: string;
    email: string;
    telefone: string;
    valor_carta?: string;
    prazo_meses?: string;
    objetivo?: string;
    perfil_psico?: string;
    observacoes?: string;
    origem?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    consentimento: boolean;
    tipo?: ProdutoTipo;
    company?: string;
};

export function LeadForm({ hash = "wlg-capital", onSuccess }: LeadFormProps) {
    const [pending, start] = useTransition();
    const [err, setErr] = useState<string | null>(null);
    const [consented, setConsented] = useState(false);

    const [tipo, setTipo] = useState<ProdutoTipo>("imobiliario");
    const [prazo, setPrazo] = useState<string>("180");
    const [prazoOutro, setPrazoOutro] = useState<string>("");

    const [objetivo, setObjetivo] = useState<string>("");
    const [objetivoOutro, setObjetivoOutro] = useState<string>("");

    const [perfil, setPerfil] = useState<string>("");
    const [perfilOutro, setPerfilOutro] = useState<string>("");
    const [valorMasked, setValorMasked] = useState("0,00");

    const fieldH = "h-11";
    const textAreaH = "min-h-28";

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        (["utm_source", "utm_medium", "utm_campaign"] as const).forEach((k) => {
            const el = document.querySelector<HTMLInputElement>(`input[name="${k}"]`);
            const v = params.get(k);
            if (el && v) el.value = v;
        });
    }, []);

    function formToLeadPost(fd: FormData): LeadPost {
        const gs = (k: string): string | undefined => {
            const val = fd.get(k);
            return typeof val === "string" && val.trim() ? val : undefined;
        };

        const obj =
            gs("objetivo") === "outro" ? gs("objetivo_outro") : gs("objetivo");

        const per =
            gs("perfil_psico") === "outro"
                ? gs("perfil_outro")
                : gs("perfil_psico");

        const base: LeadPost = {
            nome: gs("nome") ?? "",
            email: gs("email") ?? "",
            telefone: gs("telefone") ?? "",
            valor_carta: gs("valor_carta"),
            prazo_meses: gs("prazo_meses") ?? gs("prazo_outro"),
            objetivo: obj,
            perfil_psico: per,
            observacoes: gs("observacoes"),
            origem: gs("origem") ?? "lp-home",
            utm_source: gs("utm_source"),
            utm_medium: gs("utm_medium"),
            utm_campaign: gs("utm_campaign"),
            consentimento: true,
            tipo,
            company: gs("company"),
        };

        if (base.valor_carta) base.valor_carta = onlyDigits(base.valor_carta);
        if (base.telefone) base.telefone = onlyDigits(base.telefone);
        if (prazo === "outro") base.prazo_meses = onlyDigits(prazoOutro ?? "");

        return base;
    }

    async function onSubmit(formData: FormData) {
        setErr(null);

        const body = { hash, ...formToLeadPost(formData) };

        if (!body.nome || !body.email || !body.telefone) {
            setErr("Preencha nome, WhatsApp e e-mail.");
            return;
        }

        if (!consented) {
            setErr("É necessário aceitar a Política de Privacidade.");
            return;
        }

        if (body.company && body.company.trim().length > 0) return;

        start(async () => {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                const txt = await res.text();
                setErr(`Falha ao enviar: ${txt}`);
                return;
            }

            onSuccess?.();
        });
    }

    const objetivos = objetivosByProduto(tipo);

    const fieldClass = cn(
        fieldH,
        "w-full border-[rgba(212,175,55,0.18)] bg-[#0B1420]/46 text-[#F5EFE3]",
        "placeholder:text-[#E7E0D1]/30",
        "focus-visible:ring-[#D4AF37]/60"
    );

    const labelClass = "text-sm font-medium text-[#E7E0D1]/78";

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(new FormData(e.currentTarget));
            }}
            className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5"
            noValidate
        >
            <div className="grid min-w-0 gap-2 col-span-2 md:col-span-6">
                <Label htmlFor="nome" className={labelClass}>
                    Nome
                </Label>
                <Input
                    id="nome"
                    name="nome"
                    className={fieldClass}
                    autoComplete="name"
                    placeholder="Seu nome"
                    required
                />
            </div>

            <div className="grid min-w-0 gap-2 col-span-2 md:col-span-6">
                <Label htmlFor="telefone" className={labelClass}>
                    WhatsApp
                </Label>
                <BrazilPhoneInput
                    id="telefone"
                    nameDisplay="telefone"
                    className={fieldClass}
                    required
                />
            </div>

            <div className="grid min-w-0 gap-2 col-span-2 md:col-span-6">
                <Label htmlFor="email" className={labelClass}>
                    E-mail
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    autoComplete="email"
                    placeholder="voce@exemplo.com"
                    required
                />
            </div>

            <div className="grid min-w-0 gap-2 col-span-1 md:col-span-6">
                <Label htmlFor="tipo" className={labelClass}>
                    Tipo
                </Label>
                <Select
                    value={tipo}
                    onValueChange={(v: "imobiliario" | "auto") => setTipo(v)}
                >
                    <SelectTrigger id="tipo" className={fieldClass}>
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent
                        className="z-[70] border-[rgba(212,175,55,0.18)] bg-[#0B1420] text-[#F5EFE3]"
                        sideOffset={6}
                    >
                        <SelectItem value="imobiliario">Imobiliário</SelectItem>
                        <SelectItem value="auto">Automóvel</SelectItem>
                    </SelectContent>
                </Select>
                <input type="hidden" name="tipo" value={tipo} />
            </div>

            <div className="grid min-w-0 gap-2 col-span-1 md:col-span-6">
                <Label htmlFor="prazo_meses" className={labelClass}>
                    Prazo
                </Label>
                <Select value={prazo} onValueChange={setPrazo} name="prazo_meses">
                    <SelectTrigger id="prazo_meses" className={fieldClass}>
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent
                        className="z-[70] border-[rgba(212,175,55,0.18)] bg-[#0B1420] text-[#F5EFE3]"
                        sideOffset={6}
                    >
                        {[60, 80, 100, 120, 150, 180, 200].map((v) => (
                            <SelectItem key={v} value={String(v)}>
                                {v} meses
                            </SelectItem>
                        ))}
                        <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                </Select>

                {prazo === "outro" && (
                    <Input
                        name="prazo_outro"
                        value={prazoOutro}
                        onChange={(e) => setPrazoOutro(e.target.value)}
                        inputMode="numeric"
                        placeholder="Digite o prazo"
                        className={cn("mt-2", fieldClass)}
                        aria-label="Informe o prazo em meses"
                    />
                )}
            </div>

            <div className="grid min-w-0 gap-2 col-span-2 md:col-span-6">
                <Label htmlFor="valor_carta_visual" className={labelClass}>
                    Valor da carta
                </Label>
                <Input
                    id="valor_carta_visual"
                    name="valor_carta_visual"
                    inputMode="numeric"
                    placeholder="R$ 0,00"
                    className={fieldClass}
                    value={valorMasked}
                    onChange={(e) => setValorMasked(formatMoneyBR(e.target.value))}
                />
                <input
                    type="hidden"
                    name="valor_carta"
                    value={(() => {
                        const n = parseMoneyBR(valorMasked);
                        return n == null ? "" : String(n);
                    })()}
                />
            </div>

            <div className="grid min-w-0 gap-2 col-span-2 md:col-span-6">
                <Label htmlFor="objetivo" className={cn(labelClass, "flex items-center gap-1")}>
                    Objetivo
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-4 w-4 cursor-help text-[#D4AF37]/70" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs text-sm" side="right" sideOffset={6}>
                            Escolha o principal. Você pode detalhar nas observações.
                        </TooltipContent>
                    </Tooltip>
                </Label>

                <Select value={objetivo} onValueChange={setObjetivo} name="objetivo">
                    <SelectTrigger id="objetivo" className={fieldClass}>
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent
                        className="z-[70] border-[rgba(212,175,55,0.18)] bg-[#0B1420] text-[#F5EFE3]"
                        sideOffset={6}
                    >
                        {objetivos.map((o) => (
                            <SelectItem key={o.v} value={o.v}>
                                {o.l}
                            </SelectItem>
                        ))}
                        <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                </Select>

                {objetivo === "outro" && (
                    <Input
                        name="objetivo_outro"
                        value={objetivoOutro}
                        onChange={(e) => setObjetivoOutro(e.target.value)}
                        placeholder="Descreva seu objetivo"
                        className={cn("mt-2", fieldClass)}
                    />
                )}
            </div>

            <div className="grid min-w-0 gap-2 col-span-2 md:col-span-6">
                <Label htmlFor="perfil_psico" className={labelClass}>
                    Seu perfil
                </Label>
                <PerfilCombobox
                    id="perfil_psico"
                    name="perfil_psico"
                    value={perfil}
                    onChange={setPerfil}
                    options={PERFIS}
                    placeholder="Selecione"
                    className="w-full"
                />
                {perfil === "outro" && (
                    <Input
                        name="perfil_outro"
                        value={perfilOutro}
                        onChange={(e) => setPerfilOutro(e.target.value)}
                        placeholder="Descreva seu perfil"
                        className={cn("mt-2", fieldClass)}
                    />
                )}
            </div>

            <div className="grid min-w-0 gap-2 col-span-2 md:col-span-12">
                <Label htmlFor="observacoes" className={labelClass}>
                    Observações
                </Label>
                <Textarea
                    id="observacoes"
                    name="observacoes"
                    className={cn(
                        textAreaH,
                        "w-full border-[rgba(212,175,55,0.18)] bg-[#0B1420]/46 text-[#F5EFE3]",
                        "placeholder:text-[#E7E0D1]/30 focus-visible:ring-[#D4AF37]/60"
                    )}
                    placeholder="Conte brevemente seu objetivo, prazo desejado ou dúvidas."
                />
            </div>

            <div className="col-span-2 md:col-span-12">
                <label className="flex items-start gap-3 rounded-2xl border border-[rgba(212,175,55,0.12)] bg-[#0B1420]/36 p-4 text-sm leading-6 text-[#E7E0D1]/68">
                    <Checkbox
                        id="consentimento"
                        checked={consented}
                        onCheckedChange={(v) => setConsented(Boolean(v))}
                        className="mt-1 border-[rgba(212,175,55,0.4)] data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-[#0B1420]"
                    />
                    <span>
            Autorizo o contato via WhatsApp e e-mail. Li e aceito a{" "}
                        <a
                            href="/politica-de-privacidade"
                            className="text-[#D4AF37] underline underline-offset-4"
                        >
              Política de Privacidade
            </a>
            .
          </span>
                </label>
            </div>

            <div className="col-span-2 flex flex-col gap-3 md:col-span-12 md:flex-row md:items-center md:justify-between">
                {err ? (
                    <p className="text-sm text-red-400">{err}</p>
                ) : (
                    <p className="text-xs leading-5 text-[#E7E0D1]/38">
                        Envio seguro. Seus dados serão usados apenas para contato consultivo.
                    </p>
                )}

                <Button
                    type="submit"
                    size="lg"
                    disabled={pending || !consented}
                    className={cn(
                        "h-11 rounded-full bg-[#D4AF37] px-7 text-sm font-semibold text-[#0B1420]",
                        "hover:bg-[#C69A2F]",
                        "disabled:cursor-not-allowed disabled:opacity-45",
                        "shadow-[0_14px_40px_rgba(212,175,55,0.16)]",
                        "w-full md:w-auto"
                    )}
                >
                    {pending ? "Enviando..." : "Receber diagnóstico"}
                </Button>
            </div>

            <input type="hidden" name="origem" value="lp-home" />
            <input type="hidden" name="utm_source" />
            <input type="hidden" name="utm_medium" />
            <input type="hidden" name="utm_campaign" />

            <div className="sr-only" aria-hidden>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>
        </form>
    );
}