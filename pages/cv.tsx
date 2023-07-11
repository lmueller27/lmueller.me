import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/CV.module.css"
import { setTitleString } from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "@/components/profilePicture";

export default function CV() {
    setTitleString("/cv")

    return (
        <Layout>
            <Head>
                <title>{siteTitle + ' | cv'}</title>
            </Head>
            <div className={styles.cvcontainer}>
                <div className={styles.imagecell}>
                    <ProfilePicture />
                </div>
                <div className={styles.centeredcell}>
                    Leon Müller
                    <div className={styles.cvcontact}>
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp; <a className={styles.mail} href="tel:+49 15735227109">+49 15735227109</a>
                    </div>
                    <div className={styles.cvcontact}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp; <a className={styles.mail} href="mailto:leon@gansen-mueller.de">leon@gansen-mueller.de</a>
                    </div>
                </div>


                <div className={styles.descriptorcell}>
                    <h1>
                        Education
                    </h1>
                </div>
                <div className={styles.centeredcellList}>
                    <p>
                        - Apr 2015: <br></br>Abitur at Gymnasium am Turmhof, Mechernich (1.3) <br></br>
                    </p>
                    <p>
                        Oct 2015 - Oct 2020: <br></br>B.Sc. Computer Science at RWTH Aachen University (2.6) <br></br>
                    </p>
                    <p>
                        Apr 2021 - May 2023: <br></br>M.Sc. Computer Science at RWTH Aachen University (1.5) <br></br>
                    </p>
                </div>

                <div className={styles.descriptorcell}>
                    <h1>Experience</h1>
                </div>
                <div className={styles.centeredcellList}>
                    <p>
                    Jan 2021 - Feb 2022: <br></br> Student Research Assistant  <br></br> at the Cluster of Excellence &quot;Internet of Production&quot;, RWTH Aachen University.
                    </p>
                    <p>
                    Worked on novel information systems for production 4.0 environments. Developed Server Architectures for the semantic web, Linked Data backends, and helped conceptualize novel data protocols.
                    <br></br>
                    Wrote and published scientific papers and presented their contents at international conferences.
                    </p>
                </div>

                <div className={styles.descriptorcell}>
                    <h1>Publications</h1>
                </div>
                <div className={styles.centeredcellList}>
                    <p>
                    Leon Müller, Lars Gleim
                    <br></br>
                    Managing Versioned Web Resources in the File System
                    <br></br>
                    Published in Proceedings of the 21st International Conference on Web Engineering, ICWE 2021
                    </p>
                    <p>
                    Lars Gleim, Leon Müller, Florian Brillowski, Stefan Decker
                    <br></br>
                    Capturing Provenance Information in the File System
                    <br></br>
                    Published in Companion Proceedings of SEMANTiCS 2021 EU, September 6-9, 2021, Amsterdam
                    </p>
                </div>



                <div className={styles.descriptorcell}>
                    <h1>Awards</h1>
                </div>
                <div className={styles.centeredcell}>
                    Best Poster/Demo Award at SEMANTiCS2021
                    <br></br>
                    For Capturing Provenance Information in the File System
                </div>

            </div>
        </Layout>
    )
}