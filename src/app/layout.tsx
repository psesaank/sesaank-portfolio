import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | AI & Data Science Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.role}. ${siteConfig.taglines.join(". ")}.`,
  keywords: [
    "AI",
    "Machine Learning",
    "Data Science",
    "Full Stack Developer",
    "AWS",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | AI & Data Science Portfolio`,
    description: siteConfig.role,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI & Data Science Portfolio`,
    description: siteConfig.role,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-50 antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-zinc-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
