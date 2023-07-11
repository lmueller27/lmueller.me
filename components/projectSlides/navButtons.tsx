import styles from '../../styles/Projects.module.css'

export default function NavButtons({ next, previous }: { next: () => void, previous: () => void }) {
  return (
    <div className={`${styles.gridnav} ${styles.card}`}>
      <button className={`${styles.navButton} ${styles.navButtonLeft}`} type='button' onClick={next} tabIndex={-1}>{'<'}</button>
      <button className={`${styles.navButton} ${styles.navButtonRight}`} type='button' onClick={previous} tabIndex={-1}>{'>'}</button>
    </div>
  );
}