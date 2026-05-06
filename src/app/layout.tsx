import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "WLG Capital | Consórcios Inteligentes",
    template: "%s | WLG Capital",
  },
  description:
      "Consultoria especializada em consórcios inteligentes para compra, investimento e construção de patrimônio com planejamento, segurança e estratégia.",
  applicationName: "WLG Capital",
  metadataBase: new URL("https://wlgcapital.com.br"),
  openGraph: {
    title: "WLG Capital | Consórcios Inteligentes",
    description:
        "Planejamento consultivo em consórcios para quem deseja comprar, investir ou construir patrimônio com estratégia.",
    siteName: "WLG Capital",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WLG Capital | Consórcios Inteligentes",
    description:
        "Consórcios inteligentes para grandes conquistas patrimoniais.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1420",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="pt-BR"
          className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased dark`}
          suppressHydrationWarning
      >
      <body className="min-h-full bg-background font-sans text-foreground">
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="wlg-capital-theme"
      >
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}