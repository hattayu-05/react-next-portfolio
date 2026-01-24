import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop}>
          <span className={`${styles.orb} ${styles.orbOne}`} />
          <span className={`${styles.orb} ${styles.orbTwo}`} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={`${styles.heroBadge} ${styles.typewriter}`}>
                Security × Creativity
              </div>
              <h1 className={styles.heroTitle}>守る技術を、楽しく学ぶ。</h1>
              <p className={styles.heroLead}>
                山下悠（ホワイトハッカー専攻）です。
                <br />
                あなたの日常をデジタルの脅威から守る、一番身近なエンジニアを目指して、
                サイバーセキュリティやものづくりの学び・挑戦をまとめています。
              </p>
              <div className={styles.heroActions}>
                <Link href="/skill" className={styles.primaryAction}>
                  スキルを見る
                </Link>
                <Link href="/contact" className={styles.secondaryAction}>
                  相談・問い合わせ
                </Link>
              </div>
            </div>
          </div>
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
          <h2 className={styles.sectionTitle}>Works</h2>
          <p className={styles.description}>これまでに制作した作品です</p>
          <div className={styles.worksGrid}>
            <div className={styles.workCard}>
              <div className={styles.workContent}>
                <h3 className={styles.workTitle}>ポートフォリオサイト</h3>
                <p className={styles.workDescription}>
                  このサイト自体が作品です。Next.jsとMicroCMSを使い、モダンで親しみやすいポートフォリオサイトを構築しました。デザインからデプロイまで、フルスタックで開発しています。
                </p>
                <div className={styles.workTechs}>
                  <span className={styles.tech}>Next.js</span>
                  <span className={styles.tech}>TypeScript</span>
                  <span className={styles.tech}>CSS Modules</span>
                  <span className={styles.tech}>MicroCMS</span>
                  <span className={styles.tech}>Vercel</span>
                </div>
                <a
                  href="https://github.com/hattayu-05/react-next-portfolio"
                  className={styles.workLink}
                >
                  GitHub Repository →
                </a>
              </div>
            </div>
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
              <h3 className={styles.profileName}>山下悠</h3>
              <p className={styles.profileText}>
                2006年5月26日生まれ、滋賀県出身
                <br />
                京都デザイン＆テクノロジー専門学校のホワイトハッカー専攻で学習中です。
                <br />
                サイバーセキュリティと情報保護に興味があります。
                <br />
                趣味は、ゲーム、好きな食べ物は寿司です。
                <br />
                日々新しい技術を習得しています。
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

      <section className={`${styles.section} ${styles.skillSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Skill</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🐍</div>
              <h3 className={styles.skillTitle}>Python</h3>
              <p className={styles.skillText}>
                Pythonを使ったセキュリティツール開発で学習中です。
              </p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔗</div>
              <h3 className={styles.skillTitle}>ネットワーク・Linux</h3>
              <p className={styles.skillText}>
                サイバーセキュリティの基盤となるネットワークとLinuxを習得中です。
              </p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔒</div>
              <h3 className={styles.skillTitle}>セキュリティ基礎</h3>
              <p className={styles.skillText}>
                ホワイトハッキング専攻で集中的に学習しています。
              </p>
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
