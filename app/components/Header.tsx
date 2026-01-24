"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.simple}>Yu Yamashita</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/about">自己紹介</Link>
          <Link href="/blog">ブログ</Link>
          <Link href="/skill">スキル</Link>
          <Link href="/contact">お問い合わせ</Link>
          {mounted && (
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="テーマ切り替え"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
