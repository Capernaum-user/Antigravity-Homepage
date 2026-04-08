import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpringBackground from "@/components/SpringBackground";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Refactoring Heart - 마음을 코딩하는 교육",
  description: "단순한 기능 구현을 넘어, 마음의 힘을 기르는 인문학 융합 코딩.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased text-gray-800`}>
        <SpringBackground />
        <Navigation />
        <main className="relative z-10 min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
