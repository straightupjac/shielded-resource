import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'
import QuickLeaveButton from '@components/quickLeaveButton'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const helpResources: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Fresh Meal</title>
                <meta name="description" content="Quick and easy recipes for the modern family." />
                <link rel="icon" type="image/png" href="small-logo.png" />
            </Head>
            <QuickLeaveButton />
            <Container>
                <main className={styles.main}>
                    <h1>Help Resources</h1>
                    <Typography variant="body1">
                        If you are seeing this page, you are entrusted to steward this resource and only share it with those that you trust. If you need to exit this page at any point, you can click the {`'leave'`} button and it will bring you back to the recipe app.
                        <br /> <br />
                        We hope this resource is able to help someone in need.
                    </Typography>
                    <div className={styles.grid}>
                        <Link passHref href='/details/manifesto'>
                            <div className={styles.card}>
                                <h2>Manifesto &rarr;</h2>
                                <p>Our motivation behind this project.</p>
                            </div>
                        </Link>
                        <Link passHref href='/details/privacy'>
                            <div className={styles.card}>
                                <h2>Privacy Resources &rarr;</h2>
                                <p>How to protect your digital privacy.</p>
                            </div>
                        </Link>

                        <Link passHref href='/details/ethical-design'>
                            <div className={styles.card}>
                                <h2>Ethical Design &rarr;</h2>
                                <p>How we approached the design of this tool.</p>
                            </div>
                        </Link>
                        <Link passHref href='/details/ecosystem'>
                            <div className={styles.card}>
                                <h2>Ecosystem Research &rarr;</h2>
                                <p>We researched further resources so you {`don't`} have to.</p>
                            </div>
                        </Link>
                    </div>
                </main>
            </Container>
        </div >
    )
}

export default helpResources
