import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impacta Eventos Interativos | Ativações Digitais de Alta Performance",
  description: "Especializada em criar experiências digitais personalizadas para feiras, convenções e encontros corporativos.",
  openGraph: {
    title: "Impacta Eventos | Tecnologia e Engajamento",
    description: "Soluções gamificadas para engajar o público e gerar leads qualificados em eventos.",
    type: "website",
    url: "https://impactaeventos.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
