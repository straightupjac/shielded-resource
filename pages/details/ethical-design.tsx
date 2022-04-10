import PrivacyNavBar from '@components/privacyNavBar'
import QuickLeaveButton from '@components/quickLeaveButton'
import { RouteGuard } from '@components/routeGuard'
import { Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/details.module.css'

const EthicalDesign: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fresh Meal</title>
        <meta name="description" content="Quick and easy recipes for the modern family." />
        <link rel="icon" type="image/png" href="small-logo.png" />
      </Head>
      <RouteGuard>
        <>
          <div className={styles.escapePanel}>
            <QuickLeaveButton />
          </div>
          <main>
            <Container>
              <PrivacyNavBar />

              <div className={styles.content}>
                <Typography variant="h1">
                  Ethical Design
                </Typography>
                <Typography variant="body1">
                  Our goal is to make sure that this tool enables user autonomy, transparency, and safety. We want our tool to feel like it was built 100% for a diverse set of users.
                  Our goal should be to enable the user to make sure that:
                </Typography>
                <Typography variant="body1">
                  <ul>
                    <li>
                      Don’t want it to show up in their history.
                    </li>
                    <li>
                      Don’t want to have this show up on their Facebook ads.
                    </li>
                    <li>
                      Don’t want to get targeted ads.
                    </li>
                    <li>
                      Don’t want to get any emails.
                    </li>
                    <li>
                      Don’t want to be on the wrong network.
                    </li>
                  </ul>
                </Typography>
                <Typography variant="body1">
                  We enforce <strong>TRANSPARENCY</strong> by clearly explaining how turning off these settings will increase their privacy. <i>For example, how does turning off a setting make sure they won’t end up with targeted ads?</i>
                  <ul>
                    <li>Their number one priority is, is someone going to know (employers, parents, targeted ads based on location, people start to know that if I’d looked this up on my network, is somebody going to know that I’ve accessed it?)</li>
                  </ul>
                </Typography>
                <Typography variant="body1">
                  We focus on a simple UX that doesn’t have too many features offered at once. It should clearly show them what to turn off (and potentially why, but less needed.)
                  <ul>
                    <li>Users will prioritize <strong>speed</strong> and <strong>an easy to use interface</strong> because they are under pressure.</li>
                    <li>We will <strong>EVALUATE our tool by checking for any dark design patterns</strong> we may be including in the UI.</li>
                  </ul>
                </Typography>
                <Typography variant="h2">
                  How we designed this
                </Typography>
                <Typography>
                  We wanted to create a tool that would put user privacy first. To do so, this tool has a couple of features:
                  <ul>
                    <li>
                      This resource section of the site cannot be accessed directly by url (only by the user entering {`'help'`} in the search bar). When a user clicks any item in the main nav bar or the leave button, the authentication cache is cleared and anything in the resources part of the website will not be acessible.
                    </li>
                    <li>
                      To further enhance security, users are given the option to create an OTP (one-time-pass) for the sensitve parts of this site to ensure other users on their device will not accidentally stumble upon it.
                    </li>
                    <li>
                      This {`website's`} metadata and SEO tags were intentionally set to represent a recipe/cooking website to mislead the browser history preview. This was a tradeoff we decided to make with regards to discoverability vs. user safety.
                    </li>
                  </ul>
                </Typography>
              </div>
            </Container>
          </main>
        </>
      </RouteGuard>
    </>
  )
}

export default EthicalDesign;
