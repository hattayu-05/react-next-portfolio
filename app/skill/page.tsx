import styles from "./page.module.css";

type IconName = "python" | "network" | "security";

const Icon = ({ name }: { name: IconName }) => {
  switch (name) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="currentColor">
          {/* Python蛇アイコン */}
          <path d="M12 2C11.5 2 11 2.2 10.8 2.5L4.3 8C3.7 8.4 3 9.2 3 10v4c0 0.8 0.7 1.6 1.3 2l6.5 5.5c0.2 0.3 0.7 0.5 1.2 0.5s1 -0.2 1.2 -0.5l6.5 -5.5c0.6 -0.4 1.3 -1.2 1.3 -2v-4c0 -0.8 -0.7 -1.6 -1.3 -2l-6.5 -5.5C13 2.2 12.5 2 12 2z M10 9c0.55 0 1 0.45 1 1s-0.45 1 -1 1s-1 -0.45 -1 -1S9.45 9 10 9z M14 15c-0.55 0 -1 -0.45 -1 -1s0.45 -1 1 -1s1 0.45 1 1S14.55 15 14 15z"/>
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* リンク/チェーンアイコン */}
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="currentColor">
          {/* ロック/シールドアイコン */}
          <path d="M18.75 9V7.5c0-.825-.675-1.5-1.5-1.5H6.75c-.825 0-1.5.675-1.5 1.5V9m13.5 0v8.25c0 .825-.675 1.5-1.5 1.5H6.75c-.825 0-1.5-.675-1.5-1.5V9m13.5 0H6.75M12 12.75v3M10.5 16.5h3"/>
        </svg>
      );
  }
};

const skills: {
  id: number;
  name: string;
  icon: IconName;
  description: string;
  level: number;
}[] = [
  {
    id: 1,
    name: "Python",
    icon: "python",
    description: "Pythonを使ったセキュリティツール開発で学習中です。",
    level: 75,
  },
  {
    id: 2,
    name: "ネットワーク・Linux基礎",
    icon: "network",
    description:
      "サイバーセキュリティの基盤となるネットワークとLinuxを習得中です。",
    level: 70,
  },
  {
    id: 3,
    name: "セキュリティ基礎",
    icon: "security",
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
              <div className={styles.skillIcon}>
                <Icon name={skill.icon} />
              </div>
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
