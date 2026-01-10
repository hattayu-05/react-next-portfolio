import styles from './page.module.css';

const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: 'HTML',
    description: '現在学習中です。',
    level: 60,
  },
  {
    id: 2,
    name: 'CSS',
    icon: 'CSS',
    description: 'プログラミング学習を開始してから一番使っている気がします。',
    level: 70,
  },
  {
    id: 3,
    name: 'TypeScript',
    icon: 'TS',
    description: 'ポートフォリオサイトを作成しながら学習中です。',
    level: 50,
  },
];

export default function Skill() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>スキル</h1>
        <p className={styles.description}>
          現在学習中の技術スタックです
        </p>
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
