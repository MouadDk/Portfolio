import { meta } from '../data'
import { useLang } from '../context/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <span>{t.footer.built} <em>Mouad</em> · 2025</span>
      <span>{t.footer.role} · {meta.location}</span>
    </footer>
  )
}
