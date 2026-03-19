import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "김원준 | Wonjoon Kim",
  description:
    "삼성글로벌리서치 대표이사 · KAIST 기술경영학부 교수 | CEO, Samsung Global Research · Professor, KAIST",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-white text-[#1a2744]`}
      >
        {children}
      </body>
    </html>
  );
}
