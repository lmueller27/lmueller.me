import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { setTitleString } from '../components/navbar';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  //setTitleString("")
  const { push } = useRouter();

  useEffect(() => {
     push('/projects');
  }, );

  return (null)
  /*return (
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
  );*/
}