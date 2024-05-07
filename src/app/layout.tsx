import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {NextAuthProvider} from "@/app/providers/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Screetner",
  description: "Screetner is a simple URL shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <NextAuthProvider>
        <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
        </html>
      </NextAuthProvider>
  );
}
