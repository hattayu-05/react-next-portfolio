import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>自己紹介</h1>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <div className={styles.placeholder}>👤</div>
          </div>
          <div className={styles.profileContent}>
            <h2 className={styles.name}>梅井 太貴</h2>
            <div className={styles.bio}>
              <p>2005年生まれ、京都府出身</p>
              <p>昨年4月に京都デザイン＆テクノロジー専門学校に入学し、現在ITを学んでいます。</p>
              <p>スーパーITエンジニア専攻の1年です。</p>
              <p>趣味は、アニメ、マンガとK-POPです。</p>
              <p>好きな食べ物はラーメンとハンバーグです。</p>
            </div>
          </div>
        </div>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>経歴</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.year}>2024年4月</div>
              <div className={styles.content}>
                <h3>京都デザイン＆テクノロジー専門学校 入学</h3>
                <p>スーパーITエンジニア専攻</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
