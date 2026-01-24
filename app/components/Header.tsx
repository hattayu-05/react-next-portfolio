import Link from "next/link";
import { LuUser, LuBookOpen, LuCode2, LuMail } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.simple}>Yu Yamashita</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            <LuUser size={18} />
            <span>自己紹介</span>
          </Link>
          <Link href="/blog" className={styles.navLink}>
            <LuBookOpen size={18} />
            <span>ブログ</span>
          </Link>
          <Link href="/skill" className={styles.navLink}>
            <LuCode2 size={18} />
            <span>スキル</span>
          </Link>
          <Link href="/contact" className={styles.navLink}>
            <LuMail size={18} />
            <span>お問い合わせ</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
