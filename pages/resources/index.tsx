import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Home.module.css'

const Resources: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FreshMeal</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Resources
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/resources/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href='/'>
            <div className={styles.card}>
              <h2>Privacy Resources &rarr;</h2>
              <p>Info yay.</p>
            </div>
          </Link>

          <Link href='/'>
            <div className={styles.card}>
              <h2>Ethical Design Plan &rarr;</h2>
              <p>Info yay.</p>
            </div>
          </Link>
          <Link href='/'>
            <div className={styles.card}>
              <h2>Manifesto &rarr;</h2>
              <p>Info yay.</p>
            </div>
          </Link>
          <Link href='/'>
            <div className={styles.card}>
              <h2>Ecosystem Research &rarr;</h2>
              <p>Info yay.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Resources
