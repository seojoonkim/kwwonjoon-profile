import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${cormorant.variable} ${inter.variable} antialiased bg-white text-[#0D1117]`}
      >
        {children}
      </body>
    </html>
  );
}
