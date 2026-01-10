import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className={styles.simple}>SIMPLE</span>
            <span className={styles.portfolio}>Portfolio</span>
          </h1>
          <p className={styles.subtitle}>ご覧いただきありがとうございます</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Blog</h2>
          <div className={styles.blogGrid}>
            <div className={styles.blogCard}>
              <div className={styles.blogDate}>2025.01.19</div>
              <div className={styles.blogTags}>
                <span className={styles.tag}>つぶやき</span>
              </div>
              <h3 className={styles.blogTitle}>このパソコンの素晴らしさ</h3>
            </div>
            <div className={styles.blogCard}>
              <div className={styles.blogDate}>2025.01.18</div>
              <div className={styles.blogTags}>
                <span className={styles.tag}>学び</span>
                <span className={styles.tag}>取り組み</span>
              </div>
              <h3 className={styles.blogTitle}>MicroCMSの使い方</h3>
            </div>
            <div className={styles.blogCard}>
              <div className={styles.blogDate}>2025.01.18</div>
              <div className={styles.blogTags}>
                <span className={styles.tag}>取り組み</span>
                <span className={styles.tag}>制作物</span>
              </div>
              <h3 className={styles.blogTitle}>ポートフォリオサイトを作成</h3>
            </div>
          </div>
          <div className={styles.linkWrapper}>
            <Link href="/blog" className={styles.moreLink}>
              ブログ一覧 &gt;
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>PROFILE</h2>
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <div className={styles.placeholder}>👤</div>
            </div>
            <div className={styles.profileContent}>
              <h3 className={styles.profileName}>あなたの名前</h3>
              <p className={styles.profileText}>
                2005年生まれ、京都府出身<br />
                昨年4月に京都デザイン＆テクノロジー専門学校に入学し、現在ITを学んでいます。<br />
                スーパーITエンジニア専攻の1年です。<br />
                趣味は、アニメ、マンガとK-POPです。<br />
                好きな食べ物はラーメンとハンバーグです。
              </p>
              <div className={styles.linkWrapper}>
                <Link href="/about" className={styles.moreLink}>
                  プロフィールを見る &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Skill</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>HTML</div>
              <h3 className={styles.skillTitle}>HTML</h3>
              <p className={styles.skillText}>現在学習中です。</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>CSS</div>
              <h3 className={styles.skillTitle}>CSS</h3>
              <p className={styles.skillText}>プログラミング学習を開始してから一番使っている気がします。</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>TS</div>
              <h3 className={styles.skillTitle}>TypeScript</h3>
              <p className={styles.skillText}>ポートフォリオサイトを作成しながら学習中です。</p>
            </div>
          </div>
          <div className={styles.linkWrapper}>
            <Link href="/skill" className={styles.moreLink}>
              スキル一覧 &gt;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
