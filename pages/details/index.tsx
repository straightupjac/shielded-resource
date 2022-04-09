import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'
import QuickLeaveButton from '@components/quickLeaveButton'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const HelpResources: NextPage = () => {
    const visitedBeforeKey = "freshmealhelpvisited"
    const passcodeKey = "freshmealpasscode"
    const [loaded, setLoaded] = useState(false);

    useEffect(function() {
        if(window.localStorage.getItem(visitedBeforeKey) == "true") {
            let codeUntilNow = ""
            const eventListener = (e: KeyboardEvent) => {
                const savedCode = window.localStorage.getItem(passcodeKey)
                if (savedCode == null) return
                codeUntilNow = codeUntilNow.concat(e.key)
                if (codeUntilNow.length >= 6 && codeUntilNow.endsWith(savedCode)) {
                    console.log("let them through pls")
                }
            }
            window.addEventListener('keydown', eventListener)
            return () => {
                window.removeEventListener('keydown', eventListener)
            }
        } else {
            const promptMessage = "To be able to access this page in subsequent visits, you need to set a 6 digit number-only code."
            let passCode = prompt(promptMessage)
            if (passCode == null) return
            try {
                localStorage.setItem(passcodeKey, passCode)
                localStorage.setItem(visitedBeforeKey, "true")
                alert("On your next visit, you will be shown a 404 page. Just type in your code on the keyboard to be granted access, no prompts will be shown to signal this to keep the page's real content a secret.")
            } catch (error) {
                alert("Sorry, could not save your code. Please try again.")
            }
        }
    },[loaded]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Fresh Meal</title>
                <meta name="description" content="Quick and easy recipes for the modern family." />
                <link rel="icon" type="image/png" href="small-logo.png" />
            </Head>

            <main className={styles.main} onLoad={ () => setLoaded(true) }>
                <span className={styles.quick_leave_button_container}> <QuickLeaveButton /> </span>
                <h1>Help Resources</h1>
                <div className={styles.grid}>
                    <Link passHref href='/'>
                        <div className={styles.card}>
                            <h2>Privacy Resources &rarr;</h2>
                            <p>Info yay.</p>
                        </div>
                    </Link>

                    <Link passHref href='/'>
                        <div className={styles.card}>
                            <h2>Ethical Design Plan &rarr;</h2>
                            <p>Info yay.</p>
                        </div>
                    </Link>
                    <Link passHref href='/'>
                        <div className={styles.card}>
                            <h2>Manifesto &rarr;</h2>
                            <p>Info yay.</p>
                        </div>
                    </Link>
                    <Link passHref href='/'>
                        <div className={styles.card}>
                            <h2>Ecosystem Research &rarr;</h2>
                            <p>Info yay.</p>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default HelpResources
