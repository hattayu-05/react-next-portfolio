import styles from "./page.module.css";

type IconName = "python" | "network" | "security";

const Icon = ({ name }: { name: IconName }) => {
  switch (name) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M12 3c-3.3 0-6 2.7-6 6v2.5c0 1 .8 1.8 1.8 1.8h5.4c.9 0 1.8.8 1.8 1.8v1.1c0 2.5-2 4.5-4.5 4.5H6.5" />
          <circle cx="8.5" cy="5.5" r="1" />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="19" cy="12" r="2" />
          <path d="M7 12h10M12 7v5" />
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M12 3l8 3v5c0 5.2-3.6 9.9-8 10-4.4-.1-8-4.8-8-10V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
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
