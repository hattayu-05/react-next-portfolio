import styles from "./page.module.css";

type IconName = "python" | "network" | "security";

const Icon = ({ name }: { name: IconName }) => {
  switch (name) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
          <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" />
          <path d="M11 7h2v7h-2V7zm0 8h2v2h-2v-2z" />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="currentColor">
          <g opacity="0.3">
            <circle cx="6" cy="6" r="3"/>
            <circle cx="18" cy="6" r="3"/>
            <circle cx="12" cy="18" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="18" r="3"/>
          </g>
          <circle cx="6" cy="6" r="2.5"/>
          <circle cx="18" cy="6" r="2.5"/>
          <circle cx="12" cy="18" r="2.5"/>
          <circle cx="6" cy="18" r="2.5"/>
          <circle cx="18" cy="18" r="2.5"/>
          <line x1="8.2" y1="7.5" x2="15.8" y2="7.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round"/>
          <line x1="6" y1="8.5" x2="6" y2="16.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round"/>
          <line x1="18" y1="8.5" x2="18" y2="16.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round"/>
          <line x1="7.5" y1="17.5" x2="15.8" y2="17.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round"/>
          <line x1="12" y1="16" x2="12" y2="8.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="currentColor">
          <g opacity="0.3">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </g>
          <path d="M12 2l7 3.5v5.5c0 4.92-3.4 9.47-8 10.84-4.6-1.37-8-5.92-8-10.84V5.5L12 2z"/>
          <path d="M10.5 12.5L9 11l-1.41 1.41L10.5 15l5.5-5.5L14.5 8l-4 4z" fill="white"/>
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
