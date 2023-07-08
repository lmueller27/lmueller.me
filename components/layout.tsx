import Head from 'next/head';
import styles from './layout.module.css';
import { ReactNode } from 'react'
import Navbar from './navbar';

const name = 'Leon Müller';
export const siteTitle = 'lmueller';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Leon Müller | lmueller.me</title>
        <meta
          name="description"
          content="Computer Scientist and Software Developer from Aachen, Germany."
        />
        <meta name="keywords" content="portfolio, computer science, software developer, dev, personal website" />
        <meta name="author" content="Leon Müller" />
        <meta name="copyright" content="Leon Müller" />
        <meta
          property="og:image"
          content={`https://lmueller.me/images/heads.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}