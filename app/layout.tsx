import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Providers from "@/components/Providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkoid.eu - link shortener",
  description:
    "Linkoid is free, fast and secure link shortening service. Start transforming your long links into simple and clean short links with us today!",
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
      </body>
    </html>
  );
}
