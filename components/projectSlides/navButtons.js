import styles from '../../styles/Projects.module.css'
import utilStyles from '../../styles/utils.module.css';

export default function NavButtons({hook}) {
    return (
    <div className={`${styles.gridnav} ${styles.card}`}>
        <button className={styles.navButton} type='button' onClick={prevSlide}>{'<'}</button>
        <button className={styles.navButton} type='button' onClick={nextSlide}>{'>'}</button>
      </div>
    );
  }

function prevSlide() {

}

function nextSlide(hook) {
    hook
}