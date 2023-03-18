import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from './layout';
import utilStyles from '../styles/utils.module.css';
import styles from './navbar.module.css'

var titleString = ""

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div id="nav-home-section" className={styles.navHomeSection}>
                <Link className={utilStyles.heading2Xl} href="/">{siteTitle}</Link>
                <h1 id='path' className={utilStyles.heading2Xl}>{titleString}</h1>
                <h1 className={utilStyles.heading2Xl}>
                    <p className={styles.blinkingChar}>_</p>
                </h1>
            </div>
            
            <div id="nav-rest" className={styles.navSection}>

                <div id="nav-about-section">
                    <h1 className={utilStyles.heading2Xl}>
                        <Link href="/about">about</Link>
                    </h1>
                </div>
                <div id="nav-cv-section">
                    <h1 className={utilStyles.heading2Xl}>
                        <Link href="/cv">cv</Link>
                    </h1>
                </div>
                <div id="nav-projects-section">
                    <h1 className={utilStyles.heading2Xl}>
                        <Link href="/projects">projects</Link>
                    </h1>
                </div>
            </div>

        </nav>
    );
}

export function setTitleString(newTitle: string) {
    titleString = newTitle;
    /*titleString = ""
    if(str) {
        for(var i=0;i<str.length;i++) {
            titleString+=str.charAt(i)
            setTimeout(500);
        }
    }*/
}


/*            <h1 className={utilStyles.heading2Xl}>
                <p className={styles.blinkingChar}>_</p>
            </h1>
*/