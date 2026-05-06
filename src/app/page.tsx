import { Hero } from "@/components/marketing/Hero";
import { Benefits } from "@/components/marketing/Benefits";
import { SimulatorCTA } from "@/components/marketing/SimulatorCTA";
import { WhyWLGCapital } from "@/components/marketing/WhyWLGCapital";
import { Testimonials } from "@/components/marketing/Testimonials";
import { GuideCTA } from "@/components/marketing/GuideCTA";
import { FounderSection } from "@/components/marketing/FounderSection";
import { DiagnosticSection } from "@/components/lead/DiagnosticSection";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export default function Page() {
  return (
      <main className="overflow-hidden relative min-h-[100dvh] bg-background text-foreground dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 dark:text-slate-50">
        <SiteHeader />
        <Hero />
        <Benefits />
        <SimulatorCTA />
        <WhyWLGCapital />
        <FounderSection
            waPhone={process.env.NEXT_PUBLIC_WA_PHONE ?? "5521969639576"}
            years={10}
            cnpj="25.241.008/0001-70"
            susep="30QP3J"
            linkedinUrl="https://www.linkedin.com/in/wagner-lisboa-gorgulho-90653653/"
            instagramUrl="https://www.instagram.com/wagnergorgulho?igsh=c2N4c3Rpa2ZxaXhn"
        />
        <Testimonials />
        <GuideCTA />
        <DiagnosticSection
            title="Quer saber qual plano combina com você?"
            subtitle="Receba um diagnóstico consultivo pelo WhatsApp — estratégia com previsões responsáveis."
            waPhone={process.env.NEXT_PUBLIC_WA_PHONE}
        />
        <SiteFooter />
      </main>
  );
}