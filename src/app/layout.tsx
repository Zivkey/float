import type { Metadata } from "next";
import { Geist, Averia_Serif_Libre, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const averiaSerif = Averia_Serif_Libre({
  variable: "--font-averia-serif",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand-src",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Float — Your thoughts, captured beautifully.",
  description:
    "Float turns voice notes into clean transcripts, summaries, and action items — so your ideas never get lost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${averiaSerif.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0d] text-white">
        {children}
      </body>
    </html>
  );
}
