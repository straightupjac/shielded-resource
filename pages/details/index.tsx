import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'
import QuickLeaveButton from '@components/quickLeaveButton'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography } from '@mui/material'
import ReactCodeInput from 'react-code-input'
import { RouteGuard } from '@components/routeGuard'

const FRESH_MEAL_CLIENT_ID_ASSIGNED = "freshmealclientidassigned"
const FRESH_MEAL_CLIENT_ID = "freshmealclientid"

const HelpResources: NextPage = () => {
    const [loaded, setLoaded] = useState(false)
    const [openIdDialog, setOpenIdDialog] = useState(false)
    const [clientId, setClentId] = useState("")
    const [alertDialogMessage, setAlertDialogMessage] = useState("")
    const [openAlertDialog, setOpenAlertDialog] = useState(false)
    const [refreshed, setRefreshed] = useState(false)

    function closeIdDialog() {
        setOpenIdDialog(false)
    }

    function unassignClientId() {
        setClentId("nullna")
        saveClientId()
    }

    function resetClientId() {
        setOpenIdDialog(true)
    }

    function saveClientId() {
        closeIdDialog()
        if (clientId == null || clientId.length != 6) return
        try {
            localStorage.setItem(FRESH_MEAL_CLIENT_ID, clientId)
            localStorage.setItem(FRESH_MEAL_CLIENT_ID_ASSIGNED, "true")
            setAlertDialogMessage("On your next visit, you will be shown a 404 page. Just type in your code on the keyboard to be granted access. No prompts will be shown to signal this to keep the page's real content a secret.")
        } catch (error) {
            localStorage.removeItem(FRESH_MEAL_CLIENT_ID_ASSIGNED)
            setAlertDialogMessage("We couldn't save your code. Please try again.")
        }
        setOpenAlertDialog(true)
    }

    useEffect(function() {
        if(window.localStorage.getItem(FRESH_MEAL_CLIENT_ID_ASSIGNED) == "true") {
            let idUntilNow = ""
            const savedId = window.localStorage.getItem(FRESH_MEAL_CLIENT_ID)
            if (savedId == null) return
            if (savedId == "nullna") {
                setRefreshed(true)
            }
            const eventListener = (e: KeyboardEvent) => {
                idUntilNow = idUntilNow.concat(e.key)
                if (idUntilNow.length >= 6 && idUntilNow.endsWith(savedId)) {
                    setRefreshed(true)
                }
            }
            window.addEventListener('keydown', eventListener)
            return () => {
                window.removeEventListener('keydown', eventListener)
            }
        } else {
            setRefreshed(true)
            setOpenIdDialog(true)
        }
    },[loaded]);

    return (
        <>
            <Head>
                <title>Fresh Meal</title>
                <meta name="description" content="Quick and easy recipes for the modern family." />
                <link rel="icon" type="image/png" href="small-logo.svg" />
            </Head>
            {refreshed ? 
            <RouteGuard>
                <>
                    <div className={styles.escapePanel}>
                        <QuickLeaveButton />
                    </div>
                    <Container onLoad={ () => setLoaded(true) }>
                        <main>
                            <br />
                            <Typography variant="h1">
                                Help Resources
                            </Typography>
                            <Typography variant="body1">
                                If you are seeing this page, you are entrusted to steward this resource and only share it with those that you trust. If you need to exit this page at any point, you can click the {`'leave'`} button and it will bring you back to the recipe app.
                                <br /> <br />
                                We hope this resource is able to help someone in need.
                            </Typography>
                            <div className={styles.grid}>
                                <Link passHref href='/details/manifesto'>
                                    <div className={styles.card}>
                                        <h2>Manifesto &rarr;</h2>
                                        <p>The motivation behind this resource.</p>
                                    </div>
                                </Link>
                                <Link passHref href='/details/privacy'>
                                    <div className={styles.card}>
                                        <h2>Privacy Resources &rarr;</h2>
                                        <p>How to protect your digital privacy.</p>
                                    </div>
                                </Link>
                                <Link passHref href='/details/action-items'>
                                    <div className={styles.card}>
                                        <h2>Practical Tips &rarr;</h2>
                                        <p>Action items to ensure your safety</p>
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
                                <div className={styles.card} onClick={resetClientId}>
                                    <h2>Change code &rarr;</h2>
                                    <p>Setup or change your access code.</p>
                                </div>
                            </div>
                        </main>
                    </Container>
                    <Dialog open={openIdDialog} onClose={closeIdDialog}>
                        <DialogTitle>Setup a 6-digit access Code</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            To secure access to this page in subsequent visits, you have an option to set a 6-digit numberic code.
                            </DialogContentText>
                            <ReactCodeInput type='number' fields={6} inputMode='verbatim' name='passcodefield' onChange={(value) => setClentId(value) } />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={unassignClientId}>{`Don't ask again`}</Button>    
                        <Button onClick={saveClientId}>Save</Button>
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
                </ >
            </RouteGuard> 
            : 
            <> 
            <Container onLoad={ () => setLoaded(true) }>
                <main>
                    <br/>
                    <b>Error 404:</b> The link seems to be broken or we are experiencing server issues.
                </main>
            </Container>
            </> }
        </>
    )
    
}

export default HelpResources;
