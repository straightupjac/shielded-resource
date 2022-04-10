import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { RouteGuard } from '@components/routeGuard'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'

const Ecosystem: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal - contact</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.svg" />
      </Head>
      <RouteGuard>
        <>
          <div className={styles.escapePanel}>
            <QuickLeaveButton />
          </div>
          <Container>
            <main>
              <PrivacyNavBar />
              <div className={styles.content}>
                <Typography variant="h1">
                  Ecosystem
                </Typography>
                <Typography variant="body1">
                  We were inspired by many independent researchers,  ethical frameworks and existing tools when designing this safety tool. The following are some notable resources that we suggest for further reading:
                  <ul>
                    <li>
                      <a href="https://www.expressvpn.com/blog/tech-safety-for-survivors-of-domestic-violence/" target="_blank" rel="noreferrer">
                        Tech safety for survivors of domestic violence
                      </a> {`– practical tips on how to secure your devices from an abuser`}
                      <br />
                      <i>{`"Scan, photograph, or make copies of all your important documents, such as birth certificates, marriage certificates, immigration papers, your children’s documents, school diplomas, passports, visas, credit cards, medical records, court filings, police reports, insurance papers, and driving licenses. These records will make it easier for you to get these documents back in case your abuser takes them away from you. Without these documents, you may face difficulty if you want to leave the country, work, vote, or drive a car, and, in some cases, receive basic medical treatment."`}</i>
                    </li>
                    <br />
                    <li>
                      <a href="https://www.nixdell.com/papers/chi22-trauma-informed-computing.pdf" target="_blank" rel="noreferrer">
                        Trauma-Informed Computing: Towards Safer Technology Experiences for All
                      </a> {`– paper on Trauma-informed design. Consider that the survivor’s freedom is being restricted; how would it shape their experience?`}
                    </li>
                    <br />
                    <li>
                      <a href="https://www.delish.com/food-news/a50929/ordering-an-angel-shot-could-save-your-life/" target="_blank" rel="noreferrer">
                        Angel Shots
                      </a> {`– a menu item some bars are offering as a 'code item' for guests who feel uncomfortable to ask for help without flagging it to the abuser`}
                    </li>
                    <br />
                    <li>
                      <a href="https://ccfwe.org/6-step-checklist-for-domestic-abuse-survivors/" target="_blank" rel="noreferrer">
                        6 step checklist for domestic abuse survivors
                      </a>
                    </li>
                    <br />
                  </ul>
                </Typography>
              </div>
            </main>
          </Container>
        </>
      </RouteGuard>
    </>
  )
}

export default Ecosystem;
