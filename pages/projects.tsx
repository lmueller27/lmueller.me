import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { setTitleString } from '../components/navbar';
import styles from '../styles/Projects.module.css'
import Image from 'next/image';
import React from 'react';

export default function Projects() {
    setTitleString("/projects")

    var slideshowLength = 4
    const refs = [React.useRef<HTMLElement>(null), React.useRef<HTMLElement>(null), React.useRef<HTMLElement>(null), React.useRef<HTMLElement>(null)]
    var activeIndex: number = 0

    return (
        <Layout>
            <Head>
                <title>{siteTitle + ' | projects'}</title>
            </Head>
            <NoisyProject customRef={refs[0]} index={0} datastatus={"active"}></NoisyProject>
            <EditrecsProject customRef={refs[1]} index={1} datastatus={"before"}></EditrecsProject>
            <ServerProject customRef={refs[2]} index={2} datastatus={"before"}></ServerProject>
            <FuseProject customRef={refs[3]} index={3} datastatus={"after"}></FuseProject>
        </Layout>
    );

    function nextSlide() {
        //setActiveIndex((activeIndex+1)%slideshowLength)
        var oldIndex = activeIndex
        refs[oldIndex].current?.setAttribute('data-status', 'after');
        activeIndex = (activeIndex + 1) % slideshowLength
        refs[activeIndex].current?.setAttribute('data-status', 'active');

        for (var i = 0; i < refs.length; i++) {
            if (i != oldIndex && i != activeIndex) {
                refs[i].current?.setAttribute('data-status', 'betweenBefore');
            }
        }
    }

    function prevSlide() {
        // Thanks Javascript... 
        //setActiveIndex(((activeIndex-1 % slideshowLength) + slideshowLength) % slideshowLength)
        var oldIndex = activeIndex
        refs[oldIndex].current?.setAttribute('data-status', 'before');
        activeIndex = ((activeIndex - 1 % slideshowLength) + slideshowLength) % slideshowLength
        refs[activeIndex].current?.setAttribute('data-status', 'active');

        for (var i = 0; i < refs.length; i++) {
            if (i != oldIndex && i != activeIndex) {
                refs[i].current?.setAttribute('data-status', 'betweenAfter');
            }
        }
    }

    function NoisyProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <article ref={customRef} className={styles.grid} data-index={index} data-status={datastatus}>
                <div className={`${styles.gridimage} ${styles.card}`}>
                    <Image
                        className={styles.projectImage}
                        src="/images/heads.png"
                        width="1280"
                        height="600"
                        alt=""
                        priority
                    />
                </div>
                <div className={`${styles.gridlinks} ${styles.card}`}>
                    <p>
                        Add a variety of randomly generated noise, patterns and textures to your Fusion 360 objects.
                    </p>
                    <br></br>
                    <p>
                        Lets you enrich your models with anything from smooth randomized features to jagged distortion.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        <Link href="https://github.com/lmueller27/Fusion360PatternsAndTextures" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                                Visit Repo
                            </a>
                        </Link>
                    </p>
                </div>
                <div className={`${styles.gridtitle} ${styles.card}`}>
                    <h1 className={utilStyles.heading2Xl}>
                        <a href="https://github.com/lmueller27/Fusion360PatternsAndTextures" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                        Noise, Patterns and Textures
                        </a>
                    </h1>
                    <h2>
                        A Fusion360 Plugin
                    </h2>
                </div>
                <div className={`${styles.gridnav} ${styles.card}`}>
                    <button className={`${styles.navButton} ${styles.navButtonLeft}`} type='button' onClick={nextSlide} tabIndex={-1}>{'<'}</button>
                    <button className={`${styles.navButton} ${styles.navButtonRight}`} type='button' onClick={prevSlide} tabIndex={-1}>{'>'}</button>
                </div>
            </article>
        );
    }

    function FuseProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <article ref={customRef} className={styles.grid} data-status={datastatus}>
                <div className={`${styles.gridimage} ${styles.card}`}>
                    <Image
                        className={styles.projectImage}
                        src="/images/ffscreen.jpg"
                        width="1280"
                        height="600"
                        alt=""
                    />
                </div>
                <div className={`${styles.gridlinks} ${styles.card}`}>
                    <p>
                        Connect and mount Linked Data Platforms (LDPs) to Linux machines. 
                        <br></br>
                        <br></br>
                        Let&apos;s you access and edit server data from the local file system and offers tools to interact with Memento history data.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        <Link href="https://git.rwth-aachen.de/i5/factdag/factfuse" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                                Visit Repo
                            </a>
                        </Link>
                    </p>
                </div>
                <div className={`${styles.gridtitle} ${styles.card}`}>
                    <h1 className={utilStyles.heading2Xl}>
                        <a href="https://git.rwth-aachen.de/i5/factdag/factfuse" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                        factFUSE
                        </a>
                    </h1>
                    <h2>
                        A user-space file system for Linked Data Platforms
                    </h2>
                </div>
                <div className={`${styles.gridnav} ${styles.card}`}>
                    <button className={`${styles.navButton} ${styles.navButtonLeft}`} type='button' onClick={nextSlide} tabIndex={-1}>{'<'}</button>
                    <button className={`${styles.navButton} ${styles.navButtonRight}`} type='button' onClick={prevSlide} tabIndex={-1}>{'>'}</button>
                </div>
            </article>
        );
    }

    function EditrecsProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <article ref={customRef} className={styles.grid} data-status={datastatus}>
                <div className={`${styles.gridimage} ${styles.card}`}>
                    <Image
                        className={styles.projectImage}
                        src="/images/editrecs.png"
                        width="1280"
                        height="600"
                        alt=""
                    />
                </div>
                <div className={`${styles.gridlinks} ${styles.card}`}>
                    <p>
                        This is a research project I developed for my masters thesis. An extension framework for Visual Studio Code that enables proactive point of interest recommendations for the developers current work context.
                    </p>
                    <br></br>
                    <p>
                        Work in Progress. More to come soon.
                    </p>
                </div>
                <div className={`${styles.gridtitle} ${styles.card}`}>
                    <h1 className={utilStyles.heading2Xl}>
                        <a href="/" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                        EditRecs
                        </a>
                    </h1>
                    <h2>
                        A Visual Studio Code Extension
                    </h2>
                </div>
                <div className={`${styles.gridnav} ${styles.card}`}>
                    <button className={`${styles.navButton} ${styles.navButtonLeft}`} type='button' onClick={nextSlide} tabIndex={-1}>{'<'}</button>
                    <button className={`${styles.navButton} ${styles.navButtonRight}`} type='button' onClick={prevSlide} tabIndex={-1}>{'>'}</button>
                </div>
            </article>
        );
    }

    function ServerProject({ customRef, index, datastatus }: { customRef: React.RefObject<HTMLElement>, index: number, datastatus: string }) {
        return (
            <article ref={customRef} className={styles.grid} data-status={datastatus}>
                <div className={`${styles.gridimage} ${styles.card}`}>
                    <Image
                        className={styles.projectImage}
                        src="/images/factserver2.png"
                        width="1280"
                        height="600"
                        alt=""
                    />
                </div>
                <div className={`${styles.gridlinks} ${styles.card}`}>
                    <p>
                        A prototype REST server architecture implementing the Linked Data Platform specifications, Memento-Protocol functionality, and a SPARQL backend.
                    </p>
                    <br></br>
                    <p> For the semantic web. </p>
                    <br></br>
                    <p>
                    <Link href="https://git.rwth-aachen.de/i5/factdag/fact-server" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                                Visit Repo
                            </a>
                        </Link>
                    </p>
                </div>
                <div className={`${styles.gridtitle} ${styles.card}`}>
                    <h1 className={utilStyles.heading2Xl}>
                        <a href="/" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                        FactServer
                        </a>
                    </h1>
                    <h2>
                        A Linked Data Platform with Memento versioning. 
                    </h2>
                </div>
                <div className={`${styles.gridnav} ${styles.card}`}>
                    <button className={`${styles.navButton} ${styles.navButtonLeft}`} type='button' onClick={nextSlide} tabIndex={-1}>{'<'}</button>
                    <button className={`${styles.navButton} ${styles.navButtonRight}`} type='button' onClick={prevSlide} tabIndex={-1}>{'>'}</button>
                </div>
            </article>
        );
    }
}



