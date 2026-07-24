import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://solutionslee.com"),
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
  creator: "Marco Lee",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Marco Lee | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer — Laravel · React/Next.js · WordPress · Applied AI. 12+ years of experience.",
    url: "https://solutionslee.com",
    siteName: "Marco Lee — solutionslee.com",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_GT"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Lee | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer — Laravel · React/Next.js · WordPress · Applied AI. 12+ years of experience.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marco Lee",
  url: "https://solutionslee.com",
  jobTitle: "Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer with 12+ years shipping production web platforms. Laravel, React/Next.js, WordPress, and Applied AI (agents, RAG).",
  knowsAbout: [
    "Laravel",
    "PHP",
    "React",
    "Next.js",
    "TypeScript",
    "WordPress",
    "NestJS",
    "AWS",
    "AI Agents",
    "RAG",
  ],
  knowsLanguage: ["en", "es"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GT",
  },
  sameAs: [
    "https://github.com/marcoleejr",
    "https://linkedin.com/in/marcoleejr",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
      <body className="min-h-full flex flex-col overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          <LanguageProvider>{children}</LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
