import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LanguageProvider } from "@/lib/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marco Lee | Full Stack Developer",
  description: "Full Stack Developer & Ingeniero Industrial. Especializado en crear aplicaciones web limpias, escalables y bien pensadas.",
  keywords: ["Marco Lee", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Marco Lee" }],
  openGraph: {
    title: "Marco Lee | Full Stack Developer",
    description: "Full Stack Developer & Ingeniero Industrial. 12+ años de experiencia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <LanguageProvider>{children}</LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
