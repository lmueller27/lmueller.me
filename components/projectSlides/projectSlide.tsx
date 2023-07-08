import Link from 'next/link';
import styles from '../../styles/Projects.module.css'
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import { projectContent } from '@/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectSlide({ customRef, index, datastatus, projectContent, next, previous }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string, projectContent: projectContent, next: () => void, previous: () => void }) {

    return (
        <article ref={customRef} className={styles.grid} data-index={index} data-status={datastatus}>
            <div className={`${styles.gridimage} ${styles.card}`}>
                <Image
                    className={styles.projectImage}
                    src={projectContent.imgPath}
                    width="1280"
                    height="800"
                    alt=""
                    priority
                />
            </div>
            <div className={`${styles.gridlinks} ${styles.card}`}>
                {projectContent.description.map((paragraph,i) => (<div key={i}><p>{paragraph}</p><br></br></div>))}
                <br></br>
                <br></br>
                {projectContent.showLinkToRepo ?
                    <p>
                        <Link href={projectContent.repoUrl} passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                                <FontAwesomeIcon icon={faGithub} /> Visit Repo
                            </a>
                        </Link>
                    </p> : null}
            </div>
            <div className={`${styles.gridtitle} ${styles.card}`}>
                <h1 className={utilStyles.heading2Xl}>
                    <a href={projectContent.repoUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                        {projectContent.title}
                    </a>
                </h1>
                <h2>
                    {projectContent.subtitle}
                </h2>
            </div>
            <div className={`${styles.gridnav} ${styles.card}`}>
                <button className={`${styles.navButton} ${styles.navButtonLeft}`} type='button' onClick={next} tabIndex={-1}>{'<'}</button>
                <button className={`${styles.navButton} ${styles.navButtonRight}`} type='button' onClick={previous} tabIndex={-1}>{'>'}</button>
            </div>
        </article>
    );
}