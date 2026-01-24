import Link from "next/link";
import styles from "./page.module.css";

export const revalidate = 60;

export default function Entry() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.badge}>Entry / Internship</div>
          <h1 className={styles.title}>インターン・アルバイト応募のご案内</h1>
          <p className={styles.lead}>
            ホワイトハッカー専攻で学ぶ山下悠のポートフォリオです。セキュリティ基礎、Pythonでのツール作成、ネットワーク知識を軸に、学んだことをブログと作品で発信しています。ご興味があればぜひご連絡ください。
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primary}>
              面談・お問い合わせ
            </Link>
            <Link href="/blog" className={styles.secondary}>
              最新の学習記録を見る
            </Link>
            <Link href="/skill" className={styles.secondary}>
              スキルセットを確認
            </Link>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h3>自己PRの要点</h3>
            <ul className={styles.list}>
              <li>
                CTF入門イベントをきっかけにセキュリティの奥深さに惹かれ、継続して学習。
              </li>
              <li>
                Pythonでの簡易ツール作成、Linux/ネットワークの基礎運用が可能。
              </li>
              <li>
                学んだことをブログにまとめ、再現性のあるナレッジとして発信。
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>参加したい業務イメージ</h3>
            <ul className={styles.list}>
              <li>脆弱性診断やログ解析の補助、セキュリティツールのPoC作成。</li>
              <li>小規模な自動化スクリプトの実装、ドキュメント整備。</li>
              <li>開発チームでのセキュリティ観点レビューのサポート。</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>アピールコンテンツ</h3>
            <ul className={styles.list}>
              <li>ブログでの技術アウトプット（MicroCMS連携予定）。</li>
              <li>
                ポートフォリオのUI/UXを暖色グラデーションで統一し、回遊性を重視。
              </li>
              <li>
                資格: AI-900、英検準2級。現在セキュリティ系資格の取得を準備中。
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
