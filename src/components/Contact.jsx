import { meta } from '../data'
import { useLang } from '../context/LangContext'
import SectionHeader from './SectionHeader'
import styles from './Contact.module.css'

export default function Contact({ hoverOn, hoverOff }) {
  const { t } = useLang()

  const contacts = [
    { label: 'Email',    icon: '✉️', value: meta.email,    href: `mailto:${meta.email}` },
    { label: 'GitHub',   icon: '🐙', value: meta.github,   href: `https://${meta.github}` },
    { label: 'LinkedIn', icon: '💼', value: meta.linkedin, href: `https://${meta.linkedin}` },
    { label: 'Location', icon: '📍', value: meta.location, href: null },
  ]

  return (
    <section id="contact" className={styles.section}>
      <SectionHeader num="05" title={t.contact.title} />
      <div className={`${styles.headline} reveal`}>
        {t.contact.headline1}<br />
        <em>{t.contact.headline2}</em>
      </div>
      <p className={`${styles.sub} reveal d1`}>{t.contact.sub}</p>
      <div className={`${styles.cards} reveal d2`}>
        {contacts.map(c => {
          const Tag = c.href ? 'a' : 'div'
          return (
            <Tag key={c.label} href={c.href || undefined}
              target={c.href && !c.href.startsWith('mailto') ? '_blank' : undefined}
              rel="noreferrer" className={styles.cc}
              onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <div className={styles.ccIcon}>{c.icon}</div>
              <div>
                <div className={styles.ccLabel}>{c.label}</div>
                <div className={styles.ccVal}>{c.value}</div>
              </div>
            </Tag>
          )
        })}
      </div>
    </section>
  )
}
