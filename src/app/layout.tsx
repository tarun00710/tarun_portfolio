import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Tarun Lal Rajak | Frontend Engineer",
  description:
    "Frontend Engineer with 3+ years building production React/Next.js applications at startups. Focused on Core Web Vitals optimization, component architecture, and shipping performant UIs. Experience with SSR, SSG, ISR, GraphQL, and design systems.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "Web Performance",
    "Core Web Vitals",
  ],
  authors: [{ name: "Tarun Lal Rajak" }],
  openGraph: {
    title: "Tarun Lal Rajak | Frontend Engineer",
    description:
      "Frontend Engineer focused on performance, Core Web Vitals, and pixel-perfect UIs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans bg-dark-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
