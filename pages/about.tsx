import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css"
import styles from "../styles/About.module.css"
import { setTitleString } from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faGithubAlt} from "@fortawesome/free-brands-svg-icons"


export default function About() {
    setTitleString("/about");
    return (
        <Layout>
            <Head><title>{siteTitle + ' | about'}</title></Head>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutBox}>
                    <p>Hey there! I&apos;m Leon and I&apos;m a Computer Science masters graduate.</p>
                    <p>I am interested in information systems, system engineering, </p>
                    <p>data science and human-computer-interaction.</p>
                    <br></br>
                    <p>On this site you can see some of things that I like working on.</p>
                    <p>These include software/coding projects, research papers and the</p>
                    <p>occasional design experiments.</p>
                    <br></br>
                    <br></br>
                    <p>You can contact me at <a className={styles.mail} href="mailto:leon@gansen-mueller.de">leon@gansen-mueller.de</a>.</p>
                    <br></br>
                    <p><a className={styles.git} href="https://github.com/lmueller27"><FontAwesomeIcon icon={faGithub} />/lmueller27</a></p>
                </div>
            </div>
        </Layout>
    )
};