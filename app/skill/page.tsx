import styles from "./page.module.css";

type IconName = "python" | "network" | "security";

const Icon = ({ name }: { name: IconName }) => {
  switch (name) {
    case "python":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {/* Python: ダイヤモンド形 */}
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
          <path
            d="M12 8L14.5 11.5L14.5 15L9.5 15L9.5 11.5Z"
            fill="currentColor"
            opacity="0.8"
          />
          <circle cx="11.5" cy="10.5" r="0.8" fill="white" />
          <circle cx="12.5" cy="13.5" r="0.8" fill="white" />
        </svg>
      );
    case "network":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {/* ネットワーク: チェーン/リンク */}
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
          <path d="M9 10.5C9 9.67157 9.67157 9 10.5 9H13.5C14.3284 9 15 9.67157 15 10.5V13.5C15 14.3284 14.3284 15 13.5 15H10.5C9.67157 15 9 14.3284 9 13.5V10.5Z" />
          <path d="M14.5 12H9.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="currentColor">
          {/* セキュリティ: シールド */}
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 6L18 9L18 13C18 16.3 15.3 18.5 12 19.5C8.7 18.5 6 16.3 6 13L6 9L12 6Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M11 12L10 13L12 15L14 11"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
