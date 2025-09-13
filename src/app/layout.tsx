import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { BackToTop } from "@/components/BackToTop";
import { LocalBusinessSchema, ServiceSchema, FAQSchema } from "./schema";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
  description: "Professionelle Gebäudereinigung, Unterhaltsreinigung, Industriereinigung und Facility Management. Tochterfirma der Solar Komfort GmbH.",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/webp",
      url: "/favicon_sk_blue.webp",
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
          <main className="">{children}</main>
          <Footer />
          <PopupWidget />
          <BackToTop />
          <LocalBusinessSchema />
          <ServiceSchema />
          <FAQSchema />
        </ThemeProvider>
      </body>
    </html>
  );
}