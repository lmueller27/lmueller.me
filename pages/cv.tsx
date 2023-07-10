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
                    <tbody>
                        <tr>
                            <td className={styles.descriptorcell}>
                                <ProfilePic></ProfilePic>
                            </td>
                            <td>
                                Leon Müller
                                <div className={styles.cvcontact}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    &nbsp; <a className={styles.mail} href="tel:+49 15735227109">+49 15735227109</a>
                                </div>
                                <div className={styles.cvcontact}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    &nbsp; <a className={styles.mail} href="mailto:leon@gansen-mueller.de">leon@gansen-mueller.de</a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className={styles.descriptorcell}>
                                Education
                            </td>
                            <td>
                                - Apr 2015: <br></br>Abitur at Gymnasium am Turmhof, Mechernich (1.3)
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                Oct 2015 - Oct 2020: <br></br>B.Sc. Computer Science at RWTH Aachen University (2.6)
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                Apr 2021 - May 2023: <br></br>M.Sc. Computer Science at RWTH Aachen University (1.5)
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
                                Worked on novel information systems for production 4.0 environments. Developed Server Architectures for the semantic web, Linked Data backends, and helped conceptualize novel data protocols.
                                <br></br>
                                <br></br>
                                Wrote and published scientific papers and presented their contents at international conferences. 
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
                    </tbody>
                </table>

                <div className={styles.cvlist}>
                    <div className={styles.cvlistimage}>
                        <ProfilePic></ProfilePic>
                    </div>
                    <br></br>
                    <br></br>
                    <p>Leon Müller</p>
                    <div className={styles.cvcontact}>
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp; <a className={styles.mail} href="tel:+49 15735227109">+49 15735227109</a>
                    </div>
                    <div className={styles.cvcontact}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp; <a className={styles.mail} href="mailto:leon@gansen-mueller.de">leon@gansen-mueller.de</a>
                    </div>
                    <br></br>
                    <div id="cvlist-education">
                        <h1>Education</h1>
                        <br></br>
                        <p>
                            - Apr 2015:
                        </p>
                        <p>
                            Abitur at Gymnasium am Turmhof, Mechernich
                        </p>
                        <br></br>
                        <p>
                            Oct 2015 - Oct 2020:
                        </p>
                        <p>
                            B.Sc. Computer Science at RWTH Aachen University
                        </p>
                        <br></br>
                        <p>
                            Apr 2021 - Apr 2023:
                        </p>
                        <p>
                            M.Sc. Computer Science at RWTH Aachen University
                        </p>
                        <br></br>
                    </div>

                    <div id="cvlist-experience">
                        <h1>Experience</h1>
                        <br></br>
                        <p>
                            Jan 2021 - Feb 2022:
                        </p>
                        <p>
                            Student Research Assistant at the Cluster of Excellence &quot;Internet of Production&quot;, RWTH Aachen University.
                        </p>
                        <br></br>
                    </div>

                    <div id="cvlist-publications">
                        <h1>Publications</h1>
                        <br></br>
                        <p>
                            Leon Müller, Lars Gleim
                            <br></br>
                            Managing Versioned Web Resources in the File System
                            <br></br>
                            Published in Proceedings of the 21st International Conference on Web Engineering, ICWE 2021
                        </p>
                        <br></br>
                        <p>
                            Lars Gleim, Leon Müller, Florian Brillowski, Stefan Decker
                            <br></br>
                            Capturing Provenance Information in the File System
                            <br></br>
                            Published in Companion Proceedings of SEMANTiCS 2021 EU, September 6-9, 2021, Amsterdam
                        </p>
                        <br></br>
                    </div>

                    <div id="cvlist-awards">
                        <h1>Awards</h1>
                        <br></br>
                        <p>
                            Best Poster/Demo Award at SEMANTiCS2021
                            <br></br>
                            For Capturing Provenance Information in the File System
                        </p>
                        <br></br>
                    </div>
                </div>
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
            priority={true}
            alt=""
        />
    )
};