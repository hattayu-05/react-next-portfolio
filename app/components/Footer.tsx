"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.section}>
            <h3>コンテンツ一覧</h3>
            <div className={styles.cards}>
              <Link href="/blog" className={styles.card}>
                <span className={styles.icon}>📝</span>
                <div>
                  <h4>ブログ</h4>
                  <p>取り組みについて日々追加していきます。</p>
                </div>
              </Link>
              <Link href="/skill" className={styles.card}>
                <span className={styles.icon}>⚡</span>
                <div>
                  <h4>スキル一覧</h4>
                  <p>学習中のスキルを掲載しています。</p>
                </div>
              </Link>
              <Link href="/contact" className={styles.card}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <h4>お問い合わせ</h4>
                  <p>質問やご相談を受け付けています。</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>©︎ 2025 Yu Yamashita</p>
        </div>
        <button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
