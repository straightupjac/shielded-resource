import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'
import QuickLeaveButton from '@components/quickLeaveButton'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material'
import ReactCodeInput from 'react-code-input'

const HelpResources: NextPage = () => {
    const visitedBeforeKey = "freshmealhelpvisited"
    const passcodeKey = "freshmealpasscode"
    const [loaded, setLoaded] = useState(false)
    const [openCodeDialog, setOpenCodeDialog] = useState(false)
    const [firstTimeCode, setFirstTimeCode] = useState("")
    const [alertDialogMessage, setAlertDialogMessage] = useState("")
    const [openAlertDialog, setOpenAlertDialog] = useState(false)

    function closeCodeDialog() {
        setOpenCodeDialog(false)
    }

    function savePasscode() {
        closeCodeDialog()
        if (firstTimeCode == null) return
        try {
            localStorage.setItem(passcodeKey, firstTimeCode)
            localStorage.setItem(visitedBeforeKey, "true")
            setAlertDialogMessage("On your next visit, you will be shown a 404 page. Just type in your code on the keyboard to be granted access, no prompts will be shown to signal this to keep the page&rsquo;s real content a secret.")
        } catch (error) {
            localStorage.removeItem(visitedBeforeKey)
            setAlertDialogMessage("We couldn't save your code. Please try again.")
        }
        setOpenAlertDialog(true)
    }

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
            setOpenCodeDialog(true)
        }
    },[loaded]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Fresh Meal</title>
                <meta name="description" content="Quick and easy recipes for the modern family." />
                <link rel="icon" type="image/png" href="small-logo.png" />
            </Head>
            <Container onLoad={ () => setLoaded(true) }>
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
            <Dialog open={openCodeDialog} onClose={closeCodeDialog}>
                <DialogTitle>Setup a 6-digit access Code</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    To be able to access this page in subsequent visits, you need to set a 6 digit number-only code.
                    </DialogContentText>
                    <ReactCodeInput type='number' fields={6} inputMode='verbatim' name='passcodefield' onChange={(value) => setFirstTimeCode(value) } />
                </DialogContent>
                <DialogActions>
                <Button onClick={savePasscode}>Save</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openAlertDialog} onClose={() => setOpenAlertDialog(false)}>
                <DialogTitle>Access to Fresh Meal</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    { alertDialogMessage }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setOpenAlertDialog(false)}>Okay</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default HelpResources
