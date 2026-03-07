import { useRef } from 'react'
import { projects } from '../data'
import { useLang } from '../context/LangContext'
import SectionHeader from './SectionHeader'
import Icon from './Icon'
import styles from './Projects.module.css'

function ProjectCard({ project, hoverOn, hoverOff, t }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width)  * 100
    const y = ((e.clientY - rect.top)  / rect.height) * 100
    cardRef.current.style.setProperty('--mx', x + '%')
    cardRef.current.style.setProperty('--my', y + '%')
  }

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${project.featured ? styles.featured : ''} reveal`}
      onMouseMove={onMouseMove}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      <span className={styles.num}>
        {project.num}{project.featured ? ` / ${t.projects.featured}` : ''}
      </span>

      {!project.confidential && project.github && (
        <a href={project.github} target="_blank" rel="noreferrer"
          className={styles.arrow} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          <Icon name="arrowUpRight" size={14} color="currentColor" />
        </a>
      )}
      {project.confidential && <div className={styles.ndaBadge}>🔒 NDA</div>}

      <span className={styles.icon}>
        <Icon name={
          project.icon === '🚗' ? 'car' :
          project.icon === '🔴' ? 'game' :
          project.icon === '♟️' ? 'chess' : 'lock'
        } size={36} color="var(--accent)" />
      </span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.desc}</p>

      {project.stats && (
        <div className={styles.statsRow}>
          {project.stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {project.confidential && (
        <p className={styles.confidentialNote}>{t.projects.confidentialNote}</p>
      )}
    </div>
  )
}

export default function Projects({ hoverOn, hoverOff }) {
  const { t } = useLang()
  return (
    <section id="projects">
      <SectionHeader num="03" title={t.projects.title} />
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={p.id} className={`reveal${i === 0 ? '' : ` d${Math.min(i, 4)}`}`}
            style={{ display: 'contents' }}>
            <ProjectCard project={p} hoverOn={hoverOn} hoverOff={hoverOff} t={t} />
          </div>
        ))}
      </div>
    </section>
  )
}
