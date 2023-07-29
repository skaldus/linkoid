import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Providers from "@/components/Providers";

import "./globals.css";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkoid.eu - link shortener",
  description:
    "Linkoid is free, fast and secure link shortening service. Start transforming your long links into simple and clean short links with us today!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkoid.eu/",
    title: "Linkoid - URL shortener",
    siteName: "Linkoid",
    description:
      "Linkoid is free, fast and secure link shortening service. Start transforming your long links into simple and clean short links with us today!",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
