import styles from "./page.module.css";

const skills = [
  {
    id: 1,
    name: "Python",
    icon: "PY",
    description: "Pythonを使ったセキュリティツール開発で学習中です。",
    level: 75,
  },
  {
    id: 2,
    name: "ネットワーク・Linux基礎",
    icon: "NET",
    description:
      "サイバーセキュリティの基盤となるネットワークとLinuxを習得中です。",
    level: 70,
  },
  {
    id: 3,
    name: "セキュリティ基礎",
    icon: "SEC",
    description: "ホワイトハッキング専攻で集中的に学習しています。",
    level: 80,
  },
];

export default function Skill() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>スキル</h1>
        <p className={styles.description}>現在学習中の技術スタックです</p>
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h2 className={styles.skillName}>{skill.name}</h2>
              <p className={styles.skillDescription}>{skill.description}</p>
              <div className={styles.skillBar}>
                <div
                  className={styles.skillProgress}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className={styles.skillLevel}>{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
