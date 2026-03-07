import { useEffect, useState, useRef } from 'react'
import { useLang } from '../context/LangContext'
import ScrollIndicator from './ScrollIndicator'
import styles from './Hero.module.css'

function Particle({ x, y, size, duration, delay, color }) {
  return (
    <div className={styles.particle} style={{
      left: x + '%', top: y + '%',
      width: size, height: size,
      background: color,
      animationDuration: duration + 's',
      animationDelay: delay + 's',
    }} />
  )
}

function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      let cur = 0
      const step = () => {
        cur += Math.ceil((target - cur) / 8)
        if (cur >= target) { setVal(target); return }
        setVal(cur)
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
      obs.disconnect()
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{val}{suffix}</span>
}

const particles = [
  { x: 8,  y: 15, size: '4px', duration: 8,  delay: 0,   color: 'var(--accent)' },
  { x: 92, y: 10, size: '3px', duration: 11, delay: 1.5, color: 'var(--accent)' },
  { x: 15, y: 80, size: '5px', duration: 9,  delay: 0.5, color: 'rgba(200,241,53,.4)' },
  { x: 85, y: 75, size: '3px', duration: 13, delay: 2,   color: 'var(--accent)' },
  { x: 50, y: 5,  size: '4px', duration: 10, delay: 0.8, color: 'rgba(200,241,53,.6)' },
  { x: 30, y: 90, size: '3px', duration: 7,  delay: 3,   color: 'rgba(200,241,53,.3)' },
  { x: 70, y: 88, size: '6px', duration: 12, delay: 1,   color: 'rgba(200,241,53,.2)' },
  { x: 5,  y: 50, size: '3px', duration: 15, delay: 2.5, color: 'var(--accent)' },
]

export default function Hero({ hoverOn, hoverOff }) {
  const { t } = useLang()
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const fn = (e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  const px = (mousePos.x - 0.5) * 20
  const py = (mousePos.y - 0.5) * 20

  return (
    <section className={styles.hero}>
      {}
      <div className={styles.particles}>
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>
      <div className={styles.dotGrid} style={{ transform: `translate(${px * .3}px,${py * .3}px)` }} />
      <div className={styles.glow}    style={{ transform: `translate(calc(-50% + ${px * 2}px), calc(-50% + ${py * 2}px))` }} />
      <div className={styles.scanline} />

      {}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          {t.hero.eyebrow}
          <span className={styles.eyebrowDot} />
        </div>

        <h1 className={styles.h1}>
          <span className={styles.dim}>{t.hero.line1}</span>
          <span className={styles.hlWrap}>
            <span className={styles.hl}>{t.hero.line2}</span>
            <span className={styles.hlGhost}  aria-hidden>{t.hero.line2}</span>
            <span className={styles.hlGhost2} aria-hidden>{t.hero.line2}</span>
          </span>
          <span className={styles.line3}>{t.hero.line3}</span>
        </h1>

        <p className={styles.sub}>{t.hero.sub}</p>

        <div className={styles.actions}>
          <a href="#projects" className={`${styles.btn} ${styles.btnFill}`}
            onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <span className={styles.btnBg} />
            <span className={styles.btnText}>{t.hero.cta1}</span>
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}
            onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <span className={styles.btnText}>{t.hero.cta2}</span>
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { n: 4, s: '+', label: 'Projects'   },
            { n: 8, s: '+', label: 'Languages'  },
            { n: 1, s: '',  label: 'Internship' },
          ].map((st, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statNum}><Counter target={st.n} suffix={st.s} /></div>
              <div className={styles.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <ScrollIndicator label={t.scroll} />
      </div>
    </section>
  )
}
