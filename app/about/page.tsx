import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>自己紹介</h1>
        <div className={styles.profile}>
          <div className={styles.profileContent}>
            <h2 className={styles.name}>山下悠</h2>
            <div className={styles.bio}>
              <p>2006年5月26日生まれ、滋賀県出身です。</p>
              <p>
                京都デザイン＆テクノロジー専門学校のホワイトハッカー専攻でセキュリティを学習中です。
              </p>
              <p>
                サイバーセキュリティと情報保護に興味があり、日々新しい技術を習得しています。
              </p>
              <p>
                このポートフォリオを通じて、自分のスキルと成長を発信していきます。
              </p>
              <p>趣味はゲームで、好きな食べ物は寿司です。</p>
            </div>
          </div>
        </div>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>経歴</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.year}>2025年4月</div>
              <div className={styles.content}>
                <h3>京都デザイン＆テクノロジー専門学校 入学</h3>
                <p>ホワイトハッカー専攻</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>資格</h2>
          <div className={styles.certList}></div>
        </section>
      </div>
    </main>
  );
}
