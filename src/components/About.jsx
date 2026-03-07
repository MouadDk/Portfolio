import { useEffect, useRef } from 'react'
import { skills, skillCategories } from '../data'
import { useLang } from '../context/LangContext'
import SectionHeader from './SectionHeader'
import Icon from './Icon'
import styles from './About.module.css'

const SKILL_ICON = {
  'Java':          'java',
  'Python':        'python',
  'C / C++':       'cpp',
  'C# / .NET':     'csharp',
  'JavaScript':    'javascript',
  'PHP':           'php',
  'Spring Boot':   'spring',
  'React':         'react',
  'REST APIs':     'api',
  '.NET Core':     'dotnet',
  'HTML / CSS':    'html',
  'Git':           'git',
  'PostgreSQL':    'postgres',
  'MySQL':         'mysql',
  'AI / ML':       'ai',
  'Pandas / NumPy':'data',
  'LLM Tools':     'brain',
  'Algorithms':    'algorithm',
  'Java & Spring Boot': 'spring',
  'C / C++ / C#':  'cpp',
}

const CAT_ICON = {
  'Languages':         'code',
  'Frameworks & Tools':'wrench',
  'Data & AI':         'brain',
}

function SkillBar({ skill, delay }) {
  const barRef = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && barRef.current)
        barRef.current.style.width = skill.level + '%'
    }, { threshold: 0.3 })
    const el = barRef.current?.parentElement?.parentElement
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [skill.level])

  return (
    <div className={styles.lbRow}>
      <span className={styles.lbName}>
        <Icon name={SKILL_ICON[skill.label] || 'code'} size={13} color="var(--muted2)" />
        {skill.label}
      </span>
      <div className={styles.lbTrack}>
        <div ref={barRef} className={styles.lbFill}
          style={{ width: 0, transitionDelay: delay + 'ms' }} />
      </div>
      <span className={styles.lbPct}>{skill.level}%</span>
    </div>
  )
}

export default function About({ hoverOn, hoverOff }) {
  const { t } = useLang()
  const paragraphs = [t.about.p1, t.about.p2, t.about.p3]

  return (
    <section id="about" className={styles.section}>
      <SectionHeader num="02" title={t.about.title} />

      <div className={styles.topGrid}>
        <div className="reveal">
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.para} dangerouslySetInnerHTML={{
              __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          ))}
        </div>

        <div className="reveal d1">
          <h3 className={styles.subTitle}>{t.about.levelTitle}</h3>
          <div className={styles.langBars}>
            {skills.map((s, i) => (
              <SkillBar key={s.label} skill={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.catLabel} reveal`}>{t.about.categoriesTitle}</div>
      <div className={styles.catGrid}>
        {skillCategories.map((cat, ci) => (
          <div key={cat.category} className={`${styles.catCard} reveal`}
            style={{ transitionDelay: ci * 0.1 + 's' }}>
            <div className={styles.catHeader}>
              <span className={styles.catIcon}>
                <Icon name={CAT_ICON[cat.category] || 'code'} size={16} color="var(--accent)" />
              </span>
              <span className={styles.catName}>{cat.category}</span>
            </div>
            <div className={styles.catSkills}>
              {cat.skills.map(s => (
                <div key={s.label} className={styles.sk}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                  <Icon name={SKILL_ICON[s.label] || 'code'} size={12} color="var(--muted2)" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
