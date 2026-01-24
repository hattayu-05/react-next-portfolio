import type { Metadata } from "next";
import { Poppins, Zen_Kaku_Gothic_New, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

// 英語見出し用（太字でポップに）
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// 日本語本文用（スッキリ見やすく）
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen",
});

// コード・アクセント用（ハッカーっぽく）
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.example.com";
const ogImage =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL ??
  "https://images.unsplash.com/photo-1707324148764-99647364afa3?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.1.0";

export const metadata: Metadata = {
  title: "Yu Yamashita Portfolio | Security × Creativity",
  description:
    "ホワイトハッカー専攻・山下悠のポートフォリオ。セキュリティ学習と制作物を暖色グラデーションでまとめています。",
  openGraph: {
    title: "Yu Yamashita Portfolio | Security × Creativity",
    description:
      "ホワイトハッカー専攻・山下悠のポートフォリオ。セキュリティ学習と制作物を暖色グラデーションでまとめています。",
    url: siteUrl,
    siteName: "Yu Yamashita Portfolio",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Warm desk vibes portfolio visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yu Yamashita Portfolio | Security × Creativity",
    description:
      "ホワイトハッカー専攻・山下悠のポートフォリオ。セキュリティ学習と制作物を暖色グラデーションでまとめています。",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${poppins.variable} ${zenKaku.variable} ${jetbrains.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
