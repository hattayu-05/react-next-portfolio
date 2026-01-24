import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
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
        </nav>
      </div>
    </header>
  );
}
