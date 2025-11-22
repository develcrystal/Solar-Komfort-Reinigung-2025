Skip to content
develcrystal's projects
develcrystal's projects

Hobby

solar-komfort-reinigung

n82t8suyj

Changelog
Help
Docs

Source
Output
src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar Komfort GmbH - Professionelle Dachbeschichtung",
  description: "Solar Komfort GmbH bietet professionelle Dachbeschichtung, Dachreinigung und Fassadenreinigung in Darmstadt und Umgebung.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/webp",
      url: "/img/flux/favicon.webp",
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
Home
Docs
Guides
Help
Contact
All systems normal

Select a display theme:

system

light

dark
© 2025, Vercel Inc.

solar-komfort-reinigung – Deployment Source – Vercel