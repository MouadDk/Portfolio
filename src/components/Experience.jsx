import { experience } from '../data'
import { useLang } from '../context/LangContext'
import SectionHeader from './SectionHeader'
import styles from './Experience.module.css'

export default function Experience({ hoverOn, hoverOff }) {
  const { t } = useLang()
  return (
    <section id="experience" className={styles.section}>
      <SectionHeader num="04" title={t.experience.title} />
      {experience.map((exp, i) => (
        <div key={i} className={`${styles.card} reveal`} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          <div className={styles.left}>
            <span className={styles.date}>{exp.date}</span>
            <div className={styles.company}>{exp.company}</div>
            <span className={styles.type}>{exp.type}</span>
          </div>
          <div className={styles.right}>
            <div className={styles.role}>{exp.role}</div>
            <p className={styles.desc}>{exp.desc}</p>
            <ul className={styles.highlights}>
              {exp.highlights.map((h, j) => (
                <li key={j} className={styles.hi}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
