import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { setTitleString } from '../components/navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  setTitleString("")

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article className={styles.welcome}>
        <h1 className={styles.welcomeTitle}>
          Welcome!
        </h1>
      </article>
    </Layout>
  );
}