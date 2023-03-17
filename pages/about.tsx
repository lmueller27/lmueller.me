import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css"
import styles from "../styles/About.module.css"
import { setTitleString } from "../components/navbar";


export default function About() {
    setTitleString("/about");
    return (
        <Layout>
            <Head><title>{siteTitle + ' | about'}</title></Head>
            <div className={styles.aboutBox}>
                <div>
                    <br></br>
                    <br></br>
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
                </div>
            </div>
        </Layout>
    )
};

const ProfilePic = () => {
    return (
        <Image
            src="/images/profile.jpg"
            className={styles.borderCircle}
            height={300}
            width={300}
            alt=""
        />
    )
};