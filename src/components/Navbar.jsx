import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'
import styles from './Navbar.module.css'

export default function Navbar({ hoverOn, hoverOff }) {
  const { lang, toggle, t } = useLang()
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { href: '#terminal',   label: '$ Terminal'     },
    { href: '#about',      label: t.nav.about      },
    { href: '#projects',   label: t.nav.projects   },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact',    label: t.nav.contact    },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const secs = document.querySelectorAll('section[id]')
      let cur = ''
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
        mouad<em>.</em>dev
      </a>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href.slice(1) ? styles.activeLink : ''}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <button
          className={styles.langToggle}
          onClick={toggle}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          aria-label="Toggle language"
        >
          <span className={lang === 'fr' ? styles.langActive : styles.langInactive}>FR</span>
          <span className={styles.langSep}>|</span>
          <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
        </button>

        <div className={styles.badge}>
          <span className={styles.dot} />
          {t.nav.available}
        </div>
      </div>
    </nav>
  )
}
