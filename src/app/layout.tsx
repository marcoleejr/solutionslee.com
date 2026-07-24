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
  title: "Marco Lee | Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer — Laravel · React/Next.js · WordPress · Applied AI. 12+ years building production web platforms. Based in Guatemala (UTC-6), English C1, remote.",
  keywords: [
    "Marco Lee",
    "Senior Full-Stack Engineer",
    "Laravel",
    "React",
    "Next.js",
    "WordPress",
    "Applied AI",
    "TypeScript",
  ],
  authors: [{ name: "Marco Lee" }],
  openGraph: {
    title: "Marco Lee | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer — Laravel · React/Next.js · WordPress · Applied AI. 12+ years of experience.",
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
      lang="en"
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
