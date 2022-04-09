import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'
import QuickLeaveButton from '@components/quickLeaveButton'
import Link from 'next/link'
import { Container } from '@mui/material'

const helpResources: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Fresh Meal</title>
                <meta name="description" content="Quick and easy recipes for the modern family." />
                <link rel="icon" type="image/png" href="small-logo.png" />
            </Head>
            <Container>
                <main className={styles.main}>
                    <QuickLeaveButton />
                    <h1>Help Resources</h1>
                    <div className={styles.grid}>
                        <Link passHref href='/details/manifesto'>
                            <div className={styles.card}>
                                <h2>Manifesto &rarr;</h2>
                                <p>Info yay.</p>
                            </div>
                        </Link>
                        <Link passHref href='/details/privacy'>
                            <div className={styles.card}>
                                <h2>Privacy Resources &rarr;</h2>
                                <p>Info yay.</p>
                            </div>
                        </Link>

                        <Link passHref href='/details/ethical-design'>
                            <div className={styles.card}>
                                <h2>Ethical Design Plan &rarr;</h2>
                                <p>Info yay.</p>
                            </div>
                        </Link>
                        <Link passHref href='/details/ecosystem'>
                            <div className={styles.card}>
                                <h2>Ecosystem Research &rarr;</h2>
                                <p>Info yay.</p>
                            </div>
                        </Link>
                    </div>
                </main>
            </Container>
        </div >
    )
}

export default helpResources
