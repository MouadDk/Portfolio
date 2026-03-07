import styles from './SectionHeader.module.css'

export default function SectionHeader({ num, title, revealRef }) {
  return (
    <div className={`${styles.head} reveal`} ref={revealRef}>
      <span className={styles.num}>{num}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </div>
  )
}
