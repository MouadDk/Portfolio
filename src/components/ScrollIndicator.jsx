import styles from './ScrollIndicator.module.css'

export default function ScrollIndicator({ label = 'Scroll' }) {
  return (
    <div className={styles.wrap}>
      {}
      <div className={styles.ring}>
        <svg viewBox="0 0 40 40" className={styles.svg}>
          <circle cx="20" cy="20" r="16"
            fill="none"
            stroke="rgba(200,241,53,0.15)"
            strokeWidth="1"
          />
          <circle cx="20" cy="20" r="16"
            fill="none"
            stroke="#c8f135"
            strokeWidth="1"
            strokeDasharray="20 80"
            strokeLinecap="round"
            className={styles.arc}
          />
        </svg>
        {}
        <span className={styles.dot} />
      </div>

      {}
      <span className={styles.label}>{label}</span>
    </div>
  )
}
