import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/About.module.css"
import { setTitleString } from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";


export default function About() {
    setTitleString("/about");
    return (
        <Layout>
            <Head><title>{siteTitle + ' | about'}</title></Head>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutBox}>
                    <p>Hey there! I&apos;m Leon and I&apos;m a Full Stack Developer and Computer Science masters graduate.</p>
                    <p>I am interested in web development, information systems,
                        data science and human-computer-interaction.</p>
                    <br></br>
                    <p>On this site you can see some of things that I like working on.</p>
                    <p>These include software/coding projects, research papers and the
                        occasional design experiment.</p>
                    <br></br>
                    <br></br>
                    <p>You can contact me at <a className={styles.mail} href="mailto:leon@gansen-mueller.de">leon@gansen-mueller.de</a>.</p>
                    <br></br>
                    <p>
                        <Link href="https://github.com/lmueller27" passHref legacyBehavior>
                            <a className={styles.git} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                                <FontAwesomeIcon icon={faGithub} />/lmueller27
                            </a>
                        </Link>
                    </p>
                    <p>
                        <Link href="https://www.linkedin.com/in/leon-mueller2710/" passHref legacyBehavior>
                            <a className={styles.git} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                        </Link>
                    </p>
                    <br></br>
                </div>
            </div>
        </Layout>
    )
};