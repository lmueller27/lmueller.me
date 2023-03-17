import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css"
import styles from "../styles/CV.module.css"
import { setTitleString } from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    setTitleString("/cv")
    return (
        <Layout>
            <Head>
                <title>{siteTitle + ' | cv'}</title>
            </Head>
            <div className={styles.cvcontainer}>
                <table className={styles.cvtable}>
                    <tr>
                        <td className={styles.descriptorcell}>
                            <ProfilePic></ProfilePic>
                        </td>
                        <td>
                            Leon Müller
                            <div className={styles.cvcontact}>
                                <FontAwesomeIcon icon={faPhone} height="1rem" />
                                &nbsp; <a className={styles.mail} href="tel:+49 15735227109">+49 15735227109</a>
                            </div>
                            <div className={styles.cvcontact}>
                                <FontAwesomeIcon icon={faEnvelope} height="1rem" />
                                &nbsp; <a className={styles.mail} href="mailto:leon@gansen-mueller.de">leon@gansen-mueller.de</a>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className={styles.descriptorcell}>
                            Education
                        </td>
                        <td>
                            - Apr 2015: <br></br>Abitur at Gymnasium am Turmhof, Mechernich
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            Oct 2015 - Oct 2020: <br></br>B.Sc. Computer Science at RWTH Aachen University
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            Apr 2021 - Apr 2023: <br></br>M.Sc. Computer Science at RWTH Aachen University
                        </td>
                    </tr>

                    <tr></tr>

                    <tr>
                        <td className={styles.descriptorcell}>
                            Experience
                        </td>
                        <td>
                            Jan 2021 - Feb 2022: <br></br> Student Research Assistant  <br></br> at the Cluster of Excellence &quot;Internet of Production&quot;, RWTH Aachen University.
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            Worked on novel information systems for production 4.0 environments.
                        </td>
                    </tr>

                    <tr></tr>

                    <tr>
                        <td className={styles.descriptorcell}>
                            Publications
                        </td>
                        <td>
                            Leon Müller, Lars Gleim
                            <br></br>
                            Managing Versioned Web Resources in the File System
                            <br></br>
                            Published in Proceedings of the 21st International Conference on Web Engineering, ICWE 2021
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            Lars Gleim, Leon Müller, Florian Brillowski, Stefan Decker
                            <br></br>
                            Capturing Provenance Information in the File System
                            <br></br>
                            Published in Companion Proceedings of SEMANTiCS 2021 EU, September 6-9, 2021, Amsterdam
                        </td>
                    </tr>

                    <tr></tr>

                    <tr>
                        <td className={styles.descriptorcell}>
                            Awards
                        </td>
                        <td>
                            Best Poster/Demo Award at SEMANTiCS2021
                            <br></br>
                            For Capturing Provenance Information in the File System
                        </td>
                    </tr>
                </table>
            </div>
        </Layout>
    );
}

const ProfilePic = () => {
    return (
        <Image
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={250}
            width={250}
            alt=""
        />
    )
};