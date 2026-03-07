import styles from './Cursor.module.css'

export default function Cursor({ curRef, ringRef }) {
  return (
    <>
      <div ref={curRef}  className={styles.cursor} />
      <div ref={ringRef} className={styles.ring}   />
    </>
  )
}
