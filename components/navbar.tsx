import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from './layout';
import utilStyles from '../styles/utils.module.css';
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

var titleString = ""

export default function Navbar() {
    const [menuState, setMenuState] = useState(false)

    return (
        <>
            <nav className={styles.nav}>
                <div id="nav-home-section" className={styles.navHomeSection}>
                    <Link className={utilStyles.heading2Xl} href="/">{siteTitle}</Link>
                    <h1 id='path' className={`${utilStyles.heading2Xl} ${styles.navPath}`}>{titleString}</h1>
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
                            <Link href="/">projects</Link>
                        </h1>
                    </div>
                </div>
                <div className={styles.navMenu}>
                    <button className={styles.menuButton} onClick={toggleMenu} type='button'><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </nav>
            {menuState ?
                <div id="nav-menu" className={styles.navMenuSection}>

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
                            <Link href="/">projects</Link>
                        </h1>
                    </div>
                </div>
                : <></>}
        </>
    );

    function toggleMenu() {
        menuState ? setMenuState(false) : setMenuState(true);
    }
}

export function setTitleString(newTitle: string) {
    titleString = newTitle;
}