import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/helpResources.module.css'
import QuickLeaveButton from './quickLeaveButton'

const helpResources: NextPage = () => {

    return (

        <div className={styles.container}>
            <Head>
                <title>Fresh Meal</title>
                <meta name="description" content="Quick and easy recipes for the modern family." />
                <link rel="icon" type="image/png" href="small-logo.png" />
            </Head>

            <main className={styles.main}>
                <span className={styles.quick_leave_button_container}> <QuickLeaveButton/> </span>
                <h1>Help Resources</h1>
            </main>
        </div>
    )
}

export default helpResources
